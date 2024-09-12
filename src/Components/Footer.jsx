import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-600 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Company Info */}
        <div className="mb-4 md:mb-0">
          <p className="text-lg font-semibold">
            <a href="/" className="hover:underline">
              FITNESS LEGENDS
            </a>
          </p>
          <p className="mt-2 text-sm">
            "Fitness Legend offers unparalleled fitness services, combining
            expert guidance with state-of-the-art equipment to help you achieve
            your health goals. Transform your life with personalized fitness
            solutions and legendary support."
          </p>
        </div>

        {/* Contact Info */}
        <div className="text-right">
          <p className="font-semibold text-lg">Contact Us</p>
          <p className="mt-2 text-sm">
            <a href="tel:+1234567890" className="hover:underline">
              Phone: +1 234 567 890
            </a>
          </p>
          <p className="mt-2 text-sm">
            <a href="mailto:info@company.com" className="hover:underline">
              Email: info@fitnesslegends.com
            </a>
          </p>
          <p className="mt-2 text-sm">
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Address: 123 STREET, KARACHI,PAKISTAN
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
