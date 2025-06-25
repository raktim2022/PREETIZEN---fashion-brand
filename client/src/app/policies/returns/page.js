"use client";
import React from "react";
import { motion } from "framer-motion";
import PolicyHeader from "@/components/policies/common/PolicyHeader";
import ReturnSection from "@/components/policies/returns/ReturnSection";
import ReturnProcess from "@/components/policies/returns/ReturnProcess";
import EligibilityCard from "@/components/policies/returns/EligibilityCard";
import PolicyTimeline from "@/components/policies/returns/PolicyTimeline";
import ContactBanner from "@/components/policies/returns/ContactBanner";
import {
  processSteps,
  eligibilityItems,
  nonEligibleItems,
} from "@/data/returns-policy";
import PageTransition from "@/components/ui/PageTransition";

export default function ReturnsPolicy() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  return (
    <PageTransition>
      <>
        <PolicyHeader
          title="Returns & Exchange Policy"
          description="Our commitment to your satisfaction and shopping confidence"
        />
        <div className="bg-[#FFFBF7]">
          <motion.main
            className="container mx-auto py-12 px-4 md:px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="max-w-4xl mx-auto"
              variants={container}
              initial="hidden"
              animate="show"
            >
              {/* Policy Update Info */}
              <motion.div
                variants={item}
                className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 pb-6 border-b border-slate-200"
              >
                <div className="mb-4 md:mb-0">
                  <p className="text-sm text-slate-500">Last Updated</p>
                  <p className="font-medium text-[var(--heading)]">
                    March 5, 2025
                  </p>
                </div>
                <div className="px-4 py-2 bg-[var(--foreground)] rounded-full">
                  <span className="text-sm font-medium text-[var(--accent)]">
                    Official Policy Document
                  </span>
                </div>
              </motion.div>

              {/* Introduction */}
              <motion.div variants={item} className="mb-12">
                <ReturnSection title="Our Return Philosophy" icon="philosophy">
                  <p className="text-slate-600">
                    At Preetizen, we craft our pieces with care in limited
                    batches, encouraging thoughtful purchases. While we strive
                    for perfect products and service, we understand that
                    exceptions occur. This policy outlines our procedures for
                    exchanges, returns, and refunds.
                  </p>
                </ReturnSection>
              </motion.div>

              {/* Exchange Eligibility */}
              <motion.div variants={item} className="mb-12">
                <ReturnSection title="Exchange Eligibility" icon="eligibility">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                    <EligibilityCard
                      title="What We Accept"
                      items={eligibilityItems}
                      type="eligible"
                    />
                    <EligibilityCard
                      title="What We Cannot Accept"
                      items={nonEligibleItems}
                      type="ineligible"
                    />
                  </div>
                </ReturnSection>
              </motion.div>

              {/* Return Process */}
              <motion.div variants={item} className="mb-12">
                <ReturnSection title="Return Process" icon="process">
                  <div className="mt-6">
                    <ReturnProcess steps={processSteps} />
                  </div>
                </ReturnSection>
              </motion.div>

              {/* Refund Options */}
              <motion.div variants={item} className="mb-12">
                <ReturnSection title="Refund Options" icon="refund">
                  <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 bg-[var(--primary)]/20 bg-opacity-10 rounded-full flex items-center justify-center mr-4">
                          <svg
                            className="w-5 h-5 text-[var(--primary)]"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                            />
                          </svg>
                        </div>
                        <h3 className="font-medium text-lg">
                          Original Payment Method
                        </h3>
                      </div>
                      <p className="text-slate-600">
                        Full refund to your original payment method, processed
                        within 7–10 business days after our team inspects the
                        returned item.
                      </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 bg-[var(--accent)]/20 bg-opacity-10 rounded-full flex items-center justify-center mr-4">
                          <svg
                            className="w-5 h-5 text-[var(--accent)]"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                        <h3 className="font-medium text-lg">Store Credit</h3>
                      </div>
                      <p className="text-slate-600">
                        Opt for store credit that can be used on future
                        purchases. Store credit is issued promptly after
                        inspection and never expires.
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 bg-slate-50 p-6 rounded-lg">
                    <h4 className="font-medium text-slate-800 mb-3">
                      Additional Refund Information:
                    </h4>
                    <ul className="list-disc list-inside text-slate-600 space-y-2">
                      <li>
                        Prepaid payments will be refunded to the original
                        payment method
                      </li>
                      <li>
                        Cash-on-delivery (COD) refunds require secure sharing of
                        bank details
                      </li>
                      <li>Refunds do not include original shipping charges</li>
                    </ul>
                  </div>
                </ReturnSection>
              </motion.div>

              {/* Shipping Information */}
              <motion.div variants={item} className="mb-12">
                <ReturnSection title="Return Shipping" icon="shipping">
                  <div className="mt-6 bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                    <p className="text-slate-600 mb-4">
                      We currently don't offer a pickup service for returns.
                      Customers are responsible for shipping items back to us
                      at:
                    </p>
                    <div className="bg-slate-50 p-4 rounded-lg mb-6">
                      <p className="font-medium text-slate-700">
                        Preetizen Returns Department
                      </p>
                      <p className="text-slate-600">
                        123 Fashion Street, Design District
                      </p>
                      <p className="text-slate-600">
                        Mumbai, Maharashtra 400001
                      </p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-[var(--highlight)]/20 bg-opacity-10 rounded-full flex-shrink-0 flex items-center justify-center mr-4 mt-1">
                        <svg
                          className="w-5 h-5 text-[var(--highlight)]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <p className="text-slate-600">
                        <span className="font-medium text-slate-800">
                          Shipping Reimbursement:
                        </span>{" "}
                        Preetizen will reimburse up to ₹50 of your return
                        shipping cost once you provide a valid shipping receipt.
                        This will be added to your refund amount or store
                        credit.
                      </p>
                    </div>
                  </div>
                </ReturnSection>
              </motion.div>

              {/* Timeline */}
              <motion.div variants={item} className="mb-12">
                <ReturnSection title="Policy Timeline" icon="timeline">
                  <div className="mt-6">
                    <PolicyTimeline />
                  </div>
                </ReturnSection>
              </motion.div>
            </motion.div>
          </motion.main>

          {/* Contact Banner */}
        </div>
        <ContactBanner email="care@preetizen.com" />
      </>
    </PageTransition>
  );
}
