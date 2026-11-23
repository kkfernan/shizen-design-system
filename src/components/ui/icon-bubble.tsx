import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const iconBubbleVariants = cva(
  "inline-flex shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground [&>svg]:pointer-events-none [&>svg]:shrink-0",
  {
    variants: {
      size: {
        xs: "size-6 [&>svg]:size-4",
        sm: "size-7 [&>svg]:size-4",
        md: "size-9 [&>svg]:size-5",
        lg: "size-10 [&>svg]:size-5",
      },
    },
    defaultVariants: {
      size: "lg",
    },
  }
)

function IconBubble({
  className,
  size = "lg",
  ...props
}: React.ComponentProps<"span"> & VariantProps<typeof iconBubbleVariants>) {
  return (
    <span
      data-slot="icon-bubble"
      data-size={size}
      className={cn(iconBubbleVariants({ size }), className)}
      {...props}
    />
  )
}

export { IconBubble, iconBubbleVariants }
