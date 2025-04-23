"use client";

import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { ArrowRight, Menu, X } from "lucide-react";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";
import SignInForm from "./SignInForm";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="sticky h-16 inset-x-0 top-0 z-30 w-full border-b border-gray-800 bg-black/90 backdrop-blur-lg transition-all">
        <MaxWidthWrapper>
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center justify-center gap-8 lg:gap-14">
              <Link
                href="/"
                className="flex items-center z-40 font-bold text-xl text-blue-300"
              >
                <span className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.584 2.376a.75.75 0 01.832 0l9 6a.75.75 0 11-.832 1.248L12 3.901 3.416 9.624a.75.75 0 01-.832-1.248l9-6zM20.25 10.332v9.918H21a.75.75 0 010 1.5H3a.75.75 0 010-1.5h.75v-9.918a.75.75 0 01.634-.74A49.109 49.109 0 0112 9c2.59 0 5.134.202 7.616.592a.75.75 0 01.634.74zm-7.5 2.418a.75.75 0 00-1.5 0v6.75a.75.75 0 001.5 0v-6.75zm3-.75a.75.75 0 01.75.75v6.75a.75.75 0 01-1.5 0v-6.75a.75.75 0 01.75-.75zM9 12.75a.75.75 0 00-1.5 0v6.75a.75.75 0 001.5 0v-6.75z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                TrustChain
              </Link>

              <div className="hidden md:flex items-center justify-center gap-8 lg:gap-14">
                <Link
                  href="#pricing"
                  className="font-medium text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Pricing
                </Link>
                <Link
                  href="/nirjala"
                  className="font-medium text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Demo
                </Link>
                <Link
                  href="#faq"
                  className="font-medium text-gray-300 hover:text-blue-400 transition-colors"
                >
                  FAQ
                </Link>
                <Link
                  href="#about"
                  className="font-medium text-gray-300 hover:text-blue-400 transition-colors"
                >
                  About
                </Link>
              </div>
            </div>

            {/* Mobile menu toggle */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6 cursor-pointer" />
                ) : (
                  <Menu className="h-6 w-6 cursor-pointer" />
                )}
              </button>
            </div>

            {/* Sign in button */}
            <div className="hidden md:flex items-center space-x-1.5">
              <button
                onClick={() => setIsOpen(true)}
                className={cn(
                  buttonVariants({ variant: "default", size: "sm" }),
                  "flex items-center justify-center group px-5 bg-blue-600 hover:bg-blue-500 text-white transition-all rounded-full"
                )}
              >
                <span>Sign in</span>
                <ArrowRight className="ml-1.5 transform h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </MaxWidthWrapper>
      </nav>

      {/* Mobile menu dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-16 z-20 bg-gray-900 border-b border-gray-800 shadow-lg py-4 animate-fadeIn">
          <MaxWidthWrapper>
            <div className="flex flex-col space-y-4">
              <Link
                href="#pricing"
                className="px-4 py-2 font-medium text-gray-300 hover:text-blue-400 hover:bg-gray-800 rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="/nirjala"
                className="px-4 py-2 font-medium text-gray-300 hover:text-blue-400 hover:bg-gray-800 rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Demo
              </Link>
              <Link
                href="#faq"
                className="px-4 py-2 font-medium text-gray-300 hover:text-blue-400 hover:bg-gray-800 rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                FAQ
              </Link>
              <Link
                href="#about"
                className="px-4 py-2 font-medium text-gray-300 hover:text-blue-400 hover:bg-gray-800 rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsOpen(true);
                }}
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "w-full bg-blue-600 hover:bg-blue-500 text-white transition-all rounded-full"
                )}
              >
                Sign in
              </button>
            </div>
          </MaxWidthWrapper>
        </div>
      )}

      {/* Sign in modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm animate-fadeIn">
          <div className="relative bg-gray-900 rounded-2xl p-6 w-full max-w-md shadow-xl border border-gray-800">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-blue-400 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
            <SignInForm />
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
