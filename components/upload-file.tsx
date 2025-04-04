'use client'

import type React from 'react'

import { useState, useRef } from 'react'
import { Paperclip, X } from 'lucide-react'
import { Button } from './ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './ui/tooltip'

interface FileUploadProps {
  onFileSelect: (file: File | null) => void
}

export function FileUpload({ onFileSelect }: FileUploadProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const fileInputRef = useRef<HTMLInputElement | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    setSelectedFile(file)
    onFileSelect(file)
  }

  const handleButtonClick = () => {
    fileInputRef.current?.click()
  }

  const clearSelectedFile = (e: React.MouseEvent) => {
    e.stopPropagation()
    setSelectedFile(null)
    onFileSelect(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  return (
    <div>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
        accept="image/*,.pdf,.doc,.docx,.txt"
      />
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="relative h-8 w-8"
              onClick={handleButtonClick}
            >
              <Paperclip className="h-4 w-4" />
              {selectedFile && (
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-blue-500 text-[10px] text-white">
                  1
                </span>
              )}
              <span className="sr-only">Upload file</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent side="top">
            {selectedFile ? selectedFile.name : 'Upload file'}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      {selectedFile && (
        <div className="bg-muted absolute bottom-16 left-6 z-10 flex items-center gap-2 rounded-lg p-2 text-xs">
          <span className="max-w-[150px] truncate">{selectedFile.name}</span>
          <Button
            variant="ghost"
            size="icon"
            className="h-5 w-5"
            onClick={clearSelectedFile}
          >
            <X className="h-3 w-3" />
            <span className="sr-only">Remove file</span>
          </Button>
        </div>
      )}
    </div>
  )
}
