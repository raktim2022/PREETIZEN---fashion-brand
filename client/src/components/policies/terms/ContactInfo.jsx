'use client';
import React from 'react';

export default function ContactInfo({ email, subject }) {
  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
  
  return (
    <div className="mt-4 bg-white border border-slate-100 p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center mb-3">
        <div className="w-10 h-10 rounded-full bg-[var(--primary)]/20 bg-opacity-10 flex items-center justify-center mr-3">
          <svg className="w-5 h-5 text-[var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <h4 className="font-medium text-slate-800">Email Us</h4>
      </div>
      <p className="text-slate-600 mb-3">For legal inquiries, concerns, or questions about our terms:</p>
      <a href={mailtoLink} className="inline-flex items-center px-4 py-2 bg-[var(--primary)] text-white rounded-md hover:bg-[var(--primary)]/80 transition-colors">
        <span>{email}</span>
        <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </a>
    </div>
  );
}