"use client";
import Footer from "@/compnents/Footer";
import Header from "@/compnents/Header";
import Subscribe from "@/compnents/subscribe";
import { Loader } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phonenumber: "",
    organization: "",
    service: "",
    community: "",
    message: "",
  });
  const [loading, setIsLoading] = useState(false);
  const [agreed, setAgreed] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
   if(!agreed){
    return alert("You havent agreed ")
   }
   if(!form.name || form.email){
    return 
   }

    setIsLoading(true);
    const url =
      "https://script.google.com/macros/s/AKfycbxM5BIjtXhodQkEJ4p3KFk03Q2AJrdn7Ps8lcX6Lv8M9KSXjJeHrN63THQFvLjzOLybSw/exec";
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `name=${form.name}&email=${form.email}&phonenumber=${form.phonenumber}&organization=${form.organization}&service=${form.service}&community=${form.community}&message=${form.message}`,
    })
      .then((res) => res.text())
      .then((data) => {
        setIsLoading(false);
        window.location.reload();
        alert("sent");
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  };
  return (
    <div className='min-h-screen flex flex-col'>
      {/* Hero Section */}
      <div className="relative w-full flex flex-col bg-[url('https://i.imgur.com/Chlm2UE.png')] bg-cover bg-center h-screen">
        <Header />
        <div className='flex flex-1'>
          {/* Left side - text content */}
          <div className='w-full md:w-1/2 flex  justify-center p-4 md:p-8 absolute inset-0 bg-[#21252966]/40 text-white'>
            <div className='max-w-lg mt-76 md:mt-74'>
              <h1 className='text-3xl md:text-5xl font-normal mb-9'>
                Contact us
              </h1>
              <p className='mb-6 text-[#A6A6AB] md:text-md leading-relaxed'>
                We’re committed to providing the cutting-edge connectivity and
                security solutions your business needs to thrive.
              </p>
            </div>
          </div>
          {/* Right side - empty for background */}
          <div className='w-1/2 hidden md:block relative'></div>
        </div>
      </div>

      <div className='max-w-6xl mx-auto px-2 py-17 md:mb-[50px] grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-1'>
        {/* Left: Location & Open hours */}
        <div className='space-y-8'>
          <div>
            <h2 className='text-2xl text-[#212529] font-semibold mb-2'>
              Location
            </h2>
            <p className='text-[#424649] '>
              80 Sparklight Estate, Ojodu, Lagos.
            </p>
          </div>
          <div>
            <h2 className='text-2xl text-[#212529] font-semibold mb-2'>
              Open hours
            </h2>
            <p className='text-[#424649]'>info@ampersandhitech.com</p>
            <p className='text-[#424649]'>0701 234 5678</p>
            <p className='text-[#424649]'>0801 000 3456</p>
          </div>
        </div>

        {/* Right: Contact Form */}
        <form className='space-y-4 md:-ml-[100px]' onSubmit={handleSubmit}>
          <h1 className='text-4xl font-normal'>Form</h1>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <input
              type='text'
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder='Name'
              required
              className=' border border-[#F4F4F4] focus:outline-none p-2 rounded w-full'
            />
            <input
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              type='email'
              required
              placeholder='Email'
              className='border border-[#F4F4F4] focus:outline-none p-2 rounded w-full'
            />
            <input
              value={form.phonenumber}
              onChange={(e) =>
                setForm({ ...form, phonenumber: e.target.value })
              }
              type='text'
              required
              placeholder='Phone number'
              className='border border-[#F4F4F4] focus:outline-none p-2 rounded w-full'
            />
            <input
              value={form.organization}
              onChange={(e) =>
                setForm({ ...form, organization: e.target.value })
              }
              type='text'
              required
              placeholder='Company (optional)'
              className='border border-[#F4F4F4] focus:outline-none p-2 rounded w-full'
            />
          </div>

          <textarea
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            placeholder='Message'
            required
            className='border border-[#F4F4F4] focus:outline-none p-2 rounded w-full h-28 resize-none'
          ></textarea>

          <div className='flex items-start gap-2'>
            <input type='checkbox' className='mt-1' checked={agreed} onChange={(e)=>setAgreed(e.target.checked)} />
            <p className='text-sm text-gray-700'>
              I agree to allow Ampersand Hi~Tech to store and process my
              information in accordance with data protection regulations for the
              purpose of responding to my inquiry.
            </p>
          </div>

          <button
            type='submit'
            disabled={loading}
            className='bg-black text-white hover:text-black transition-all duration-300 px-6 py-2 rounded-full hover:bg-gray-300 cursor-pointer'
          >
             {loading ? <Loader className='animate-spin' /> : "Send"}
          </button>
        </form>
      </div>

      {/* Deep Knowledge Section */}
      <div className='min-w-full flex flex-col md:flex-row justify-center items-center py-2 px-4 md:px-16 gap-6 md:gap-8 bg-[#f4f4f4]'>
        <Image
          src='/9.svg'
          alt='Deep Knowledge'
          height={624.519287109375}
          width={394.96484375}
          className='w-full md:w-1/3 object-cover relative md:-top-12'
        />
        <div className='text-[#212529] flex flex-col gap-5'>
          <h1 className='font-normal text-2xl md:text-3xl'>
            Deep knowledge in the field
          </h1>
          <p className='text-[#424649] text-sm md:text-base'>
            Our deep roots in the technology industry have established Ampersand
            Hi-Tech as a trusted provider of cutting-edge solutions. With years
            of experience serving diverse communities, we have refined our
            expertise in internet access, network distribution, and network
            security. Our team possesses an unparalleled understanding of the
            challenges and opportunities within the digital landscape, enabling
            us to return innovative and reliable services that not only meet but
            exceed the expectations of our clients.
          </p>
          <p className='text-[#424649] text-sm md:text-base'>
            Subscribe to our newsletter
          </p>
          <Subscribe />
        </div>
      </div>

      <Footer />
    </div>
  );
}
