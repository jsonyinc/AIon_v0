"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* 로고, 데스크톱 메뉴, 데스크톱 상담 버튼 등은 이전과 동일하게 유지 */}
        <div className="flex items-center">
          <Link href="/" className="text-2xl md:text-3xl font-bold text-black flex items-center">
            <Image
              src="/logo.png"
              alt="Alon Logo"
              width={32}
              height={32}
              className="mr-2"
            />
            Alon
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <Link href="#" className="text-base font-medium text-gray-600 hover:text-gray-900 transition-colors">문제 인식</Link>
          <Link href="#" className="text-base font-medium text-gray-600 hover:text-gray-900 transition-colors">솔루션</Link>
          <Link href="#" className="text-base font-medium text-gray-600 hover:text-gray-900 transition-colors">제품</Link>
          <Link href="#" className="text-base font-medium text-gray-600 hover:text-gray-900 transition-colors">회사 소개</Link>
          <Link href="#" className="text-base font-medium text-gray-600 hover:text-gray-900 transition-colors">연락처</Link>
        </nav>

        <div className="flex items-center">
          <div className="hidden md:flex ml-4">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6 py-2 text-sm">상담 신청</Button>
          </div>
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded-md"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* 모바일 메뉴 오버레이 - 배경 어둡게 */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-[55]" // 단순한 반투명 검은 배경
          onClick={toggleMobileMenu}
        ></div>
      )}

      {/* 모바일 메뉴 패널 - 배경색과 너비에 집중 */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full z-[60]
                    bg-white dark:bg-slate-800  // ! 명확한 배경색 지정 (tailwind 기본 색상)
                    w-[300px]                   // ! 고정 너비로 테스트 (예: 300px)
                    shadow-xl
                    transform transition-transform duration-300 ease-in-out
                    ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="p-5 pt-6 flex flex-col h-full">
          <div className="flex justify-between items-center mb-8">
            <Link href="/" className="text-2xl font-bold text-gray-800 dark:text-gray-100 flex items-center" onClick={toggleMobileMenu}>
              <Image src="/logo.png" alt="Alon Logo" width={30} height={30} className="mr-2"/>
              Alon
            </Link>
            <Button variant="ghost" size="icon" onClick={toggleMobileMenu} className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md p-1">
              <X className="h-6 w-6" />
            </Button>
          </div>

          <nav className="flex flex-col space-y-1.5 flex-grow">
            {[
              { href: "#", label: "문제 인식" }, { href: "#", label: "솔루션" },
              { href: "#", label: "제품" }, { href: "#", label: "회사 소개" },
              { href: "#", label: "연락처" },
            ].map((item) => (
              <Link key={item.label} href={item.href}
                className="text-gray-700 dark:text-gray-200 hover:text-orange-600 dark:hover:text-orange-400 hover:bg-gray-100 dark:hover:bg-gray-700/60 px-4 py-3 rounded-lg text-base font-medium transition-colors duration-150"
                onClick={toggleMobileMenu}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-auto pt-6 border-t border-gray-200 dark:border-gray-700">
            <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-full py-3 text-base font-semibold">
              상담 신청
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}


// "use client";

// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import { Menu, X } from "lucide-react";
// import Image from "next/image";
// import { useState, useEffect } from "react";

// export default function Header() {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   useEffect(() => {
//     if (isMobileMenuOpen) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'unset';
//     }
//     return () => {
//       document.body.style.overflow = 'unset';
//     };
//   }, [isMobileMenuOpen]);

//   return (
//     <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100 shadow-sm">
//       <div className="container mx-auto px-4 py-4 flex justify-between items-center">
//         {/* 로고, 데스크톱 메뉴, 데스크톱 상담 버튼 등은 이전과 동일하게 유지 */}
//         <div className="flex items-center">
//           <Link href="/" className="text-2xl md:text-3xl font-bold text-black flex items-center">
//             <Image
//               src="/logo.png"
//               alt="Alon Logo"
//               width={32}
//               height={32}
//               className="mr-2"
//             />
//             Alon
//           </Link>
//         </div>

//         <nav className="hidden md:flex items-center space-x-6">
//           <Link href="#" className="text-base font-medium text-gray-600 hover:text-gray-900 transition-colors">문제 인식</Link>
//           <Link href="#" className="text-base font-medium text-gray-600 hover:text-gray-900 transition-colors">솔루션</Link>
//           <Link href="#" className="text-base font-medium text-gray-600 hover:text-gray-900 transition-colors">제품</Link>
//           <Link href="#" className="text-base font-medium text-gray-600 hover:text-gray-900 transition-colors">회사 소개</Link>
//           <Link href="#" className="text-base font-medium text-gray-600 hover:text-gray-900 transition-colors">연락처</Link>
//         </nav>

//         <div className="flex items-center">
//           <div className="hidden md:flex ml-4">
//             <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6 py-2 text-sm">상담 신청</Button>
//           </div>
//           <div className="md:hidden">
//             <Button
//               variant="ghost"
//               size="icon"
//               onClick={toggleMobileMenu}
//               className="text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded-md"
//             >
//               {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </Button>
//           </div>
//         </div>
//       </div>

//       {/* 모바일 메뉴 오버레이 - 배경 어둡게 */}
//       {isMobileMenuOpen && (
//         <div
//           className="md:hidden fixed inset-0 bg-black/50 z-[55]" // 단순한 반투명 검은 배경
//           onClick={toggleMobileMenu}
//         ></div>
//       )}

//       {/* 모바일 메뉴 패널 - 배경색과 너비에 집중 */}
//       <div
//         className={`md:hidden fixed top-0 right-0 h-full z-[60]
//                     bg-white dark:bg-slate-800  // ! 명확한 배경색 지정 (tailwind 기본 색상)
//                     w-[300px]                   // ! 고정 너비로 테스트 (예: 300px)
//                     shadow-xl
//                     transform transition-transform duration-300 ease-in-out
//                     ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
//       >
//         <div className="p-5 pt-6 flex flex-col h-full">
//           <div className="flex justify-between items-center mb-8">
//             <Link href="/" className="text-2xl font-bold text-gray-800 dark:text-gray-100 flex items-center" onClick={toggleMobileMenu}>
//               <Image src="/logo.png" alt="Alon Logo" width={30} height={30} className="mr-2"/>
//               Alon
//             </Link>
//             <Button variant="ghost" size="icon" onClick={toggleMobileMenu} className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md p-1">
//               <X className="h-6 w-6" />
//             </Button>
//           </div>

//           <nav className="flex flex-col space-y-1.5 flex-grow">
//             {[
//               { href: "#", label: "문제 인식" }, { href: "#", label: "솔루션" },
//               { href: "#", label: "제품" }, { href: "#", label: "회사 소개" },
//               { href: "#", label: "연락처" },
//             ].map((item) => (
//               <Link key={item.label} href={item.href}
//                 className="text-gray-700 dark:text-gray-200 hover:text-orange-600 dark:hover:text-orange-400 hover:bg-gray-100 dark:hover:bg-gray-700/60 px-4 py-3 rounded-lg text-base font-medium transition-colors duration-150"
//                 onClick={toggleMobileMenu}
//               >
//                 {item.label}
//               </Link>
//             ))}
//           </nav>

//           <div className="mt-auto pt-6 border-t border-gray-200 dark:border-gray-700">
//             <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-full py-3 text-base font-semibold">
//               상담 신청
//             </Button>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }

