import * as React from "react"

export interface RadioGroupProps extends React.HTMLAttributes<HTMLDivElement> {}

export const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(
  ({ className, ...props }, ref) => {
    return <div ref={ref} className={`grid gap-2 ${className}`} {...props} />
  }
)
RadioGroup.displayName = "RadioGroup"

export interface RadioGroupItemProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const RadioGroupItem = React.forwardRef<HTMLInputElement, RadioGroupItemProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        type="radio"
        className={`peer h-4 w-4 rounded-full border border-primary text-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background ${className}`}
        ref={ref}
        {...props}
      />
    )
  }
)
RadioGroupItem.displayName = "RadioGroupItem"