'use client';

import { useState } from 'react';

import { FeaturedService } from './FeaturedService';
import { ServicesGrid } from './ServicesGrid';

export function ServiceWrapper() {
  const [activeService, setActiveService] = useState(0);

  return (
    <>
      <ServicesGrid onServiceClick={setActiveService} />
      <FeaturedService
        activeService={activeService}
        onServiceChange={setActiveService}
      />
    </>
  )
}
