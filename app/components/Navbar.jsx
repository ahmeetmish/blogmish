'use client'

import Link from "next/link"

import { Github } from "lucide-react"

import { ThemeToggle } from "./ThemeToggle"

export default function Navbar() {
  return (
    <div className="pt-4">
      <nav className="flex items-center justify-between">
        <h2 className="text-3xl font-bold">Blog<span className="text-primary">mish</span></h2>
        <div className="gap-3 flex items-center">
          <Link href='/' className="flex items-center justify-center w-10 h-10 border-[1px] rounded-md hover:bg-gray-100 transition-all"><Github size={18} /></Link>
          <ThemeToggle />
        </div>
      </nav>
    </div>
  )
}