import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const ROUTES = {
  HOME: "/",
  ABOUT: "/sobre",
  SERVICES: "/servicos",
  PROJECTS: "/projetos",
  TEAM: "/equipe",
  HOW_IT_WORKS: "/como-funciona",
  CONTACT: "/contato",
}