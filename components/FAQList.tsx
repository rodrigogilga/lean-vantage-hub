'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface FAQListProps {
  question: string
  answer: string
}

export default function FAQList({ question, answer }: FAQListProps) {
  const [open, setOpen] = useState(false)

  return (
    <div
      className="border rounded-xl overflow-hidden transition-all duration-300 shadow-[0_1px_6px_0_hsl(237_35%_26%/0.05)] hover:scale-[1.02] hover:shadow-[0_8px_20px_-4px_hsl(237_35%_26%/0.14)]"
      style={{ borderColor: 'hsl(228,14%,89%)' }}
    >
      <button
        className="w-full flex items-center justify-between gap-4 p-5 text-left transition-colors duration-150 hover:bg-[hsl(230,33%,97%)]"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span className="font-semibold text-sm md:text-base" style={{ color: 'hsl(237,35%,26%)' }}>
          {question}
        </span>
        <ChevronDown
          size={18}
          className="flex-shrink-0 transition-transform duration-300"
          style={{
            color: 'hsl(233,18%,42%)',
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        />
      </button>
      {open && (
        <div className="px-5 pb-5 text-sm leading-relaxed" style={{ color: 'hsl(233,18%,42%)' }}>
          {answer}
        </div>
      )}
    </div>
  )
}
