"use client";  // Client-side component

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import wizardImage from '../assets/wizard.png';
import background from '../assets/background/carboy.png';

const carboySizes = [1, 2, 3, 4, 5];

export default function CarboyPage() {
  const [selectedCarboy, setSelectedCarboy] = useState<number | null>(null);
  const [wizardMessage, setWizardMessage] = useState("");
  const [fadeOut, setFadeOut] = useState(false);
  const router = useRouter();

  const handleCarboySelect = (size: number) => {
    setSelectedCarboy(size);
    setWizardMessage(`Ahh, I see you chose the ${size} gallon carboy! Next we should pick out our fermentable!`);
  };

  const handleNext = () => {
    setFadeOut(true);  // Trigger fade out when the user clicks continue
    setTimeout(() => {
      router.push('/pantry');  // Navigate to the next step
    }, 1000);  // Give time for the fade-out animation
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: fadeOut ? 0 : 1 }}  // Only fade when Continue is clicked
      transition={{ duration: 1 }}
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${background.src})` }}
    >
      {/* Wizard image */}
      <motion.img
        src={wizardImage.src}
        alt="Wizard"
        className="absolute left-0 bottom-0 h-3/4"
        initial={{ x: '-100%' }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
      />

      {/* Carboy Selection */}
      {!selectedCarboy ? (
        <div className="absolute bottom-16 left-0 w-full p-6 bg-gray-800 bg-opacity-70 text-white text-center">
          <p className="text-2xl">Choose your carboy size:</p>
          <div className="flex justify-center space-x-4 mt-4">
            {carboySizes.map((size) => (
              <motion.button
                key={size}
                className="bg-gray-700 text-white py-2 px-6 rounded-lg hover:bg-gray-600"
                onClick={() => handleCarboySelect(size)}
              >
                {size} gallon
              </motion.button>
            ))}
          </div>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}  // Stay visible, no immediate fade
          transition={{ duration: 1 }}
          className="absolute bottom-0 left-0 w-full p-6 bg-gray-800 bg-opacity-70 text-white text-center"
        >
          <p className="text-2xl">{wizardMessage}</p>
          <button
            className="mt-4 bg-purple-600 text-white py-2 px-6 rounded-lg hover:bg-purple-700"
            onClick={handleNext}
          >
            Continue
          </button>
        </motion.div>
      )}
    </motion.div>
  );
}
