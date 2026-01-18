// import { motion } from 'framer-motion';
// import { styles } from '../styles';
// import { ComputersCanvas } from './canvas';

// const Hero = () => {
//   return (
//     <section className='relative w-full h-screen mx-auto'>
//       <div
//         className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
//       >
//         <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
//           <div className="flex flex-1 max-w-5xl gap-6">
//             <div className='flex flex-col justify-center items-center mt-5'>
//               <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
//               <div className='w-1 sm:h-80 h-40 violet-gradient' />
//             </div>

//             <div className='flex-1 relative'>
//               <h1 className={`${styles.heroHeadText} text-[#915EFF]`}>
//                 Hi, I'm <span className='text-[#915EFF]'>Tommy</span>
//               </h1>
//               <p className={`${styles.heroSubText} mt-2 text-black-100`}>
//                 I develop 3D visuals, user <br className='sm:block hidden' />
//                 interfaces and web applications
//               </p>
//               <div className="absolute -left-24 top-36 w-[700px] h-[420px]">
//                 <ComputersCanvas />
//               </div>
//             </div>
//             </div>
//           </div>
          
//           <div className="flex-shrink-0 flex items-start justify-end w-[320px]">
//             <div className="w-72 h-72 rounded-full overflow-hidden border border-black/20">
//               <img
//                 src="./src/assets/bg1.jpg"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           </div>
//         </div>
      
//       <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
//         <a href='#about'>
//           <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
//             <motion.div 
//               animate={{
//                 y:[0, 24, 0]
//               }}
//               transition={{
//                 duration: 1.5,
//                 repeat: Infinity,
//                 repeatType: 'loop'
//               }}
//               className='w-3 h-3 rounded-full bg-secondary mb-1'
//             />
//           </div>
//         </a>
//       </div>
//     </section>
//   )
// }

// export default Hero;

import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-col justify-between md:flex-row items-center md:items-start gap-5`}>
        <div className='flex flex-1 flex-col'>
          <div className='flex flex-row'>

            <div className='flex flex-col justify-center items-center mt-5'>
              <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
              <div className='w-1 sm:h-80 h-40 violet-gradient' />
            </div>
            <div className='flex-1 relative'>
              <h1 className={`${styles.heroHeadText} text-[#915EFF]`}>
                Hi, I'm <span className='text-[#915EFF]'>Tommy</span>
              </h1>
              <p className={`${styles.heroSubText} mt-2 text-black-100`}>
                I develop 3D visuals, user <br className='sm:block hidden' />
                interfaces and web applications
              </p>
            </div>
          </div>
        </div>
        <div className="w-80 h-80 rounded-full overflow-hidden border border-black/20">
            <img
              src="./src/assets/bg1.jpg"
              className="w-full h-full object-cover"
            />
          </div>
      </div>
      
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div 
              animate={{
                y:[0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero;