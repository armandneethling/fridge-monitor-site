import React from "react";
import { motion } from "framer-motion";
import { FaRocket } from "react-icons/fa";
import { Helmet } from "react-helmet";

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function App() {
  return (
    <>
      <Helmet>
        <title>Mind-Blowing Single Page</title>
      </Helmet>

      <div className="min-h-screen w-full flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="bg-[var(--glass-bg)] backdrop-blur-xl rounded-3xl shadow-[0_8px_32px_0_var(--glass-shadow)] p-8 md:p-14 mt-10 flex flex-col items-center w-full max-w-2xl mx-4"
          style={{
            border: `1px solid var(--glass-border)`,
          }}
        >
          <motion.h1
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-extrabold text-[var(--color-text-primary)] text-center drop-shadow-md mb-6"
          >
            Mind-Blowing{" "}
            <span className="text-[var(--color-primary)] font-bold">
              Single Page
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-[var(--color-text-muted)] mb-8 text-center leading-relaxed max-w-xl"
            initial="hidden"
            animate="visible"
          >
            Experience the future of web design with blazing fast animations,
            stunning gradients, and a sleek modern interface. Click the button
            below to launch your journey!
          </motion.p>

          <motion.button
            variants={itemVariants}
            whileHover={{
              scale: 1.04,
              boxShadow: "0 4px 24px 0 rgba(59,130,246,0.3)",
            }}
            whileTap={{ scale: 0.97 }}
            onClick={() => alert("🚀 Launching your mind-blowing experience!")}
            aria-label="Launch Button"
            type="button"
            className="flex items-center gap-2 px-8 py-3 rounded-full bg-[var(--color-primary)] text-white font-semibold shadow transition"
          >
            <FaRocket size={20} />
            Launch Now
          </motion.button>
        </motion.div>

        <footer className="fixed bottom-0 left-0 w-full py-3 text-center text-xs text-[var(--color-text-muted)] bg-white/10 backdrop-blur-md select-none">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </footer>
      </div>
    </>
  );
}
