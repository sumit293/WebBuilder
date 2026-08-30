import React from "react";
import { motion } from "motion/react";
import LoginModal from "../components/LoginModal";

function Home() {

    const highLights=[
        {
            title:"AI-Powered Website Generation",
            description:"Create stunning websites with the power of AI."
        },
        {
            title:"Modern Design",
            description:"Build beautiful, modern websites that stand out."
        },
        {
            title:"Responsive Layout",
            description:"Ensure your website looks great on all devices."
        }
    ]

    const [openLogin, setOpenLogin] = React.useState(false);





  return (
    <div className="relative min-h-screen bg-[#040404] text-white overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#000000] to-[#120349] z-0" />



      {/* Navbar */}
     <motion.nav
  initial={{ y: -40, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.5 }}
  className="fixed top-0 left-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10"
>
  <div className="max-w-7xl mx-auto py-6 px-4 flex justify-between items-center">

    <div className="text-3xl font-bold">
      GenWeb.ai
    </div>

    <div className="flex items-center gap-4">

      <div className="hidden md:inline text-sm text-zinc-400 hover:text-white cursor-pointer transition duration-300">
        Pricing
      </div>

      <button className='relative inline-flex h-12 overflow-hidden rounded-full p-[1px]'
        onClick={() => setOpenLogin(true)}
      > 
        
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />

        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
          Get Started
        </span>

      </button>

    </div>
  </div>
</motion.nav>

      {/* Hero Section */}
      <section className="relative z-10 pt-44 pb-32 px-6 text-center">

        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
        >
          Build Your Website with AI

          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            {" "}Effortlessly
          </span>

        </motion.h1>

        <motion.p
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-2xl text-zinc-400 mb-8"
        >
          Describe your idea and let AI  create your modern,
           responsive,production-ready websites in minutes.
        </motion.p>
        <motion.button
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            Get Start
          </span>
        </motion.button>

      </section>

<section className="relative z-10 max-w-7xl mx-auto px-6 pb-32 pt-32">

  <div className="grid md:grid-cols-3 gap-6 p-5">

    {highLights.map((h, i) => (
      <motion.div
        key={i}
        initial={{ y: 80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 0.6,
          delay: i * 0.15,
        }}
        className="rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-8"
      >
        <h2 className="text-2xl font-bold text-white mb-3">
          {h.title}
        </h2>

        <p className="text-lg text-zinc-400">
          {h.description}
        </p>
      </motion.div>
    ))}

  </div>

</section>
{/* Temporary space for testing scroll */}
<div className="h-[400px]"></div>



<footer className="relative z-10 py-6 px-6 text-center text-sm text-zinc-400 border-amber-50/10 border-t backdrop-blur-md bg-black/20">
    &copy; {new Date().getFullYear()} GenWeb.ai. All rights reserved.
</footer>
{openLogin && <LoginModal open={openLogin} onClose={() => setOpenLogin(false)} />}

    </div>
  );
}

export default Home;
