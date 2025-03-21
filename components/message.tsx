interface MessageProps {
  message: Message
}

export function Message({ message }: MessageProps) {
  return (
    <span
      data-role={message.role}
      className="max-w-[80%] rounded-xl px-3 py-2 text-sm data-[role=assistant]:self-start data-[role=assistant]:bg-gray-100 data-[role=assistant]:text-black data-[role=user]:self-end data-[role=user]:bg-blue-500 data-[role=user]:text-white"
    >
      {message.content}
    </span>
  )
}
