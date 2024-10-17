"use client";  // Client-side component

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';



const wizardDialogue = [
  "Aha! So, you wish to know the ancient and wondrous art of winemaking, do you? Well, prepare thyself, for it is not mere alchemy—",
  "no, no, it's much more... delicious! Gather 'round, and I shall reveal the secrets of transforming humble sugar and water into a potion most divine!",
  "YES... you heard me right! You don't even need grapes to create wine! You see, when we make wine, we rely on a process called anaerobic fermentation.",
  "Anaerobic means ‘without oxygen.’ In this process, the yeast consumes the sugar and transforms it into alcohol and carbon dioxide.",
  "Meaning that wine doesn’t necessarily have to be made from grapes, but can be made from any fruit, honey, maple syrup, flowers, or even milk! As long as it contains sugar.",
  "But beware! If we allow too much air into the mix, something different happens. That would be aerobic fermentation.",
  "In this process, where oxygen is present, the sugar ferments into vinegar. Not quite the delightful result we aim for, now is it?",
  "So, the key is to shield the mixture from oxygen, letting the yeast work its wonders. That is done using an airlock, a device that allows carbon dioxide to escape while keeping air out.",
  "Ah, an astute question! The carbon dioxide must escape to prevent the mixture from exploding. As the yeast ferments the sugars, it produces alcohol and carbon dioxide.",
  "If the carbon dioxide is trapped, the pressure will build up and the vessel will burst. That would be quite the mess, wouldn't it?",
  "But if we leave the vessel unsealed, oxygen will enter and spoil the wine. So, we must allow the carbon dioxide to escape while keeping the air out with the airlock.",
  "Now, let’s choose a vessel to ferment our wine in!",
];

export default function ClientPage() {
  const [dialogueIndex, setDialogueIndex] = useState(0);
  const [showQuestion, setShowQuestion] = useState(false);
  const [showNext, setShowNext] = useState(true);  // Manage showing next dialogue
  const router = useRouter();
  const [fadeOut, setFadeOut] = useState(false);

  const handleNextDialogue = () => {
    if (dialogueIndex < wizardDialogue.length - 1) {
      if (dialogueIndex === 7) {  // Show the question after 8th dialogue
        setShowQuestion(true);
        setShowNext(false);
      } else {
        setDialogueIndex(dialogueIndex + 1);
        }
      } else {
        // Trigger fade out and navigate to carboy page
        setFadeOut(true);
        console.log(fadeOut)
        setTimeout(() => {
          router.push('/carboy');
        }, 1000);  // Allow the fade-out to complete
      }
    };

  const handleAnswerClick = () => {
    setShowQuestion(false);
    setShowNext(true);
    setDialogueIndex(dialogueIndex + 1);  // Move to the next dialogue
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(/assets/background/winery.png)` }} // Reference directly from public folder
      onClick={showNext ? handleNextDialogue : undefined}
    >
      {/* Wizard image sliding in */}
      <motion.img
 src="/assets/wizard.png" // Reference directly from public folder
        alt="Wizard"
        className="absolute left-0 bottom-0 h-3/4"
        initial={{ x: '-100%' }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
      />

      {/* Translucent text box for dialogue */}
      <div className="absolute bottom-0 left-0 w-full p-6 bg-gray-800 bg-opacity-70 text-white">
        <motion.p className="font-pixel2 text-2xl">
          {wizardDialogue[dialogueIndex]}
        </motion.p>
      </div>

      {/* Show clickable div for the user's question after certain dialogue */}
      {showQuestion && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute bottom-24 left-0 w-full flex justify-center"
        >
          <button
            className="bg-gray-800 bg-opacity-70 text-white py-2 px-6 rounded-lg hover:bg-gray-700"
            onClick={handleAnswerClick}
          >
            Why does carbon dioxide need to escape?
          </button>
        </motion.div>
      )}
    </motion.div>
  );
}
