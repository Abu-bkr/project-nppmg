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
    <div className="relative mx-auto my-10 flex h-screen w-full max-w-7xl flex-col items-center justify-center overflow-hidden rounded-3xl">
    <h2 className="relative z-20 mx-auto max-w-4xl text-center text-2xl font-bold text-balance text-white md:text-4xl lg:text-6xl">
      Nagar Palika PariShad Modinagar,
      <span className="relative z-20 inline-block rounded-xl bg-blue-500/40 px-4 py-1 text-white underline decoration-sky-500 decoration-[6px] underline-offset-[16px] backdrop-blur-sm">
        Ghaziabad
      </span>{" "}
      
    </h2>
    <p className="relative z-20 mx-auto max-w-2xl py-8 text-center text-sm text-neutral-200 md:text-base">
        Development is out priority
    </p>

    <div className="relative z-20 flex flex-wrap items-center justify-center gap-4 pt-4">
      <button className="rounded-md bg-sky-600 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-sky-700 focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-black focus:outline-none">
        Join
      </button>
      <button className="rounded-md border border-white/20 bg-white/10 px-6 py-2.5 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20 focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-black focus:outline-none">
        Read more
      </button>
    </div>

    {/* overlay */}
    <div className="absolute inset-0 z-10 h-full w-full bg-black/80 dark:bg-black/40" />
    <ThreeDMarquee
      className="pointer-events-none absolute inset-0 h-full w-full"
      images={images}
    />
  </div>
  );
}
