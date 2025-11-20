'use client';

import { motion } from 'motion/react';

import { ProjectCategory, PROJECT_CATEGORY_LABELS } from '@/utils/enums';

interface FilterButtonProps {
  category: ProjectCategory;
  isActive: boolean;
  onClick: () => void;
}

export function FilterButton({
  category,
  isActive,
  onClick,
}: FilterButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`cursor-pointer rounded-full px-6 py-2 text-sm tracking-wide uppercase transition-all duration-300 ${
        isActive
          ? 'bg-primary font-semibold text-white'
          : 'border-border text-foreground hover:border-primary border bg-white font-medium'
      }`}
    >
      {PROJECT_CATEGORY_LABELS[category]}
    </motion.button>
  );
}
