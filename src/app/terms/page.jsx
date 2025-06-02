import Footer from "@/compnents/Footer";
import Header from "@/compnents/Header";

export default function Terms() {
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
              Privacy and Cookies Policy
              </h1>
              <p className='mb-6 text-[#A6A6AB] md:text-lg leading-relaxed'>
               This privacy is designed to inform you about how we collect, use, and protect your personal information when you interact with our website.
              </p>
            </div>
          </div>
          {/* Right side - empty for background */}
          <div className='w-1/2 hidden md:block relative'></div>
        </div>
      </div>

       <div className="w-full md:w-[1046px] flex flex-col gap-9 p-4 sm:p-8 md:p-16">
        <div className="flex flex-col gap-2">
            <h1 className="text-2xl text-[#212529]">1. Information we collect</h1>
            <p className="text-[#424649]">We gather various types of information to enhance and optimize our services. This includes personal information such as your name, email address, phone number, and mailing address, collected when you register for an account, contact us, or use our services. We also gather usage information, which encompasses details about your interactions with our website and services, including your IP address, browser type, device information, pages visited, and actions taken.</p>
        </div>
        <div className="flex flex-col gap-3">
            <h1 className="text-2xl text-[#212529]">2. How we use your information</h1>
            <p className="text-[#424649]">Our utilization of the information we collect serves multiple purposes. We use your personal data to furnish requested services, such as responding to inquiries, processing orders, and delivering newsletters or updates if you opt to receive them. Additionally, we analyze usage information to gain insights into how our website and services are used, which informs our continuous improvement efforts, content customization, and enhancements to user experiences.</p>
        </div>
        <div className="flex flex-col gap-3">
            <h1 className="text-2xl text-[#212529]">3. Communication</h1>
            <p className="text-[#424649]">We may employ your contact information to communicate with you concerning our services, provide updates, and convey important notices. You have the option to opt out of marketing communications at any time.</p>
        </div>
        <div className="flex flex-col gap-3">
            <h1 className="text-2xl text-[#212529]">4. Cookies and Tracking Technologies</h1>
            <p className="text-[#424649]">To better understand your browsing behavior and improve your website experience, we utilize cookies and similar tracking technologies. Cookies are small data files stored on your device that facilitate our comprehension of your preferences. By utilizing our website, you implicitly consent to our use of cookies, as detailed in our Cookies Policy. You maintain the ability to manage your cookie preferences through your browser settings.</p>
        </div>
        <div className="flex flex-col gap-3">
            <h1 className="text-2xl text-[#212529]">5. Security</h1>
            <p className="text-[#424649]">We prioritize data security and employ reasonable measures to safeguard your information from unauthorized access, disclosure, alteration, or destruction. While we diligently strive to protect your data, it's important to acknowledge that no method of transmission over the internet or electronic storage is entirely secure. Consequently, we cannot provide absolute security guarantees.</p>
        </div>
       </div>
       <Footer />
    </div>
  );
}
