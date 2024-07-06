import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import { Icons } from "@/components/ui/Icons";
import ProductCard from "@/components/ProductCart";
import SectionHeading from "@/components/SectionHeading";
import { products } from "@/data";

function Card({ label, iconName }) {
  const Icon = Icons[iconName];
  return (
    <div className="flex flex-1 flex-col items-center space-y-4 rounded-lg border-2 border-[#29C2C2] px-20 py-10 shadow-md">
      <div className="flex size-24 justify-center">{Icon && <Icon />}</div>
      <h3 className="text-lg font-semibold">{label}</h3>
    </div>
  );
}

export default function HomePage() {
  const cards = ["Food", "Beverage", "Milk"];
  return (
    <Container>
      <Section>
        <SectionHeading title="category" subTitle="Browser by Category" />
        <div className="mt-8 flex justify-between gap-x-20">
          {cards.map((label, index) => (
            <Card key={index} label={label} iconName={label.toLowerCase()} />
          ))}
        </div>
      </Section>
      <Section>
        <SectionHeading title="Popular" subTitle="Products" />
        <div className="mt-8 grid grid-cols-3 justify-items-center gap-8">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              store={product.store}
              productName={product.productName}
              description={product.description}
              price={product.price}
              ratings={product.ratings}
              imageSrc={product.imageSrc}
            />
          ))}
        </div>
      </Section>
    </Container>
  );
}
