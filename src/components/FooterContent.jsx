import React from 'react'
import {
  Facebook,
  Twitter,
  Instagram,
  Github,
  Mail
} from "lucide-react";

const Footercontent = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-2 md:grid-cols-4 gap-10 border-b">
        {/* Brand */}
        <div>
          <h3 className="text-xl font-bold mb-3">My Shop</h3>
          <p className="text-gray-300 text-sm mb-4">
            We have clothes that suits your style and which you’re proud to wear.
            From women to men.
          </p>

          <div className="flex gap-3 justify-center">
            <Facebook size={18} />
            <Twitter size={18} />
            <Instagram size={18} />
            <Github size={18} />
          </div>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-semibold mb-3">COMPANY</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>About</li>
            <li>Features</li>
            <li>Works</li>
            <li>Career</li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h4 className="font-semibold mb-3">HELP</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>Customer Support</li>
            <li>Delivery Details</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>


        <div>
          <h4 className="font-semibold mb-3">Contact Us</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li className='font-bold'>Email</li>
            <li>abc@gmail.com</li>
            <li className='font-bold'>Phone</li>
            <li>1234-5678901</li>
          </ul>
        </div>

    </div>
  )
}

export default Footercontent
