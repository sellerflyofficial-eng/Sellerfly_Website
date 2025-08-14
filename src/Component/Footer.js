import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaPhone,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-8">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-[#ab5836]">Sellerfly</h2>
          <p className="text-gray-400 mb-4">
            Grow your business with Sellerfly's tailored solutions and expert
            services.
          </p>
          <p className="text-gray-400">
            © 2024 Sellerfly. All Rights Reserved.
          </p>
          <h3 className="text-xl font-bold my-4 text-[#ab5836]">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/profile.php?id=61562528217228"
              className="text-gray-400 hover:text-[#ab5836] transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://www.instagram.com/sellerfly.in/"
              className="text-gray-400 hover:text-[#ab5836] transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://www.linkedin.com"
              className="text-gray-400 hover:text-[#ab5836] transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={20} />
            </a>
            <a
              href="https://www.youtube.com/@SKSYSELLERFLYONLINESOLUTIONS "
              className="text-gray-400 hover:text-[#ab5836] transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaYoutube size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-[#ab5836]">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="/services"
                className="text-gray-400 hover:text-[#ab5836] transition-colors duration-300"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/about-us"
                className="text-gray-400 hover:text-[#ab5836] transition-colors duration-300"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact-us"
                className="text-gray-400 hover:text-[#ab5836] transition-colors duration-300"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                to="/careers"
                className="text-gray-400 hover:text-[#ab5836] transition-colors duration-300"
              >
                Careers
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media & Contact */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-[#ab5836]">Contact Us</h3>
          <p className="text-gray-400 mb-4 flex items-center">
            <FaPhone className="mr-2 text-[#ab5836]" /> +91-6381780309
          </p>
          <p className="text-gray-400 mb-4 flex items-center">
            <FaEnvelope className="mr-2 text-[#ab5836]" />{" "}
            sellerflyonline@gmail.com
          </p>
          {/* <p className="text-gray-400 my-1 flex items-center font-bold">
            <FaMapMarkerAlt className="mr-2 text-[#ab5836]" />
            Registration Address
          </p>
          <p className="text-gray-400 mb-4 flex items-center">
            964, Chettukarar street, Ellappalayam, Tamil Nadu, 641697
          </p> */}
          <p className="text-gray-400 my-1 flex items-center font-bold">
            <FaMapMarkerAlt className="mr-2 text-[#ab5836]" />
            Office Address
          </p>
          <p className="text-gray-400 mb-4 flex items-center">
            Covai Tech Park, No-102, Tower-1, 1st Floor, 4th South Cross Street, Kovai Thiru Nagar, Nehru Nagar East, Coimbatore-641014.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
