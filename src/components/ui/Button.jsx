import * as React from "react";
import { cva } from "class-variance-authority";

import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "relative flex items-center justify-center whitespace-nowrap rounded-md text-base ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 transition-colors duration-300 overflow-hidden hover:shadow-lg transition-shadow duration-300",
  {
    variants: {
      variant: {
        default:
          "font-semibold bg-primary text-primary-text hover:bg-primary-light after:top-0 after:left-[150%] after:w-[200%] after:h-full after:-skew-x-20 after:bg-glimmer after:hover:animate-glimmer after:z-10 after:absolute uppercase tracking-wider",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border-2 border-background-faint-active bg-transparent hover:bg-background-faint-inactive active:bg-background-faint-active font-normal text-sm",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
        icon: "h-10 w-10",
      },
      priceLevel: {
        low: "bg-green-500 text-white hover:shadow-green-200",
        medium: "bg-yellow-500 text-white hover:shadow-yellow-200",
        high: "bg-red-500 text-white hover:shadow-red-200",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

const Button = React.forwardRef(({ className, variant, size, priceLevel, ...props }, ref) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className, priceLevel }))}
      ref={ref}
      {...props}
    />
  );
});
Button.displayName = "Button";

export { Button, buttonVariants };
