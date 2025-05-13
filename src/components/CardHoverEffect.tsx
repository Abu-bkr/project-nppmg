'use client'
import { HoverEffect } from "@/components/ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Population (2025 Estimate)",
    description: "Approximately 189,000 in the city proper, with around 265,000 in the metropolitan area.",
    link: "https://www.census2011.co.in/data/town/1107148-modinagar-uttar-pradesh.html",
  },
  {
    title: "Population Density",
    description: "4,792/km² (city proper), 707.9/km² (tehsil), and 2,421/km² (metropolitan area).",
    link: "https://www.censusindia.gov.in/",
  },
  {
    title: "Female Literacy Rate",
    description: "82.69% (city, 2011), significantly higher than the Uttar Pradesh average of 67.68%.",
    link: "https://www.census2011.co.in/data/town/1107148-modinagar-uttar-pradesh.html",
  },
  {
    title: "Male Population",
    description: "69,268 (53.3% of the city population in 2011), with a sex ratio of 881 females per 1,000 males.",
    link: "https://www.censusindia.gov.in/",
  },
  {
    title: "Under 18 Population",
    description: "11.42% (0–6 years) in the city (14,889 children in 2011), with a concerning child sex ratio of 781 girls per 1,000 boys.",
    link: "https://www.census2011.co.in/data/town/1107148-modinagar-uttar-pradesh.html",
  },
  {
    title: "Economic & Infrastructure",
    description: "Industrial hub (Modi Enterprises), connected to Delhi via NH-58 and RRTS, with a growing education sector.",
    link: "https://up.gov.in/",
  },
];