'use client';

import Image from 'next/image';
import { useState } from 'react';

// Define the type for each image object
interface ImageType {
  caption: string;
  src: string;
  title: string;
}

// Image data
const images: ImageType[] = [
  {
    src: '/image/apron.png',
    title: 'Lead Aprons',
    caption:
      'Essential protective wear designed to shield the body from harmful radiation during imaging procedures.',
  },
  {
    src: '/image/collar.png',
    title: 'Thyroid Collars',
    caption:
      'Specialized collars that protect the thyroid gland from radiation exposure.',
  },
  {
    src: '/image/glasses.png',
    title: 'Lead Glasses',
    caption:
      'Protective glasses designed to shield the eyes from harmful radiation during procedures.',
  },
];

const images2: ImageType[] = [
  {
    src: '/image/door2.png',
    title: 'Lead Lined Doors',
    caption:
      'Secure and durable doors lined with lead to prevent radiation leakage from imaging rooms.',
  },
  {
    src: '/image/lead-window.png',
    title: 'Lead lined protective windows',
    caption:
      'Constructed to provide effective radiation shielding in medical facilities.',
  },
  {
    src: '/image/lead-board.png',
    title: 'Lead lined boards',
    caption:
      'Constructed for use in walls and ceilings to provide effective radiation shielding in medical facilities.',
  },
];

const images3: ImageType[] = [
  {
    src: '/image/syringe.png',
    title: 'CT Injector Syringes',
    caption:
      'High-quality syringes compatible with CT injectors for precise and safe contrast media delivery.',
  },
  {
    src: '/image/syringe.png',
    title: 'CT Injector Syringe',
    caption:
      'High-quality syringes compatible with CT injectors for precise and safe contrast media delivery.',
  },
];

const MobileProduct = () => (
  <div className='min-[500px]:hidden'>
    <Product1 />
    <Product2 />
    <Product3 />
  </div>
  );

export default MobileProduct;

// Product1 component
const Product1 = () => {
  const [selectedProduct, setSelectedProduct] = useState<ImageType>(
    images[0],
  ); // Initial state set to the first product

  const handleProduct1 = (product: ImageType) => {
    setSelectedProduct(product);
  };

  return (
    <section className='container'>
      <h1 className='mb-6 mt-10 text-3xl font-bold text-gray-200'>
        Radiation protective equipment
      </h1>
      <div className='no-scrollbar flex items-center justify-between gap-x-4 overflow-x-scroll whitespace-nowrap border-b-2 border-zinc-100'>
        {images.map((product, i) => (
          <button
            key={i}
            className='cursor-pointer text-gray-200'
            type='button'
            onClick={() => handleProduct1(product)}
          >
            <h3
              className={`border-b-2 ${
                product.title === selectedProduct.title
                  ? 'border-primary text-primary'
                  : 'border-transparent'
              }`}
            >
              {product.title}
            </h3>
          </button>
        ))}
      </div>

      {/* Display selected product image */}
      <div className='mt-6 '>
        <Image
          alt={selectedProduct.title}
          className=''
          height={400}
          src={selectedProduct.src}
          width={900}
        />
        <h3 className='my-4 text-xl font-bold text-gray-200'>
          {selectedProduct.title}
        </h3>
        <p className='text-lg text-gray-200'>
          {selectedProduct.caption}
        </p>
      </div>
    </section>
  );
};

// Product2 component
const Product2 = () => {
  const [selectedProduct2, setSelectedProduct2] = useState<ImageType>(
    images2[0],
  ); // Use images2[0] for Product2

  const handleProduct2 = (product: ImageType) => {
    setSelectedProduct2(product);
  };

  return (
    <section>
      <h1 className=' container mb-6 mt-10 text-3xl font-bold text-gray-200'>
        Radiation shielding products
      </h1>
      <div className='no-scrollbar flex items-center justify-between overflow-x-scroll whitespace-nowrap border-b-2 border-zinc-100'>
        {images2.map((product, i) => (
          <button
            key={i}
            className='shrink-0 cursor-pointer text-gray-200'
            type='button'
            onClick={() => handleProduct2(product)}
          >
            <h3
              className={`inline-block border-b-2 px-4 ${
                product.title === selectedProduct2.title
                  ? 'border-primary text-primary'
                  : 'border-transparent'
              }`}
            >
              {product.title}
            </h3>
          </button>
        ))}
      </div>

      {/* Display selected product image */}
      <div className='container mt-6'>
        <Image
          alt={selectedProduct2.title}
          className=''
          height={400}
          src={selectedProduct2.src}
          width={900}
        />
        <h3 className='my-4 text-xl font-bold text-gray-200'>
          {selectedProduct2.title}
        </h3>
        <p className='text-lg text-gray-200'>
          {selectedProduct2.caption}
        </p>
      </div>
    </section>
  );
};

// Product3 component
const Product3 = () => {
  const [selectedProduct3, setSelectedProduct3] = useState<ImageType>(
    images3[0],
  ); // Use images3[0] for Product3

  const handleProduct3 = (product: ImageType) => {
    setSelectedProduct3(product);
  };

  return (
    <section>
      <h1 className=' container mb-6 mt-10 text-3xl font-bold text-gray-200'>
        CT Injector Syringes
      </h1>
      <div className='no-scrollbar flex items-center justify-between overflow-x-scroll whitespace-nowrap border-b-2 border-zinc-100'>
        {images3.map((product, i) => (
          <button
            key={i}
            className='shrink-0 cursor-pointer text-gray-200'
            type='button'
            onClick={() => handleProduct3(product)}
          >
            <h3
              className={`inline-block border-b-2 px-4 ${
                product.title === selectedProduct3.title
                  ? 'border-primary text-primary'
                  : 'border-transparent'
              }`}
            >
              {product.title}
            </h3>
          </button>
        ))}
      </div>

      {/* Display selected product image */}
      <div className='container mt-6'>
        <Image
          alt={selectedProduct3.title}
          className=''
          height={400}
          src={selectedProduct3.src}
          width={900}
        />
        <h3 className='my-4 text-xl font-bold text-gray-200'>
          {selectedProduct3.title}
        </h3>
        <p className='text-lg text-gray-200'>
          {selectedProduct3.caption}
        </p>
      </div>
    </section>
  );
};
