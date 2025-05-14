import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "",
      name: "Dr. MANJU SIWACH",
      designation: "MLA, Modinagar",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQECBi76FxIAlB527rTdEqG4vVqMZA4ghOudw&s",
    },
    {
      quote:
        "",
      name: "Shri Vinod Vaishali",
      designation: "Chairman, Nagar Palika Parishad Modinagar",
      src: "https://i.ibb.co/GQ08SxH3/Whats-App-Image-2025-05-14-at-2-49-13-PM.jpg",
    },
    {
      quote:
        "",
      name: "Shri Narendra Mohan Mishra",
      designation: "Executive Officer (E.O), Nagar Palika Parishad Modinagar",
      src: "https://i.ibb.co/rRZT6D67/Screenshot-2025-05-14-151649.png",
    },
    {
      quote:
        "",
      name: "Shrimati Neelam Gurjar",
      designation: "(J.E. Civil), Nagar Palika Parishad Modinagar",
      src: "https://live.staticflickr.com/65535/54518626106_88fc538077_m.jpg",
    },
    {
      quote:
        "",
      name: "Shri Umesh Chandra Anand",
      designation: "(T.S) Nagar Palika Parishad Modinagar",
      src: "https://i.ibb.co/20QtF18Z/Screenshot-2025-05-14-152322.png",
    },
    {
      quote:
        "",
      name: "Shri Ankit Chaudhary",
      designation: "Revenue Inspector, Nagar Palika Parishad Modinagar",
      src: "https://i.ibb.co/bRrzgcj3/Screenshot-2025-05-14-150906.png",
    },  
  
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
