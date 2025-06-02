"use client";
import Footer from "@/compnents/Footer";
import Header from "@/compnents/Header";
import Image from "next/image";
import { useState } from "react";
const ContactForm = () => {
  return (
    <form className='space-y-4'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 w-[500px] '>
        <input
          type='text'
          placeholder='Name'
          className='border border-[#F4F4F4] focus:outline-none w-full p-2 rounded '
        />
        <input
          type='email'
          placeholder='Email'
          className='border border-[#F4F4F4] focus:outline-none  w-full p-2 rounded '
        />
        <input
          type='text'
          placeholder='Phone number'
          className='border border-[#F4F4F4] focus:outline-none p-2 rounded w-full'
        />
        <input
          type='text'
          placeholder='Company(optional)'
          className='border border-[#F4F4F4] focus:outline-none p-2 rounded w-full'
        />
      </div>
      <input
        type='text'
        placeholder='Subject'
        className='border border-[#F4F4F4] focus:outline-none p-2 rounded w-full'
      />

      <textarea
        placeholder='Additional information'
        className='border border-[#F4F4F4] focus:outline-none p-2 rounded w-full h-28 resize-none'
      ></textarea>

      <button
        type='submit'
        className='bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800'
      >
        Send
      </button>
    </form>
  );
};
const QuoteForm = () => {
  return (
    <form className='space-y-4'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 w-[500px] '>
        <input
          type='text'
          placeholder='Name'
          className='border border-[#F4F4F4] focus:outline-none w-full p-2 rounded '
        />
        <input
          type='email'
          placeholder='Email'
          className='border border-[#F4F4F4] focus:outline-none  w-full p-2 rounded '
        />
        <input
          type='text'
          placeholder='Phone number'
          className='border border-[#F4F4F4] focus:outline-none p-2 rounded w-full'
        />
        <input
          type='text'
          placeholder='Organization'
          className='border border-[#F4F4F4] focus:outline-none p-2 rounded w-full'
        />
        <select className='border border-[#F4F4F4] focus:outline-nonetext-[#A6A6AB] p-2 rounded w-full'>
          <option>Service</option>
          <option>Web Development</option>
          <option>App Development</option>
          <option>UI/UX Design</option>
        </select>
        <select className='border border-[#F4F4F4] focus:outline-none text-[#A6A6AB] p-2 rounded w-full'>
          <option>Community</option>
          <option>Students</option>
          <option>Startups</option>
          <option>Nonprofits</option>
        </select>
      </div>

      <textarea
        placeholder='Additional information'
        className='border border-[#F4F4F4] focus:outline-none p-2 rounded w-full h-28 resize-none'
      ></textarea>

      <button
        type='submit'
        className='bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800'
      >
        Send
      </button>
    </form>
  );
};

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 bg-white bg-opacity-50 flex items-center justify-center z-50'>
      <div className='bg-white rounded-lg p-6 max-w-md w-full relative'>
        <button
          onClick={onClose}
          className='absolute top-2 right-2 text-gray-600 text-xl'
        >
          &times;
        </button>
        <h2 className='text-3xl font-normal mb-4'>{title}</h2>
        {children}
      </div>
    </div>
  );
};
const DropdownSection = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className='flex justify-between items-center'>
        <h1 className='text-2xl sm:text-3xl text-[#212529] font-normal'>
          {title}
        </h1>
        <button onClick={toggleDropdown} className='focus:outline-none'>
          <Image
            src='/icon.svg'
            alt='Toggle dropdown'
            height={20}
            width={20}
            className={`transition-transform duration-200 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        </button>
      </div>
      {/* Conditionally render the dropdown content */}
      {isOpen && (
        <div className='text-[#212529] text-sm sm:text-base'>
          <ul className='list-disc pl-5 space-y-2'>
            {content.map((item, index) => (
              <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
            ))}
          </ul>
        </div>
      )}
    </>
  );
};
export default function Services() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const highSpeedContent = [
    "<span class='font-bold'>Fiber-optic & wireless networks</span> with symmetric speeds.",
    "Tailored plans for <span class='font-bold'>homes, businesses, and large-scale communities.</span>",
    "<span class='font-bold'>SPRY:</span> Affordable, unlimited bandwidth for seamless connectivity.",
  ];

  const networkDistributionContent = [
    "Custom-built solutions for <span class='font-bold'>gated communities, campuses, and enterprises</span> across networks.",
    "Sectors served: <span class='font-bold'> Healthcare, Hospitality, Retail, Industrial, Public Service.",
  ];

  const thirdSectionContent = [
    " 24/7 threat monitoring <span class='font-bold'> and enterprise-grade protection.</span>",
    "Customizable bandwidth for <span class='font-bold'>enterprise needs</span>.",
    "<span class='font-bold'>24/7 support</span> for uninterrupted connectivity.",
  ];

  const fourthSectionContent = [
    "<span class='font-bold'>ICT strategy, network optimization, and security training</span>",
    "Future-proofing businesses for IoT, cloud integration, and 5G readiness.",
  ];
  return (
    <div className='min-h-screen flex flex-col'>
      {/* Hero Section */}
      <div className="relative w-full flex flex-col bg-[url('/background2.svg')] bg-cover bg-center h-screen">
        <Header />
        <div className='flex flex-1'>
          {/* Left side - text content */}
          <div className='w-full md:w-1/2 flex  justify-center p-4 md:p-8 absolute inset-0 bg-[#21252966]/40 text-white'>
            <div className='max-w-lg mt-76 md:mt-74'>
              <h1 className='text-3xl md:text-5xl font-normal mb-4'>
                Services
              </h1>
              <p className='mb-6 text-[#A6A6AB] md:text-lg leading-relaxed'>
                At Ampersand Hi~Tech, we deliver secure, scalable, and
                high-performance solutions designed for businesses,
                institutions, and closed communities. Explore how we can
                transform your digital infrastructure.
              </p>
            </div>
          </div>
          {/* Right side - empty for background */}
          <div className='w-1/2 hidden md:block relative'></div>
        </div>
      </div>

      <div className='w-full flex flex-col gap-7 p-4 sm:p-8 md:p-16'>
        <hr className='w-full bg-[#A6A6AB]/90 h-[1px]' />
        <DropdownSection
          title='High-Speed Internet Access'
          content={highSpeedContent}
        />
        <hr className='w-full bg-[#A6A6AB] h-px' />
        <DropdownSection
          title='Network Distribution & Infrastructure'
          content={networkDistributionContent}
        />
        <hr className='w-full bg-[#A6A6AB] h-px' />
        <DropdownSection
          title='Network Security & Cybersecurity'
          content={thirdSectionContent}
        />
        <hr className='w-full bg-[#A6A6AB] h-px' />
        <DropdownSection
          title='Technology Consultancy'
          content={fourthSectionContent}
        />
      </div>

      <div className='w-full flex flex-col md:flex-row justify-between gap-6 md:gap-7 p-4 sm:p-8 md:p-12'>
        {/* Text Section */}
        <div className='flex flex-col justify-end md:w-1/2 text-center md:text-right text-[#A6A6AB]'>
          <p className='text-sm sm:text-base'>
            Proudly Connecting Businesses & Communities
          </p>
          <p className='text-sm sm:text-base'>Osogbo-Nigeria, 2024.</p>
        </div>

        {/* Image Section */}
        <Image
          src='/pan.svg'
          alt='Engineer working on antenna'
          height={334}
          width={600}
          className='md:w-1/2 object-contain'
        />
      </div>

      <div className='w-full flex flex-col gap-6 p-16 text-[#424649]'>
        <h1 className='text-4xl text-black'>Why partner with us?</h1>
        <div className='flex flex-col gap-2'>
          <p>
            <span className='font-bold'>20+ Years of Expertise -</span> Trusted
            by institutions and businesses.{" "}
          </p>
          <p>
            <span className='font-bold'>Community-Centric Design -</span>{" "}
            Solutions built for closed environments.{" "}
          </p>
          <p>
            <span className='font-bold'>SPRY:</span> Affordable, unlimited
            bandwidth for seamless connectivity{" "}
          </p>
        </div>
        <div className='flex gap-4 mb-8'>
          <button
            className='bg-[#F4F4F4] text-[#131313] p-3 rounded-xl hover:opacity-80 cursor-pointer'
            onClick={() => {
              setModalTitle("Request Quote Form");
              setIsModalOpen(true);
            }}
          >
            Get a Custom Quote
          </button>
          <button
            className='bg-[#F4F4F4] text-[#131313] p-3 rounded-xl hover:opacity-80 cursor-pointer'
            onClick={() => {
              setModalTitle("Contact Us Form");
              setIsModalOpen(true);
            }}
          >
            Contact Our Team
          </button>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={modalTitle}
      >
        {modalTitle === "Request Quote Form" ? <QuoteForm /> : <ContactForm />}
      </Modal>

      <Footer />
    </div>
  );
}
