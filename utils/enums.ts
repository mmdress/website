export enum ProjectCategory {
  All = 'All',
  Kitchen = 'Kitchen',
  LivingRoom = 'LivingRoom',
  DiningRoom = 'DiningRoom',
  Bedroom = 'Bedroom',
  Bathroom = 'Bathroom',
  Office = 'Office',
  Other = 'Other',
}

export const PROJECT_CATEGORY_LABELS: Record<ProjectCategory, string> = {
  [ProjectCategory.All]: 'Todos',
  [ProjectCategory.Kitchen]: 'Cozinha',
  [ProjectCategory.LivingRoom]: 'Sala de Estar',
  [ProjectCategory.DiningRoom]: 'Sala de Jantar',
  [ProjectCategory.Bedroom]: 'Quarto',
  [ProjectCategory.Bathroom]: 'Banheiro',
  [ProjectCategory.Office]: 'Escritório',
  [ProjectCategory.Other]: 'Outros',
} as const;
