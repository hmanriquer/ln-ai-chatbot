'use client'

import type React from 'react'
import { useState } from 'react'
import { cn } from '@/lib/utils'
import { ArrowUp, Loader2 } from 'lucide-react'
import { Button } from './ui/button'
import { AutoResizeTextarea } from './ui/autoresize-textarea'
import { MessageList } from './message-list'
import { Header } from './header'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from './ui/tooltip'
import { ThemeToggle } from './theme-toggle'

export function ChatForm({
  className,
  ...props
}: React.ComponentProps<'form'>) {
  const [messages, setMessages] = useState<Message[]>([])
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setMessages((prev) => [...prev, { role: 'user', content: message }])
    setMessage('')

    // TODO: Send message to backend
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSubmit(e as unknown as React.FormEvent<HTMLFormElement>)
    }
  }

  const handleSuggestionClick = (suggestion: string) => {
    setMessage(suggestion)
  }

  return (
    <TooltipProvider>
      <main
        className={cn(
          'ring-none mx-auto flex h-svh max-h-svh w-full max-w-[35rem] flex-col items-stretch border-none',
          className
        )}
        {...props}
      >
        <div className="flex-1 content-center overflow-y-auto px-6">
          {messages.length ? (
            <MessageList messages={messages} />
          ) : (
            <Header onSelectSuggestion={handleSuggestionClick} />
          )}
        </div>
        <div className="mx-6 mb-6 flex items-center gap-2">
          <ThemeToggle />
          <form
            onSubmit={handleSubmit}
            className="border-input bg-background focus-within:ring-ring/10 relative flex flex-1 items-center rounded-[16px] border px-3 py-1.5 pr-8 text-sm focus-within:ring-2 focus-within:ring-offset-0 focus-within:outline-none"
          >
            <AutoResizeTextarea
              onKeyDown={handleKeyDown}
              value={message}
              onChange={setMessage}
              placeholder="Type a message..."
              className="placeholder:text-muted-foreground flex-1 bg-transparent focus:outline-none"
            />
            <Tooltip>
              <TooltipTrigger asChild>
                {loading ? (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute right-1 bottom-1 size-6 rounded-full"
                  >
                    <Loader2 className="size-4 animate-spin" />
                  </Button>
                ) : (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute right-1 bottom-1 size-6 rounded-full"
                  >
                    <ArrowUp size={16} />
                  </Button>
                )}
              </TooltipTrigger>
              <TooltipContent sideOffset={12}>Submit</TooltipContent>
            </Tooltip>
          </form>
        </div>
      </main>
    </TooltipProvider>
  )
}
