import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import { Icons } from "@/components/ui/Icons";
import ProductCard from "@/components/ProductCart";
import SectionHeading from "@/components/SectionHeading";
import { Input } from "@/components/ui/input";
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


  function onSubmitHandler(event) {
    event.preventDefault();
    // make api call here
    console.log("Here");
  }

  return (
    <main>
      <div className="min-h-screen">
        <section className="flex h-screen flex-col items-center p-2">
          <div className="relative h-full w-full overflow-hidden rounded-lg bg-[#018080]/50">
            <Container className="grid grid-cols-2 pt-40 text-neutral-950">
              <div>
                <h1 className="mb-4 text-8xl font-black leading-[1.1]">
                  What are you <br /> looking for?
                </h1>
                <p className="text-base">Compare thousands of Milk and Food products</p>
                <form onSubmit={onSubmitHandler}>
                  <div className="mt-4 flex max-w-sm items-center space-x-2 overflow-hidden rounded-lg bg-[#018080] pr-2">
                    <Input
                      placeholder="Search products..."
                      className="rounded-none rounded-br-full rounded-tr-full"
                    />
                    <button type="submit" onClick={onSubmitHandler}>
                      <Icons.search className="size-7 stroke-white" />
                    </button>
                  </div>
                </form>
              </div>
            </Container>
          </div>
        </section>
      </div>
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
    </main>
  );
}
