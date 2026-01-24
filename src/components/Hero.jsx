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
import { social_media } from '../constants'

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen">
      <div
        className={`
          max-w-7xl mx-auto
          px-6 pt-32
          grid grid-cols-1 md:grid-cols-2
          gap-10
          items-center
        `}
      >
        {/* LEFT COLUMN */}
        <div className="flex flex-col gap-6">
          {/* Heading */}
          <div className="flex gap-5">
            <div className="flex flex-col items-center mt-2">
              <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
              <div className="w-1 h-20 md:h-40 violet-gradient" />
            </div>

            <div>
              <h1 className={`${styles.heroHeadText} text-[#915EFF]`}>
                Hi, I'm <span className="text-[#915EFF]">Tommy</span>
              </h1>
              <p className={`${styles.heroSubText} mt-2 text-black-100`}>
                I develop mobile apps, user <br className="hidden sm:block" />
                interfaces and web applications
              </p>
              <div className="flex flex-1 items-center gap-1">
                {social_media.map((social) => (
                <a href={social.link} target="_blank" rel="noopener noreferrer" className='flex w-[40px] h-[40px] border-[2px] border-black rounded-full overflow-hidden mt-4 justify-center items-center'>
                <i className={`text-black ${social.icon}`}></i>
                </a>
                ))}
              </div>
            </div>
          </div>

          {/* 3D Canvas */}
          <div className="w-full h-[300px] sm:h-[400px] pb-8">
            <ComputersCanvas />
          </div>
        </div>

        {/* RIGHT COLUMN – PROFILE IMAGE */}
        <div
          className="
            flex justify-center
            md:justify-center
            order-last md:order-none mb-48
          "
        >
          <div className="w-full h-full sm:w-[80%] sm:h-[80%] rounded-2xl overflow-hidden border border-black/20">
            <img
              src="./src/assets/avatar.jpg"
              className="w-full h-full object-cover"
              alt="Profile"
            />
          </div>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-10 w-full flex justify-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-3 h-3 rounded-full bg-secondary"
            />
          </div>
        </a>
      </div>
    </section>
  );
};


export default Hero;