import React from 'react';
import { MessageCircle, Twitter, Linkedin, Instagram, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-green-500 to-green-600 p-2 rounded-lg">
                <MessageCircle className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">LearnBot</span>
            </div>
            <p className="text-gray-400 mb-6">
              Revolutionizing education through WhatsApp microlearning. 
              Master new skills in just 5 minutes a day.
            </p>
            <div className="flex space-x-4">
              <Twitter className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              <Linkedin className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Learning Paths</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Digital Skills</a></li>
              <li><a href="#" className="hover:text-white">Business English</a></li>
              <li><a href="#" className="hover:text-white">Vocational Training</a></li>
              <li><a href="#" className="hover:text-white">Custom Courses</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Partners</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span>hello@learnbot.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <MessageCircle className="h-4 w-4 mr-2" />
                <span>WhatsApp: +1 (555) 987-6543</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 LearnBot. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;