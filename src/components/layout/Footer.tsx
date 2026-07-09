'use client'

import { Github, Twitter, Linkedin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-dark-card/50 border-t border-gray-200 dark:border-dark-border mt-12">
      <div className="px-4 md:px-6 py-6 flex items-center justify-between">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          © 2024 Whale Loans. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white">
            <Github className="w-5 h-5" />
          </a>
          <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white">
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  )
}
