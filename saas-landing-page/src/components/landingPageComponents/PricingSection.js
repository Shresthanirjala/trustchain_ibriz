"use client";
import { Building2, CircleCheck, Sparkles, Shield, Code } from "lucide-react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function PricingSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("pricing");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.disconnect();
    };
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const shimmer = {
    animate: {
      background: [
        "hsla(210, 100%, 86%, 0)",
        "hsla(210, 100%, 86%, 0.1)",
        "hsla(210, 100%, 86%, 0)",
      ],
      transition: {
        duration: 2.5,
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  };

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-black via-gray-900 to-blue-900"
      id="pricing"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-blue-800 blur-3xl opacity-20" />
        <div className="absolute top-1/2 -left-24 w-72 h-72 rounded-full bg-blue-600 blur-3xl opacity-10" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-blue-400 blur-3xl opacity-10" />
      </div>

      <MaxWidthWrapper className="relative z-10 py-24">
        <motion.div
          className="flex flex-col items-center justify-center"
          initial={{ opacity: 0, y: -20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="bg-blue-900/50 border border-blue-500 rounded-full px-5 py-2 flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Sparkles className="h-3.5 w-3.5 text-blue-400" />
            <p className="text-blue-300 text-xs font-semibold tracking-wide">
              PRICING PLANS
            </p>
          </motion.div>

          <motion.div
            className="max-w-2xl text-center mt-6"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Choose the Right Plan for Your Skill Verification Needs
            </h2>
            <p className="text-blue-200 text-lg">
              Transparent pricing designed for everyone from individual
              developers to large enterprises looking to build trust in skills
              verification.
            </p>
          </motion.div>
        </motion.div>

        {/* price chart */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-7 my-12"
          variants={container}
          initial="hidden"
          animate={isVisible ? "show" : "hidden"}
        >
          {/* free plan */}
          <motion.div
            className="bg-gray-900/70 backdrop-blur-sm border border-gray-800 p-8 rounded-xl shadow-lg hover:shadow-blue-900/30 transition-all duration-300 mt-6"
            variants={item}
            whileHover={{ y: -8 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-center text-white">
              DEVELOPER – Get Verified
            </h3>

            <p className="font-bold mb-6 text-center text-white">
              <span className="text-6xl">$0 </span>
              <span className="text-xs text-blue-300">/ month</span>
            </p>

            <p className="text-center font-bold text-blue-300">
              For individual developers who want to verify their skills and
              stand out to recruiters.
            </p>

            <motion.div
              className="bg-blue-950/50 border border-blue-900 w-full py-2 rounded-md flex items-center justify-center font-medium my-4"
              animate={shimmer.animate}
            >
              <p className="text-xs text-blue-300">
                Verify up to 3 repositories
              </p>
            </motion.div>

            <div className="px-6">
              <motion.div whileTap={{ scale: 0.95 }}>
                <Link
                  href="/"
                  className="flex items-center justify-center cursor-pointer border-2 border-blue-500 px-5 py-[0.45rem] rounded-full hover:bg-blue-500/20 font-medium text-blue-300 transition-colors duration-300 ease-out w-full"
                >
                  Create Free ID
                </Link>
              </motion.div>
            </div>

            <p className="font-medium mt-8 mb-4 text-white">
              Core features included
            </p>

            <ul className="text-left text-blue-200 font-medium space-y-4 mb-8">
              <motion.li
                className="flex gap-1.5 items-center text-left"
                initial={{ opacity: 0, x: -10 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.3 }}
              >
                <CircleCheck className="h-5 w-5 shrink-0 fill-blue-600 text-blue-900" />
                AI analysis of GitHub repositories
              </motion.li>
              <motion.li
                className="flex gap-1.5 items-center text-left"
                initial={{ opacity: 0, x: -10 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.3 }}
              >
                <CircleCheck className="h-5 w-5 shrink-0 fill-blue-600 text-blue-900" />
                Basic skill verification report
              </motion.li>
              <motion.li
                className="flex gap-1.5 items-center text-left"
                initial={{ opacity: 0, x: -10 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.6, duration: 0.3 }}
              >
                <CircleCheck className="h-5 w-5 shrink-0 fill-blue-600 text-blue-900" />
                Shareable TrustChain ID
              </motion.li>
              <motion.li
                className="flex gap-1.5 items-center text-left"
                initial={{ opacity: 0, x: -10 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.7, duration: 0.3 }}
              >
                <CircleCheck className="h-5 w-5 shrink-0 fill-blue-600 text-blue-900" />
                Blockchain verification
              </motion.li>
              <motion.li
                className="flex gap-1.5 items-center text-left"
                initial={{ opacity: 0, x: -10 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.7, duration: 0.3 }}
              >
                <CircleCheck className="h-5 w-5 shrink-0 fill-blue-600 text-blue-900" />
                Public profile page
              </motion.li>
            </ul>
          </motion.div>

          {/* pro plan */}
          <motion.div
            className="relative bg-gray-900/70 backdrop-blur-sm border-2 border-blue-500 p-8 rounded-xl shadow-2xl z-10"
            variants={item}
            whileHover={{ y: -8, scale: 1.02 }}
            initial={{ scale: 1.05 }}
          >
            <motion.div
              className="absolute top-[-1rem] left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-5 py-1.5 rounded-full text-sm font-semibold flex items-center gap-1.5"
              animate={{
                y: [0, -5, 0],
                boxShadow: [
                  "0 4px 12px rgba(37, 99, 235, 0.5)",
                  "0 8px 16px rgba(37, 99, 235, 0.7)",
                  "0 4px 12px rgba(37, 99, 235, 0.5)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
              }}
            >
              <Sparkles className="h-3.5 w-3.5" />
              <span>Most Popular</span>
            </motion.div>

            <h3 className="text-2xl font-bold mb-4 text-center text-white">
              PRO – Build Your Portfolio
            </h3>

            <p className="font-bold mb-6 text-center text-white">
              <span className="text-6xl">$9</span>
              <span className="text-xs text-blue-300">/ monthly</span>
            </p>

            <p className="text-center font-bold text-blue-400">
              For serious developers and freelancers building a comprehensive
              skill identity.
            </p>

            <motion.div
              className="bg-blue-950/50 border border-blue-900 w-full py-2 rounded-md flex items-center justify-center font-medium my-4"
              animate={shimmer.animate}
            >
              <p className="text-xs text-blue-300">
                Unlimited repositories & detailed analysis
              </p>
            </motion.div>

            <div className="px-6 mb-6">
              <motion.div
                whileTap={{ scale: 0.95 }}
                whileHover={{
                  boxShadow: "0 8px 16px rgba(59, 130, 246, 0.4)",
                }}
                className="flex items-center justify-center cursor-pointer px-5 py-[0.5rem] rounded-full bg-blue-600 hover:bg-blue-700 font-medium text-white transition-all duration-300 ease-out"
              >
                Subscribe now
              </motion.div>
            </div>

            <ul className="text-left text-blue-200 font-medium space-y-4 mb-8">
              <motion.li
                className="flex gap-1.5 items-center text-left"
                initial={{ opacity: 0, x: -10 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.3 }}
              >
                <CircleCheck className="h-5 w-5 shrink-0 fill-blue-600 text-blue-900" />
                <span className="font-bold text-white"></span> Everything in
                Developer, plus
              </motion.li>
              <motion.li
                className="flex gap-1.5 items-center text-left"
                initial={{ opacity: 0, x: -10 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.6, duration: 0.3 }}
              >
                <CircleCheck className="h-5 w-5 shrink-0 fill-blue-600 text-blue-900" />
                Unlimited project verification
              </motion.li>
              <motion.li
                className="flex gap-1.5 items-center text-left"
                initial={{ opacity: 0, x: -10 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.7, duration: 0.3 }}
              >
                <CircleCheck className="h-5 w-5 shrink-0 fill-blue-600 text-blue-900" />
                Advanced code quality metrics
              </motion.li>
              <motion.li
                className="flex gap-1.5 items-center text-left"
                initial={{ opacity: 0, x: -10 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.8, duration: 0.3 }}
              >
                <CircleCheck className="h-5 w-5 shrink-0 fill-blue-600 text-blue-900" />
                Export to PDF/LinkedIn/GitHub
              </motion.li>
              <motion.li
                className="flex gap-1.5 items-center text-left"
                initial={{ opacity: 0, x: -10 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.9, duration: 0.3 }}
              >
                <CircleCheck className="h-5 w-5 shrink-0 fill-blue-600 text-blue-900" />
                Skill growth tracking over time
              </motion.li>
              <motion.li
                className="flex gap-1.5 items-center text-left"
                initial={{ opacity: 0, x: -10 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 1, duration: 0.3 }}
              >
                <CircleCheck className="h-5 w-5 shrink-0 fill-blue-600 text-blue-900" />
                Private repositories analysis
              </motion.li>
              <motion.li
                className="flex gap-1.5 items-center text-left"
                initial={{ opacity: 0, x: -10 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 1.1, duration: 0.3 }}
              >
                <CircleCheck className="h-5 w-5 shrink-0 fill-blue-600 text-blue-900" />
                Priority verification (faster results)
              </motion.li>
            </ul>
          </motion.div>

          {/* enterprise plan */}
          <motion.div
            className="bg-gray-900/70 backdrop-blur-sm border border-gray-800 p-8 rounded-xl shadow-lg hover:shadow-blue-900/30 transition-all duration-300 mt-6"
            variants={item}
            whileHover={{ y: -8 }}
          >
            <h3 className="text-2xl font-bold text-center text-white">
              BUSINESS – Scale Trust
            </h3>
            <motion.div
              className="bg-blue-900/50 border border-blue-800 rounded-full w-20 h-20 flex items-center justify-center mx-auto my-7"
              whileHover={{ rotate: 10, scale: 1.05 }}
              animate={{
                boxShadow: [
                  "0 4px 12px rgba(30, 64, 175, 0.3)",
                  "0 8px 24px rgba(30, 64, 175, 0.4)",
                  "0 4px 12px rgba(30, 64, 175, 0.3)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Building2 className="h-8 w-8 text-blue-300" />
            </motion.div>

            <p className="text-center font-bold text-blue-300">
              For companies and organizations looking to streamline hiring and
              verify talent.
            </p>

            <motion.div
              className="bg-blue-950/50 border border-blue-900 w-full py-2 px-6 rounded-md flex items-center justify-center font-medium my-4"
              animate={shimmer.animate}
            >
              <p className="text-xs text-blue-300 text-center">
                Complete talent verification suite with custom integrations
              </p>
            </motion.div>

            <div className="px-6">
              <motion.div
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center cursor-pointer border-2 border-blue-500 px-5 py-[0.45rem] rounded-full hover:bg-blue-500/20 font-medium text-blue-300 transition-colors duration-300 ease-out"
              >
                Contact Us
              </motion.div>
            </div>

            <p className="font-medium mt-8 mb-4 text-white">
              Everything in Pro, plus
            </p>

            <ul className="text-left text-blue-200 font-medium space-y-4 mb-8">
              <motion.li
                className="flex gap-1.5 items-center text-left"
                initial={{ opacity: 0, x: -10 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.6, duration: 0.3 }}
              >
                <CircleCheck className="h-5 w-5 shrink-0 fill-blue-600 text-blue-900" />
                <span className="font-bold text-white"></span> API access for
                ATS integration
              </motion.li>
              <motion.li
                className="flex gap-1.5 items-center text-left"
                initial={{ opacity: 0, x: -10 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.7, duration: 0.3 }}
              >
                <CircleCheck className="h-5 w-5 shrink-0 fill-blue-600 text-blue-900" />
                Custom verification workflows
              </motion.li>
              <motion.li
                className="flex gap-1.5 items-center text-left"
                initial={{ opacity: 0, x: -10 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.8, duration: 0.3 }}
              >
                <CircleCheck className="h-5 w-5 shrink-0 fill-blue-600 text-blue-900" />
                Team skill gap analysis
              </motion.li>
              <motion.li
                className="flex gap-1.5 items-center text-left"
                initial={{ opacity: 0, x: -10 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.9, duration: 0.3 }}
              >
                <CircleCheck className="h-5 w-5 shrink-0 fill-blue-600 text-blue-900" />
                Bulk verification for candidates
              </motion.li>
              <motion.li
                className="flex gap-1.5 items-center text-left"
                initial={{ opacity: 0, x: -10 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 1, duration: 0.3 }}
              >
                <CircleCheck className="h-5 w-5 shrink-0 fill-blue-600 text-blue-900" />
                White-label verification portal
              </motion.li>
              <motion.li
                className="flex gap-1.5 items-center text-left"
                initial={{ opacity: 0, x: -10 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 1, duration: 0.3 }}
              >
                <CircleCheck className="h-5 w-5 shrink-0 fill-blue-600 text-blue-900" />
                Advanced analytics dashboard
              </motion.li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Trust guarantee */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-blue-900/50 to-blue-800/50 backdrop-blur-sm border border-blue-700/50 rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <div className="bg-blue-950 border border-blue-700 rounded-full p-3 shadow-md">
              <Shield className="h-6 w-6 text-blue-400" />
            </div>
            <div>
              <h4 className="font-bold text-white">Backed by Sui Blockchain</h4>
              <p className="text-blue-200">
                Every skill report is secured with immutable blockchain
                verification
              </p>
            </div>
          </div>
          <motion.button
            className="px-6 py-2 bg-blue-600 text-white rounded-full font-medium shadow-lg hover:bg-blue-700 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.button>
        </motion.div>
      </MaxWidthWrapper>
    </section>
  );
}

export default PricingSection;
