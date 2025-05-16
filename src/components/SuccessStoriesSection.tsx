"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react"; // Assuming lucide-react is used for icons

export default function SuccessStoriesSection() {
  return (
    <section className="relative z-10 py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">
            성공 <span className="text-green-400">사례</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Alon Inc.의 AI 프론트엔드 솔루션이 실제 비즈니스에서 어떻게 성공을 이끌어냈는지 확인해보세요.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-slate-800/50 p-6 rounded-lg flex flex-col items-center text-center"
          >
            <Quote className="h-8 w-8 text-green-400 mb-4" />
            <p className="text-gray-300 mb-4 italic">
              &quot;Alon Inc. 솔루션 도입 후 프론트엔드 개발 속도가 획기적으로 빨라졌습니다. 특히 Romi의 코드 생성 기능 덕분에 반복적인 작업 시간이 크게 줄었고, 개발팀은 더 창의적인 문제 해결에 집중할 수 있게 되었습니다. 결과적으로 프로젝트 납기일을 앞당기고 비용을 절감할 수 있었습니다.&quot;
            </p>
            <p className="font-medium text-green-400">- 김철수, 테크 스타트업 CTO</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-slate-800/50 p-6 rounded-lg flex flex-col items-center text-center"
          >
            <Quote className="h-8 w-8 text-green-400 mb-4" />
            <p className="text-gray-300 mb-4 italic">
              &quot;저희 팀은 다양한 규모의 프로젝트를 진행하는데, Alon Inc.의 AI 솔루션은 어떤 프로젝트에도 유연하게 적용 가능했습니다. 특히 코드 품질 분석 및 보안 취약점 감지 기능은 개발 초기 단계부터 안정성을 확보하는 데 큰 도움이 되었습니다. 고객 만족도가 눈에 띄게 향상되었습니다.&quot;
            </p>
            <p className="font-medium text-green-400">- 박영희, IT 컨설팅 회사 팀장</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}



// "use client";

// import { motion } from "framer-motion";
// import { UserCircle } from "lucide-react"; // Assuming lucide-react is used for icons

// export default function SuccessStoriesSection() {
//   return (
//     <section className="relative z-10 py-20 bg-gray-50">
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-3xl font-bold mb-6">
//             <span className="text-green-500">프론트엔드 기업</span>의 성공 사례
//           </h2>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5 }}
//             className="bg-white rounded-lg shadow-md overflow-hidden"
//           >
//             <div className="p-8">
//               <div className="bg-orange-100/50 p-4 rounded-lg text-sm text-orange-800 mb-6">
//                 프론트엔드 개발 회사 A사는 Romi 도입 후 개발 주기를 30% 단축했습니다. 특히 반복적인 코딩 작업과 테스트
//                 과정에서 에이전트 보스의 지원으로 개발자들의 생산성이 크게 향상되었습니다. 또한 코드 품질도 개선되어
//                 버그 발생률이 45% 감소했습니다.
//               </div>
//               <div className="flex items-center mb-4">
//                 <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-3">
//                   <UserCircle className="h-6 w-6 text-gray-500" />
//                 </div>
//                 <h3 className="text-lg font-medium">김영수</h3>
//               </div>
//               <p className="text-sm text-gray-600 mb-4">"Romi 도입 이후 개발 속도가 놀랍게 향상되었습니다."</p>
//               <div className="grid grid-cols-4 gap-2 mb-4">
//                 <div className="bg-green-100 p-3 rounded-md text-center">
//                   <span className="text-green-600 text-sm font-medium">37%</span>
//                 </div>
//                 <div className="bg-green-100 p-3 rounded-md text-center">
//                   <span className="text-green-600 text-sm font-medium">42%</span>
//                 </div>
//                 <div className="bg-green-100 p-3 rounded-md text-center">
//                   <span className="text-green-600 text-sm font-medium">5개월</span>
//                 </div>
//                 <div className="bg-green-100 p-3 rounded-md text-center">
//                   <span className="text-green-600 text-sm font-medium">91%</span>
//                 </div>
//               </div>
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5 }}
//             className="bg-white rounded-lg shadow-md overflow-hidden"
//           >
//             <div className="p-8">
//               <div className="bg-orange-100/50 p-4 rounded-lg text-sm text-orange-800 mb-6">
//                 디지털 마케팅 에이전시 B사는 Romi의 에이전트 보스 시스템을 활용해 고객 데이터 분석과 캠페인 최적화에
//                 적용했습니다. 그 결과 캠페인 ROI가 62% 향상되었고, 고객 응대 시간은 40% 단축되었습니다. 특히 AI와 인간
//                 마케터의 협업 모델이 창의적인 콘텐츠 제작과 데이터 기반 의사결정의 균형을 이루는 데 큰 역할을
//                 했습니다.
//               </div>
//               <div className="flex items-center mb-4">
//                 <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-3">
//                   <UserCircle className="h-6 w-6 text-gray-500" />
//                 </div>
//                 <h3 className="text-lg font-medium">박지민</h3>
//               </div>
//               <p className="text-sm text-gray-600 mb-4">
//                 "에이전트 보스 시스템이 마케팅 전략을 한 단계 끌어올렸습니다."
//               </p>
//               <div className="grid grid-cols-4 gap-2 mb-4">
//                 <div className="bg-green-100 p-3 rounded-md text-center">
//                   <span className="text-green-600 text-sm font-medium">37%</span>
//                 </div>
//                 <div className="bg-green-100 p-3 rounded-md text-center">
//                   <span className="text-green-600 text-sm font-medium">42%</span>
//                 </div>
//                 <div className="bg-green-100 p-3 rounded-md text-center">
//                   <span className="text-green-600 text-sm font-medium">5개월</span>
//                 </div>
//                 <div className="bg-green-100 p-3 rounded-md text-center">
//                   <span className="text-green-600 text-sm font-medium">91%</span>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }
