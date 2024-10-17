'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function FinalPage() {
  const [dialogueIndex, setDialogueIndex] = useState(0);
  const [isDialogueFinished, setIsDialogueFinished] = useState(false);
  const router = useRouter();

  const wizardDialogue = [
    "Now that everything is done, we must wait for the fermentation process to complete. This can take anywhere from a few days to a few weeks, depending on the fermentable and the desired ABV.",
    "In order to make sure the yeast stays healthy, we will use yeast nutrients such as fermaid o, fermaid k and diammonium phosphate.",
    "We can measure the progress of fermentation by taking readings with the hydrometer. When the specific gravity reaches 1.000, or has not changed for more than 2 weeks, fermentation is complete.",
    "Once fermentation is complete, we can siphon the wine into a clean vessel, leaving the sediment behind. This is known as racking.",
    "Racking helps the wine clarify and prevents off flavors from developing.",
    "As an extra safeguard against fermentation restarting, we can add potassium metabisulfite and potassium sorbate to the wine. This will kill off any remaining yeast and prevent refermentation. It will also give your wine a longer shelf life.",
    "Once the wine has been racked, we can age it in the carboy for a few months to a few years, depending on the wine.",
    "Once the wine has aged to your liking, it is time to bottle it! Remember to sanitize the bottles and corks before filling them with wine.",
    "And there you have it! Your very own homemade wine. I hope you enjoyed this journey through the art of winemaking. Until next time, cheers!",
  ];

  // Function to handle advancing dialogue
  const handleNextDialogue = () => {
    if (dialogueIndex < wizardDialogue.length - 1) {
      setDialogueIndex(dialogueIndex + 1);
    } else {
      setIsDialogueFinished(true);
      downloadPDF();
    }
  };

  // Function to trigger the download of the PDF
  const downloadPDF = () => {
    const link = document.createElement('a');
    link.href = '/recipe/wine-recipe.pdf'; // Ensure the PDF is placed under public/recipe
    link.download = 'Wine_Recipe.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(/assets/background/winery.png)` }}
      onClick={handleNextDialogue} // Clicking advances the dialogue
    >
              <motion.img
 src="/assets/wizard.png" // Reference directly from public folder
        alt="Wizard"
        className="absolute left-0 bottom-0 h-3/4"
        initial={{ x: '-100%' }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
      />
      <div className="absolute bottom-0 left-0 w-full p-6 bg-gray-800 bg-opacity-70 text-white">
        <motion.p className="font-pixel2 text-2xl">
          {wizardDialogue[dialogueIndex]}
        </motion.p>
      </div>

      {isDialogueFinished && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute bottom-8 left-0 w-full flex justify-center"
        >
          <button className="bg-purple-600 text-white py-2 px-6 rounded-lg hover:bg-purple-700" onClick={() => router.push('/')}>
            Back to Home
          </button>
        </motion.div>
      )}
    </motion.div>
  );
}
