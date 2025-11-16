"use client";

import { useState, useEffect, Fragment } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X, Instagram, Facebook } from "lucide-react";

import { ROUTES } from "@/lib/utils";
import { Button, Separator } from "@/components/ui";

// Navigation items configuration
const NAV_ITEMS = [
  { href: ROUTES.HOME, label: "Início" },
  { href: ROUTES.ABOUT, label: "Sobre" },
  { href: ROUTES.SERVICES, label: "Serviços" },
  { href: ROUTES.PROJECTS, label: "Projetos" },
  { href: ROUTES.TEAM, label: "Equipe" },
  { href: ROUTES.HOW_IT_WORKS, label: "Como Funciona" },
  { href: ROUTES.CONTACT, label: "Contato" },
] as const;

// Social media links configuration
const SOCIAL_LINKS = [
  {
    href: "https://www.instagram.com/mmdress.arquitetura/",
    icon: Instagram,
    label: "Instagram",
  },
  {
    href: "https://www.facebook.com/mmdress.arquitetura",
    icon: Facebook,
    label: "Facebook",
  },
] as const;

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isHomePage = pathname === ROUTES.HOME;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine background style
  const getNavBackground = () => {
    if (!isHomePage || isMobileMenuOpen) {
      return "bg-white/95 backdrop-blur-md shadow-sm";
    }
    return isScrolled
      ? "bg-white/95 backdrop-blur-md shadow-sm"
      : "bg-transparent";
  };

  // Determine text color
  const getTextColor = () => {
    if (!isHomePage || isMobileMenuOpen) {
      return "text-foreground";
    }
    return isScrolled ? "text-foreground" : "text-white";
  };

  const textColor = getTextColor();

  // Helper function to check if a route is active
  const isActiveRoute = (href: string) => pathname === href;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 rounded-b-md ${getNavBackground()}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24 gap-4">
          {/* Logo */}
          <div className="shrink-0">
            <Link href={ROUTES.HOME} className="group flex items-center gap-3">
              <Image
                src="/logo.svg"
                alt="MMDress Logo"
                width={48}
                height={48}
                className="w-10 h-10 lg:w-12 lg:h-12 transition-colors"
              />
              <div className="flex md:hidden xl:flex flex-col items-start">
                <span className="text-xl lg:text-2xl tracking-wider text-primary group-hover:text-primary/60 transition-colors">
                  MMDRESS
                </span>
                <span
                  className={`text-xs tracking-widest uppercase ${
                    !isHomePage || isMobileMenuOpen
                      ? "text-muted-foreground"
                      : isScrolled
                      ? "text-muted-foreground"
                      : "text-white/80"
                  }`}
                >
                  Arquitetura & Interiores
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 py-9 h-full">
            {NAV_ITEMS.filter((item) => item.href !== ROUTES.HOME).map(
              (item) => {
                const isActive = isActiveRoute(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-sm font-semibold tracking-wide hover:text-primary transition-colors uppercase text-nowrap ${
                      isActive ? "text-primary" : textColor
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              }
            )}

            <Separator
              orientation="vertical"
              className={`hidden lg:block w-2 h-full ${
                isScrolled ? "bg-foreground" : "bg-border"
              }`}
            />

            {/* Social Media Links */}
            <div className="hidden lg:flex items-center gap-4 ml-4">
              {SOCIAL_LINKS.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`transition-colors hover:text-accent ${textColor}`}
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5 hover:text-primary transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 text-white`} />
            ) : (
              <Menu className={`w-6 h-6 text-white`} />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md shadow-sm border-t border-border rounded-b-md">
          <div className="container mx-auto px-4 py-6 flex flex-col gap-4 rounded-b-md">
            {NAV_ITEMS.map((item) => {
              const isActive = isActiveRoute(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-left py-2 transition-colors uppercase tracking-wide font-semibold focus:outline-none rounded-md ${
                    isActive
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                  }
                  `}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
          <div className="flex lg:hidden items-center gap-4 p-4 border-t border-border h-16">
            {SOCIAL_LINKS.map((social, index) => {
              const Icon = social.icon;

              return (
                <Fragment key={social.href}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex h-full items-center justify-center w-full transition-colors hover:text-accent ${textColor}`}
                    aria-label={social.label}
                  >
                    <span className="sr-only">{social.label}</span>
                    <Icon className="w-5 h-5 hover:text-primary transition-colors" />
                  </a>

                  {index < SOCIAL_LINKS.length - 1 && <Separator orientation="vertical" className="bg-border"/>}
                </Fragment>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
