import { Mapper } from './ui/mapper'
import { Message } from './message'

interface MessageListProps {
  messages: Message[]
}

export function MessageList({ messages }: MessageListProps) {
  return (
    <div className="my-4 flex h-fit min-h-full flex-col gap-4">
      <Mapper
        items={messages}
        render={(message, index) => <Message key={index} message={message} />}
      />
    </div>
  )
}
