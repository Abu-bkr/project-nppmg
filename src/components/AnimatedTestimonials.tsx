import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "",
      name: "Dr. SRIMATI MANJU SIWACH",
      designation: "MLA Modinagar",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQECBi76FxIAlB527rTdEqG4vVqMZA4ghOudw&s",
    },
    {
      quote:
        "",
      name: "Shri Vinod Vaishali",
      designation: "Chairman Nagar Palika Parishad Modinagar",
      src: "https://i.ibb.co/GQ08SxH3/Whats-App-Image-2025-05-14-at-2-49-13-PM.jpg",
    },
    
      
   
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
