"use client";  // Client-side component

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import wizardImage from '../assets/wizard.png';
import background from '../assets/background/winery.png';

export default function ABVSweetnessPage() {
  const [dialogueIndex, setDialogueIndex] = useState(0);
  const [isAskingQuestions, setIsAskingQuestions] = useState(true);  // Controls question stage
  const [askedSugarQuestion, setAskedSugarQuestion] = useState(false);
  const [askedWaterQuestion, setAskedWaterQuestion] = useState(false);
  const [showSweetnessSlider, setShowSweetnessSlider] = useState(false);
  const [showABVSlider, setShowABVSlider] = useState(false);
  const [sweetness, setSweetness] = useState(0.5);
  const [abv, setAbv] = useState(12.5);
  const [showContinue, setShowContinue] = useState(false);
  const [fadeOut, setFadeOut] = useState(false); // Track when to trigger the fade out
  const router = useRouter();


  const wizardDialogue = [
    "Now that we have our fermentable, we must create the must. Any questions?",
    "Ah, an excellent question! The yeast requires sugar to ferment into alcohol...",
    "Water is added to dilute the sugar content of the fermentable...",
    "The ABV or alcohol by volume of the wine is determined by the amount of sugar in the must...",
    "Now, how sweet would you like your wine to be?",
    "What ABV would you like your wine to be? Keep in mind the higher the ABV...",
    `Ah, you've chosen an ABV of ${abv}%! A fine choice. Now, let us prepare the must for fermentation.`,
  ];

  // Handle moving to the next dialogue when no questions are being asked
  const handleNextDialogue = () => {
    if (isAskingQuestions) return; // Block dialogue advancement if asking questions

    // Dialogue control for showing sliders at the correct time
    if (dialogueIndex === 3) {
      setShowSweetnessSlider(true);  // Show sweetness slider at the correct point
    }

    if (dialogueIndex === 4) {
      setShowSweetnessSlider(false);  // Hide sweetness slider after selection
      setShowABVSlider(true);  // Show ABV slider after sweetness is chosen
    }

    if (dialogueIndex === 5) {
      setShowABVSlider(false);  // Hide ABV slider after selection
      setShowContinue(true);  // Show the continue button after ABV is selected
    }

    // Advance the dialogue index as long as it's not the end of the dialogue
    if (dialogueIndex < wizardDialogue.length - 1) {
      setDialogueIndex(dialogueIndex + 1);
    }
  };

  // Handle sugar question
  const handleSugarQuestion = () => {
    setAskedSugarQuestion(true);
    setDialogueIndex(1);
  };

  // Handle water question
  const handleWaterQuestion = () => {
    setAskedWaterQuestion(true);
    setDialogueIndex(2);
  };

  // Handle when user selects "No questions"
  const handleNoQuestions = () => {
    setIsAskingQuestions(false);
    setDialogueIndex(3);  // Proceed to the sweetness section
  };

  // Handle sweetness and ABV slider changes
  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>, type: string) => {
    const value = parseFloat(event.target.value);
    if (type === "sweetness") {
      setSweetness(value);
    } else {
      setAbv(value);
    }
  };

  // Handle the continue button click and trigger the fade-out
  const handleContinue = () => {
    setFadeOut(true); // Trigger the fade out only when the continue button is clicked
    setTimeout(() => {
      router.push('/next-step');  // Navigate to the next page after fade-out
    }, 1000);  // Adjust timing if needed
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}  // Start with full opacity
      animate={{ opacity: fadeOut ? 0 : 1 }}  // Fade out only if the continue button is clicked
      transition={{ duration: 1 }}
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${background.src})` }}
      onClick={handleNextDialogue}
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

      {/* Dialogue box */}
      <div className="absolute bottom-0 left-0 w-full p-6 bg-gray-800 bg-opacity-70 text-white">
        <motion.p className="font-pixel text-2xl">
          {wizardDialogue[dialogueIndex]}
        </motion.p>
      </div>

      {/* Question Section */}
      {isAskingQuestions && (
        <div className="absolute bottom-24 left-0 w-full flex justify-center space-x-4">
          {!askedSugarQuestion && (
            <button className="bg-gray-700 text-white py-2 px-6 rounded-lg hover:bg-gray-600" onClick={handleSugarQuestion}>
              Why do we need to add more sugar?
            </button>
          )}
          {!askedWaterQuestion && (
            <button className="bg-gray-700 text-white py-2 px-6 rounded-lg hover:bg-gray-600" onClick={handleWaterQuestion}>
              Why do we need to add water?
            </button>
          )}
          <button className="bg-purple-600 text-white py-2 px-6 rounded-lg hover:bg-purple-700" onClick={handleNoQuestions}>
            No questions
          </button>
        </div>
      )}

      {/* Sweetness Slider */}
      {showSweetnessSlider && (
        <div className="absolute bottom-16 left-0 w-full flex justify-center items-center space-x-4">
          <p className="text-white text-lg">Sweetness: {sweetness.toFixed(1)}</p>
          <input
            type="range"
            min="0.0"
            max="1.0"
            step="0.1"
            value={sweetness}
            onChange={(e) => handleSliderChange(e, "sweetness")}
            className="w-64"
          />
        </div>
      )}

      {/* ABV Slider */}
      {showABVSlider && (
        <div className="absolute bottom-16 left-0 w-full flex justify-center items-center space-x-4">
          <p className="text-white text-lg">ABV: {abv.toFixed(1)}%</p>
          <input
            type="range"
            min="5.0"
            max="20.0"
            step="0.1"
            value={abv}
            onChange={(e) => handleSliderChange(e, "abv")}
            className="w-64"
          />
        </div>
      )}

      {/* Continue Button */}
      {showContinue && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute bottom-8 left-3/4 w-full flex"
        >
          <button className="bg-purple-600 text-white py-2 px-6 rounded-lg hover:bg-purple-700" onClick={handleContinue}>
            Continue
          </button>
        </motion.div>
      )}
    </motion.div>
  );
}
