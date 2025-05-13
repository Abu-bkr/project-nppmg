"use client";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";

export function ThreeDMarqueeDemo() {

  const images = [
    "https://im.hunt.in/cg/Modinagar/City-Guide/Modinagar.jpg",
    "https://careermudhra.com/wp-content/uploads/dj-ayurvedic-college-modinagar-1.jpg",
    "https://is1-2.housingcdn.com/4f2250e8/3ceae7176b84220379ad1458329e0838/v0/fs/kannan_greens-modinagar_1-ghaziabad-kannan_group.jpeg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Modinagar_Railway_Station%2C_Modinagar%2C_Ghaziabad%2C_India_05.jpg/2560px-Modinagar_Railway_Station%2C_Modinagar%2C_Ghaziabad%2C_India_05.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRJVgKY1Ap-ze8pm8NxSCSnWZWUinlnG9nmQ&s",
    "https://im.hunt.in/cg/Modinagar/City-Guide/Modinagar.jpg",
    "https://careermudhra.com/wp-content/uploads/dj-ayurvedic-college-modinagar-1.jpg",
    "https://is1-2.housingcdn.com/4f2250e8/3ceae7176b84220379ad1458329e0838/v0/fs/kannan_greens-modinagar_1-ghaziabad-kannan_group.jpeg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Modinagar_Railway_Station%2C_Modinagar%2C_Ghaziabad%2C_India_05.jpg/2560px-Modinagar_Railway_Station%2C_Modinagar%2C_Ghaziabad%2C_India_05.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRJVgKY1Ap-ze8pm8NxSCSnWZWUinlnG9nmQ&s",
    "https://im.hunt.in/cg/Modinagar/City-Guide/Modinagar.jpg",
    "https://careermudhra.com/wp-content/uploads/dj-ayurvedic-college-modinagar-1.jpg",
    "https://is1-2.housingcdn.com/4f2250e8/3ceae7176b84220379ad1458329e0838/v0/fs/kannan_greens-modinagar_1-ghaziabad-kannan_group.jpeg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Modinagar_Railway_Station%2C_Modinagar%2C_Ghaziabad%2C_India_05.jpg/2560px-Modinagar_Railway_Station%2C_Modinagar%2C_Ghaziabad%2C_India_05.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRJVgKY1Ap-ze8pm8NxSCSnWZWUinlnG9nmQ&s",
    "https://im.hunt.in/cg/Modinagar/City-Guide/Modinagar.jpg",
    "https://careermudhra.com/wp-content/uploads/dj-ayurvedic-college-modinagar-1.jpg",
    "https://is1-2.housingcdn.com/4f2250e8/3ceae7176b84220379ad1458329e0838/v0/fs/kannan_greens-modinagar_1-ghaziabad-kannan_group.jpeg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Modinagar_Railway_Station%2C_Modinagar%2C_Ghaziabad%2C_India_05.jpg/2560px-Modinagar_Railway_Station%2C_Modinagar%2C_Ghaziabad%2C_India_05.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRJVgKY1Ap-ze8pm8NxSCSnWZWUinlnG9nmQ&s", "https://im.hunt.in/cg/Modinagar/City-Guide/Modinagar.jpg",
    "https://careermudhra.com/wp-content/uploads/dj-ayurvedic-college-modinagar-1.jpg",
    "https://is1-2.housingcdn.com/4f2250e8/3ceae7176b84220379ad1458329e0838/v0/fs/kannan_greens-modinagar_1-ghaziabad-kannan_group.jpeg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Modinagar_Railway_Station%2C_Modinagar%2C_Ghaziabad%2C_India_05.jpg/2560px-Modinagar_Railway_Station%2C_Modinagar%2C_Ghaziabad%2C_India_05.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRJVgKY1Ap-ze8pm8NxSCSnWZWUinlnG9nmQ&s",
    "https://im.hunt.in/cg/Modinagar/City-Guide/Modinagar.jpg",
    "https://careermudhra.com/wp-content/uploads/dj-ayurvedic-college-modinagar-1.jpg",
    "https://is1-2.housingcdn.com/4f2250e8/3ceae7176b84220379ad1458329e0838/v0/fs/kannan_greens-modinagar_1-ghaziabad-kannan_group.jpeg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Modinagar_Railway_Station%2C_Modinagar%2C_Ghaziabad%2C_India_05.jpg/2560px-Modinagar_Railway_Station%2C_Modinagar%2C_Ghaziabad%2C_India_05.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRJVgKY1Ap-ze8pm8NxSCSnWZWUinlnG9nmQ&s",
   
  ]
  return (
    <div className="mx-auto my-10 max-w-7xl rounded-3xl bg-gray-950/5 p-2 ring-1 ring-neutral-700/10 dark:bg-neutral-800">
      <ThreeDMarquee images={images} />
    </div>
  );
}
