"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Facebook, Twitter, Instagram, Youtube, Phone, Mail, MapPin, Clock, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

const footerLinks = {
  quickLinks: [
    { title: "About Us", href: "/about-us" },
    { title: "Services", href: "/services" },
    { title: "News & Updates", href: "/news" },
    { title: "Contact Us", href: "/contact" },
    { title: "RTI", href: "/rti" },
    { title: "Tenders", href: "/tenders" },
  ],
  citizenServices: [
    { title: "Property Tax", href: "/property-tax" },
    { title: "Water Supply", href: "/water-supply" },
    { title: "Birth/Death Certificate", href: "/certificates" },
    { title: "Trade License", href: "/trade-license" },
    { title: "Building Permission", href: "/building-permission" },
    { title: "Grievance Redressal", href: "/grievance" },
  ],
  departments: [
    { title: "Engineering", href: "/department/engineering" },
    { title: "Health & Sanitation", href: "/department/health" },
    { title: "Revenue", href: "/department/revenue" },
    { title: "Town Planning", href: "/department/planning" },
    { title: "Water Works", href: "/department/water" },
    { title: "Street Lighting", href: "/department/lighting" },
  ]
}

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "Youtube" },
]

export function Footer() {
  return (
    <footer className="relative mt-20 border-t border-gray-100/20">
      {/* Newsletter Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="absolute -top-12 left-4 right-4 md:left-1/2 md:-translate-x-1/2 md:w-[800px] mx-auto"
      >
        <div className="bg-white/70 backdrop-blur-md rounded-lg shadow-lg border border-gray-100/20 p-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Subscribe to Our Newsletter</h3>
              <p className="text-sm text-gray-600">Stay updated with latest news and announcements</p>
            </div>
            <div className="flex w-full md:w-auto gap-2">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="backdrop-blur-sm bg-white/50"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 pt-24 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative w-10 h-10">
                <Image
                  src="/logo.jpeg"
                  alt="Modinagar Nagar"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">नगर पालिका परिषद मोदीनगर</h3>
                <p className="text-sm text-gray-600">Nagar Palika Parishad Modinagar</p>
              </div>
            </Link>
            <p className="text-sm text-gray-600">
              Working towards making Modinagar a model city with excellent civic amenities and infrastructure.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                  <span className="sr-only">{social.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.quickLinks.map((link) => (
                <motion.li
                  key={link.title}
                  whileHover={{ x: 5 }}
                  className="text-sm"
                >
                  <Link 
                    href={link.href}
                    className="text-gray-600 hover:text-primary transition-colors flex items-center gap-1"
                  >
                    <ExternalLink className="h-3 w-3" />
                    {link.title}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Citizen Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Citizen Services</h3>
            <ul className="space-y-2">
              {footerLinks.citizenServices.map((link) => (
                <motion.li
                  key={link.title}
                  whileHover={{ x: 5 }}
                  className="text-sm"
                >
                  <Link 
                    href={link.href}
                    className="text-gray-600 hover:text-primary transition-colors flex items-center gap-1"
                  >
                    <ExternalLink className="h-3 w-3" />
                    {link.title}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-gray-900">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <span>Municipal Corporation Modinagar, District Ghaziabad, Uttar Pradesh</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-600">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <span>+91 XXXXX XXXXX</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-600">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <span>contact@nppmodinagar.com</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-600">
                <Clock className="h-5 w-5 text-primary shrink-0" />
                <span>Mon - Sat: 10:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <Separator className="my-8 bg-gray-100/20" />

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600"
        >
          <p>© 2024 Modinagar Nagar. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary transition-colors">
              Terms of Use
            </Link>
            <Link href="/sitemap" className="hover:text-primary transition-colors">
              Sitemap
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
