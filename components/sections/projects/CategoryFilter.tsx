import { Button } from '@/components/ui';
import { ProjectCategory, PROJECT_CATEGORY_LABELS } from '@/utils/enums';

interface CategoryFilterProps {
  categories: ProjectCategory[];
  activeCategory: ProjectCategory;
  onCategoryChange: (category: ProjectCategory) => void;
}

export function CategoryFilter({
  categories,
  activeCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  return (
    <div className="mb-16 flex flex-wrap justify-center gap-3">
      {categories.map((category) => (
        <Button
          key={category}
          onClick={() => onCategoryChange(category)}
          variant={activeCategory === category ? 'default' : 'outline'}
          size="default"
          className="cursor-pointer tracking-wide uppercase"
        >
          {PROJECT_CATEGORY_LABELS[category]}
        </Button>
      ))}
    </div>
  );
}
