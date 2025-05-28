import Header from "@/compnents/Header";
import Image from "next/image";
import Link from "next/link"; // Added for navigation links
import Footer from "@/compnents/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full flex flex-col bg-[url('/background.svg')] bg-cover bg-center h-screen">
        <Header />
        <div className="flex flex-1">
          {/* Left side - text content */}
          <div className="w-full md:w-1/2 flex items-center justify-center p-4 md:p-8 absolute inset-0 bg-[#21252966]/40 text-white">
            <div className="max-w-lg mt-16 md:mt-30">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Connecting Communities
              </h1>
              <p className="mb-6 text-base md:text-lg leading-relaxed">
                Ampersand Hi-Tech provides reliable internet and technology
                solutions that connect and empower communities to build a better
                future for individuals, businesses, and organizations to thrive
                in the digital age.
              </p>
              <button className="bg-white w-[228px] h-[57px] rounded-[40px] text-black px-6 py-2 font-medium shadow hover:bg-gray-200 transition">
                Talk To Our Team
              </button>
            </div>
          </div>
          {/* Right side - empty for background */}
          <div className="w-1/2 hidden md:block relative"></div>
        </div>
      </div>

      {/* Why Choose Section */}
      <div className="min-w-full flex flex-col gap-6 p-4 md:p-16">
        <h1 className="text-2xl md:text-3xl text-[#212529]">
          Why Choose Ampersand Hi~Tech?
        </h1>
        <p className="w-full md:w-[520px] text-sm md:text-md text-[#424649]">
          Whether for small or large-scale projects, we are committed to
          delivering cutting-edge results, contributing to a more sustainable
          and innovative internet infrastructure.
        </p>
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <Image
            src="/dish.svg"
            alt="Dish"
            height={370}
            width={360}
            className="w-full md:w-1/3 object-cover"
          />
          <Image
            src="/chip.svg"
            alt="Chip"
            height={370}
            width={360}
            className="w-full md:w-1/3 object-cover"
          />
          <Image
            src="/woman.svg"
            alt="Woman"
            height={370}
            width={360}
            className="w-full md:w-1/3 object-cover"
          />
        </div>
      </div>

      {/* Service Categories Section */}
      <div className="min retor-w-full flex flex-col md:flex-row py-8 px-4 md:px-16 justify-between gap-6">
        <h1 className="w-full md:w-[477px] p-1 text-[#212529] font-normal text-3xl md:text-5xl">
          Our Service Categories
        </h1>
        <div className="flex flex-col gap-5 text-[#424649] w-full md:w-[800px]">
          <p className="text-sm md:text-base">
            Leading the market for two decades, we have been experts in energy
            efficiency. Ampersand Hi-Tech offers a wide range of services
            tailored to the specific needs of businesses, communities, and
            individuals. Whether you're looking to enhance connectivity, improve
            security, or optimize your network infrastructure, we have a
            solution for you.
          </p>
          <p className="text-sm md:text-base">
            Explore our core service categories below to learn more about how we
            can help you achieve your technology goals.
          </p>
        </div>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-4 gap-4 px-4 md:px-16">
        <div className="col-span-1 md:col-span-2 bg-[url('/first.svg')] bg-cover bg-center p-4 rounded-3xl h-[200px] md:h-[300px]"></div>
        <div className="bg-[url('/second.svg')] bg-cover bg-center p-4 rounded-3xl h-[200px] md:h-[300px]"></div>
        <div className="bg-[url('/third.png')] bg-cover bg-center p-4 rounded-3xl h-[200px] md:h-[300px]"></div>
        <div className="bg-[url('/fourth.svg')] bg-cover bg-center p-4 col-span-1 md:col-span-2 rounded-3xl h-[200px] md:h-[300px]"></div>
        <div className="bg-[url('/fifth.svg')] bg-cover bg-center p-4 col-span-1 md:col-span-2 rounded-3xl h-[200px] md:h-[300px]"></div>
        <div className="bg-[url('/sixth.svg')] bg-cover bg-center p-4 rounded-3xl h-[200px] md:h-[300px]"></div>
        <div className="bg-[url('/seventh.svg')] bg-cover bg-center p-4 rounded-3xl h-[200px] md:h-[300px]"></div>
        <div className="bg-[url('/eight.svg')] bg-cover bg-center p-4 col-span-1 md:col-span-2 rounded-3xl h-[200px] md:h-[300px]"></div>
      </div>

      {/* Deep Knowledge Section */}
      <div className="min-w-full flex flex-col md:flex-row justify-center items-center py-8 px-4 md:px-16 gap-6 md:gap-8 bg-[#f4f4f4]">
        <Image
          src="/9.svg"
          alt="Deep Knowledge"
          height={624.519287109375}
          width={394.96484375}
          className="w-full md:w-1/3 object-cover"
        />
        <div className="text-[#212529] flex flex-col gap-5">
          <h1 className="font-normal text-2xl md:text-3xl">
            Deep knowledge in the field
          </h1>
          <p className="text-[#424649] text-sm md:text-base">
            Our deep roots in the technology industry have established Ampersand
            Hi-Tech as a trusted provider of cutting-edge solutions. With years
            of experience serving diverse communities, we have refined our
            expertise in internet access, network distribution, and network
            security. Our team possesses an unparalleled understanding of the
            challenges and opportunities within the digital landscape, enabling
            us to return innovative and reliable services that not only meet but
            exceed the expectations of our clients.
          </p>
          <p className="text-[#424649] text-sm md:text-base">
            Subscribe to our newsletter
          </p>
          <div className="flex flex-col md:flex-row gap-3">
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="First Name"
              className="w-full md:w-[138px] bg-[#1F1F1F] text-[#757575] h-[42px] p-3 rounded"
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="w-full md:w-[255px] bg-[#1F1F1F] text-[#757575] h-[42px] p-3 rounded"
            />
            <button className="bg-[#eadede] rounded-2xl w-full md:w-[105px] px-4 py-2 hover:opacity-30">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Get in Touch Section */}
      <div className="min-w-full flex py-8 px-4 md:px-16 gap-6 flex-col">
        <h1 className="text-[#212529] text-3xl md:text-[40px]">
          Get in touch with us
        </h1>
        <p className="text-[#424649] w-full md:w-[600px] text-sm md:text-base">
          If you're ready to explore how our expertise in energy efficiency, LED
          lighting, photovoltaic energy, and electric mobility can benefit your
          projects, don't hesitate to reach out. We're here to listen,
          collaborate, and provide you with tailored solutions that align with
          your specific needs and goals.
        </p>
        <Link href="/contact-us" className="flex items-center gap-2 text-[#424649] hover:underline">
          Contact us
          <Image src="/arrow.svg" alt="Arrow" width={10} height={10} />
        </Link>
      </div>

      <Footer />
    </div>
  );
}