"use client";
import React from "react";
import { motion } from "framer-motion";
import PolicyHeader from "@/components/policies/common/PolicyHeader";
import TermsSection from "@/components/policies/terms/TermsSection";
import Signature from "@/components/policies/terms/Signature";
import ContactInfo from "@/components/policies/terms/ContactInfo";
import PageTransition from "@/components/ui/PageTransition";

export default function TermsAndConditions() {
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
          title="Terms & Conditions"
          description="Please read these terms carefully before using our services"
        />
        <div className="bg-[#FFFBF7]">
          {/* Main Content */}
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
                  <p className="text-sm text-slate-500">Effective Date</p>
                  <p className="font-medium text-[var(--heading)]">
                    March 5, 2025
                  </p>
                </div>
                <div className="px-4 py-2 bg-[var(--accent)]/10 bg-opacity-10 rounded-full">
                  <span className="text-sm font-medium text-[var(--accent)]">
                    Legal Document
                  </span>
                </div>
              </motion.div>

              {/* Introduction */}
              <motion.div variants={item} className="mb-8">
                <p className="text-slate-600">
                  Welcome to Preetizen. By accessing or using our website, you
                  agree to be bound by these Terms and Conditions. Please read
                  them carefully before using our services.
                </p>
              </motion.div>

              {/* Agreement & Scope */}
              <motion.div variants={item}>
                <TermsSection number="1" title="Basic Agreement & Scope">
                  <p>
                    By accessing or purchasing from preetizen.com, you
                    acknowledge that you have read, understood, and agree to be
                    bound by these Terms & Conditions. These terms govern your
                    use of our website and the purchase of products offered by
                    Preetizen Lifestyle.
                  </p>
                  <p className="mt-4">
                    All prices displayed on our website include applicable taxes
                    unless otherwise specified.
                  </p>
                </TermsSection>
              </motion.div>

              {/* Product & Purchase Terms */}
              <motion.div variants={item}>
                <TermsSection number="2" title="Product & Purchase Terms">
                  <p>
                    Product images on our website are for illustrative purposes
                    only. Actual colors may vary due to differences in screen
                    settings, lighting conditions, and the natural properties of
                    materials used.
                  </p>
                  <p className="mt-4">
                    Orders are considered confirmed only after full payment is
                    received. We reserve the right to cancel any order at our
                    discretion before shipping.
                  </p>
                  <div className="bg-slate-100 p-4 rounded-md mt-4">
                    <h4 className="font-medium text-slate-800 mb-2">
                      Product Quality Commitment
                    </h4>
                    <p className="text-slate-600 text-sm">
                      Our products are made with care, and we hope you feel that
                      in every thread. While we strive for perfection,
                      handcrafted items may have slight variations that make
                      each piece unique.
                    </p>
                  </div>
                </TermsSection>
              </motion.div>

              {/* Pricing & Availability */}
              <motion.div variants={item}>
                <TermsSection number="3" title="Pricing & Availability">
                  <p>
                    Preetizen reserves the right to change pricing or product
                    availability without prior notice. In case a product is
                    listed at an incorrect price due to a typographical error,
                    we have the right to refuse or cancel orders placed for that
                    product.
                  </p>
                  <p className="mt-4">
                    We make every effort to maintain accurate inventory, but
                    occasionally items may be out of stock. In such cases, we
                    will notify you promptly and offer alternatives, store
                    credit, or a refund.
                  </p>
                </TermsSection>
              </motion.div>

              {/* Account Responsibility */}
              <motion.div variants={item}>
                <TermsSection number="4" title="Account Responsibility">
                  <p>
                    If you create an account on our website, you are responsible
                    for maintaining the confidentiality of your account details,
                    including your username and password. You agree to accept
                    responsibility for all activities that occur under your
                    account.
                  </p>
                  <div className="bg-[var(--primary)]/10 bg-opacity-5 p-4 rounded-md mt-4">
                    <h4 className="font-medium text-slate-800 mb-2">
                      Security Recommendation
                    </h4>
                    <ul className="list-disc list-inside text-slate-600 text-sm space-y-1">
                      <li>
                        Use a strong, unique password for your Preetizen account
                      </li>
                      <li>Never share your login credentials with others</li>
                      <li>
                        Log out from your account when using shared devices
                      </li>
                      <li>
                        Contact us immediately if you suspect unauthorized
                        access to your account
                      </li>
                    </ul>
                  </div>
                </TermsSection>
              </motion.div>

              {/* Intellectual Property */}
              <motion.div variants={item}>
                <TermsSection number="5" title="Intellectual Property">
                  <p>
                    All content on our website, including but not limited to
                    text, graphics, logos, images, audio clips, digital
                    downloads, and data compilations, is the property of
                    Preetizen Lifestyle or its content suppliers and is
                    protected by international copyright laws.
                  </p>
                  <p className="mt-4">
                    The Preetizen name, logo, and all related names, logos,
                    product and service names, designs, and slogans are
                    trademarks of Preetizen Lifestyle. You may not use these
                    marks without our prior written permission.
                  </p>
                </TermsSection>
              </motion.div>

              {/* Legal Entity & Financial Accountability */}
              <motion.div variants={item}>
                <TermsSection
                  number="6"
                  title="Legal Entity & Financial Accountability"
                >
                  <p>
                    Preetizen.com and all associated transactions are legally
                    operated by Preetizen Lifestyle, a registered partnership in
                    India. Navin Mundra is identified as the authorized
                    representative for receiving payments.
                  </p>
                  <p className="mt-4">
                    All financial transactions are processed through secure
                    payment gateways. We do not store your complete payment
                    information on our servers.
                  </p>
                </TermsSection>
              </motion.div>

              {/* Limitation of Liability */}
              <motion.div variants={item}>
                <TermsSection number="7" title="Limitation of Liability">
                  <p>
                    To the fullest extent permitted by applicable law, Preetizen
                    Lifestyle shall not be liable for any indirect, incidental,
                    special, consequential, or punitive damages, including lost
                    profits, arising out of or in any way connected with your
                    use of our website or products.
                  </p>
                </TermsSection>
              </motion.div>

              {/* Governing Law */}
              <motion.div variants={item}>
                <TermsSection number="8" title="Governing Law">
                  <p>
                    These Terms and Conditions shall be governed by and
                    construed in accordance with the laws of India. Any disputes
                    relating to these terms shall be subject to the exclusive
                    jurisdiction of the courts of Mumbai, Maharashtra.
                  </p>
                </TermsSection>
              </motion.div>

              {/* Changes to Terms */}
              <motion.div variants={item}>
                <TermsSection number="9" title="Changes to Terms">
                  <p>
                    We reserve the right to modify these Terms and Conditions at
                    any time. Changes will be effective immediately upon posting
                    on our website. Your continued use of the website after any
                    such changes constitutes your acceptance of the new Terms
                    and Conditions.
                  </p>
                </TermsSection>
              </motion.div>

              {/* Contact Information */}
              <motion.div variants={item}>
                <TermsSection number="10" title="Contact Information">
                  <p>
                    If you have any questions or concerns regarding these Terms
                    and Conditions, please contact our support team at:
                  </p>
                  <ContactInfo
                    email="care@preetizen.com"
                    subject="Terms and Conditions Inquiry"
                  />
                </TermsSection>
              </motion.div>

              {/* Signature/Company Info */}
              <motion.div variants={item} className="mt-16">
                <Signature
                  companyName="Preetizen Lifestyle"
                  representative="Navin Mundra"
                  designation="Authorized Representative"
                />
              </motion.div>
            </motion.div>
          </motion.main>
        </div>
      </>
    </PageTransition>
  );
}
