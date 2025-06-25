'use client'
import React from 'react';

export default function PolicySubsection({ title, children }) {
  return (
    <div className="my-6">
      <h3 className="text-xl font-medium mb-3 text-slate-700">{title}</h3>
      {children}
    </div>
  );
}