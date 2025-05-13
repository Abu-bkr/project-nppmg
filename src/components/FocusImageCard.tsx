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
          title: "Dr. Zakir Husain",
          description: "3rd President (1967–1969), first Muslim president & education reformer",
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSflyy4TjGfXO3e98csSEIeo7Txo4uMVyYcRY9akfr8mb-6NSKLkkN6ubCK0aoHk0lCGUVBrxmijQ0q8YqGRkN1Bw"
        },
     
        {
          title: "Fakhruddin Ali Ahmed",
          description: "5th President (1974–1977), signed the controversial Emergency proclamation",
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/President_Fakhruddin_Ali_Ahmed.jpg/375px-President_Fakhruddin_Ali_Ahmed.jpg"
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
