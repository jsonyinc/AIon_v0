"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button"; // Assuming Shadcn UI Button is in this path
// Removed unused import: ChevronRight
import {} from "lucide-react"; // Assuming lucide-react is used for icons
import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="text-4xl font-bold text-black flex items-center">
            <Image
              src="/logo.png" // public 디렉토리 기준 경로 및 파일명
              alt="AIon Logo" // 로고에 대한 설명
              width={40} // 로고의 적절한 너비 (픽셀)
              height={40} // 로고의 적절한 높이 (픽셀)
              className="mr-2" // 로고와 텍스트 사이 간격 조절 (Tailwind CSS 클래스)
            />
            Alon
          </Link>
        </div>
        <nav className="hidden md:flex space-x-6">
          <Link href="#" className="text-lg font-extrabold text-gray-600 hover:text-gray-900">
            문제 인식
          </Link>
          <Link href="#" className="text-lg font-extrabold text-gray-600 hover:text-gray-900">
            솔루션
          </Link>
          <Link href="#" className="text-lg font-extrabold text-gray-600 hover:text-gray-900">
            제품
          </Link>
          <Link href="#" className="text-lg font-extrabold text-gray-600 hover:text-gray-900">
            회사 소개
          </Link>
          <Link href="#" className="text-lg font-extrabold text-gray-600 hover:text-gray-900">
            연락처
          </Link>
        </nav>
        <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full">상담 신청</Button>
      </div>
    </header>
  );
}
