import { ProjectCategory } from '@/utils/enums';

export interface CatalogProject {
  id: number;
  title: string;
  category: Exclude<ProjectCategory, ProjectCategory.All>;
  location: string;
  year: string;
  area: string;
  image: string;
  description: string;
  tags: string[];
}
