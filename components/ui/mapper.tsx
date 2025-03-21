import type React from 'react'

interface MapperProps<T> {
  items: T[]
  render: (item: T, index: number) => React.ReactNode
}

export function Mapper<T>({ items, render }: MapperProps<T>) {
  return <>{items.map((item, index) => render(item, index))}</>
}
