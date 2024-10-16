"use client";  // Client-side component

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import wizardImage from '../assets/wizard.png';
import background from '../assets/background/background.png';

const wizardDialogue = [
  "Greetings, traveler! I am the Vintner's Wizard, and I will be your guide through the magical process of winemaking.",
  "Together, we will explore the art and science behind creating the finest wines. Now, are you ready to begin your journey?",
  "Wonderful! Let us begin your first task."
];

export default function ClientPage() {
  const [dialogueIndex, setDialogueIndex] = useState(0);
  const [showOption, setShowOption] = useState(false);  // Manage Yes button visibility
  const router = useRouter();

  const handleNextDialogue = () => {
    if (dialogueIndex < 1) {
      setDialogueIndex(dialogueIndex + 1);
    } else {
      setShowOption(true);  // Show the Yes option after the second dialogue
    }
  };

  const handleYesClick = () => {
    setShowOption(false);  // Hide the Yes button
    setDialogueIndex(dialogueIndex + 1);  // Advance to "Wonderful!"
    setTimeout(() => {
      router.push('/next-page');  // Fade to next page after 1 second
    }, 5000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${background.src})` }}
      onClick={handleNextDialogue}
    >
      {/* Wizard image sliding in */}
      <motion.img
        src={wizardImage.src}
        alt="Wizard"
        className="absolute left-0 bottom-0 h-3/4"
        initial={{ x: '-100%' }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
      />

      {/* Translucent text box for dialogue */}
      <div className="absolute bottom-16 left-0 w-full p-6 bg-gray-800 bg-opacity-70 text-white">
        <motion.p className="font-pixel text-2xl">
          {wizardDialogue[dialogueIndex]}
        </motion.p>
      </div>

      {/* Yes button after second dialogue */}
      {showOption && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className=" text-center absolute bottom-0 left-0 w-full p-3 bg-gray-800 bg-opacity-70 text-white hover:bg-gray-700
          " onClick={handleYesClick}
        >
            <p className="font-pixel text-4xl">Yes</p>
        </motion.div>
      )}
    </motion.div>
  );
}
