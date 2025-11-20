export enum ProjectCategory {
  All = 'All',
  Residential = 'Residential',
  Interiors = 'Interiors',
  Architecture = 'Architecture',
}

export const PROJECT_CATEGORY_LABELS: Record<ProjectCategory, string> = {
  [ProjectCategory.All]: 'Todos',
  [ProjectCategory.Residential]: 'Residencial',
  [ProjectCategory.Interiors]: 'Interiores',
  [ProjectCategory.Architecture]: 'Arquitetura',
} as const;