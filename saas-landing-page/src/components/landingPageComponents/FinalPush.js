"use client";

import { cn } from "@/lib/utils";
import {
  ArrowRight,
  Sparkles,
  ChevronRight,
  Github,
  Shield,
} from "lucide-react";
import Link from "next/link";
import { HiLockClosed } from "react-icons/hi";
import { buttonVariants } from "../ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

function FinalPush() {
  const componentRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Check for mobile on mount
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Intersection observer for visibility
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      window.removeEventListener("resize", checkMobile);
      observer.disconnect();
    };
  }, []);

  // Parallax effect
  const { scrollYProgress } = useScroll({
    target: componentRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0.3, 0.6], [0.6, 1]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -60, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const floatAnimation = {
    initial: { y: 0 },
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      },
    },
  };

  const shimmerAnimation = {
    hidden: { backgroundPosition: "200% 0" },
    visible: {
      backgroundPosition: "-200% 0",
      transition: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 8,
        ease: "linear",
      },
    },
  };

  return (
    <section
      className="py-32 md:py-40 px-5 relative overflow-hidden bg-gradient-to-b from-black via-gray-900 to-blue-900"
      id="contact"
      ref={componentRef}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-blue-800 blur-3xl opacity-20"></div>
        <div className="absolute top-1/2 -left-24 w-72 h-72 rounded-full bg-blue-600 blur-3xl opacity-10"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-blue-400 blur-3xl opacity-10"></div>
        <svg
          className="absolute top-0 left-0 w-full h-full"
          width="100%"
          height="100%"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e3a8a" stopOpacity="0.05" />
              <stop offset="100%" stopColor="#1e40af" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <path d="M0,0 C40,100 60,0 100,100 L100,0 Z" fill="url(#grad1)" />
        </svg>
      </div>

      <motion.div style={{ y, opacity }} className="relative max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="flex flex-col lg:flex-row max-w-6xl mx-auto px-8 md:px-16 py-12 gap-12 bg-gradient-to-br from-gray-900 to-blue-950 rounded-3xl items-center shadow-xl relative overflow-hidden"
        >
          {/* Decorative animated shapes */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute top-0 right-0 w-64 h-64 rounded-full bg-blue-500/10"
              initial={{ x: "30%", y: "-30%", scale: 0.8 }}
              animate={{ x: "25%", y: "-25%", scale: 1 }}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-blue-400/5"
              initial={{ x: "-30%", y: "30%" }}
              animate={{ x: "-25%", y: "25%" }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
          </div>

          {/* Shimmer overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-300/5 to-transparent bg-[length:200%_100%]"
            variants={shimmerAnimation}
            initial="hidden"
            animate="visible"
          />

          {/* Image Left Side */}
          <motion.div
            variants={imageVariants}
            className="w-full lg:w-1/2 flex justify-center relative z-10"
          >
            <motion.div
              variants={floatAnimation}
              initial="initial"
              animate="animate"
              className="relative"
            >
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-800/60 to-blue-400/60 blur group-hover:blur-md transition duration-700"></div>
              <img
                src="verifieddeveloper.png"
                alt="Verified Developer Profile"
                className="rounded-2xl w-full max-w-md relative shadow-2xl border border-blue-500/20"
              />
              <motion.div
                className="absolute -top-6 -right-6 bg-black rounded-full p-3 shadow-lg"
                initial={{ scale: 0, rotate: -20 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
              >
                <div className="bg-blue-600 rounded-full p-2">
                  <HiLockClosed className="text-white w-6 h-6" />
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Text Right Side */}
          <motion.div
            variants={textVariants}
            className="w-full lg:w-1/2 space-y-6 relative z-10"
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-blue-500/20 text-white px-4 py-2 rounded-full mb-2"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Sparkles className="h-4 w-4" />
              <span className="text-xs font-semibold tracking-wide uppercase">
                Prove Your Expertise
              </span>
            </motion.div>

            <h2 className="relative tracking-tight font-bold text-3xl md:text-5xl text-white leading-tight">
              Turn your code into
              <span className="relative inline-block">
                <span className="relative z-10"> trusted credentials</span>
                <motion.svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 100 20"
                  width="100%"
                  height="12"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 1, duration: 1.5, ease: "easeInOut" }}
                >
                  <path
                    d="M0,15 Q25,0 50,15 Q75,30 100,15"
                    fill="none"
                    stroke="rgba(59,130,246,0.5)"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />
                </motion.svg>
              </span>
            </h2>

            <p className="text-lg md:text-xl font-normal leading-relaxed text-blue-100/90">
              Connect your GitHub repositories to TrustChain and let our AI
              analyze your real coding skills. Get a detailed skill report
              secured on the Sui blockchain that proves your abilities to
              recruiters and employers. Stand out with verifiable skills that
              can't be faked.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <motion.div
                className="w-full sm:w-auto"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link
                  href="/signup"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "flex items-center justify-center group px-6 py-3 bg-blue-600 text-white hover:bg-blue-700 rounded-full font-medium text-base shadow-xl shadow-blue-900/30"
                  )}
                >
                  <span>Create Your TrustChain ID</span>
                  <ArrowRight className="ml-1.5 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </motion.div>

              <motion.div
                className="w-full sm:w-auto"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link
                  href="/demo"
                  className="flex items-center justify-center px-6 py-3 bg-transparent border-2 border-blue-400/30 hover:border-blue-400/60 text-white rounded-full font-medium text-base transition-colors duration-300"
                >
                  <span>See Sample Report</span>
                  <ChevronRight className="ml-1.5 h-4 w-4" />
                </Link>
              </motion.div>
            </div>

            <motion.div
              className="flex items-center gap-2 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.6 }}
            >
              <div className="flex -space-x-3">
                <img
                  src="/users/boy1.jpg"
                  alt="Developer"
                  className="w-8 h-8 rounded-full border-2 border-blue-600"
                />
                <img
                  src="/users/boy2.jpg"
                  alt="Developer"
                  className="w-8 h-8 rounded-full border-2 border-blue-600"
                />
                <img
                  src="/users/girl1.jpg"
                  alt="Developer"
                  className="w-8 h-8 rounded-full border-2 border-blue-600"
                />
              </div>
              <p className="text-sm text-blue-100/90">
                Join <span className="font-semibold">3,000+</span> developers
                proving their skills
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default FinalPush;
