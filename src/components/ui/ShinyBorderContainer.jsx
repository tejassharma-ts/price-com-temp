import { cn } from "src/lib/utils";

export default function ShinyBorderContainer({ className, containerClassName, ...props }) {
  return (
    <div className={cn("rounded-lg bg-gradient-to-b from-[#29C2C2] p-px", className)}>
      <div
        className={cn(
          "relative h-full rounded-[calc(0.5rem-1px)] bg-white p-2 shadow-[#29C2C2]",
          containerClassName,
        )}
        {...props}
      />
    </div>
  );
}
