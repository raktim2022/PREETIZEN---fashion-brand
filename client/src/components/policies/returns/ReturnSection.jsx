import React from 'react';
import { getIcon } from './ReturnIcons';

export default function ReturnSection({ title, icon, children }) {
  const IconComponent = getIcon(icon);
  
  return (
    <section className="mb-10">
      <div className="flex items-center mb-6">
        {IconComponent && (
          <div className="w-12 h-12 bg-[var(--primary)]/20 bg-opacity-10 rounded-full flex items-center justify-center mr-4">
            <IconComponent className="w-6 h-6 text-[var(--primary)]" />
          </div>
        )}
        <h2 className="text-2xl font-serif text-[var(--heading)]">{title}</h2>
      </div>
      <div className="pl-0 md:pl-16">
        {children}
      </div>
    </section>
  );
}