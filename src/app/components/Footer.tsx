import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 p-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
        {/* Column 1 */}
        <div>
          <h4 className="text-lg font-semibold mb-4">About Us</h4>
          <p className="text-sm">
            Your one-stop shop for authentic and quality products. We bring the
            best deals and unique items just for you!
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white">
            About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Terms and Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                All Product
              </a>
            </li>
           
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
          <p className="text-sm">
            Email: <a href="mailto:info@ecom.com" className="hover:text-white">admin@csitabmc.com</a>
          </p>
          <p className="text-sm">Phone: +977-9876543210</p>
          <p className="text-sm">Address: Butwal, Shop City</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center mt-6 text-sm border-t border-gray-700 pt-4">
        © 2024 NeoCart. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
