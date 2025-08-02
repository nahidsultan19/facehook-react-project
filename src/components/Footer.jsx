import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 text-gray-300 py-10 relative">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">About Us</h3>
          <p className="text-gray-400 leading-relaxed">
            Independent Service Provider is a platform dedicated to connecting
            professional workout trainers with individuals who want to achieve
            their fitness goals effectively and safely.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-white transition">
                🏠 Home
              </a>
            </li>
            <li>
              <a href="/dashboard" className="hover:text-white transition">
                📋 Dashboard
              </a>
            </li>
            <li>
              <a href="/login" className="hover:text-white transition">
                🔐 Login
              </a>
            </li>
            <li>
              <a href="/register" className="hover:text-white transition">
                📝 Register
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Services</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="/services/fitness"
                className="hover:text-white transition"
              >
                💪 Fitness Training
              </a>
            </li>
            <li>
              <a href="/services/yoga" className="hover:text-white transition">
                🧘 Yoga Classes
              </a>
            </li>
            <li>
              <a
                href="/services/nutrition"
                className="hover:text-white transition"
              >
                🥗 Nutrition Guide
              </a>
            </li>
            <li>
              <a
                href="/services/cardio"
                className="hover:text-white transition"
              >
                🏃 Cardio Sessions
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Contact Us</h3>
          <ul className="space-y-2 text-gray-400">
            <li>📧 Email: info@serviceprovider.com</li>
            <li>📞 Phone: +1 234 567 890</li>
            <li>📍 Address: 123 Workout St, Fitness City</li>
          </ul>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="flex justify-center space-x-6 mt-8 text-gray-400">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white"
        >
          <FaFacebookF size={20} />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white"
        >
          <FaTwitter size={20} />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white"
        >
          <FaLinkedinIn size={20} />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white"
        >
          <FaInstagram size={20} />
        </a>
      </div>

      {/* Back to Top Button */}
      {/* {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
        >
          ⬆️
        </button>
      )} */}

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500">
        © {currentYear} Independent Service Provider. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
