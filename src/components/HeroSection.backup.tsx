"use client";

import { motion } from "framer-motion";
// import Image from "next/image";
import { Button } from "@/components/ui/button"; // Assuming button component is in ui folder

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center text-center bg-gray-900 text-white overflow-hidden">
      <div className="relative z-10 container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
        >
          AI<span className="text-green-400">프론트엔드</span>, <br />
          개발 생산성을 <span className="text-green-400">극대화</span>하다
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
        >
          Alon Inc.는 AI 기술을 활용하여 프론트엔드 개발 프로세스를 혁신하고, <br className="hidden md:block" />
          개발팀의 생산성과 효율성을 <span className="text-green-400">획기적으로 향상</span>시킵니다.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center space-x-4"
        >
          <Button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-lg text-lg">
            자세히 알아보기
          </Button>
          <Button variant="outline" className="border-green-500 text-green-500 hover:bg-green-500 hover:text-white font-bold py-2 px-6 rounded-lg text-lg">
            문의하기
          </Button>
        </motion.div>
      </div>
    </section>
  );
}





// "use client";

// import { motion } from "framer-motion"; // Removed useScroll, useTransform
// import { Button } from "@/components/ui/button"; // Assuming Shadcn UI Button is in this path
// import { ChevronRight } from "lucide-react"; // Assuming lucide-react is used for icons

// export default function HeroSection() {
//   // Removed unused scrollYProgress variable
//   // const { scrollYProgress } = useScroll();
//   // Removed unused opacity variable
//   // const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.2]); // This might need adjustment based on the new layout

//   return (
//     <section className="relative z-10 bg-gradient-to-br from-white to-gray-50 pt-16 pb-24">
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="max-w-4xl mx-auto text-center mb-12"
//         >
//           <h1 className="text-4xl md:text-5xl font-bold mb-6">
//             AI 혁명, <span className="text-green-500">Romi</span>로 현실로:{" "}
//             <span className="whitespace-nowrap">에이전트 보스가 당</span> <br />
//             <span className="whitespace-nowrap">신의 비즈니스를 미래로 이끈다.</span>
//           </h1>
//           <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
//             인간과 AI의 완벽한 시너지, '에이전트 보스' 시스템이 AI 혁신의 막연함을 걷어내고, 투자자와 기업의 실질적
//             성장을 견인합니다.
//           </p>
//           <div className="bg-orange-100/50 p-4 rounded-lg text-sm text-orange-800 mb-8 max-w-3xl mx-auto">
//             Alon Inc.는 단순한 AI 솔루션 그 이상, 인간과 AI가 자연스럽게 공존하는 프론티어의 가능성에 빛을 가르켜
//             줍니다. Romi는 귀사의 AI 혁신 여정을 이끌 '에이전트 보스' 기반 솔루션으로, 귀하의 비즈니스를 더하여 성장의
//             실제와 미래 비전을 선사합니다.
//           </div>
//           <div className="flex flex-col sm:flex-row justify-center gap-4">
//             <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-8 py-6">
//               <span>Romi 솔루션, 지금 바로 경험하세요!</span>
//               <ChevronRight className="ml-2 h-4 w-4" />
//             </Button>
//             <Button variant="outline" className="border-gray-300 text-gray-700 rounded-full px-8 py-6">
//               <span>'프론트엔드 기업' 비전 살펴보기</span>
//             </Button>
//           </div>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.7, delay: 0.2 }}
//           className="relative mx-auto max-w-4xl"
//         >
//           <div className="relative bg-gradient-to-r from-slate-900 to-teal-500 rounded-xl overflow-hidden shadow-2xl">
//             <div className="absolute top-0 right-0 bg-green-400/20 text-white text-xs px-3 py-1 rounded-bl-md">
//               Romi 미래 혁신 솔루션
//             </div>
//             <div className="p-8 md:p-12 flex justify-center items-center min-h-[300px]">
//               <div className="relative w-full max-w-md">
//                 <div className="flex items-center justify-center">
//                   <div className="relative">
//                     {/* Agent Boss 중앙 원 */}
//                     <div className="w-32 h-32 rounded-full bg-white/20 flex items-center justify-center text-white z-20 relative">
//                       <div className="text-center">
//                         <div className="text-lg font-medium">Agent Boss</div>
//                       </div>
//                     </div>

//                     {/* 연결된 에이전트들 */}
//                     <div className="absolute -left-32 top-0 w-24 h-24 rounded-full bg-white/10 flex items-center justify-center text-white text-xs">
//                       <span>Human</span>
//                     </div>
//                     <div className="absolute -right-32 top-0 w-24 h-24 rounded-full bg-white/10 flex items-center justify-center text-white text-xs">
//                       <span>Human</span>
//                     </div>
//                     <div className="absolute -left-32 bottom-0 w-24 h-24 rounded-full bg-white/10 flex items-center justify-center text-white text-xs">
//                       <span>AI Agent 1</span>
//                     </div>
//                     <div className="absolute -right-32 bottom-0 w-24 h-24 rounded-full bg-white/10 flex items-center justify-center text-white text-xs">
//                       <span>AI Agent 2</span>
//                     </div>

//                     {/* 연결선 */}
//                     <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 10 }}>
//                       <line x1="50%" y1="50%" x2="20%" y2="30%" stroke="rgba(255,255,255,0.5)" strokeWidth="1" />
//                       <line x1="50%" y1="50%" x2="80%" y2="30%" stroke="rgba(255,255,255,0.5)" strokeWidth="1" />
//                       <line x1="50%" y1="50%" x2="20%" y2="70%" stroke="rgba(255,255,255,0.5)" strokeWidth="1" />
//                       <line x1="50%" y1="50%" x2="80%" y2="70%" stroke="rgba(255,255,255,0.5)" strokeWidth="1" />
//                     </svg>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="absolute -bottom-4 left-8 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium shadow-md">
//             37%
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
