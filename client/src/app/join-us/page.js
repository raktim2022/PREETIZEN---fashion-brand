"use client";

import { useState, useRef } from "react";
import PageSEO from "@/components/common/PageSEO";
import HeroSection from "@/components/join-us/HeroSection";
import InternshipRoles from "@/components/join-us/InternshipRoles";
import CollaborationsSection from "@/components/join-us/CollaborationsSection";
import ApplicationFormModal from "@/components/join-us/ApplicationFormModal";
import { internshipRoles } from "@/data/internshipRoles";
import PageTransition from "@/components/ui/PageTransition";

export default function JoinUsPage() {
  const [activeTab, setActiveTab] = useState("internships");
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null);

  const openApplicationForm = (role = null) => {
    setSelectedRole(role);
    setIsFormOpen(true);
  };

  return (
    <PageTransition>
      <main className="bg-[#FFFBF7]">
        <PageSEO
          title="Join the Preetizen Team | Career Opportunities & Internships"
          description="We're hiring! Explore internship opportunities at Preetizen in fashion design, graphic design, web development, and content creation. Apply now to be part of our creative team."
        />

        {/* Hero Section */}
        <HeroSection onApplyClick={openApplicationForm} />

        {/* Main Content Tabs */}
        <section className="py-16" id="internship-roles">
          <div className="container mx-auto px-4">
            {/* Tab Navigation */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex p-1 bg-[#F8F3E9] rounded-lg">
                <button
                  onClick={() => setActiveTab("internships")}
                  className={`px-5 py-2 rounded-md transition-colors ${
                    activeTab === "internships"
                      ? "bg-[#D46A6A] text-white"
                      : "text-[#6B4F3B] hover:bg-[#D46A6A]/10"
                  }`}
                >
                  Internships
                </button>
                <button
                  onClick={() => setActiveTab("collaborations")}
                  className={`px-5 py-2 rounded-md transition-colors ${
                    activeTab === "collaborations"
                      ? "bg-[#D46A6A] text-white"
                      : "text-[#6B4F3B] hover:bg-[#D46A6A]/10"
                  }`}
                >
                  Collaborations
                </button>
              </div>
            </div>

            {/* Tab Content */}
            {activeTab === "internships" ? (
              <InternshipRoles
                roles={internshipRoles}
                onApplyClick={openApplicationForm}
              />
            ) : (
              <CollaborationsSection />
            )}
          </div>
        </section>

        {/* Application Form Modal */}
        <ApplicationFormModal
          isOpen={isFormOpen}
          onClose={() => setIsFormOpen(false)}
          selectedRole={selectedRole}
          roles={internshipRoles}
        />
      </main>
    </PageTransition>
  );
}
