"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import AnimatedLink from "@/components/animated-text";
import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section className="relative   py-16 px-8">
      <div className="container ">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="lg:text-6xl md:text-5xl text-4xl text-gray-200 text-start  font-bold  lg:max-w-[650px]   md:max-w-[500px] max-w-[400px]">
            Contact our team to find out more
          </h2>
        </div>

        <div className="flex md:items-center justify-between max-md:flex-col">
          <div className=" relative">
            {/* Map Image */}
            <Image
              src="/image/Location.webp"
              alt="World Map"
              width={700}
              height={500}
              layout="responsive"
              className="  rounded-md max-w-[800px]"
            />
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center max-w-[232px] ">
            {/* Support */}
            <div>
              <motion.h3
                initial={{ opacity: 0, translateX: 25 }}
                whileInView={{ opacity: 1, translateX: 0 }}
                transition={{ ease: "easeOut", duration: 0.5 }}
                viewport={{ once: true }}
                className="lg:text-2xl text-xl  mb-1 text-gray-200 font-bold"
              >
                Support
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, translateX: 25 }}
                whileInView={{ opacity: 1, translateX: 0 }}
                transition={{ ease: "easeOut", duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-gray-100 max-w-[170px] "
              >
                Our friendly team is here to help.
              </motion.p>

              <Link
                href="mailto:support@proraysolutions.com"
                className="hover:text-primary underline  text-gray-200"
              >
                <motion.p
                  initial={{ opacity: 0, translateX: 25 }}
                  whileInView={{ opacity: 1, translateX: 0 }}
                  transition={{ ease: "easeOut", duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  support@proraysolutions.com
                </motion.p>
              </Link>
            </div>

            {/* Sales */}
            <div>
              <motion.h3
                initial={{ opacity: 0, translateX: 25 }}
                whileInView={{ opacity: 1, translateX: 0 }}
                transition={{ ease: "easeOut", duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                className="lg:text-2xl text-xl  mb-1 mt-5 text-gray-200 font-bold"
              >
                Sales
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, translateX: 25 }}
                whileInView={{ opacity: 1, translateX: 0 }}
                transition={{ ease: "easeOut", duration: 0.5, delay: 0.8 }}
                viewport={{ once: true }}
                className="text-gray-100 max-w-[170px]"
              >
                Questions or queries? Get in touch!
              </motion.p>
              <div className="flex items-center mt-2">
                <Link
                  href="mailto:sales@proraysolutions.com"
                  className="hover:text-primary underline  text-gray-200"
                >
                  <motion.p
                    initial={{ opacity: 0, translateX: 25 }}
                    whileInView={{ opacity: 1, translateX: 0 }}
                    transition={{ ease: "easeOut", duration: 0.5, delay: 1 }}
                    viewport={{ once: true }}
                  >
                    sales@proraysolutions.com
                  </motion.p>
                </Link>
              </div>
            </div>

            {/* Phone */}
            <div>
              <motion.h3
                initial={{ opacity: 0, translateX: 25 }}
                whileInView={{ opacity: 1, translateX: 0 }}
                transition={{ ease: "easeOut", duration: 0.5, delay: 1.2 }}
                viewport={{ once: true }}
                className="lg:text-2xl text-xl  mb-1 mt-5 text-gray-200 font-bold"
              >
                Phone
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, translateX: 25 }}
                whileInView={{ opacity: 1, translateX: 0 }}
                transition={{ ease: "easeOut", duration: 0.5, delay: 1.4 }}
                viewport={{ once: true }}
                className="text-gray-100 max-w-[170px]"
              >
                Mon-Fri from 8am to 5pm.
              </motion.p>
              <div className="flex items-center mt-2">
                <Link
                  href="tel:+2348026100080"
                  className="hover:text-primary border-b-[1px] pb-1  text-gray-200"
                >
                  <AnimatedLink
                    letters="+234 (080) 2 610 0080"
                    className="underline"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex  items-center mt-20 justify-between max-md:items-start max-md:flex-col">
          <div>
            <h3 className="text-gray-200 text-3xl font-bold pb-3 ">50+</h3>
            <p className="text-gray-100 max-w-[300px] text-lg max-md:mb-5 ">
              Some big hospitals that we work with, and trust us very much
            </p>
          </div>
          <div className="max-md:-ml-5">
            <Image
              src={"/image/logos.png"}
              height={200}
              width={700}
              alt="google amazon airbnb logos"
            />
          </div>
        </div>

        {/* Contacts Tab */}
        <div className="grid mt-[120px]  lg:grid-cols-2 items-center lg:justify-between lg:mb-40 mb-20">
          <div className="border-l-[1px] max-lg:border-[1px] border-y-[1px] px-16 max-[500px]:px-5 pt-20 pb-16 h-full border-zinc-300">
            <h3 className="text-3xl max-sm:text-2xl max-w-[500px] text-gray-200 font-bold">
              Let’s Level Up Your Healthcare Solutions
            </h3>
            <p className="text-gray-100 pt-2">
              You can reach us anytime{" "}
              <a
                className="text-primary hover:underline"
                href="mailto:hello@proraysolutions.com"
              >
                hello@proraysolutions.com
              </a>
            </p>

            {/* form */}
            <form action="">
              <div className="grid grid-cols-2 max-sm:grid-cols-1  gap-4  items-center justify-between mt-5 ">
                <div className="flex flex-col items-start justify-start ">
                  <label
                    htmlFor="first-name "
                    className="text-gray-200 lg:text-lg font-bold pb-2"
                  >
                    First name
                  </label>
                  <input
                    type="text"
                    id="first-name"
                    placeholder="First name"
                    className="border-[1px] outline-none px-2 py-2  rounded-md text-gray-200 border-zinc-300 w-full"
                  />
                </div>
                <div className="flex flex-col items-start justify-start">
                  <label
                    htmlFor="first-name "
                    className="text-gray-200 lg:text-lg font-bold pb-2"
                  >
                    Last name
                  </label>
                  <input
                    type="text"
                    id="first-name"
                    placeholder="First name"
                    className="border-[1px] outline-none px-2 py-2  rounded-md text-gray-200 border-zinc-300 w-full"
                  />
                </div>
              </div>
              <div className="flex flex-col mt-5">
                <label
                  htmlFor="email"
                  className="text-gray-200 lg:text-lg font-bold pb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="you@company.com"
                  className=" border-[1px] outline-none border-zinc-300 p-2 text-gray-200 rounded-md "
                />
              </div>
              <div className="flex flex-col  mt-5">
                <label
                  htmlFor="message"
                  className="text-gray-200 lg:text-lg font-bold pb-2"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Leave us a message..."
                  className=" border-[1px] text-gray-200 outline-none  border-zinc-300 p-2 rounded-md "
                ></textarea>
              </div>
            </form>
          </div>
          <div className=" h-full max-lg:hidden">
            <Image
              src={"/image/proray.webp"}
              height={200}
              width={400}
              alt="medical worker  "
              className="w-full bg-contain h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
