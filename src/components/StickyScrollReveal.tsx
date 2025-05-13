"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";



const content = [
    {
      title: "NITI Aayog",
      description: "Policy think tank replacing Planning Commission (2015). Focuses on cooperative federalism, sustainable development goals, and competitive federalism among states.",
      src: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/NITI_Aayog.svg/1200px-NITI_Aayog.svg.png"
    },
    {
      title: "Make in India",
      description: "Industrial policy (2014) boosting manufacturing, FDI, and job creation. Key sectors: automobiles, renewables, and electronics.",
      src: "https://www.makeinindia.com/home/img/make_in_india_logo.png"
    },
    {
      title: "Smart Cities Mission",
      description: "Urban renewal program (2015) for 100 cities with tech-driven infrastructure (IoT, waste management, e-governance). Budget: ₹1.8 lakh crore.",
      src: "https://smartcities.gov.in/upload/logo/62c0e0d0a8a60smart-cities-mission-logo.png"
    },
    {
      title: "PM Awas Yojana",
      description: "Housing scheme (2015) targeting 'Housing for All' by 2022. Subsidies for urban/rural poor with 2.5 crore homes sanctioned.",
      src: "https://pmaymis.gov.in/assets/img/logo.png"
    },
    {
      title: "Ayushman Bharat",
      description: "World's largest healthcare scheme (2018) offering ₹5 lakh/year hospitalization cover to 50 crore beneficiaries via PM-JAY.",
      src: "https://www.pmjay.gov.in/sites/default/files/2021-06/PMJAY_Logo.png"
    },
    {
      title: "Digital India",
      description: "Flagship program (2015) for digital infrastructure (Aadhaar, UPI), e-services, and internet connectivity to villages.",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Digital_India_logo.svg/1200px-Digital_India_logo.svg.png"
    },
    {
      title: "National Education Policy",
      description: "NEP 2020 reforms: Multidisciplinary learning, 5+3+3+4 curriculum, and 6% GDP allocation for education.",
      src: "https://static.mygov.in/static/s3fs-public/mygov_159799298251307401.jpg"
    },
    {
      title: "Gati Shakti",
      description: "National Master Plan (2021) for multi-modal connectivity (roads, rails, ports) with GIS-based planning.",
      src: "https://www.gatishakti.gov.in/assets/images/gati-shakti-logo.png"
    }
  ];
export function StickyScrollRevealDemo() {
  return (
    <div className="w-full py-4">
      <StickyScroll content={content} />
    </div>
  );
}
