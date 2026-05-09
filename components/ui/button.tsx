import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center whitespace-nowrap transition-all outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 btn-press btn-focus",
  {
    variants: {
      variant: {
        default: "rounded-[var(--radius-sm-token)] bg-primary text-primary-foreground",
        outline:
          "rounded-[var(--radius-sm-token)] border border-[var(--hairline)] bg-[var(--canvas)] text-[var(--ink)] hover:bg-[var(--canvas-parchment)]",
        secondary:
          "rounded-[var(--radius-sm-token)] bg-[var(--surface-pearl)] text-[var(--ink)] hover:bg-[var(--canvas-parchment)]",
        ghost:
          "rounded-[var(--radius-sm-token)] text-[var(--ink-muted-80)] hover:bg-[var(--canvas-parchment)] hover:text-[var(--ink)]",
        destructive:
          "rounded-[var(--radius-sm-token)] bg-destructive/10 text-destructive hover:bg-destructive/20",
        link: "text-link underline-offset-4 hover:underline",
        primary:
          "rounded-[var(--radius-pill-token)] bg-[var(--primary-action)] px-[22px] py-[11px] t-body text-white",
        secondaryPill:
          "rounded-[var(--radius-pill-token)] border border-[var(--primary-action)] bg-transparent px-[22px] py-[11px] t-body text-[var(--primary-action)]",
        darkUtility:
          "rounded-[var(--radius-sm-token)] bg-[var(--ink)] px-[15px] py-2 t-button-utility text-[var(--on-dark)]",
      },
      size: {
        default: "h-9 gap-1.5 px-3",
        xs: "h-6 gap-1 px-2 text-xs",
        sm: "h-8 gap-1 px-2.5",
        lg: "h-10 gap-1.5 px-4",
        icon: "size-9",
        "icon-xs": "size-6",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
        navPill: "h-auto gap-1.5",
      },
    },
    compoundVariants: [
      { variant: "primary", size: "default", className: "h-auto px-[22px] py-[11px]" },
      { variant: "secondaryPill", size: "default", className: "h-auto px-[22px] py-[11px]" },
      { variant: "darkUtility", size: "default", className: "h-auto px-[15px] py-2" },
    ],
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot.Root : "button";

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
