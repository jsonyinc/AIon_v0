"use client";

import { motion } from "framer-motion";
import { Lightbulb, Rocket, Shield } from "lucide-react"; // Assuming lucide-react is used for icons

export default function RomiParadigmSection() {
  return (
    <section className="relative z-10 py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">
            Romi<span className="text-green-400">의 패러다임</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Alon Inc.의 핵심 AI 모델인 Romi는 단순한 도구를 넘어, 개발팀의 역량을 증폭시키는 새로운 패러다임을 제시합니다.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gray-700/50 p-6 rounded-lg"
          >
            <div className="flex justify-center mb-4">
              <div className="bg-green-500/20 p-3 rounded-full">
                <Lightbulb className="h-6 w-6 text-green-400" />
              </div>
            </div>
            <h3 className="text-lg font-medium text-center mb-2">지능형 코드 생성</h3>
            <p className="text-sm text-gray-400 text-center">
              Romi는 최신 프론트엔드 기술 트렌드를 학습하여, 복잡한 UI 컴포넌트와 로직을 자동으로 생성합니다. 개발자는
              &apos;무엇&apos;을 만들지에 집중하고, Romi는 &apos;어떻게&apos; 만들지를 제안합니다.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-700/50 p-6 rounded-lg"
          >
            <div className="flex justify-center mb-4">
              <div className="bg-green-500/20 p-3 rounded-full">
                <Rocket className="h-6 w-6 text-green-400" />
              </div>
            </div>
            <h3 className="text-lg font-medium text-center mb-2">실시간 협업 및 피드백</h3>
            <p className="text-sm text-gray-400 text-center">
              개발 과정에서 Romi는 실시간으로 코드 품질을 분석하고 개선점을 제안합니다. 팀원 간의 협업을 촉진하고,
              코드 리뷰 시간을 단축하여 개발 속도를 가속화합니다.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-gray-700/50 p-6 rounded-lg"
          >
            <div className="flex justify-center mb-4">
              <div className="bg-green-500/20 p-3 rounded-full">
                <Shield className="h-6 w-6 text-green-400" />
              </div>
            </div>
            <h3 className="text-lg font-medium text-center mb-2">보안 및 안정성 강화</h3>
            <p className="text-sm text-gray-400 text-center">
              Romi는 잠재적인 보안 취약점과 버그를 사전에 감지하고 수정 가이드를 제공합니다. &apos;Shift Left&apos; 전략을 통해
              개발 초기 단계부터 안정적이고 안전한 코드를 작성하도록 돕습니다.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}



// "use client";

// import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button"; // Assuming Shadcn UI Button is in this path
// import { CheckCircle2, ChevronRight } from "lucide-react"; // Assuming lucide-react is used for icons

// export default function RomiParadigmSection() {
//   return (
//     <section className="relative z-10 py-20 bg-white">
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5 }}
//             className="space-y-6"
//           >
//             <h2 className="text-3xl font-bold">
//               <span className="text-green-500">RomiⒻ</span>: '에이전트 보스'가 이끄는 AI 혁신 패러다임
//             </h2>
//             <div className="bg-orange-100/50 p-4 rounded-lg text-sm text-orange-800">
//               Alon Inc.는 프론티어 기업으로 완전 새로운 비전과 '에이전트 보스(Agent Boss)' 시스템을 통해 AI를 활용한
//               혁신적인 조직 혁신을 제시합니다. RomiⒻ는 단순한 AI 도구가 아닌, 인간과 AI가 공존하여 정확한 업무 체계를
//               구현합니다.
//             </div>
//             <div className="space-y-4">
//               <div className="flex items-start">
//                 <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
//                   <CheckCircle2 className="h-5 w-5 text-green-500" />
//                 </div>
//                 <div>
//                   <h3 className="font-medium">전략적 AI 통합</h3>
//                   <p className="text-sm text-gray-600">
//                     기업의 핵심 업무에 AI를 전략적으로 통합하여 고도화된 프로세스를 구현합니다.
//                   </p>
//                 </div>
//               </div>
//               <div className="flex items-start">
//                 <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
//                   <CheckCircle2 className="h-5 w-5 text-green-500" />
//                 </div>
//                 <div>
//                   <h3 className="font-medium">'에이전트 보스' 시스템</h3>
//                   <p className="text-sm text-gray-600">
//                     인간과 AI의 에이전트들 간의 협업 구조를 통해 업무 효율성과 창의성을 극대화합니다.
//                   </p>
//                 </div>
//               </div>
//               <div className="flex items-start">
//                 <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
//                   <CheckCircle2 className="h-5 w-5 text-green-500" />
//                 </div>
//                 <div>
//                   <h3 className="font-medium">실행 가능한 인사이트</h3>
//                   <p className="text-sm text-gray-600">
//                     단순 AI 분석이 아닌 실시간 의사결정을 지원하는 실용적 인사이트를 제공합니다.
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div className="pt-4">
//               <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-8 py-5">
//                 <span>Alon의 솔루션 알아보기</span>
//                 <ChevronRight className="ml-2 h-4 w-4" />
//               </Button>
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             className="relative"
//           >
//             <div className="relative bg-gradient-to-r from-slate-900 to-teal-500 rounded-xl overflow-hidden shadow-2xl">
//               <div className="p-8 md:p-12 flex justify-center items-center min-h-[400px]">
//                 <div className="relative w-full max-w-md">
//                   <div className="absolute top-0 right-0 bg-green-400/20 text-white text-xs px-3 py-1 rounded-bl-md">
//                     Romi: 인간-AI 협업 시스템
//                   </div>
//                   <div className="flex items-center justify-center">
//                     {/* 외부 점선 원 */}
//                     <div className="absolute w-80 h-80 rounded-full border-2 border-dashed border-white/30"></div>

//                     {/* Agent Boss 중앙 원 */}
//                     <div className="w-32 h-32 rounded-full bg-white/20 flex items-center justify-center text-white z-20 relative">
//                       <div className="text-center">
//                         <div className="text-lg font-medium">Agent Boss</div>
//                       </div>
//                     </div>

//                     {/* 연결된 에이전트들 */}
//                     <div className="absolute top-8 left-1/2 -translate-x-40 w-20 h-20 rounded-full bg-white/20 flex items-center justify-center text-white text-xs">
//                       <span>AI Agent 1</span>
//                     </div>
//                     <div className="absolute top-8 left-1/2 translate-x-20 w-20 h-20 rounded-full bg-white/20 flex items-center justify-center text-white text-xs">
//                       <span>Human 1</span>
//                     </div>
//                     <div className="absolute bottom-8 left-1/2 -translate-x-40 w-20 h-20 rounded-full bg-white/20 flex items-center justify-center text-white text-xs">
//                       <span>AI Agent 2</span>
//                     </div>
//                     <div className="absolute bottom-8 left-1/2 translate-x-20 w-20 h-20 rounded-full bg-white/20 flex items-center justify-center text-white text-xs">
//                       <span>Human 2</span>
//                     </div>

//                     {/* 연결선 */}
//                     <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 10 }}>
//                       <circle cx="50%" cy="50%" r="60" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
//                       <line x1="50%" y1="50%" x2="30%" y2="25%" stroke="rgba(255,255,255,0.5)" strokeWidth="1" />
//                       <line x1="50%" y1="50%" x2="70%" y2="25%" stroke="rgba(255,255,255,0.5)" strokeWidth="1" />
//                       <line x1="50%" y1="50%" x2="30%" y2="75%" stroke="rgba(255,255,255,0.5)" strokeWidth="1" />
//                       <line x1="50%" y1="50%" x2="70%" y2="75%" stroke="rgba(255,255,255,0.5)" strokeWidth="1" />
//                     </svg>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="absolute -bottom-4 left-8 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium shadow-md">
//               37%
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }
