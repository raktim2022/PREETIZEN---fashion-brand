export default function FaqSection() {
  return (
    <div className="mt-20">
      <h2 className="text-2xl font-serif text-center text-[#6B4F3B] mb-3">Frequently Asked Questions</h2>
      <div className="w-16 h-1 bg-[#D46A6A] mx-auto mb-10"></div>
      
      <div className="max-w-3xl mx-auto space-y-4">
        <div className="bg-white p-5 rounded-lg shadow-sm">
          <h3 className="text-[#6B4F3B] font-medium mb-2">What is the application process?</h3>
          <p className="text-[#6B4F3B]/70 text-sm">
            After you submit your application, we'll review it within 7 days. Shortlisted candidates will be invited for a video interview, followed by a small assignment relevant to the role.
          </p>
        </div>
        
        <div className="bg-white p-5 rounded-lg shadow-sm">
          <h3 className="text-[#6B4F3B] font-medium mb-2">Is there a stipend for interns?</h3>
          <p className="text-[#6B4F3B]/70 text-sm">
            Yes, all our internships come with a monthly stipend based on the role and time commitment. Details will be discussed during the interview process.
          </p>
        </div>
        
        <div className="bg-white p-5 rounded-lg shadow-sm">
          <h3 className="text-[#6B4F3B] font-medium mb-2">Can I apply for multiple roles?</h3>
          <p className="text-[#6B4F3B]/70 text-sm">
            Yes, you can apply for up to two roles that match your skills. Please submit separate applications and indicate your preference.
          </p>
        </div>
        
        <div className="bg-white p-5 rounded-lg shadow-sm">
          <h3 className="text-[#6B4F3B] font-medium mb-2">When do internships typically start?</h3>
          <p className="text-[#6B4F3B]/70 text-sm">
            Our next cohort begins on July 15, 2025, but we have some flexibility based on academic calendars. We have internship cycles starting quarterly.
          </p>
        </div>
      </div>
    </div>
  );
}