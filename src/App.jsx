import { Suspense } from "react";
import { motion } from "framer-motion";
import { FaRocket } from "react-icons/fa";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from '@react-three/drei';
import RotatingPhone from "./components/RotatingPhone";

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function App() {
  return (
    <>
      <div className="min-h-screen w-full flex flex-col items-center justify-center p-4 space-y-10">
        {/* Card container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="bg-[var(--glass-bg)] backdrop-blur-xl rounded-3xl shadow-[0_8px_32px_0_var(--glass-shadow)] p-6 md:p-12 flex flex-col items-center w-full max-w-2xl mx-2"
          style={{ border: `1px solid var(--glass-border)` }}
        >
          <motion.h1
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-extrabold text-[var(--color-text-primary)] text-center drop-shadow-md mb-6"
          >
            My Fridge{" "}
            <span className="text-[var(--color-primary)] font-bold">
              Monitor
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-[var(--color-text-muted)] mb-8 text-center leading-relaxed max-w-xl"
            initial="hidden"
            animate="visible"
          >
            Track and log your temperatures effortlessly with our intuitive app.  
            Select your fridge type for each entry, and keep your data organized and sorted by date.  
            Stay on top of your temperature records with a clean, modern interface designed for speed and simplicity.
          </motion.p>

          <div className="flex flex-col items-center space-y-2">
            <p className="text-sm text-[var(--color-text-muted)] font-semibold">
              Download the latest version
            </p>

            <motion.button
              variants={itemVariants}
              whileHover={{
                scale: 1.04,
                boxShadow: "0 4px 24px 0 rgba(59,130,246,0.3)",
              }}
              whileTap={{ scale: 0.97 }}
              onClick={() => window.open('/apk/fridgemonitor1.apk', '_blank')}
              aria-label="Download App"
              type="button"
              className="flex items-center gap-2 px-8 py-3 rounded-full bg-[var(--color-primary)] text-white font-semibold shadow transition"
            >
              <FaRocket size={20} />
              Download app
            </motion.button>
          </div>

          {/* Canvas inside card with margin */}
          <div className="w-full max-w-2xl h-64 md:h-96 mx-4 mt-8"> 
            <Canvas shadows camera={{ position: [0, 0, 10], fov: 50 }}>
              <ambientLight intensity={1.6} />
                <directionalLight
                  position={[2, 12, 14]}
                  intensity={2.8}
                  castShadow
                  shadow-mapSize-width={1024}
                  shadow-mapSize-height={1024}
                  shadow-camera-far={50}
                  shadow-camera-left={-10}
                  shadow-camera-right={10}
                  shadow-camera-top={10}
                  shadow-camera-bottom={-10}
                />
              <RotatingPhone />
              <OrbitControls enableZoom={true} />
            </Canvas>
          </div>
        </motion.div>

        {/* Footer */}
        <footer className="fixed bottom-0 left-0 w-full py-3 text-center text-xs text-[var(--color-text-muted)] bg-white/10 backdrop-blur-md select-none">
          &copy; {new Date().getFullYear()} Armand Neethling. All rights reserved.
        </footer>
      </div>
    </>
  );
}