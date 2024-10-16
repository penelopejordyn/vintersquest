'use client'

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { pixel } from './font';


export default function Home() {
  const [isFading, setIsFading] = useState(false);
  const router = useRouter();

  const handleStart = () => {
    setIsFading(true);
    setTimeout(() => {
      router.push('/introduction');
    }, 1000); // Wait for fade-out effect before navigating
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isFading ? 0 : 1 }}
      transition={{ duration: 1 }}
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(/assets/background/background.png)` }} // Reference directly from public folder
    >
      <div className="flex flex-col items-center justify-center h-full">
        <motion.h1
          className={`text-9xl ${pixel.variable} font-pixel text-white drop-shadow-lg`}
          animate={{ y: [0, -10, 0] }} // Array for up and down motion
          transition={{ duration: 1, repeat: Infinity, repeatType: "mirror" }} // Infinite bouncing effect
        >
          Vintner&#39;s Quest
        </motion.h1>
        <button
          onClick={handleStart}
          className="mt-8 bg-purple-600 text-white font-pixel2 py-3 px-8 rounded-full text-2xl hover:bg-purple-700"
        >
          Start
        </button>
      </div>
    </motion.div>
  );
}
