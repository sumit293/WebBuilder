import React from 'react'
import { AnimatePresence, motion } from 'motion/react'
function LoginModal({open, onClose}) {
  return (
    <AnimatePresence> 
    {open && 
     <motion.div className='fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4'
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
     exit={{ opacity: 0 }}
    onClick={onClose}
    >

        <motion.div   
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}  
        exit={{ scale: 0.8, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        transition={{ duration: 0.3 , ease: "easeInOut"}}
        className="relative w-full max-w-md p-[1px] rounded-3xl bg-gradient-to-r from-[#8b59c9] via-[#393BB2] to-[#E2CBFF]"
       
       >
       
<div className="relative rounded-3xl bg-slate-950  border border-white/20 shadow-[0_30px_120px_rgba(0,0,0,0.8)] overflow-hidden">
<motion.div
animate={{ opacity: [0.25, 0.05, 0.25]}}
transition={{ duration: 6, repeat: Infinity }}
className="absolute -top-32 -left-32 w-80 h-80 bg-purple-500/30 blur-[140px]"

/>
    <motion.div
    animate={{ opacity: [0.25, 0.05, 0.25]}}
transition={{ duration: 6, repeat: Infinity,delay: 2 }}
className="absolute -top-32 -left-32 w-80 h-80 bg-purple-500/30 blur-[140px]"
    />
<button
className="absolute top-4 right-4 text-white text-2xl font-bold hover:text-purple-400 transition duration-300"
onClick={onClose}
>
    X
</button>
    <div className="relative px-8 pt-14 pb-10 text-center">
        <h1
        className="inline-block  font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
        >AI POWERED WEB  BUILDER</h1>
        <h2 className="text-sm text-zinc-400 mt-2 text-center">
            <span className="text-white text-3xl font-semibold leading-tight mb-3 space-x-2">WELCOME TO</span>
            <span className="bg-linear-to-r from-purple-400 to-blue-100 bg-clip-text text-transparent text-3xl  " >GenWeb.ai</span>
        </h2>
<motion.button
  whileHover={{ scale: 1.03 }}
  whileTap={{ scale: 0.97 }}
  className="group relative w-full h-14 rounded-xl bg-white text-black font-semibold shadow-xl overflow-hidden flex items-center justify-center gap-3 transition-shadow hover:shadow-2xl"
>
  <img
    src="https://imgs.search.brave.com/5EBNk0Nhbyl_g3pr_SD96myaEX7wIdUEg1BfhUdJ4u8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbnNjb3V0LmNv/bS9pY29uL2ZyZWUv/cG5nLTI1Ni9mcmVl/LWdvb2dsZS1sb2dv/LWljb24tc3ZnLWRv/d25sb2FkLXBuZy0x/NzIxNjU5LnBuZz9m/PXdlYnAmdz0xMjg"
    alt="Google"
    className="w-5 h-5 object-contain"
  />

  <span>Continue with Google</span>
</motion.button>


<div className="flex items-center gap-4 my-6">
  <div className="flex-1 h-px bg-zinc-700"></div>

  <span className="text-xs font-medium text-zinc-400 whitespace-nowrap">
    Secure Login
  </span>

  <div className="flex-1 h-px bg-zinc-700">
</div>
</div>
    </div>
<p className="text-xs text-center p-10 text-zinc-500 leading-relaxed">
  By continuing, you agree to our{" "}
  <span className="underline cursor-pointer hover:text-zinc-300">
    Terms of Service
  </span>{" "}
  and{" "}
  <span className="underline cursor-pointer hover:text-zinc-300">
    Privacy Policy
  </span>
</p>
    </div>

</motion.div>
   
        
        </motion.div>
     }
   </AnimatePresence>
  )
}

export default LoginModal