"use client";
import React from "react";
import { motion } from "framer-motion";
import PolicyHeader from "@/components/policies/common/PolicyHeader";
import PolicySection from "@/components/policies/privacy/PolicySection";
import PolicyList from "@/components/policies/privacy/PolicyList";
import PolicySubsection from "@/components/policies/privacy/PolicySubsection";
import ContactInfo from "@/components/policies/privacy/ContactInfo";
import PageTransition from "@/components/ui/PageTransition";

// export const metadata = {
//   title: 'Privacy Policy | Preetizen',
//   description: 'Learn how Preetizen collects, uses, and protects your personal information.',
// };

export default function PrivacyPolicy() {
  // Lists for reusable content
  const personalInfoItems = [
    "Contact information (name, email address, phone number, shipping and billing address)",
    "Account information (username, password)",
    "Payment details (processed through secure payment processors)",
    "Order history and transaction details",
    "Communication preferences",
  ];

  const usageInfoItems = [
    "IP address and device information",
    "Browser type and version",
    "Pages visited and time spent on those pages",
    "Referral sources",
    "Operating system",
  ];

  const infoUsageItems = [
    "To process and fulfill your orders",
    "To provide customer support and respond to inquiries",
    "To send transactional emails (order confirmations, shipping updates)",
    "To send marketing communications (with your consent)",
    "To improve our website, products, and services",
    "To detect and prevent fraud",
    "To comply with legal obligations",
  ];

  const cookieUsageItems = [
    "Remember your preferences and settings",
    "Keep track of items in your shopping cart",
    "Understand how you navigate our website",
    "Improve the performance of our site",
  ];

  const userRightsItems = [
    "Access the personal information we hold about you",
    "Request correction of inaccurate personal information",
    "Request deletion of your personal information",
    "Object to processing of your personal information",
    "Request restriction of processing your personal information",
    "Request transfer of your personal information",
    "Opt out of marketing communications",
  ];

  const infoSharingItems = [
    "Service providers (payment processors, shipping companies, marketing partners)",
    "Business partners with your consent",
    "Legal authorities when required by law",
    "New owners in the event of a business transfer or merger",
  ];

  const dataRetentionItems = [
    "The amount, nature, and sensitivity of the personal information",
    "The potential risk of harm from unauthorized use or disclosure",
    "The purposes for which we process the information",
    "Legal requirements",
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <PageTransition>
      <>
        <PolicyHeader
          title="Privacy Policy"
          description="Learn how we collect, use, and protect your personal information"
        />
        <div className="bg-[#FFFBF7]">
          <motion.main
            className="container mx-auto py-16 px-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8 md:p-10"
              variants={container}
              initial="hidden"
              animate="show"
            >
              <div className="flex justify-between items-center mb-8 pb-4 border-b border-slate-100">
                <p className="text-slate-500 text-sm">
                  Last Updated: June 25, 2025
                </p>
                <div className="px-3 py-1 bg-slate-100 rounded-full text-xs text-slate-600">
                  Official Document
                </div>
              </div>

              <div className="space-y-12">
                <motion.div variants={item}>
                  <PolicySection title="Introduction" number="1">
                    <p>
                      At Preetizen Lifestyle ("Preetizen," "we," "us," or
                      "our"), we value your privacy and are committed to
                      protecting your personal information. This Privacy Policy
                      explains how we collect, use, disclose, and safeguard your
                      information when you visit our website (preetizen.com) or
                      make a purchase from our store.
                    </p>
                    <p>
                      By accessing or using our website, you consent to the
                      practices described in this Privacy Policy. If you do not
                      agree with the terms of this Privacy Policy, please do not
                      access the website.
                    </p>
                  </PolicySection>
                </motion.div>

                <motion.div variants={item}>
                  <PolicySection title="Information We Collect" number="2">
                    <p>We may collect the following types of information:</p>

                    <PolicySubsection title="Personal Information">
                      <PolicyList items={personalInfoItems} />
                    </PolicySubsection>

                    <PolicySubsection title="Usage Information">
                      <PolicyList items={usageInfoItems} />
                    </PolicySubsection>
                  </PolicySection>
                </motion.div>

                <motion.div variants={item}>
                  <PolicySection title="How We Use Your Information" number="3">
                    <p>
                      We may use the information we collect for the following
                      purposes:
                    </p>
                    <PolicyList items={infoUsageItems} />
                  </PolicySection>
                </motion.div>

                <motion.div variants={item}>
                  <PolicySection title="Security Measures" number="4">
                    <p>
                      We implement industry-standard security measures designed
                      to protect your personal information from unauthorized
                      access, disclosure, alteration, and destruction. However,
                      please be aware that no method of transmission over the
                      internet or electronic storage is 100% secure.
                    </p>
                    <p>
                      We encourage you to keep your account password
                      confidential and not share it with anyone. We will never
                      ask for your password in an unsolicited phone call or
                      email.
                    </p>
                  </PolicySection>
                </motion.div>

                <motion.div variants={item}>
                  <PolicySection
                    title="Cookies & Tracking Technologies"
                    number="5"
                  >
                    <p>
                      We use cookies and similar tracking technologies to
                      enhance your browsing experience, analyze site traffic,
                      and understand where our visitors are coming from.
                    </p>
                    <p>These technologies help us:</p>
                    <PolicyList items={cookieUsageItems} />
                    <p>
                      You can manage cookie preferences through your browser
                      settings. Please note that disabling certain cookies may
                      impact your experience on our website.
                    </p>
                  </PolicySection>
                </motion.div>

                <motion.div variants={item}>
                  <PolicySection title="Your Rights" number="6">
                    <p>You have the right to:</p>
                    <PolicyList items={userRightsItems} />
                    <p>
                      To exercise any of these rights, please contact us using
                      the information provided in the Contact section below.
                    </p>
                  </PolicySection>
                </motion.div>

                <motion.div variants={item}>
                  <PolicySection title="Third-Party Disclosure" number="7">
                    <p>We may share your information with:</p>
                    <PolicyList items={infoSharingItems} />
                    <p>
                      We do not sell your personal information to third parties.
                    </p>
                  </PolicySection>
                </motion.div>

                <motion.div variants={item}>
                  <PolicySection title="Data Retention" number="8">
                    <p>
                      We retain your personal information for as long as
                      necessary to fulfill the purposes outlined in this Privacy
                      Policy, unless a longer retention period is required or
                      permitted by law. When determining the retention period,
                      we consider:
                    </p>
                    <PolicyList items={dataRetentionItems} />
                  </PolicySection>
                </motion.div>

                <motion.div variants={item}>
                  <PolicySection title="Children's Privacy" number="9">
                    <p>
                      Our website is not intended for children under the age of
                      13. We do not knowingly collect personal information from
                      children under 13. If you are a parent or guardian and
                      believe that your child has provided us with personal
                      information, please contact us immediately.
                    </p>
                  </PolicySection>
                </motion.div>

                <motion.div variants={item}>
                  <PolicySection
                    title="Changes to this Privacy Policy"
                    number="10"
                  >
                    <p>
                      We may update this Privacy Policy from time to time to
                      reflect changes in our practices or for legal,
                      operational, or regulatory reasons. The updated version
                      will be indicated by an updated "Last Updated" date at the
                      top of this policy.
                    </p>
                    <p>
                      We encourage you to review this Privacy Policy
                      periodically to stay informed about how we protect your
                      information. Your continued use of our website following
                      the posting of changes constitutes your acceptance of such
                      changes.
                    </p>
                  </PolicySection>
                </motion.div>

                <motion.div variants={item}>
                  <PolicySection title="Brand Authenticity" number="11">
                    <p>
                      Preetizen Lifestyle is our official brand name. Our
                      official website is preetizen.com, and our official
                      Instagram handle is @preetizen. Be cautious of imitations
                      or websites with similar names that are not affiliated
                      with us.
                    </p>
                  </PolicySection>
                </motion.div>

                <motion.div variants={item}>
                  <PolicySection title="Contact Us" number="12">
                    <p>
                      If you have any questions or concerns about this Privacy
                      Policy or our data practices, please contact us:
                    </p>
                    <div className="mt-6 bg-slate-50 p-6 rounded-lg border border-slate-100">
                      <ContactInfo
                        title="For privacy-related inquiries:"
                        email="privacy@preetizen.in"
                      />
                      <ContactInfo
                        title="For customer support:"
                        email="support@preetizen.in"
                      />
                    </div>
                  </PolicySection>
                </motion.div>
              </div>

              <motion.div
                className="mt-16 pt-8 border-t border-slate-100 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                <p className="text-slate-500 text-sm">
                  © {new Date().getFullYear()} Preetizen Lifestyle. All rights
                  reserved.
                </p>
              </motion.div>
            </motion.div>
          </motion.main>
        </div>
      </>
    </PageTransition>
  );
}
