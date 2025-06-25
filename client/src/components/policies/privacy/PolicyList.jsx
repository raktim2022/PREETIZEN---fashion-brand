'use client'
import React from 'react';

export default function PolicyList({ items }) {
  return (
    <ul className="list-disc pl-5 space-y-2">
      {items.map((item, index) => (
        <li key={index} className="text-slate-600">{item}</li>
      ))}
    </ul>
  );
}