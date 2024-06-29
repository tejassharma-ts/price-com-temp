import { cva } from "class-variance-authority";
import { cn } from "src/lib/utils";

const containerVariants = cva("mx-auto px-2", {
  variants: {
    size: {
      default: "max-w-[1300px]",
      full: "max-w-full",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

export default function Container({ className, size, ...props }) {
  return <div className={cn(containerVariants({ size, className }))} {...props} />;
}
