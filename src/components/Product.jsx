import { StarRating } from "src/components/StarRating";
import { Button } from "src/components/ui/Button";
import ShinyBorderContainer from "src/components/ui/ShinyBorderContainer";

import { cn, getPriceLevel } from "@/lib/utils";

function ProductCard({ store, productName, description, price, ratings, imageSrc }) {
  return (
    <ShinyBorderContainer>
      <div className="flex items-center space-x-8">
        <div className="w-36 h-52">
          <img src={imageSrc} alt={productName} className="object-contain w-full h-full" />
        </div>

        <div className="flex flex-col">
          <h2 className="text-lg font-semibold uppercase"> {productName}</h2>
          <p className="mt-1 mb-3 text-base font-medium">{store}</p>
          {/* <p>{description}</p> */}
          <div className="flex items-center mt-4 space-x-2 text-xs">
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

export default function ProductGrid({ className, products }) {
  return (
    <div className={cn("grid grid-cols-3 gap-8 mt-8", className)}>
      {products.map((product, index) => (
        <ProductCard
          key={index}
          store={product.shop}
          productName={product.name}
          description={product.description || "Lactose Free Fat Free Ultra Filtered Milk, 52 fl oz"}
          price={product.price}
          ratings={product.ratings || 3}
          imageSrc={product.imageSrc || "/product.png"}
        />
      ))}
    </div>
  );
}
