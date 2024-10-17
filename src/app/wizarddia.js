const wizardDialogue = [
    "Aha! So, you wish to know the ancient and wondrous art of winemaking, do you? Well, prepare thyself, for it is not mere alchemy—",
    "no, no, it's much more... delicious! Gather 'round, and I shall reveal the secrets of transforming humble sugar and water into a potion most divine!",
    "YES... you heard me right! you dont even need grapes to create wine! ou see, when we make wine, we rely on a process called anaerobic fermentation.",
    "Anaerobic means ‘without oxygen.’ In this process, the yeast consumes the sugar and transforms them into alcohol and carbon dioxide.",
    "Meaning that wine doesnt necessarily have to be made from grapes, but can be made from any fruit, honey, maple syrup, flowers, or even milk! as long as it contains sugar.",
    "But beware! If we allow too much air into the mix, something different happens. That would be aerobic fermentation ",
    "a process where oxygen is present. Instead of producing wine, the sugar ferments into vinegar. Not quite the delightful result we aim for, now is it?",
    "So, the key is to shield the mixture from oxygen, letting the yeast work its wonders. That is done using an airlock, a device that allows carbon dioxide to escape while keeping air out.",
    //user asks why carbon dioxide needs to escape
    "Ah, an astute question! The carbon dioxide must escape to prevent the mixture from exploding. As the yeast ferments the sugars, it produces alcohol and carbon dioxide.",
    "If the carbon dioxide is trapped, the pressure will build up and the vessel will burst. That would be quite the mess, wouldn't it?",
    "but if we leave the vessel unsealed, oxygen will enter and spoil the wine. So, we must allow the carbon dioxide to escape while keeping the air out with the airlock.",
    "Now, lets choose a vessel to ferment our wine in!",
    //different carboys show
    //user chooses carboy size (1gal, 2gal, 3gal, 4gal, 5gal). carboy and airlock get added to inventory
    "ahh i see you chose the {size}gallon carboy! next we should pick out our fermatable! Remember, anything that contains sugar can be fermented",
    //screen showing different choises. peach, pear, grape, blueberries, honey, milk, rice, lavender, maple syrup
    //user chooses grape
    // "Ah, the noble grape! A classic choice. Grapes are a popular choice for winemaking due to their high sugar content and unique flavors.",
    // //user chooses honey
    // "Ah, honey! A sweet and aromatic choice. Honey wine, also known as mead, is one of the oldest wines",
    // //user chooses milk
    // "Milk? An interesting choice! Milk wine, also known as kumis, is a traditional beverage in Central Asia.",
    // //user chooses maple syrup
    // "maple syrup? A sweet and earthy choice. it's known as an Acerglyn.",
    // //user chooser rice
    // "Rice? A unique choice! Rice wine, also known as sake, is a traditional Japanese beverage.",
    // //user chooses lavender
    // "Lavender? A fragrant choice! Lavender wine is a floral and aromatic beverage.",
    // //user chooses blueberries
    // "Blueberries? A sweet and tart choice. Blueberry wine is a refreshing and fruity beverage.",
    // //user chooses pear
    // "Pears? A juicy and sweet choice. Pear wine is a light and flavorful beverage.",
    // //user chooses peach
    // "Peaches? A juicy and aromatic choice. Peach wine is a sweet and flavorful beverage.",
    // //whatever fermentable the user picks get added to inventory
    "Before we move on, we must sanitize our equipment. This is a crucial step in winemaking, as it prevents harmful bacteria from contaminating our wine. Any food grade sanitizer will do",
    "Now that we have our fermentable, we must create the must. The must is the mixture of sugar, water, and fermentable that will be fermented into wine. Any questions?",
    //user can ask why do we need to add more sugar or why do we need to add water
    //user asks why we need to add more sugar
    "Ah, another excellent question! The yeast requires sugar to ferment into alcohol. The sugar in the fermentable provides some of the sugar needed, but it may not be enough to reach the desired alcohol content.",
    //user asks why we need to add water
    "Water is added to dilute the sugar content of the fermentable. This ensures that the yeast can ferment the sugar into alcohol without the mixture becoming too sweet.",
    //no questions
    "the ABV or alcohol by volume, of the wine is determined by the amount of sugar in the must. The more sugar, the higher the alcohol content. this can be measured with a hydrometer",
    "The hydrometer is a tool used to measure the specific gravity of the must. Specific gravity is the density of the liquid compared to the density of water.",
    "pure water has a specific gravity of 1.000 or pure alcohol. As the sugar content increases, the specific gravity also increases.",
    "As the yeast ferments the sugar and turns it into water, the specific gravity decreases. By taking readings before and after fermentation, we can calculate the alcohol content of the wine.",
    "fermentation is complete when the yeast has either consumed all the sugar or the alcohol content has reached the yeast's tolerance level. different yeast strains have different tolerance levels. For this batch we will be completeling the fermentation when the yesst has reached its abc tolerance level",
    "now, how sweet would you like your wine to be? The sweetness of the wine is determined by the amount of sugar left over after fermentation is complete.",
    //user chooses sweetness with a slider down to the 10th decimal place
    "what ABV would you like your wine to be? Keep in mind that the higher the ABV, the longer the fermentation process will take and the more bitter it could potentially be",
    //user chooses abv with a slider down to the 10th decimal place
    "Ah, you've chosen an ABV of {abv}%! A fine choice. Now, let us prepare the must for fermentation.",
    //carboy airlock and fermentable get removed from inventory and placed on the screen.
    "today we will be using a yeast that has a tolerance of {abv}% ABV. This means that the yeast will continue to ferment until the alcohol content reaches {abv}% ABV. that way, it will not ferment all the sugar into alcohol, leaving your desired sweetness behind",
    "the last ingredient we need is the yeast! Remember, the yeast is what consumes the sugar and turns it into alcohol and carbon dioxide",

    "click the ingredient to add it to the must, and remember, the yeast must be added last!",
    //user clicks yeast and it gets added to the must, as ingredients are clicked, they dissapear off the screen. yeast must be added after all ingredients are added. airlock must be added last
    //user cliks yeast before all ingredients are added
    "Ah, I see you've added the yeast! Remember, the yeast must be added last. Let's try that again, shall we?",
    //ingredients reset
    //user clicks airlock before yeast is added
    "Ah, I see you've added the airlock! Remember, the airlock must be added last. We cant seal it up before all ingredients are added. Let's try that again, shall we?", 
    "now that everything is done, we must wait for the fermentation process to complete. This can take anywhere from a few days to a few weeks, depending on the fermentable and the desired ABV.",
    "we can measure the progress of fermentation by taking readings with the hydrometer. When the specific gravity reaches 1.000, or has not changed for more than 2 weeks, fermentation is complete.",
    "once fermentation is complete, we can siphon the wine into a clean vessel, leaving the sediment behind. this is known as racking.",
    "racking helps the wine clarify and prevents off flavors from developing.",
    "as an extra safeguard against fermentation restarting, we can add potassium metabisulfite and potassium sorbate to the wine. This will kill off any remaining yeast and prevent refermentation. it will also give your wine a longer shelf life",
    "Once the wine has been racked, we can age it in the carboy for a few months to a few years, depending on the wine.",
    "once the wine has aged to your liking, it is time to bottle it! Remember to sanitize the bottles and corks before filling them with wine.",
    "and there you have it! Your very own homemade wine. I hope you enjoyed this journey through the art of winemaking. Until next time, cheers!",
    //user is able to view their wine recipe and print it out
  ];