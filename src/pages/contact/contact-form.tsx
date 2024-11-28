import { useEffect, useState } from 'react';

interface FormData {
  email: string;
  first_name: string;
  last_name: string;
  message: string;
}

interface FormErrors {
  email?: string;
  first_name?: string;
  last_name?: string;
  message?: string;
  submit?: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    first_name: '',
    last_name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        setSubmitted(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [submitted]);
  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  // Validate form fields
  const validateForm = (): FormErrors => {
    const formErrors: FormErrors = {};

    if (!formData.first_name) formErrors.first_name = 'First name is required.';

    if (!formData.last_name) formErrors.last_name = 'Last name is required.';

    if (!formData.email) {
      formErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = 'Invalid email format.';
    }

    if (!formData.message) formErrors.message = 'Message is required.';

    return formErrors;
  };

  // Handle form submission
  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
  ) => {
    e.preventDefault();

    const formErrors = validateForm();

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      setLoading(true); // Show loading spinner

      try {
        const response = await fetch(
          process.env.NEXT_PUBLIC_FORM_API || '',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          },
        );

        if (response.ok) {
          setSubmitted(true); // Show confirmation message
          setFormData({
            first_name: '',
            last_name: '',
            email: '',
            message: '',
          });
        } else {
          setErrors({
            submit:
              'Submission failed. Please check your connection and try again.',
          });
        }
      } catch {
        setErrors({
          submit: 'Submission failed. Please try again later.',
        });
      } finally {
        setLoading(false); // Hide loading spinner
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='mt-5 grid grid-cols-2 items-center justify-between gap-4 max-sm:grid-cols-1'>
          <div className='flex flex-col items-start justify-start'>
            <label
              className='pb-2 font-bold text-gray-200 lg:text-lg'
              htmlFor='first-name'
            >
              First name
            </label>
            <input
              className='w-full rounded-md border border-zinc-300 p-2 text-gray-200 outline-none'
              id='first-name'
              name='first_name'
              placeholder='First name'
              type='text'
              value={formData.first_name}
              onChange={handleChange}
            />
            {errors.first_name && (
              <p className='mt-1 text-sm text-red-500'>
                {errors.first_name}
              </p>
            )}
          </div>
          <div className='flex flex-col items-start justify-start'>
            <label
              className='pb-2 font-bold text-gray-200 lg:text-lg'
              htmlFor='last-name'
            >
              Last name
            </label>
            <input
              className='w-full rounded-md border border-zinc-300 p-2 text-gray-200 outline-none'
              id='last-name'
              name='last_name'
              placeholder='Last name'
              type='text'
              value={formData.last_name}
              onChange={handleChange}
            />
            {errors.last_name && (
              <p className='mt-1 text-sm text-red-500'>
                {errors.last_name}
              </p>
            )}
          </div>
        </div>
        <div className='mt-5 flex flex-col'>
          <label
            className='pb-2 font-bold text-gray-200 lg:text-lg'
            htmlFor='email'
          >
            Email
          </label>
          <input
            className='rounded-md border border-zinc-300 p-2 text-gray-200 outline-none'
            id='email'
            name='email'
            placeholder='you@company.com'
            type='email'
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && (
            <p className='mt-1 text-sm text-red-500'>
              {errors.email}
            </p>
          )}
        </div>
        <div className='mt-5 flex flex-col'>
          <label
            className='pb-2 font-bold text-gray-200 lg:text-lg'
            htmlFor='message'
          >
            Message
          </label>
          <textarea
            className='rounded-md border border-zinc-300 p-2 text-gray-200 outline-none'
            id='message'
            name='message'
            placeholder='Leave us a message...'
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && (
            <p className='mt-1 text-sm text-red-500'>
              {errors.message}
            </p>
          )}
        </div>
        <button
          className='my-8 rounded-lg bg-primary px-8 py-3'
          disabled={loading}
          type='submit'
        >
          {loading ? (
            <div className='size-6 animate-spin rounded-full border-4 border-solid border-white border-t-transparent' />
          ) : (
            <p>Get Started</p>
          )}
        </button>
        {errors.submit && (
          <p className='mt-5 text-red-500'>{errors.submit}</p>
        )}
        {submitted && (
          <p className='mt-5 text-green-500'>
            Thank you! Your message has been sent.
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
