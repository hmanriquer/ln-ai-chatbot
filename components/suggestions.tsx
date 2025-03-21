'use client'

import { Button } from './ui/button'
import { Mapper } from './ui/mapper'

interface SuggestionsProps {
  onSelectSuggestion: (suggestion: string) => void
}

export function Suggestions({ onSelectSuggestion }: SuggestionsProps) {
  const suggestions = [
    'What is Lexis Nexis?',
    'What is Lexis+?',
    'How can i see my projects on Lexis+?',
    'How can i create a crate on Lexis+?',
  ]

  return (
    <section className="flex flex-col gap-3">
      <p className="text-muted-foreground text-center text-sm">
        Try asking about one of these topics:
      </p>
      <div className="flex flex-wrap justify-center gap-2">
        <Mapper
          items={suggestions}
          render={(suggestion, index) => (
            <Button
              key={index}
              variant="outline"
              size="sm"
              className="rounded-full"
              onClick={() => onSelectSuggestion(suggestion)}
            >
              {suggestion}
            </Button>
          )}
        />
      </div>
    </section>
  )
}
