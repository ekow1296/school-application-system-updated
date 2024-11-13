import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { BookOpen } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-purple-900 text-white py-12">
      <div className="container px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <BookOpen className="h-6 w-6" />
              <span className="font-bold text-xl">EnraPortal</span>
            </div>
            <p className="text-purple-200">
              Making global education accessible to everyone. Your dreams, our mission.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-purple-200 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-purple-200 hover:text-white transition-colors">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="/schools" className="text-purple-200 hover:text-white transition-colors">
                  Schools
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-purple-200 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="text-purple-200 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/guides" className="text-purple-200 hover:text-white transition-colors">
                  Application Guides
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-purple-200 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Join Our Community</h3>
            <p className="text-purple-200 mb-4">
              Get updates on new schools and opportunities!
            </p>
            <div className="space-y-2">
              <Input type="email" placeholder="Your email" className="bg-purple-800 border-purple-700 text-white placeholder:text-purple-300" />
              <Button className="w-full bg-white text-purple-900 hover:bg-purple-100">Subscribe</Button>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-purple-800 text-center text-purple-200">
          <p>&copy; {new Date().getFullYear()} EnraPortal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}