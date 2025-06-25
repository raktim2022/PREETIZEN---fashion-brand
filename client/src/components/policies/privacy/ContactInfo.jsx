'use client'
import React from 'react';

export default function ContactInfo({ title, email }) {
  return (
    <div className="mt-4">
      <strong className="text-slate-800">{title}</strong>
      <p className="mt-1 text-slate-600">
        Email: <a href={`mailto:${email}`} className="text-blue-600 hover:text-blue-800 underline">{email}</a>
      </p>
    </div>
  );
}