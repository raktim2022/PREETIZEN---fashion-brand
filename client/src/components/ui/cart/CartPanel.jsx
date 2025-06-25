"use client";

import React, { useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiShoppingBag, FiX, FiTrash2, FiMinus, FiPlus, FiChevronRight } from 'react-icons/fi';
import Link from 'next/link';

// Sample cart items for demonstration
const sampleCartItems = [
  {
    id: 1,
    name: "Wildflower Midi Dress",
    price: 89.00,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&w=200&fit=crop&q=60",
    color: "Sage",
    size: "Medium"
  },
  {
    id: 2,
    name: "Organic Cotton Blouse",
    price: 65.00,
    quantity: 2,
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&w=200&fit=crop&q=60",
    color: "White",
    size: "Small"
  }
];

const CartPanel = ({ isOpen, onClose }) => {
  const [cart, setCart] = React.useState(sampleCartItems);
  const cartPanelRef = useRef(null);
  
  // Calculate cart totals
  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2);
  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  
  // Cart item handlers
  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    
    setCart(cart.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };
  
  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };
  
  // Close cart panel when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        cartPanelRef.current &&
        !cartPanelRef.current.contains(event.target) &&
        !event.target.closest('button[aria-label="Cart"]')
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose]);

  // Body scroll lock when cart is open
  useEffect(() => {
    if (isOpen) {
      // Save current scroll position before locking
      const scrollY = window.scrollY;
      
      // Apply fixed positioning to body
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
      
      // Restore scroll position when panel closes
      return () => {
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflow = '';
        window.scrollTo(0, scrollY);
      };
    }
    
    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            onClick={onClose}
            style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
          />
          
          {/* Cart Panel */}
          <motion.div
            ref={cartPanelRef}
            initial={{ opacity: 1, x: "100%" }}
            animate={{ opacity: 1, x: "0%" }}
            exit={{ opacity: 1, x: "100%" }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 right-0 h-full bg-white shadow-xl z-50 w-full max-w-md flex flex-col"
            style={{ position: 'fixed', top: 0, right: 0, bottom: 0 }}
          >
            {/* Cart Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
              <div className="flex items-center">
                <FiShoppingBag className="text-[#6B4F3B] mr-3" size={20} />
                <h2 className="text-lg font-serif text-[#6B4F3B]">Your Cart ({cartItemCount})</h2>
              </div>
              <motion.button
                onClick={onClose}
                className="text-[#333333] hover:text-[#D46A6A] transition-colors p-1"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiX size={20} />
              </motion.button>
            </div>
            
            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto py-4 px-6">
              {cart.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <div className="w-16 h-16 rounded-full bg-[#F8F3E9] flex items-center justify-center mb-4">
                    <FiShoppingBag className="text-[#A7BFA3]" size={24} />
                  </div>
                  <h3 className="text-lg font-serif text-[#6B4F3B] mb-2">Your cart is empty</h3>
                  <p className="text-sm text-[#333333]/70 mb-6">Start adding items to your cart to see them here.</p>
                  <button 
                    onClick={onClose}
                    className="px-5 py-2.5 bg-[#D46A6A] hover:bg-[#C15A5A] text-white rounded-md transition-colors"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <ul className="divide-y divide-gray-200">
                  {cart.map((item, index) => (
                    <motion.li 
                      key={item.id}
                      className="py-6 first:pt-0 last:pb-0"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                    >
                      <div className="flex space-x-4">
                        <div className="flex-shrink-0 w-24 h-24 overflow-hidden rounded-md border border-gray-200">
                          <img 
                            src={item.image} 
                            alt={item.name} 
                            className="h-full w-full object-cover"
                          />
                        </div>
                        
                        <div className="flex-1 flex flex-col">
                          <div className="flex justify-between text-base font-medium text-[#6B4F3B]">
                            <h3 className="pr-4">{item.name}</h3>
                            <p className="ml-4">${(item.price * item.quantity).toFixed(2)}</p>
                          </div>
                          
                          <div className="flex items-center mt-1">
                            <p className="text-sm text-[#333333]/70 mr-4">
                              <span className="text-[#A7BFA3]">{item.color}</span> / {item.size}
                            </p>
                            <p className="text-sm text-[#333333]/70">${item.price.toFixed(2)} each</p>
                          </div>
                          
                          <div className="flex items-center justify-between mt-4">
                            <div className="flex items-center border rounded-md">
                              <button 
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="p-1.5 text-[#333333] hover:text-[#D46A6A]"
                                disabled={item.quantity <= 1}
                              >
                                <FiMinus size={14} />
                              </button>
                              <span className="px-2 text-sm font-medium text-[#333333]">
                                {item.quantity}
                              </span>
                              <button 
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="p-1.5 text-[#333333] hover:text-[#D46A6A]"
                              >
                                <FiPlus size={14} />
                              </button>
                            </div>
                            
                            <motion.button
                              onClick={() => removeItem(item.id)}
                              className="text-[#333333]/70 hover:text-[#D46A6A] transition-colors"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <FiTrash2 size={16} />
                            </motion.button>
                          </div>
                        </div>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              )}
            </div>
            
            {/* Cart Footer */}
            {cart.length > 0 && (
              <div className="border-t border-gray-200 p-6 space-y-4">
                <div className="flex justify-between text-[#6B4F3B] font-medium">
                  <p>Subtotal</p>
                  <p>${cartTotal}</p>
                </div>
                <p className="text-xs text-[#333333]/70">Shipping and taxes calculated at checkout</p>
                
                <motion.div className="space-y-3">
                  <Link
                    href="/checkout"
                    className="flex items-center justify-center w-full px-5 py-2.5 bg-[#D46A6A] hover:bg-[#C15A5A] text-white rounded-md transition-colors"
                  >
                    <span>Proceed to Checkout</span>
                    <FiChevronRight className="ml-2" size={16} />
                  </Link>
                  
                  <button 
                    onClick={onClose}
                    className="text-[#333333] hover:text-[#D46A6A] transition-colors text-sm font-medium w-full text-center"
                  >
                    Continue Shopping
                  </button>
                </motion.div>
                
                {/* Free shipping progress */}
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <p className="text-sm text-[#333333]/80 mb-2">
                    {parseFloat(cartTotal) >= 150 
                      ? "Your order qualifies for free shipping!" 
                      : `Add $${(150 - parseFloat(cartTotal)).toFixed(2)} more for free shipping`
                    }
                  </p>
                  <div className="w-full bg-[#F8F3E9] rounded-full h-2.5">
                    <motion.div 
                      className="bg-[#A7BFA3] h-2.5 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ 
                        width: `${Math.min(100, (parseFloat(cartTotal) / 150) * 100)}%` 
                      }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    />
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartPanel;