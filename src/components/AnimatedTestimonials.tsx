import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "",
      name: "Dr. SHRIMATI MANJU SIWACH BJP MLA",
      designation: "MLA Modinagar",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQECBi76FxIAlB527rTdEqG4vVqMZA4ghOudw&s",
    },
    {
        quote:
          "",
        name: "Vinod Vaishali",
        designation: "Chaiman Nagar Palika Parishad Modinagar",
        src: "https://drive.google.com/uc?export=view&id=AKGpihZp1zZFokAMSnr3_PSxD09hKTXL8Q1TtS-j8LJd6qyxp4jmLxku7kGHidhir2NjdC85y4TvhZUleCtECDec_IOdo-7ZROZafw",
      },
      {
        quote:
          "",
        name: "Dr. SRIMATI MANJU SIWACH BJP MLA",
        designation: "MLA Modinagar",
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQECBi76FxIAlB527rTdEqG4vVqMZA4ghOudw&s",
      },
   
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
