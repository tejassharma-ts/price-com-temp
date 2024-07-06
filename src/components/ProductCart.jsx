import { StarRating } from "src/components/StarRating";
import { Button } from "src/components/ui/Button";
import ShinyBorderContainer from "src/components/ui/ShinyBorderContainer";

import { getPriceLevel } from "@/lib/utils";

export default function ProductCard({ store, productName, description, price, ratings, imageSrc }) {
  return (
    <ShinyBorderContainer>
      <div className="flex items-center space-x-8">
        <div className="h-52 w-36">
          <img src={imageSrc} alt={productName} className="h-full w-full" />
        </div>

        <div className="flex flex-col">
          <h2 className="text-lg font-semibold uppercase">{store}</h2>
          <p className="mb-3 mt-1 text-base font-medium">{productName}</p>
          <p>{description}</p>
          <div className="mt-4 flex items-center space-x-2 text-xs">
            <StarRating ratings={ratings} />
            <span className="font-semibold">({ratings})</span>
          </div>
        </div>
      </div>

      <Button className="w-full" priceLevel={getPriceLevel(price)}>
        ${price.toFixed(2)}
      </Button>
    </ShinyBorderContainer>
  );
}
