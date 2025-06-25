"use client";

import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";

const Breadcrumbs = ({ items }) => {
  return (
    <nav className="flex text-sm" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          
          return (
            <li key={index} className="inline-flex items-center">
              {index > 0 && (
                <FiChevronRight className="mx-1 text-[#333333]/40" size={14} />
              )}
              
              {isLast ? (
                <span className="text-[#6B4F3B] font-medium" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link 
                  href={item.path}
                  className="text-[#333333]/70 hover:text-[#D46A6A] transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;