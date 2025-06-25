"use client";

const ReviewSchema = () => {
  // Sample aggregated review data
  // In a real application, this would be fetched from your backend
  const reviewData = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "Preetizen Sustainable Fashion",
    "description": "Sustainable and ethically-made fashion products from Preetizen",
    "brand": {
      "@type": "Brand",
      "name": "Preetizen"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "124",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Anusha Patel"
        },
        "datePublished": "2025-05-15",
        "reviewBody": "I absolutely love the quality and sustainability of my Preetizen tees. They're comfortable, stylish, and I feel good knowing they're ethically made.",
        "name": "Sustainable fashion that actually looks good!",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5",
          "worstRating": "1"
        }
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Rahul Sharma"
        },
        "datePublished": "2025-04-22",
        "reviewBody": "The Bengali slogan tees are not only stylish but also a great conversation starter. I've received so many compliments!",
        "name": "Cultural and stylish",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5",
          "worstRating": "1"
        }
      }
    ],
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": "29.99",
      "highPrice": "79.99",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <script 
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewData) }}
    />
  );
};

export default ReviewSchema;