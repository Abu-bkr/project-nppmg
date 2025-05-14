import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "",
      name: "Dr. SHRIMATI MANJU SIWACH BJP MLA",
      designation: "Distct MLA Modinagar Ghaziabad",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQECBi76FxIAlB527rTdEqG4vVqMZA4ghOudw&s",
    },
    {
        quote:
          "",
        name: "Dr. SHRIMATI MANJU SIWACH BJP MLA",
        designation: "Distct MLA Modinagar Ghaziabad",
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQECBi76FxIAlB527rTdEqG4vVqMZA4ghOudw&s",
      },
      {
        quote:
          "",
        name: "Dr. SHRIMATI MANJU SIWACH BJP MLA",
        designation: "Distct MLA Modinagar Ghaziabad",
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQECBi76FxIAlB527rTdEqG4vVqMZA4ghOudw&s",
      },
   
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
