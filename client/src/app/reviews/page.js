"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import PageHeader from "@/components/ui/PageHeader";
import ReviewStats from "@/components/reviews/ReviewStats";
import ReviewGallery from "@/components/reviews/ReviewGallery";
import FeaturedReviews from "@/components/reviews/FeaturedReviews";
import TestimonialCarousel from "@/components/reviews/TestimonialCarousel";
import ReviewForm from "@/components/reviews/ReviewForm";
import FilterableReviewList from "@/components/reviews/FilterableReviewList";
import ReviewSchema from "@/components/reviews/ReviewSchema";
import PageTransition from "@/components/ui/PageTransition";

export default function ReviewsPage() {
  const formRef = useRef(null);
  const isFormInView = useInView(formRef, { once: true, amount: 0.3 });

  useEffect(() => {
    // Scroll to form if URL has #write-review
    if (window.location.hash === "#write-review") {
      formRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <PageTransition>
      <div className="bg-[#FFFBF7]">
        {/* SEO Schema */}
        <ReviewSchema />

        <PageHeader
          title="Customer Reviews"
          subtitle="Read what our community has to say about their Preetizen experience"
          imageSrc="/images/reviews-header.jpg"
        />

        {/* Overview Statistics */}
        {/* <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <ReviewStats />
        </div>
      </section> */}

        {/* Customer Photo Gallery */}
        <section className="py-12 bg-[#F8F3E9]">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-serif text-center text-[#6B4F3B] mb-8"
            >
              Our Community in Preetizen
            </motion.h2>
            <ReviewGallery />
          </div>
        </section>

        {/* Featured Reviews */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-serif text-center text-[#6B4F3B] mb-2"
            >
              Featured Stories
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center text-[#6B4F3B]/70 mb-12 max-w-2xl mx-auto"
            >
              Real stories from our customers about their experience with our
              sustainable fashion
            </motion.p>
            <FeaturedReviews />
          </div>
        </section>

        {/* Testimonial Carousel */}
        <section className="py-16 bg-[#A7BFA3]/10">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-serif text-center text-[#6B4F3B] mb-12"
            >
              What Our Customers Say
            </motion.h2>
            <TestimonialCarousel />
          </div>
        </section>

        {/* Filterable Review List */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-serif text-center text-[#6B4F3B] mb-2"
            >
              All Reviews
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center text-[#6B4F3B]/70 mb-12 max-w-2xl mx-auto"
            >
              Filter and sort through all customer reviews to find what
              interests you
            </motion.p>
            <FilterableReviewList />
          </div>
        </section>

        {/* Write a Review */}
        <section
          ref={formRef}
          className="py-16 md:py-20 bg-[#F8F3E9]"
          id="write-review"
        >
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isFormInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-2xl md:text-3xl font-serif text-center text-[#6B4F3B] mb-2"
            >
              Share Your Experience
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isFormInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center text-[#6B4F3B]/70 mb-12 max-w-2xl mx-auto"
            >
              Loved your Preetizen purchase? Let us and others know about your
              experience!
            </motion.p>
            <ReviewForm />
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
