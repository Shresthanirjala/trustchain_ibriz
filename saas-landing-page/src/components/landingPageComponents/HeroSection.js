"use client";
import MaxWidthWrapper from "../MaxWidthWrapper";
import { ArrowRight, CheckCircle2, Code, Shield, Database } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

// Animation Variants
const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerFeatures = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const featureItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const shimmer = {
  hidden: { backgroundPosition: "200% 0" },
  visible: {
    backgroundPosition: "-200% 0",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 3,
      ease: "linear",
    },
  },
};

function HeroSection() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-black via-gray-900 to-blue-900">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-blue-800 blur-3xl opacity-20" />
        <div className="absolute top-1/2 -left-24 w-72 h-72 rounded-full bg-blue-600 blur-3xl opacity-10" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-blue-400 blur-3xl opacity-10" />
      </div>

      <MaxWidthWrapper
        className={cn(
          "pt-10 lg:pt-24 lg:pb-20 transition-all duration-300",
          scrolled ? "!px-2 lg:!px-10" : "!px-4 lg:!px-14"
        )}
      >
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 items-center">
          {/* Left section with content */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="col-span-1 px-2 lg:px-0 flex flex-col justify-center"
          >
            <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
              {/* Badge */}
              <motion.div
                variants={shimmer}
                initial="hidden"
                animate="visible"
                className="mb-6 px-4 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 bg-size-200 text-white shadow-lg shadow-blue-900/50 flex items-center gap-2"
              >
                <Shield className="w-4 h-4" />
                <span>Blockchain-Verified Skills</span>
              </motion.div>

              <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold tracking-tighter text-white leading-tight">
                Prove Your Skills With{" "}
                <span className="text-blue-400">Blockchain</span> Verification
              </h1>

              <p className="mt-6 text-lg max-w-prose text-center lg:text-left text-gray-300 text-balance">
                TrustChain analyzes your GitHub projects to create tamper-proof
                skill reports stored on the Sui blockchain, giving recruiters
                instant verification of your real capabilities.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Link
                  href="#"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "flex items-center justify-center group bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-900/30 transition-all"
                  )}
                >
                  <span>Connect GitHub</span>
                  <ArrowRight className="ml-1.5 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                <Link
                  href="#"
                  className={cn(
                    buttonVariants({ size: "lg", variant: "outline" }),
                    "flex items-center justify-center group border-blue-500 text-blue-400 hover:bg-blue-950/50"
                  )}
                >
                  <span>Verify ID</span>
                </Link>
              </div>

              {/* Features */}
              <motion.div
                variants={staggerFeatures}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3"
              >
                {[
                  { icon: Code, text: "AI-Powered Analysis" },
                  { icon: Database, text: "Sui Blockchain Storage" },
                  { icon: Shield, text: "Tamper-Proof Reports" },
                  { icon: CheckCircle2, text: "Instant Verification" },
                ].map((feature, i) => (
                  <motion.div
                    key={i}
                    variants={featureItem}
                    className="flex items-center gap-2 text-gray-300"
                  >
                    <feature.icon className="h-5 w-5 text-blue-400" />
                    <span>{feature.text}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Right section with image */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="col-span-1 mt-12 lg:mt-0 flex justify-center"
          >
            <div className="relative w-full h-72 md:h-[28rem] lg:h-[32rem] rounded-3xl overflow-hidden">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="w-full h-full rounded-3xl shadow-2xl shadow-blue-900/50 overflow-hidden border border-blue-800/30"
              >
                <img
                  src="firstlanding.png"
                  alt="Blockchain Skill Verification Platform"
                  className="object-cover w-full h-full rounded-3xl"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}

export default HeroSection;
