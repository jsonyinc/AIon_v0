"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button"; // Assuming Shadcn UI Button is in this path
// Removed unused import: ChevronRight
import {} from "lucide-react"; // Assuming lucide-react is used for icons

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="text-xl font-bold text-black flex items-center">
            Alon <span className="text-xs ml-1 text-gray-500">Inc.</span>
          </Link>
        </div>
        <nav className="hidden md:flex space-x-6">
          <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
            문제 인식
          </Link>
          <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
            솔루션
          </Link>
          <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
            제품
          </Link>
          <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
            회사 소개
          </Link>
          <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
            연락처
          </Link>
        </nav>
        <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full">상담 신청</Button>
      </div>
    </header>
  );
}
