import Link from 'next/link';
import { ArrowLeftIcon } from 'lucide-react';

import { Button } from '@/components/ui';
import { ROUTES } from '@/lib/utils';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-4 text-center">
      <div className="max-w-md w-full space-y-6">
        <div className="space-y-2">
          <strong className="text-8xl font-bold text-primary">404</strong>
          <div className="h-1 w-24 bg-primary mx-auto rounded-full" />
        </div>

        <div className="space-y-4">
          <strong className="text-3xl font-semibold text-foreground">
            Página não encontrada
          </strong>
          <p className="text-muted-foreground text-lg">
            Desculpe, a página que você está procurando não existe ou foi
            movida.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button asChild size="lg">
            <Link href={ROUTES.HOME} className="text-white font-semibold">
              <ArrowLeftIcon className="w-4 h-4" />
              Voltar à página inicial
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
