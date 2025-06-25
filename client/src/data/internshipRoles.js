import { 
  MdOutlineDesignServices, 
  MdOutlinePhotoCamera, 
  MdOutlineCode, 
  MdOutlineVideoSettings,
  MdOutlineContentCopy
} from "react-icons/md";

export const internshipRoles = [
  {
    id: 1,
    title: "Fashion Designer",
    openings: 2,
    icon: <MdOutlineDesignServices className="text-[#D46A6A] text-3xl" />,
    description: "Design silhouettes that tell stories and connect with our audience. You'll work directly with our creative team to bring sustainable fashion concepts to life.",
    requirements: [
      "Fashion design student (3rd/4th year preferred)",
      "Proficiency in design software like Adobe Illustrator",
      "Understanding of sustainable fashion practices",
      "Strong sketching abilities and creative vision"
    ],
    location: "Hybrid (2 days in office, Kolkata)",
    duration: "3 months, full-time"
  },
  {
    id: 2,
    title: "Graphic Designer",
    openings: 2,
    icon: <MdOutlineDesignServices className="text-[#A7BFA3] text-3xl" />,
    description: "Turn blank canvases into visuals that speak to our audience. Create social media graphics, marketing materials, and product visualizations.",
    requirements: [
      "Graphic design student or recent graduate",
      "Proficiency in Adobe Photoshop, Illustrator and Figma",
      "Strong portfolio showcasing versatility",
      "Understanding of branding and visual identity"
    ],
    location: "Remote (weekly meetings)",
    duration: "3 months, full-time"
  },
  {
    id: 3,
    title: "Website Developer",
    openings: 1,
    icon: <MdOutlineCode className="text-[#6B4F3B] text-3xl" />,
    description: "Code the digital backbone of our brand presence. Work on our e-commerce platform and create seamless user experiences for our customers.",
    requirements: [
      "Experience with React, Next.js, and Tailwind CSS",
      "Understanding of e-commerce functionality",
      "Knowledge of responsive design principles",
      "Basic understanding of SEO best practices"
    ],
    location: "Remote",
    duration: "4 months, full-time"
  },
  {
    id: 4,
    title: "Video Editor",
    openings: 2,
    icon: <MdOutlineVideoSettings className="text-[#D46A6A] text-3xl" />,
    description: "Craft stories frame by frame for our marketing campaigns and social media content. Create compelling visual narratives that capture our brand essence.",
    requirements: [
      "Proficiency in Adobe Premiere Pro and After Effects",
      "Strong storytelling abilities through video",
      "Understanding of social media video formats",
      "Experience with color grading and audio editing"
    ],
    location: "Remote (occasional shoot days in Kolkata)",
    duration: "3 months, part-time or full-time"
  },
  {
    id: 5,
    title: "Content Creator Intern",
    openings: 2,
    icon: <MdOutlineContentCopy className="text-[#A7BFA3] text-3xl" />,
    description: "Develop unique content strategies and help us connect with our audience. Create compelling copy for social media, blogs, and marketing materials.",
    requirements: [
      "Strong writing and communication skills",
      "Understanding of social media platforms and trends",
      "Creative thinking and storytelling abilities",
      "Interest in sustainable fashion and lifestyle"
    ],
    location: "Hybrid (1 day in office, Kolkata)",
    duration: "3 months, part-time or full-time"
  },
  {
    id: 6,
    title: "Shoot Day Intern",
    openings: 4,
    icon: <MdOutlinePhotoCamera className="text-[#6B4F3B] text-3xl" />,
    description: "Support our photoshoots and content creation days. Gain hands-on experience in styling, photography, and production management.",
    requirements: [
      "Interest in fashion photography and styling",
      "Organized and detail-oriented",
      "Ability to work in fast-paced environments",
      "Basic understanding of photography lighting"
    ],
    location: "On-site (Kolkata)",
    duration: "Flexible, project-based"
  }
];