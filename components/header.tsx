import Image from 'next/image'
import { Suggestions } from './suggestions'

interface HeaderProps {
  onSelectSuggestion: (suggestion: string) => void
}

export function Header({ onSelectSuggestion }: HeaderProps) {
  return (
    <header className="m-auto flex max-w-96 flex-col gap-5 text-center">
      <Image
        src="/ln_logo.svg"
        alt="LN Logo"
        width={320}
        height={320}
        className="self-center"
      />
      <h1 className="text-2xl leading-none font-semibold tracking-tight">
        Hackathon | AI Chatbot
      </h1>
      <p className="text-muted-foreground">
        This is an AI chatbot app built with{' '}
        <span className="text-foreground"> Next.js </span>, the{' '}
        <span className="text-foreground"> Lexis Nexis Copilot AI </span>, and{' '}
        <span className="text-foreground"> Docker </span>
      </p>
      <p className="text-muted-foreground">
        Please, ask me anything about Lexis Nexis related topics.
      </p>
      <div className="bg-border h-px w-full" />
      <div className="mt-4">
        <Suggestions onSelectSuggestion={onSelectSuggestion} />
      </div>
    </header>
  )
}
