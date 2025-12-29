'use client';

import Link from 'next/link';
import { Facebook, Twitter, Instagram, Youtube, Mail } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function Footer() {
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Newsletter submission logic would go here
    alert('Thank you for subscribing!');
  };

  return (
    <footer className="bg-black text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-[#FF6B00]">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/team" className="hover:text-[#FF6B00] transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/fixtures" className="hover:text-[#FF6B00] transition-colors">
                  Fixtures & Results
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-[#FF6B00] transition-colors">
                  News
                </Link>
              </li>
              <li>
                <Link href="/tickets" className="hover:text-[#FF6B00] transition-colors">
                  Buy Tickets
                </Link>
              </li>
            </ul>
          </div>

          {/* Club Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-[#FF6B00]">Club Info</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-[#FF6B00] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/about#stadium" className="hover:text-[#FF6B00] transition-colors">
                  Stadium
                </Link>
              </li>
              <li>
                <Link href="/about#contact" className="hover:text-[#FF6B00] transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/about#history" className="hover:text-[#FF6B00] transition-colors">
                  Club History
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-[#FF6B00]">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#FF6B00] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#FF6B00] transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#FF6B00] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#FF6B00] transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-400">
                Peter Mokaba Stadium<br />
                Polokwane, Limpopo<br />
                South Africa
              </p>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-[#FF6B00]">Newsletter</h3>
            <p className="text-sm text-gray-400 mb-4">
              Subscribe to get the latest news and updates
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
                required
              />
              <Button type="submit" className="w-full" size="sm">
                <Mail className="w-4 h-4 mr-2" />
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-6 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Polokwane City FC. All rights reserved.
            </p>
            <div className="flex items-center space-x-2 mt-4 md:mt-0">
              <span className="text-sm text-gray-400">Rise of the City</span>
              <div className="w-8 h-8 bg-gradient-to-br from-[#FF6B00] to-[#e05000] rounded-full flex items-center justify-center font-bold text-white text-sm">
                PC
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
