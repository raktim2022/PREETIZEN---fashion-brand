"use client";

import { motion } from "framer-motion";
import { FiX } from "react-icons/fi";

const SizeChart = ({ onClose }) => {
  const sizeData = [
    { size: "S", chest: "36-38", length: "26", shoulder: "16.5" },
    { size: "M", chest: "38-40", length: "27", shoulder: "17.5" },
    { size: "L", chest: "40-42", length: "28", shoulder: "18.5" },
    { size: "XL", chest: "42-44", length: "29", shoulder: "19.5" },
    { size: "XXL", chest: "44-46", length: "30", shoulder: "20.5" },
  ];
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
        className="relative bg-white rounded-lg shadow-xl max-w-2xl w-full z-10"
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-serif text-[#6B4F3B]">Size Chart</h2>
            <button
              onClick={onClose}
              className="p-1 rounded-full hover:bg-[#A7BFA3]/10"
              aria-label="Close size chart"
            >
              <FiX size={24} />
            </button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#F8F3E9]">
                  <th className="px-4 py-3 text-left font-medium text-[#6B4F3B]">Size</th>
                  <th className="px-4 py-3 text-left font-medium text-[#6B4F3B]">Chest (inches)</th>
                  <th className="px-4 py-3 text-left font-medium text-[#6B4F3B]">Length (inches)</th>
                  <th className="px-4 py-3 text-left font-medium text-[#6B4F3B]">Shoulder (inches)</th>
                </tr>
              </thead>
              <tbody>
                {sizeData.map((row, index) => (
                  <tr key={index} className="border-b border-[#A7BFA3]/20">
                    <td className="px-4 py-3 font-medium">{row.size}</td>
                    <td className="px-4 py-3">{row.chest}</td>
                    <td className="px-4 py-3">{row.length}</td>
                    <td className="px-4 py-3">{row.shoulder}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-6 text-sm text-[#333333]/80">
            <h3 className="font-medium mb-2 text-[#6B4F3B]">How to Measure</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li><span className="font-medium">Chest:</span> Measure around the fullest part of your chest, keeping the measuring tape horizontal.</li>
              <li><span className="font-medium">Length:</span> Measure from the highest point of the shoulder to the bottom hem.</li>
              <li><span className="font-medium">Shoulder:</span> Measure from the edge of one shoulder to the edge of the other shoulder.</li>
            </ul>
            <p className="mt-3">Our model is 5'10" (178 cm) tall with a 38" chest and wears a size M.</p>
            <p className="mt-2 italic">Note: Allow for +/- 0.5" variation in measurements as each product is handcrafted.</p>
          </div>
          
          <div className="mt-6 flex justify-center">
            <button
              onClick={onClose}
              className="px-6 py-2 bg-[#D46A6A] text-white rounded-md hover:bg-[#C15A5A] transition-colors"
            >
              Got It
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SizeChart;