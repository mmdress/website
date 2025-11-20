'use client';

import { useState, useEffect, Fragment } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

import { ROUTES } from '@/utils/routes';
import { NAV_ITEMS, SOCIAL_LINKS } from '@/utils/constants';
import { Button, Separator } from '@/components/ui';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isHomePage = pathname === ROUTES.HOME;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getNavBackground = () => {
    if (!isHomePage || isMobileMenuOpen) {
      return 'bg-white/95 backdrop-blur-md shadow-sm';
    }
    return isScrolled
      ? 'bg-white/95 backdrop-blur-md shadow-sm'
      : 'bg-transparent';
  };

  const getTextColor = () => {
    if (!isHomePage || isMobileMenuOpen) {
      return 'text-foreground';
    }
    return isScrolled ? 'text-foreground' : 'text-white';
  };

  const textColor = getTextColor();

  const isActiveRoute = (href: string) => pathname === href;

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 rounded-b-md transition-all duration-300 ${getNavBackground()}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between gap-4 lg:h-24">
          <div className="shrink-0">
            <Link href={ROUTES.HOME} className="group flex items-center gap-3">
              <Image
                src="/logo.svg"
                alt="MMDress Logo"
                width={48}
                height={48}
                className="h-10 w-10 transition-colors lg:h-12 lg:w-12"
              />
              <div className="flex flex-col items-start md:hidden xl:flex">
                <span className="text-primary group-hover:text-primary/60 text-xl tracking-wider transition-colors lg:text-2xl">
                  MMDRESS
                </span>
                <span
                  className={`text-xs tracking-widest uppercase ${
                    !isHomePage || isMobileMenuOpen
                      ? 'text-muted-foreground'
                      : isScrolled
                        ? 'text-muted-foreground'
                        : 'text-white/80'
                  }`}
                >
                  Arquitetura & Interiores
                </span>
              </div>
            </Link>
          </div>

          <div className="hidden h-full items-center gap-8 py-9 md:flex">
            {NAV_ITEMS.filter((item) => item.href !== ROUTES.HOME).map(
              (item) => {
                const isActive = isActiveRoute(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`hover:text-primary text-sm font-semibold tracking-wide text-nowrap uppercase transition-colors ${
                      isActive ? 'text-primary' : textColor
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              },
            )}

            <Separator
              orientation="vertical"
              className={`hidden h-full w-2 lg:block ${
                isScrolled ? 'bg-foreground' : 'bg-border'
              }`}
            />

            <div className="ml-4 hidden items-center gap-4 lg:flex">
              {SOCIAL_LINKS.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`hover:text-accent transition-colors ${textColor}`}
                    aria-label={social.label}
                  >
                    <Icon className="hover:text-primary h-5 w-5 transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>

          <Button
            className="p-2 md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={'h-6 w-6 text-white'} />
            ) : (
              <Menu className={'h-6 w-6 text-white'} />
            )}
          </Button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="border-border rounded-b-md border-t bg-white/95 shadow-sm backdrop-blur-md md:hidden">
          <div className="container mx-auto flex flex-col gap-4 rounded-b-md px-4 py-6">
            {NAV_ITEMS.map((item) => {
              const isActive = isActiveRoute(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`rounded-md py-2 text-left font-semibold tracking-wide uppercase transition-colors focus:outline-none ${
                    isActive
                      ? 'text-primary'
                      : 'text-foreground hover:text-primary'
                  } `}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
          <div className="border-border flex h-16 items-center gap-4 border-t p-4 lg:hidden">
            {SOCIAL_LINKS.map((social, index) => {
              const Icon = social.icon;

              return (
                <Fragment key={social.href}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`hover:text-accent flex h-full w-full items-center justify-center transition-colors ${textColor}`}
                    aria-label={social.label}
                  >
                    <span className="sr-only">{social.label}</span>
                    <Icon className="hover:text-primary h-5 w-5 transition-colors" />
                  </a>

                  {index < SOCIAL_LINKS.length - 1 && (
                    <Separator orientation="vertical" className="bg-border" />
                  )}
                </Fragment>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
