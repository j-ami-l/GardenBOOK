import React from 'react';
import { FaFacebookF,FaGithub, FaTwitter, FaInstagram, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-secondary text-accent-content px-10 py-14">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className='flex flex-col md:items-center'>
          <h6 className="footer-title mb-4 ">Contact Us</h6>
          <div className="flex items-center gap-2 mb-2">
            <FaPhoneAlt />
            <span>+880 1234-567890</span>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <FaEnvelope />
            <span>info@example.com</span>
          </div>
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt />
            <span>Dhaka, Bangladesh</span>
          </div>
        </div>
        <div>
          <h6 className="footer-title mb-4 ">Services</h6>
          <a className="link link-hover block">Branding</a>
          <a className="link link-hover block">Design</a>
          <a className="link link-hover block">Marketing</a>
          <a className="link link-hover block">Advertisement</a>
        </div>
        <div>
          <h6 className="footer-title mb-4">Company</h6>
          <a className="link link-hover block">About us</a>
          <a className="link link-hover block">Contact</a>
          <a className="link link-hover block">Jobs</a>
          <a className="link link-hover block">Press kit</a>
        </div>

        {/* Legal + Socials */}
        <div>
          <h6 className="footer-title mb-4 ">Legal</h6>
          <a className="link link-hover block">Terms of use</a>
          <a className="link link-hover block">Privacy policy</a>
          <a className="link link-hover block mb-4">Cookie policy</a>

          <div className="flex gap-4 text-2xl">
            <a href="https://www.facebook.com/hjhasan.jamil"><FaFacebookF /></a>
            <a href="https://github.com/j-ami-l"><FaGithub /></a>
            <a href="https://www.instagram.com/mdhasanjamil101/"><FaInstagram /></a>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="text-center mt-10 border-t border-accent-content pt-6 text-sm">
        © {new Date().getFullYear()} GardenBOOK. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
