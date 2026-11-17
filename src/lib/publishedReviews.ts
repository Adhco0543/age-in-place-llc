export type PublishedReview = {
  name: string;
  rating: 1 | 2 | 3 | 4 | 5;
  review: string;
  service?: string;
};

// Add only genuine reviews with the customer's permission after verification.
export const publishedReviews: PublishedReview[] = [];
