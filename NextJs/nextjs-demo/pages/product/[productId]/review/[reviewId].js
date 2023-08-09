import { useRouter } from "next/router";

const ReviewId = () => {
  const { productId, reviewId } = useRouter().query;
  return (
    <div>
      product {productId} and Review {reviewId}
    </div>
  );
};

export default ReviewId;
