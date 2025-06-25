import React from "react";

export default function SectionHeading({ icon, title }) {
  return (
    <div className="flex items-center mb-4 pb-2 border-b border-[#E9E1D6]">
      {icon && (
        <span className="mr-2 text-[#D46A6A] text-xl">{icon}</span>
      )}
      <h2 className="text-xl font-serif text-[#6B4F3B]">{title}</h2>
    </div>
  );
}