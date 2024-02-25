// components/CreativeFooter.js
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const CreativeFooter = () => {
  return (
    <footer className=" p-8">
      <div className="container mx-auto flex justify-center lg:justify-between items-center">
        <div className="hidden md:block f">
          <h1 className="ont-bold mb-2">Connect with us</h1>
          <p>Follow us on social media for updates and more.</p>
        </div>
        <div className="flex space-x-4">
          <Link href="#" className="text-3xl text-blue-500 hover:text-blue-300">
            <FaFacebook />
          </Link>
          <Link href="#" className="text-3xl text-pink-500 hover:text-pink-300">
            <FaInstagram />
          </Link>
          <Link href="#" className="text-3xl text-blue-400 hover:text-blue-200">
            <FaTwitter />
          </Link>
          <Link href="#" className="text-3xl text-blue-700 hover:text-blue-500">
            <FaLinkedin />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default CreativeFooter;
