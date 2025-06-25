"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// This component marks links that should use Barba transitions
export default function BarbaLink({ href, children, className, ...props }) {
  const pathname = usePathname();

  const handleClick = (e) => {
    // Don't prevent default if it's the same page
    if (href === pathname) {
      return;
    }

    e.preventDefault();

    // Dispatch a custom event that our Barba wrapper will listen for
    const barbaEvent = new CustomEvent('barba:click', {
      detail: { href }
    });
    document.dispatchEvent(barbaEvent);
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={className}
      data-barba-link="true"
      {...props}
    >
      {children}
    </Link>
  );
}