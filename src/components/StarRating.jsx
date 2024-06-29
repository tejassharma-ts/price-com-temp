import { Star as StarIcon } from "lucide-react";

export function StarRating({ ratings }) {
  const totalStars = 5;
  const filledStars = Math.round(ratings);

  return (
    <div className="flex space-x-1">
      {[...Array(totalStars)].map((_, index) => (
        <Star key={index} filled={index < filledStars} />
      ))}
    </div>
  );
}

function Star({ filled }) {
  return (
    <span>
      {filled ? (
        <StarIcon className="size-5 fill-[#FF8A00] stroke-none" />
      ) : (
        <StarIcon className="size-5 fill-[#DBDBDB] stroke-none" />
      )}
    </span>
  );
}
