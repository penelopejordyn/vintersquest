'use client'

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { motion } from 'framer-motion';
import background from './assets/background/background.png';
import { pixel } from './layout';

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
      style={{ backgroundImage: `url(${background.src})` }}
    >
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className={`text-9xl ${pixel.variable} font-pixel text-white drop-shadow-lg animate-up-down`}>
          Vintner's Quest
        </h1>
        <button
          onClick={handleStart}
          className="mt-8 bg-purple-600 text-white font-pixel py-3 px-8 rounded-full text-2xl hover:bg-purple-700"
        >
          Start
        </button>
      </div>
    </motion.div>
  );
}
