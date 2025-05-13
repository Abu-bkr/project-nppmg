"use client"
import * as React from "react"
import { useState} from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { AuthDialog } from "@/components/AuthDialog"


interface menuItem {
  title: string,
  href?: string,
  subMenu?: menuItem[];
}

interface menuContent {
  title: string;
  payload: menuItem[];
}

const Content: menuContent[] = [
  {
    title: "ABOUT US",
    payload: [
      { title: "About Modinagar Nigam", href: "#" },
      { title: "Duties and Tasks", href: "#" },
      { title: "Mayor and Corporator of Modinagar", href: "#" },
      { title: "Modinagar Municipal Corporation", href: "#" },
      { title: "Organization Structure", href: "#" },
      { 
        title: "Ward Area/Boundaries and Localities", 
        href: "#", 
        subMenu: [
          { title: "About Modinagar Nigam", href: "#" },
          { title: "Duties and Tasks", href: "#" },
          { title: "Mayor and Corporator of Modinagar", href: "#" },
          { title: "Modinagar Municipal Corporation", href: "#" },
          { title: "Organization Structure", href: "#" },
          { title: "Ward Area/Boundaries and Localities", href: "#" }
        ]
      }
    ]
  },
  {
    title: "MODINAGAR",
    payload: [
      { title: "Geographical Situation", href: "#" },
      { title: "History of Modinagar", href: "#" },
      { title: "How to Reach", href: "#" },
      { title: "Important Places", href: "#" },
      { title: "Map", href: "#" },
      { title: "Population", href: "#" }
    ]
  },
  {
    title: "DEPARTMENT",
    payload: [
      { title: "Accounting Department", href: "#" },
      { title: "Engineering Department", href: "#" },
      { title: "Health Department", href: "#" },
      { title: "Jaikal Vibhag", href: "#" },
      { title: "Revenue Department", href: "#" },
      { title: "Street Light Department", href: "#" }
    ]
  },
  {
    title: "SCHEMES",
    payload: [
      { title: "Centrally Sponsored Schemes", href: "#" },
      { title: "State Sponsored Schemes", href: "#" }
    ]
  },
  {
    title: "SERVICES",
    payload: [
      { title: "Issuing Trade License", href: "#" },
      { title: "Records of Births and Deaths", href: "#" },
      { title: "Road Construction", href: "#" },
      { title: "Sanitation Cleanliness", href: "#" },
      { title: "Sewage Construction", href: "#" },
      { title: "Solid Waste Management", href: "#" },
      { title: "Street Light Maintenance", href: "#" },
      { title: "Water Supply", href: "#" }
    ]
  },
  {
    title: "TENDERS",
    payload: []
  },
  {
    title: "BUDGET",
    payload: []
  },
  {
    title: "RIGHT TO INFORMATION",
    payload: [
      { title: "Right to Information", href: "#" },
      { title: "Right to Information Act", href: "#" }
    ]
  },
  {
    title: "E-GOVERNANCE",
    payload: [
      { title: "E-Nagar Sewa", href: "#" },
      { title: "Online Signage/Advertising", href: "#" },
      { title: "Property Filing Rejected", href: "#" },
      { title: "Property Tax", href: "#" },
      { title: "Right to Information", href: "#" },
      { title: "To Issue Tax", href: "#" },
      { title: "Water/Sewage Connection", href: "#" }
    ]
  },
  {
    title: "GALLERY",
    payload: [
      { title: "News Events", href: "#" },
      { title: "Photo Gallery", href: "#" },
      { title: "Tourist Spots", href: "#" },
      { title: "Video Gallery", href: "#" }
    ]
  },
  {
    title: "CONTACT US",
    payload: [
      { title: "Contact List", href: "#" }
    ]
  },
  {
    title: "DOWNLOAD",
    payload: []
  }
];

export function Header() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authView, setAuthView] = useState<"signin" | "signup">("signin");
  const { scrollY } = useScroll();
  
  const blurStrength = useTransform(scrollY, [0, 100], [0, 8]);
  const logoScale = useTransform(scrollY, [0, 50], [1, 0.95]);

  const handleMouseEnter = (title: string) => {
    if (window.innerWidth >= 1024) {
      setActiveMenu(title);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 1024) {
      setActiveMenu(null);
    }
  };

  const handleAuthClick = (view: "signin" | "signup") => {
    setAuthView(view);
    setIsAuthOpen(true);
  };

  return (
    <>
      {/* Top Header with Logo */}
      <div className="bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              style={{ scale: logoScale }}
              className="flex items-center space-x-3"
            >
              <Link href="/" className="flex items-center space-x-3">
                <div className="relative w-12 h-12">
                  <Image
                    src="/logo.jpeg"
                    alt="Modinagar Nagar"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                <div className="hidden sm:block">
                  <motion.h1 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-xl font-bold text-gray-900"
                  >
                   नगर पालिका परिषद मोदीनगर-गाजियाबाद
                  </motion.h1>
                  <motion.p 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-sm text-gray-600"
                  >
                   Nagar Palika Parishad Modinagar, Ghaziabad 
                  </motion.p>
                </div>
              </Link>
            </motion.div>

            {/* Auth Buttons - Hidden on Mobile */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="hidden md:flex items-center space-x-3"
            >
              <Button 
                variant="outline" 
                size="sm" 
                className="backdrop-blur-md bg-white/50 border-gray-200/50 hover:bg-white/80 transition-all duration-300"
                onClick={() => handleAuthClick("signin")}
              >
                Login
              </Button>
              <Button 
                size="sm" 
                className="backdrop-blur-md bg-primary/90 hover:bg-primary transition-all duration-300"
                onClick={() => handleAuthClick("signup")}
              >
                Sign Up
              </Button>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="lg:hidden p-2 hover:bg-gray-100/50 rounded-md backdrop-blur-sm transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Navigation Menu - Sticky with Enhanced Blur */}
      <div className="sticky top-0 z-50">
        <motion.nav
          style={{ 
            backdropFilter: `blur(${blurStrength.get()}px)`,
          }}
          className={cn(
            "w-full bg-white/60 border-b border-gray-200/50 shadow-sm",
            isMobileMenuOpen ? "block" : "hidden lg:block"
          )}
        >
          <div className="container mx-auto px-4">
            <ul className="flex flex-col lg:flex-row lg:space-x-1">
              {Content.map((section, index) => (
                <motion.li
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  key={section.title}
                  className="relative group"
                  onMouseEnter={() => handleMouseEnter(section.title)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link href={`/${section.title.toLowerCase().replace(/\s+/g, '-')}`}>
                    <motion.span
                      whileHover={{ x: 5 }}
                      className={cn(
                        "flex items-center px-3 py-2 text-sm font-medium transition-all duration-300",
                        "hover:text-primary",
                        "lg:rounded-md",
                        activeMenu === section.title ? "text-primary" : "text-gray-700",
                        "border-l-2 lg:border-l-0",
                        activeMenu === section.title ? "border-primary" : "border-transparent"
                      )}
                    >
                      {section.title}
                      {section.payload.length > 0 && (
                        <motion.div
                          initial={{ rotate: 0 }}
                          animate={{ rotate: activeMenu === section.title ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown className="ml-1 h-4 w-4" />
                        </motion.div>
                      )}
                    </motion.span>
                  </Link>

                  {/* Dropdown Menu */}
                  {section.payload.length > 0 && (
                    <AnimatePresence>
                      {activeMenu === section.title && (
                        <motion.div
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          transition={{ duration: 0.2 }}
                          className={cn(
                            "bg-white/70 backdrop-blur-md p-2 shadow-lg border border-gray-100/20 z-50",
                            "lg:absolute lg:left-0 lg:top-full lg:min-w-[220px] lg:rounded-md",
                            "relative"
                          )}
                        >
                          <ul className="space-y-1">
                            {section.payload.map((item, idx) => (
                              <motion.li
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.2, delay: idx * 0.05 }}
                                key={item.title}
                                className="relative group/submenu"
                              >
                                <Link
                                  href={item.href || "#"}
                                  className="block px-4 py-2 text-sm text-gray-700 rounded-md hover:text-primary transition-all duration-300"
                                >
                                  <div className="flex items-center justify-between">
                                    <span>{item.title}</span>
                                    {item.subMenu && (
                                      <ChevronRight className="h-4 w-4 transition-transform group-hover/submenu:translate-x-1" />
                                    )}
                                  </div>
                                </Link>

                                {/* Third level submenu */}
                                {item.subMenu && (
                                  <div className={cn(
                                    "bg-white/70 backdrop-blur-md p-2 shadow-lg border border-gray-100/20",
                                    "lg:absolute lg:left-full lg:top-0 lg:min-w-[220px] lg:rounded-md lg:opacity-0 lg:invisible group-hover/submenu:opacity-100 group-hover/submenu:visible",
                                    "relative lg:transition-all lg:duration-300"
                                  )}>
                                    <ul className="space-y-1">
                                      {item.subMenu.map((subItem, subIdx) => (
                                        <motion.li
                                          initial={{ opacity: 0, x: -10 }}
                                          animate={{ opacity: 1, x: 0 }}
                                          transition={{ duration: 0.2, delay: subIdx * 0.05 }}
                                          key={subItem.title}
                                        >
                                          <Link
                                            href={subItem.href || "#"}
                                            className="block px-4 py-2 text-sm text-gray-700 rounded-md hover:text-primary transition-all duration-300"
                                          >
                                            {subItem.title}
                                          </Link>
                                        </motion.li>
                                      ))}
                                    </ul>
                                  </div>
                                )}
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </motion.li>
              ))}

              {/* Mobile Auth Buttons */}
              <motion.li 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="lg:hidden mt-4 space-y-2 border-t border-gray-100/20 pt-4"
              >
                <Button 
                  className="w-full backdrop-blur-md bg-white/50 border-gray-200/50 hover:bg-white/80 transition-all duration-300" 
                  variant="outline"
                  onClick={() => handleAuthClick("signin")}
                >
                  Login
                </Button>
                <Button 
                  className="w-full backdrop-blur-md bg-primary/90 hover:bg-primary transition-all duration-300"
                  onClick={() => handleAuthClick("signup")}
                >
                  Sign Up
                </Button>
              </motion.li>
            </ul>
          </div>
        </motion.nav>
      </div>

      {/* Auth Dialog */}
      <AuthDialog
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        defaultView={authView}
      />
    </>
  );
}


