"use client";  // Client-side component

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import wizardImage from '../assets/wizard.png';
import background from '../assets/background/pantry.png';

const fermentables = [
  { name: "Peach", message: "Peaches? A juicy and aromatic choice. Peach wine is a sweet and flavorful beverage." },
  { name: "Pear", message: "Pears? A juicy and sweet choice. Pear wine is a light and flavorful beverage." },
  { name: "Grape", message: "Ah, the noble grape! A classic choice. Grapes are popular for their high sugar content and unique flavors." },
  { name: "Blueberries", message: "Blueberries? A sweet and tart choice. Blueberry wine is a refreshing and fruity beverage." },
  { name: "Honey", message: "Ah, honey! A sweet and aromatic choice. Honey wine, also known as mead, is one of the oldest wines." },
  { name: "Milk", message: "Milk? An interesting choice! Milk wine, also known as kumis, is a traditional beverage in Central Asia." },
  { name: "Rice", message: "Rice? A unique choice! Rice wine, also known as sake, is a traditional Japanese beverage." },
  { name: "Lavender", message: "Lavender? A fragrant choice! Lavender wine is a floral and aromatic beverage." },
  { name: "Maple Syrup", message: "Maple syrup? A sweet and earthy choice. It's known as an Acerglyn." },
];

export default function PantryPage() {
  const [selectedFermentable, setSelectedFermentable] = useState<string | null>(null);
  const [wizardMessage, setWizardMessage] = useState("");
  const [fadeOut, setFadeOut] = useState(false);
  const router = useRouter();

  const handleFermentableSelect = (fermentable: { name: string; message: string }) => {
    setSelectedFermentable(fermentable.name);
    setWizardMessage(fermentable.message);
    // Here you could add the fermentable to the user's inventory
  };

  const handleNext = () => {
    setFadeOut(true);
    setTimeout(() => {
      router.push('/must');  // Navigate to the next page after selection
    }, 1000);
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: fadeOut ? 0 : 1 }}
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

      {/* Fermentable Selection */}
      {!selectedFermentable ? (
        <div className="absolute bottom-16 left-0 w-full p-6 bg-gray-800 bg-opacity-70 text-white text-center">
          <p className="text-2xl">Choose your fermentable:</p>
          <div className="flex justify-center space-x-4 mt-4">
            {fermentables.map((fermentable) => (
              <motion.button
                key={fermentable.name}
                className="bg-gray-700 text-white py-2 px-6 rounded-lg hover:bg-gray-600"
                onClick={() => handleFermentableSelect(fermentable)}
              >
                {fermentable.name}
              </motion.button>
            ))}
          </div>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
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
