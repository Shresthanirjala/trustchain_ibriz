"use client";

import { motion } from "framer-motion";
import {
  ChevronRight,
  ArrowRight,
  Star,
  Github,
  Shield,
  FileText,
  Search,
} from "lucide-react";
import { useState } from "react";

// Enhanced animation variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const shimmerVariants = {
  hidden: { backgroundPosition: "200% 0", opacity: 0.3 },
  visible: {
    backgroundPosition: "-200% 0",
    opacity: 1,
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 3,
      ease: "linear",
    },
  },
};

const floatVariants = {
  hidden: { y: 0 },
  visible: {
    y: [-8, 8, -8],
    transition: {
      repeat: Infinity,
      duration: 6,
      ease: "easeInOut",
    },
  },
};

const pulseVariants = {
  hidden: { scale: 1 },
  visible: {
    scale: [1, 1.05, 1],
    transition: {
      repeat: Infinity,
      duration: 3,
      ease: "easeInOut",
    },
  },
};

function FeatureDisplay() {
  const [activeFeature, setActiveFeature] = useState(null);

  const features = [
    {
      name: "AI Code Analysis",
      icon: <Github className="h-12 w-12 text-blue-400" />,
      description:
        "Advanced AI assesses your GitHub repositories to identify and verify real technical skills.",
      highlightColor: "from-blue-500 to-cyan-700",
      bgGradient: "from-blue-900 to-cyan-900",
      iconGradient: "from-blue-500 to-cyan-600",
    },
    {
      name: "Blockchain Verification",
      icon: <Shield className="h-12 w-12 text-green-400" />,
      description:
        "Immutable skill proofs stored on Sui blockchain, ensuring tamper-proof verification.",
      highlightColor: "from-green-500 to-emerald-600",
      bgGradient: "from-green-900 to-emerald-900",
      iconGradient: "from-green-500 to-emerald-600",
    },
    {
      name: "Recruiter-Friendly Reports",
      icon: <FileText className="h-12 w-12 text-purple-400" />,
      description:
        "Comprehensive skill reports designed for easy review by technical recruiters.",
      highlightColor: "from-purple-500 to-indigo-700",
      bgGradient: "from-purple-900 to-indigo-900",
      iconGradient: "from-purple-500 to-indigo-600",
    },
    {
      name: "Instant Verification",
      icon: <Search className="h-12 w-12 text-amber-400" />,
      description:
        "One-click verification of candidate skills using their unique TrustChain ID.",
      highlightColor: "from-amber-500 to-orange-700",
      bgGradient: "from-amber-900 to-orange-900",
      iconGradient: "from-amber-500 to-orange-600",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-black via-gray-900 to-blue-900 py-24 pb-16 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-blue-800 blur-3xl opacity-20" />
        <div className="absolute top-1/2 -left-24 w-72 h-72 rounded-full bg-blue-600 blur-3xl opacity-10" />
        <div className="absolute bottom-0 right-1/3 w-80 h-80 rounded-full bg-indigo-700 blur-3xl opacity-10" />
      </div>

      <div className="max-w-sm sm:max-w-2xl lg:max-w-6xl mx-auto flex flex-col gap-6 px-4 relative z-10">
        {/* Feature heading with animated underline */}
        <div className="text-center mb-12">
          <motion.div
            variants={titleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="inline-block"
          >
            <span className="bg-gradient-to-r from-blue-300 to-cyan-300 text-transparent bg-clip-text text-3xl md:text-4xl font-bold mb-2 inline-block">
              TrustChain Features
            </span>
            <motion.div
              className="h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full w-full"
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: "100%", opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: true }}
            />
          </motion.div>
        </div>

        <motion.p
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-blue-100 max-w-2xl mx-auto mb-16 text-lg"
        >
          TrustChain creates verifiable skill profiles based on real code, not
          just claims. Experience the future of tech recruiting with
          blockchain-verified credentials.
        </motion.p>

        {/* Features display */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 },
              }}
              onMouseEnter={() => setActiveFeature(index)}
              onMouseLeave={() => setActiveFeature(null)}
              className="group relative"
            >
              {/* Card glow effect on hover */}
              <div
                className={`absolute -inset-0.5 bg-gradient-to-r ${feature.highlightColor} rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-300`}
              ></div>

              {/* Card content */}
              <div
                className={`relative bg-gray-800 rounded-2xl shadow-lg overflow-hidden h-full transition-all duration-500 border border-gray-700`}
              >
                {/* Top colorful stripe */}
                <div
                  className={`h-2 w-full bg-gradient-to-r ${feature.highlightColor}`}
                ></div>

                <div className="p-6 flex flex-col items-center text-center">
                  {/* Icon container with floating animation */}
                  <motion.div
                    className="relative mb-6 p-4"
                    variants={activeFeature === index ? floatVariants : {}}
                    animate={activeFeature === index ? "visible" : "hidden"}
                  >
                    {/* Background circle that pulses on hover */}
                    <motion.div
                      className={`absolute inset-0 rounded-full bg-gradient-to-r ${feature.bgGradient} opacity-30`}
                      variants={activeFeature === index ? pulseVariants : {}}
                      animate={activeFeature === index ? "visible" : "hidden"}
                    ></motion.div>

                    <div className="relative z-10">{feature.icon}</div>
                  </motion.div>

                  {/* Feature title */}
                  <h3
                    className={`text-xl font-bold mb-3 bg-gradient-to-r ${feature.highlightColor} text-transparent bg-clip-text`}
                  >
                    {feature.name}
                  </h3>

                  {/* Feature description */}
                  <p className="text-gray-300 mb-6">{feature.description}</p>

                  {/* Learn more button with arrow */}
                  <div className="mt-auto">
                    <button
                      className={`flex items-center text-sm font-medium text-gray-300 group-hover:text-blue-300 transition-colors`}
                    >
                      <span>Learn more</span>
                      <ArrowRight className="ml-1 h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Feature number badge */}
              <div
                className={`absolute -top-3 -right-3 w-8 h-8 rounded-full bg-gradient-to-r ${feature.iconGradient} flex items-center justify-center shadow-md z-20 text-white font-bold text-sm`}
              >
                {index + 1}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA section with shimmer effect */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <motion.div
            variants={shimmerVariants}
            initial="hidden"
            animate="visible"
            className="inline-block px-6 py-3 rounded-full font-medium text-white bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 bg-size-200 shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
          >
            <div className="flex items-center">
              <span>Connect Your GitHub</span>
              <ChevronRight className="ml-1 h-5 w-5" />
            </div>
          </motion.div>

          {/* Testimonial badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-8 inline-flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-full shadow-md border border-gray-700"
          >
            <div className="flex">
              {[1, 2, 3, 4, 5].map((_, i) => (
                <Star key={i} className="h-4 w-4 text-blue-400 fill-blue-400" />
              ))}
            </div>
            <span className="text-sm font-medium text-gray-300">
              Trusted by 3000+ developers & recruiters
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default FeatureDisplay;
