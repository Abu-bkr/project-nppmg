'use client'
import { FocusCards } from "@/components/ui/focus-cards";

export function FocusCardsD() {
    const cards = [
        {
          title: "Dr. Rajendra Prasad",
          description: "1st President of India (1950–1962), longest-serving president, key figure in constitution drafting",
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Rajendra_Prasad_%28Indian_President%29%2C_signed_image_for_Walter_Nash_%28NZ_Prime_Minister%29%2C_1958_%2816017609534%29.jpg/500px-Rajendra_Prasad_%28Indian_President%29%2C_signed_image_for_Walter_Nash_%28NZ_Prime_Minister%29%2C_1958_%2816017609534%29.jpg"
        },
      
        {
          title: "Atal Bihari Vajpayee",
          description: "Atal Bihari Vajpayee (25 December 1924 – 16 August 2018) was an Indian poet, writer and statesman who served as the prime minister of India",
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Atal_Bihari_Vajpayee_%28crop_2%29.jpg/500px-Atal_Bihari_Vajpayee_%28crop_2%29.jpg"
        },
     
        {
          title: "Narendra Modi",
          description: "Current Primeminister of India.",
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Shri_Narendra_Modi%2C_Prime_Minister_of_India_%283x4_cropped%29.jpg/500px-Shri_Narendra_Modi%2C_Prime_Minister_of_India_%283x4_cropped%29.jpg"
        },
      
        {
          title: "Dr. A. P. J. Abdul Kalam",
          description: "11th President (2002–2007), 'Missile Man' and people's president",
          src: "https://upload.wikimedia.org/wikipedia/commons/6/6e/A._P._J._Abdul_Kalam.jpg"
        },
        {
          title: "Ram Nath Kovind",
          description: "14th President (2017–2022), second Dalit president & lawyer",
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Ram_Nath_Kovind_official_portrait.jpg/500px-Ram_Nath_Kovind_official_portrait.jpg"
        },
        {
          title: "Droupadi Murmu",
          description: "15th & current President (2022–present), first tribal president",
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Droupadi_Murmu_POI_official_portrait.jpg/500px-Droupadi_Murmu_POI_official_portrait.jpg"
        }
      ];


  return <FocusCards cards={cards} />;
}
