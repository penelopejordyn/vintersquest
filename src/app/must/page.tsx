'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';


import { useAppContext } from '../context/AppContext';
import { StaticImageData } from 'next/image';

export default function MustPage() {

  const [wizardMessage, setWizardMessage] = useState(
    "Click the ingredient to add it to the must, and remember, the yeast must be added last!"
  );
  const [addedYeast, setAddedYeast] = useState(false);
  const [addedAirlock, setAddedAirlock] = useState(false);
  const { fermentable, } = useAppContext();
  const [ingredients, setIngredients] = useState<{ name: string; image: string | StaticImageData; added: boolean }[]>([]);
  const router = useRouter();


  useEffect(() => {
    if (fermentable) {
      // Update ingredients list when fermentable is set
      setIngredients([
        { name: "fermentable", image: `/assets/fermentables/${fermentable}.png`, added: false },
        { name: "sugar", image: "/assets/sugar.png", added: false },
        { name: "water", image: "/assets/water.png", added: false },
        { name: "yeast", image: "/assets/yeast.png", added: false },
        { name: "airlock", image: "/assets/Airlock.png", added: false },
      ]);
    }
  }, [fermentable]); // rerun when fermentable changes

  // Function to handle ingredient click
  const handleIngredientClick = (name: string) => {
    const updatedIngredients = [...ingredients];
    const ingredientIndex = updatedIngredients.findIndex((ing) => ing.name === name);

    // Ensure proper order
    if (name === "yeast" && !allIngredientsAdded()) {
      setWizardMessage("Ah, I see you've added the yeast! Remember, the yeast must be added last. Let's try that again.");
      resetIngredients();
    } else if (name === "airlock" && !addedYeast) {
      setWizardMessage(
        "Ah, I see you've added the airlock! Remember, the airlock must be added last. Let's try that again."
      );
      resetIngredients();
    } else {
      updatedIngredients[ingredientIndex].added = true;
      setIngredients(updatedIngredients);

      // Update message based on progress
      if (name === "yeast") {
        setAddedYeast(true);
        setWizardMessage("Great! The yeast is added. Now, let's seal it with the airlock.");
      } else if (name === "airlock") {
        setAddedAirlock(true);
        setWizardMessage("All done! Now we wait for fermentation to complete.");
        // Proceed to the next step
        setTimeout(() => {
          router.push('/final');  // Navigate to the next page
        }, 2000);
      }
    }
  };

  // Function to check if all other ingredients (besides yeast and airlock) have been added
  const allIngredientsAdded = () => {
    return ingredients.every(
      (ing) => ing.name === "yeast" || ing.name === "airlock" || ing.added
    );
  };

  // Function to reset all ingredients if yeast/airlock are added out of order
  const resetIngredients = () => {
    setIngredients([
      { name: "fermentable", image: `/assets/fermentables/${fermentable}.png`, added: false },
      { name: "sugar", image: "/assets/sugar.png", added: false },
      { name: "water", image: "/assets/water.png", added: false },
      { name: "yeast", image: "/assets/yeast.png", added: false },
      { name: "airlock", image: "/assets/Airlock.png", added: false },
    ]);
    setAddedYeast(false);
    console.log(addedAirlock)
    setAddedAirlock(false);
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(/assets/background/winery.png)` }} // Reference directly from public folder
    >
<div className="absolute left-0 bottom-0 flex items-end p-6 space-x-4">
        <motion.img
          src="/assets/wizard.png" // Reference directly from public folder
          alt="Wizard"
          className="h-1/2"
          initial={{ x: '-100%' }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
        />
        <motion.img
          src="/assets/Carboy.png" // Reference directly from public folder
          alt="Carboy"
          className="h-100" // Adjust height as needed
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
      </div>
      {/* Wizard message */}
      <div className="absolute bottom-0 left-0 w-full p-6 bg-gray-800 bg-opacity-70 text-white">
        <motion.p className="font-pixel2 text-2xl">{wizardMessage}</motion.p>
      </div>

      {/* Ingredient items */}
      <div className="flex justify-center flex-wrap mt-10">
  {ingredients.map((ingredient) =>
    !ingredient.added ? (
      <div key={ingredient.name} className="flex flex-col items-center m-4">
        <motion.img
          src={typeof ingredient.image === 'string' ? ingredient.image : ingredient.image.src}
          alt={ingredient.name}
          className="w-32 h-32 cursor-pointer"
          whileHover={{ scale: 1.1 }}
          onClick={() => handleIngredientClick(ingredient.name)}
        />
        <p className="mt-2 text-white font-pixel22 text-center">{ingredient.name}</p>
      </div>
    ) : null
  )}
</div>
    </motion.div>
  );
}
