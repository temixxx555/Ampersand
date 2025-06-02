import Footer from "@/compnents/Footer";
import Header from "@/compnents/Header";
import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
         <div className="relative w-full flex flex-col bg-[url('/background2.svg')] bg-cover bg-center h-screen">
        <Header />
        <div className='flex flex-1'>
          {/* Left side - text content */}
          <div className='w-full md:w-1/2 flex  justify-center p-4 md:p-8 absolute inset-0 bg-[#21252966]/40 text-white'>
            <div className='max-w-lg mt-76 md:mt-74'>
              <h1 className='text-3xl md:text-5xl font-normal mb-4'>
                About us
              </h1>
              <p className='mb-6 text-[#A6A6AB] md:text-lg leading-relaxed'>
                Building an excellent, innovative, and sustainable connected
                Future—One Reliable Network at a Time.
              </p>
            </div>
          </div>
          {/* Right side - empty for background */}
          <div className='w-1/2 hidden md:block relative'></div>
        </div>
      </div>

      {/* Empowering Communities Section */}
      <div className="w-full flex flex-col gap-6 p-4 sm:p-8 md:p-16">
        <h2 className="text-2xl sm:text-3xl text-[#424649] max-w-md">
          Empowering Communities Through Innovation
        </h2>
        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
          <Image
            src="/pic1.svg"
            alt="Innovation"
            width={516}
            height={400}
            className="w-full md:w-1/2 h-auto object-cover"
          />
          <p className="text-[#424649] text-sm sm:text-base md:text-md max-w-full md:max-w-[514px]">
            At Ampersand Hi-Tech, we are driven by a mission to bridge gaps and
            foster connections through cutting-edge technology. With deep roots
            in the industry, our team of experienced consultants and engineers
            has spent years delivering reliable solutions in internet access,
            network security, and digital infrastructure.
          </p>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="w-full flex flex-col md:flex-row gap-6 md:gap-12 p-4 sm:p-8 md:p-12 bg-[#F4F4F4]">
        <div className="flex flex-col max-w-full md:max-w-[515px] gap-2">
          <h2 className="font-normal text-lg sm:text-xl text-[#424649]">
            Our Mission
          </h2>
          <p className="text-[#424649] text-sm sm:text-base">
            To connect, secure, and elevate communities through scalable,
            sustainable, and future-ready technology infrastructure.
          </p>
        </div>
        <hr className="bg-white h-px md:h-[130px] w-full md:w-1 my-4 md:my-0" />
        <div className="flex flex-col max-w-full md:max-w-[515px] gap-2">
          <h2 className="font-normal text-lg sm:text-xl text-[#424649]">
            Our Vision
          </h2>
          <p className="text-[#424649] text-sm sm:text-base">
            A world where no one is left offline—where every business, home, and
            organization has access to high-speed, resilient, and innovative
            solutions that unlock growth.
          </p>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full p-4 sm:p-8 md:p-16">
        <Image
          src="/trees.svg"
          alt="Nature"
          width={516}
          height={400}
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Innovation Section */}
      <div className="w-full flex flex-col md:flex-row gap-6 md:gap-12 p-4 sm:p-8 md:p-16 bg-[#F4F4F4]">
        <div className="max-w-full md:max-w-[458px]">
          <p className="text-[#424649] text-sm sm:text-base">
            From day one, <span className="font-bold">Ampersand Hi~Tech</span> has
            been built on a foundation of{" "}
            <span className="font-bold">bold thinking and technological disruption</span>.
            Innovation isn’t just a philosophy for us—it’s the heartbeat of our
            mission to <span className="font-bold">connect communities and redefine digital possibilities</span>.
          </p>
        </div>
        <div className="max-w-full md:max-w-[564px] text-[#424649]">
          <p className="text-sm sm:text-base mb-4">
            Our founders envisioned a world where reliable, secure, and scalable
            technology could transform how people live, work, and grow. That
            vision drives us to:
          </p>
          <ol className="list-disc pl-5 space-y-2 text-sm sm:text-base">
            <li>
              <span className="font-bold">Pioneer next-gen internet solutions</span> that
              outpace demand.
            </li>
            <li>
              <span className="font-bold">Engineer resilient networks</span> for
              closed communities and enterprises.
            </li>
            <li>
              <span className="font-bold">Embed security and sustainability</span> into
              every layer of our infrastructure.
            </li>
          </ol>
        </div>
      </div>

      {/* Culture Section */}
      <div className="w-full flex items-center justify-center p-4 sm:p-8 md:p-12">
        <p className="text-center text-[#424649] text-sm sm:text-base max-w-full sm:max-w-[740px]">
          We cultivate a culture that challenges norms, embraces emerging tech,
          and turns obstacles into breakthroughs. As the digital landscape
          evolves, our commitment to innovation ensures we don’t just
          adapt—we lead the charge.
        </p>
      </div>
      <Footer />
    </div>
  );
}