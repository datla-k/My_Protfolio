import * as React from "react"

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, ...props }, ref) => {
    return (
      <select
        className={`flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
        ref={ref}
        {...props}
      />
    )
  }
)
Select.displayName = "Select"

export const SelectTrigger = Select

export interface SelectContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export const SelectContent = React.forwardRef<HTMLDivElement, SelectContentProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md animate-in fade-in-80 ${className}`}
        {...props}
      />
    )
  }
)
SelectContent.displayName = "SelectContent"

export interface SelectItemProps extends React.HTMLAttributes<HTMLDivElement> {}

export const SelectItem = React.forwardRef<HTMLDivElement, SelectItemProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 ${className}`}
        {...props}
      />
    )
  }
)
SelectItem.displayName = "SelectItem"

export interface SelectValueProps extends React.HTMLAttributes<HTMLSpanElement> {}

export const SelectValue = React.forwardRef<HTMLSpanElement, SelectValueProps>(
  (props, ref) => {
    return <span ref={ref} {...props} />
  }
)
SelectValue.displayName = "SelectValue"