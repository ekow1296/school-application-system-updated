"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { BookOpen, Heart, MessageCircle } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';
import AuthDialog from '@/components/auth/AuthDialog';

export default function Header() {
  const router = useRouter();
  const [isAuthDialogOpen, setIsAuthDialogOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Temporary state for demo

  const handleLogoClick = () => {
    window.location.href = '/';
  };

  const handleSignIn = () => {
    setIsAuthDialogOpen(true);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between">
        <button 
          onClick={handleLogoClick}
          className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
        >
          <div className="bg-purple-600 p-2 rounded-lg">
            <BookOpen className="h-5 w-5 text-white" />
          </div>
          <span className="font-bold text-xl text-purple-600">EnraPortal</span>
        </button>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            href="/schools" 
            className="text-sm font-medium text-gray-600 transition-colors hover:text-purple-600"
          >
            Schools
          </Link>
          <Link 
            href="/programs" 
            className="text-sm font-medium text-gray-600 transition-colors hover:text-purple-600"
          >
            Programs
          </Link>
          {isLoggedIn && (
            <Link 
              href="/applications" 
              className="text-sm font-medium text-gray-600 transition-colors hover:text-purple-600"
            >
              My Applications
            </Link>
          )}
        </nav>

        <div className="flex items-center space-x-4">
          {isLoggedIn && (
            <>
              <Link href="/wishlist">
                <Button variant="ghost" size="icon" className="text-gray-600 hover:text-purple-600 hover:bg-purple-50">
                  <Heart className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="/messages">
                <Button variant="ghost" size="icon" className="text-gray-600 hover:text-purple-600 hover:bg-purple-50">
                  <MessageCircle className="h-5 w-5" />
                </Button>
              </Link>
            </>
          )}
          <ThemeToggle />
          <Button 
            className="bg-purple-600 hover:bg-purple-700 shadow-sm"
            onClick={handleSignIn}
          >
            Sign In
          </Button>
        </div>
      </div>
      <AuthDialog isOpen={isAuthDialogOpen} onClose={() => setIsAuthDialogOpen(false)} />
    </header>
  );
}