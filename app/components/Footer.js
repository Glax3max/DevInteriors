import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white px-6 py-10 mt-14">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Location */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Location</h2>
          <p>DevInterior Pvt. Ltd.</p>
          <p> Sector-121 , garhi chukandi</p>
          <p>Noida, India</p>
          <p>PIN: 201308</p>
        </div>

        {/* Services */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Services</h2>
          <ul className="space-y-2">
            <li>Sales of all types of Interior Articles</li>
            <li>Installation and setup of all types of Interior Articles</li>
            <li>Kids and creator friendly rooms setups</li>
            <li>Interior Designing</li>
          </ul>
        </div>

        {/* Contact + Socials */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Contact & Social</h2>
          <p>Email: contact@DevInterior.com</p>
          <p>Phone: +91 7061847929</p>

          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-yellow-400 transition">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="hover:text-yellow-400 transition">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="hover:text-yellow-400 transition">
              <FaLinkedin size={24} />
            </a>
            <a href="#" className="hover:text-yellow-400 transition">
              <FaTwitter size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-400 mt-8 text-sm">
        © {new Date().getFullYear()} DevInterior. All rights reserved.
      </div>
    </footer>
  );
}
