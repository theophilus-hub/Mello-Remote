"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const format2 = (n: number) => n.toString().padStart(2, "0");
  const getNextFebFirst = () => {
    const now = new Date();
    const currentYear = now.getFullYear();
    const febFirstThisYear = new Date(currentYear, 1, 1, 0, 0, 0, 0);
    const targetYear = now < febFirstThisYear ? currentYear : currentYear + 1;
    return new Date(targetYear, 1, 1, 0, 0, 0, 0);
  };
  useEffect(() => {
    const target = getNextFebFirst();
    const tick = () => {
      const now = new Date();
      let ms = target.getTime() - now.getTime();
      if (ms < 0) ms = 0;
      const days = Math.floor(ms / 86400000);
      const hours = Math.floor((ms % 86400000) / 3600000);
      const minutes = Math.floor((ms % 3600000) / 60000);
      const seconds = Math.floor((ms % 60000) / 1000);
      setTimeLeft({ days, hours, minutes, seconds });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FF9500]/20 via-transparent to-[#E68600]/10" />
      
      {/* Animated wave pattern background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1.5 }}
        className="absolute bottom-0 left-0 right-0 h-[600px]"
      >
        <motion.svg
          className="absolute bottom-0 w-full"
          viewBox="0 0 1440 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <path
            d="M0,400 C120,350 240,300 360,320 C480,340 600,400 720,380 C840,360 960,300 1080,320 C1200,340 1320,400 1440,380 L1440,600 L0,600 Z"
            fill="url(#wave-gradient-1)"
            opacity="0.3"
          />
          <path
            d="M0,450 C160,400 320,420 480,440 C640,460 800,450 960,430 C1120,410 1280,450 1440,460 L1440,600 L0,600 Z"
            fill="url(#wave-gradient-2)"
            opacity="0.2"
          />
          <defs>
            <linearGradient id="wave-gradient-1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FF9500" />
              <stop offset="50%" stopColor="#FFB340" />
              <stop offset="100%" stopColor="#E68600" />
            </linearGradient>
            <linearGradient id="wave-gradient-2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#E68600" />
              <stop offset="50%" stopColor="#FF9500" />
              <stop offset="100%" stopColor="#FFB340" />
            </linearGradient>
          </defs>
        </motion.svg>
      </motion.div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,149,0,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,149,0,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-3 py-10">
        {/* Announcement badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-2 inline-flex items-center gap-2 rounded-full border border-[#FF9500]/30 bg-[#FF9500]/10 px-4 py-2 backdrop-blur-sm"
        >
          <span className="rounded-full bg-[#FF9500] px-2 py-0.5 text-xs font-semibold text-black">
            New
          </span>
          <span className="text-sm text-white/90">Launch your remote career today</span>
          <svg
            className="h-4 w-4 text-[#FF9500]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </motion.div>

        {/* Hero headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="max-w-6xl text-center text-5xl font-bold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl xl:text-8xl"
        >
          Average People Are Making
          <br />
          <span className="bg-[#FF9500] bg-clip-text text-transparent">
            $500 - $2,500 Per Month
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-6 max-w-4xl text-center text-xl leading-relaxed text-gray-300 md:text-2xl lg:text-3xl"
        >
          Working from the comfort of their homes with this new{" "}
          <span className="font-semibold text-[#FF9500]">"MelloRemote Access"</span>{" "}
          — allowing them to acquire and secure a financially rewarding remote job in less than{" "}
          <span className="font-semibold text-[#FF9500]">30 days</span>.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          className="mt-6 flex w-full flex-col items-center justify-center"
        >
           <h3 className="text-center text-base font-semibold uppercase tracking-wide text-[#FF9500] md:text-lg">
              Free Remote Class Starts In
            </h3>
          <div className="flex flex-wrap items-stretch justify-center gap-3">
            <div className="min-w-[80px] rounded-xl border border-[#FF9500]/30 bg-[#FF9500]/10 px-4 py-3 text-center">
              <div className="text-3xl font-bold text-white tabular-nums">{timeLeft.days}</div>
              <div className="text-xs uppercase tracking-wide text-gray-400">Days</div>
            </div>
            <div className="min-w-[80px] rounded-xl border border-[#FF9500]/30 bg-[#FF9500]/10 px-4 py-3 text-center">
              <div className="text-3xl font-bold text-white tabular-nums">{format2(timeLeft.hours)}</div>
              <div className="text-xs uppercase tracking-wide text-gray-400">Hours</div>
            </div>
            <div className="min-w-[80px] rounded-xl border border-[#FF9500]/30 bg-[#FF9500]/10 px-4 py-3 text-center">
              <div className="text-3xl font-bold text-white tabular-nums">{format2(timeLeft.minutes)}</div>
              <div className="text-xs uppercase tracking-wide text-gray-400">Minutes</div>
            </div>
            <div className="min-w-[80px] rounded-xl border border-[#FF9500]/30 bg-[#FF9500]/10 px-4 py-3 text-center">
              <div className="text-3xl font-bold text-white tabular-nums">{format2(timeLeft.seconds)}</div>
              <div className="text-xs uppercase tracking-wide text-gray-400">Seconds</div>
            </div>
          </div>
          <div className="mt-4 flex w-full flex-col items-center justify-center gap-3">
           
            <div className="flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-3">
              <a
                href="https://chat.whatsapp.com/DstslOBVHWKKoq3MAkOBvm"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#FF9500] px-4 py-2 text-sm font-semibold text-black transition-all hover:bg-[#FFB340]"
              >
                Join WhatsApp Group
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-[#FF9500] px-4 py-2 text-sm font-semibold text-[#FF9500] transition-all hover:bg-[#FF9500]/10"
              >
                Join Telegram Channel
              </a>
            </div>
          </div>
        </motion.div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          className="mt-8"
        >
          <p className="text-center text-xl leading-relaxed text-gray-200 md:text-2xl lg:text-3xl">
            Using the same access that made me and my VIP members over{" "}
            <span className="font-bold text-[#FF9500]">$22,730</span> in{" "}
            <span className="font-bold text-[#FF9500]">93 days</span>!
          </p>
        </motion.div>
      </div>

      {/* Success Stories Visual Section */}
      <section className="relative z-10 overflow-hidden bg-black py-8 md:py-16">
        {/* Gradient overlays for blending */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-60" />
        
        <div className="relative mx-auto max-w-7xl px-4 md:px-8">
          {/* Section heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              Real People. Real Success.
            </h2>
            <p className="mt-4 text-lg text-gray-400 md:text-xl">
              Join thousands who've transformed their careers
            </p>
          </motion.div>

          {/* Success story cards */}
          <div className="grid gap-16 md:grid-cols-2 lg:gap-12">
            {/* Favour's Story */}
            <motion.div
              initial={{ opacity: 0, x: -30, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 1.2,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="group relative overflow-hidden rounded-2xl border border-[#FF9500]/20 bg-gradient-to-br from-[#FF9500]/5 to-transparent p-1 transition-all hover:border-[#FF9500]/40 hover:shadow-2xl hover:shadow-[#FF9500]/20"
            >
              <div className="relative overflow-hidden rounded-xl bg-black">
                <Image
                  src="/Mello Sept 29 Testimonial Favour@2x.png"
                  alt="Favour Success Story"
                  width={800}
                  height={1000}
                  className="h-auto w-full transition-transform duration-500 group-hover:scale-105"
                />
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            </motion.div>

            {/* Larry's Story */}
            <motion.div
              initial={{ opacity: 0, x: 30, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 1.2,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="group relative overflow-hidden rounded-2xl border border-[#FF9500]/20 bg-gradient-to-br from-[#FF9500]/5 to-transparent p-1 transition-all hover:border-[#FF9500]/40 hover:shadow-2xl hover:shadow-[#FF9500]/20"
            >
              <div className="relative overflow-hidden rounded-xl bg-black">
                <Image
                  src="/Mello Sept 29 Testimonial Larry@2x.png"
                  alt="Larry Success Story"
                  width={800}
                  height={1000}
                  className="h-auto w-full transition-transform duration-500 group-hover:scale-105"
                />
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            </motion.div>

            {/* Success Story 9499 */}
            <motion.div
              initial={{ opacity: 0, x: -30, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 1.2,
                delay: 0.4,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="group relative overflow-hidden rounded-2xl border border-[#FF9500]/20 bg-gradient-to-br from-[#FF9500]/5 to-transparent p-1 transition-all hover:border-[#FF9500]/40 hover:shadow-2xl hover:shadow-[#FF9500]/20"
            >
              <div className="relative overflow-hidden rounded-xl bg-black">
                <Image
                  src="/IMG_9499.jpg"
                  alt="Success Story"
                  width={800}
                  height={1000}
                  className="h-auto w-full transition-transform duration-500 group-hover:scale-105"
                />
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            </motion.div>

            {/* Success Story 9500 */}
            <motion.div
              initial={{ opacity: 0, x: 30, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 1.2,
                delay: 0.5,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="group relative overflow-hidden rounded-2xl border border-[#FF9500]/20 bg-gradient-to-br from-[#FF9500]/5 to-transparent p-1 transition-all hover:border-[#FF9500]/40 hover:shadow-2xl hover:shadow-[#FF9500]/20"
            >
              <div className="relative overflow-hidden rounded-xl bg-black">
                <Image
                  src="/IMG_9500.jpg"
                  alt="Success Story"
                  width={800}
                  height={1000}
                  className="h-auto w-full transition-transform duration-500 group-hover:scale-105"
                />
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            </motion.div>
          </div>

          {/* Bottom accent */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <p className="text-base text-gray-500 md:text-lg">
              Their journey starts here. Yours can too.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Explanation Section */}
      <section className="relative z-10 bg-gradient-to-b from-black via-[#0a0a0a] to-black px-6 py-16 md:px-12 lg:px-20">
        <div className="mx-auto max-w-5xl space-y-12">
          {/* Opening Statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-8 text-center"
          >
            <h2 className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
              Here's What You Need to Realize
            </h2>
            
            <div className="space-y-6">
              <p className="text-2xl leading-relaxed text-gray-300 md:text-3xl">
                There are two types of workers:
              </p>
              
              <div className="flex flex-col items-center justify-center gap-4 text-xl md:flex-row md:gap-8 md:text-2xl">
                <span className="font-semibold text-white">Those who work <span className="italic">Smart</span></span>
                <span className="text-[#FF9500]">—</span>
                <span className="font-semibold text-white">Those who work <span className="italic">Hard</span></span>
              </div>

              <div className="relative py-8">
                <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#FF9500] to-transparent opacity-30" />
                <p className="relative text-3xl font-bold text-white md:text-4xl lg:text-5xl">
                  What if you could become <span className="text-[#FF9500]">BOTH</span>?
                </p>
              </div>

              <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-400 md:text-2xl">
                Combine smart strategies with hard work to earn high income from a rewarding remote job. All you need to do is take <span className="font-semibold text-[#FF9500]">action</span> and build your future.
              </p>
            </div>
          </motion.div>

          {/* Reality Check Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <h2 className="text-center text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              It's No Secret Who Wins
            </h2>
            
            <div className="space-y-6 text-center">
              <div className="space-y-3">
                <p className="text-xl text-gray-300 md:text-2xl">
                  If you're like most people, you're probably...
                </p>
                <div className="mx-auto max-w-2xl space-y-3 text-lg text-gray-400 md:text-xl">
                  <p>Overworked and underpaid in your current job</p>
                  <p>Earning <span className="font-semibold text-white">₦50,000 - ₦150,000</span> monthly when you deserve better</p>
                  <p>Watching others earn <span className="font-semibold text-[#FF9500]">10x your salary</span> working remotely</p>
                </div>
              </div>

              <div className="relative py-6">
                <div className="mx-auto h-px w-32 bg-gradient-to-r from-transparent via-[#FF9500] to-transparent" />
              </div>

              <div className="space-y-4">
                <p className="text-2xl font-semibold text-white md:text-3xl">
                  The Truth Is Simple
                </p>
                <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-300 md:text-2xl">
                  International companies pay more and demand less. By knowing your worth and working with the right companies, you can <span className="font-semibold text-[#FF9500]">change everything</span> — earn in foreign currency from the comfort of your home.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Pain Points Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-[#FF9500]/20 bg-black/50 p-8 backdrop-blur-sm md:p-12"
          >
            <h3 className="mb-8 text-2xl font-bold text-white md:text-3xl">
              Right now, you're probably:
            </h3>

            <div className="space-y-6">
              {/* Pain Point 1 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-red-500 md:h-8 md:w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <p className="text-lg leading-relaxed text-gray-200 md:text-xl">
                  Not knowing where to even begin and which platforms to use, what skilss are in Demand or how to stand out Globally.
                </p>
              </motion.div>

              {/* Pain Point 2 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-red-500 md:h-8 md:w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <p className="text-lg leading-relaxed text-gray-200 md:text-xl">
                  Seeing others Land Remote Jobs with ease while you're stuck wondering what you're doing wrong.
                </p>
              </motion.div>

              {/* Pain Point 3 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-red-500 md:h-8 md:w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <p className="text-lg leading-relaxed text-gray-200 md:text-xl">
                  Feeling Like Remote Jobs are only for People Abroad or with fancy degrees and connections
                </p>
              </motion.div>

              {/* Pain Point 4 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-red-500 md:h-8 md:w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <p className="text-lg leading-relaxed text-gray-200 md:text-xl">
                  Spending Hours Editing your CV, Writing Cover Letters and still getting ghosted by Recruiters
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Devastating Part */}
          <div className="space-y-6 text-center">
            <h3 className="text-2xl font-bold text-white md:text-3xl lg:text-4xl">
              Here's the most devastating part!
            </h3>
            
            <p className="text-xl leading-relaxed text-gray-200 md:text-2xl lg:text-3xl">
              Every day that goes by, someone else is Bagging a well Rewarding Paid Remote Job while you're sitting there all Confused...{" "}
              <span className="font-bold text-[#FF9500]">Say goodbye to that struggle STARTING NOW</span>
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative z-10 bg-gradient-to-b from-black via-[#0a0a0a] to-black px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h2 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              Hear From Our <span className="text-[#FF9500]">Success Stories</span>
            </h2>
            <p className="mt-4 text-lg text-gray-400 md:text-xl">
              Real people, real transformations, real results
            </p>
          </motion.div>

          {/* Testimonials Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {/* Testimonial 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-[#FF9500]/20 bg-gradient-to-br from-[#0a0a0a] to-black p-6 transition-all hover:border-[#FF9500]/40 hover:shadow-lg hover:shadow-[#FF9500]/10"
            >
              {/* Stars */}
              <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 fill-[#FF9500]" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              {/* Testimonial Text */}
              <p className="mb-6 text-base leading-relaxed text-gray-300">
                "Within 2 weeks of joining MelloRemote, I landed my first remote customer support role. The training was practical and the support was incredible!"
              </p>

              {/* Profile */}
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#FF9500] to-[#E68600] text-lg font-bold text-black">
                  AN
                </div>
                <div>
                  <p className="font-semibold text-white">Amara Nwosu</p>
                  <p className="text-sm text-gray-500">Customer Support Agent</p>
                </div>
              </div>
            </motion.div>

            {/* Testimonial 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="group relative overflow-hidden rounded-2xl border border-[#FF9500]/20 bg-gradient-to-br from-[#0a0a0a] to-black p-6 transition-all hover:border-[#FF9500]/40 hover:shadow-lg hover:shadow-[#FF9500]/10"
            >
              <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 fill-[#FF9500]" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              <p className="mb-6 text-base leading-relaxed text-gray-300">
                "I went from earning ₦80,000 monthly to $1,200 in my first month as a virtual assistant. MelloRemote changed my entire financial situation."
              </p>

              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#FF9500] to-[#E68600] text-lg font-bold text-black">
                  DO
                </div>
                <div>
                  <p className="font-semibold text-white">David Okafor</p>
                  <p className="text-sm text-gray-500">Virtual Assistant</p>
                </div>
              </div>
            </motion.div>

            {/* Testimonial 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="group relative overflow-hidden rounded-2xl border border-[#FF9500]/20 bg-gradient-to-br from-[#0a0a0a] to-black p-6 transition-all hover:border-[#FF9500]/40 hover:shadow-lg hover:shadow-[#FF9500]/10"
            >
              <div className="mb-4 flex gap-1">
                {[...Array(4)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 fill-[#FF9500]" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <svg className="h-5 w-5 fill-gray-600" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              
              <p className="mb-6 text-base leading-relaxed text-gray-300">
                "The platform is great but took me a bit longer than expected to land my first client. Still worth it though!"
              </p>

              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#FF9500] to-[#E68600] text-lg font-bold text-black">
                  CA
                </div>
                <div>
                  <p className="font-semibold text-white">Chioma Adewale</p>
                  <p className="text-sm text-gray-500">Social Media Manager</p>
                </div>
              </div>
            </motion.div>

            {/* Testimonial 4 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-[#FF9500]/20 bg-gradient-to-br from-[#0a0a0a] to-black p-6 transition-all hover:border-[#FF9500]/40 hover:shadow-lg hover:shadow-[#FF9500]/10"
            >
              <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 fill-[#FF9500]" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              <p className="mb-6 text-base leading-relaxed text-gray-300">
                "Best investment I've made this year! Got hired as a content writer for a US company. Now I work from home earning 4x my old salary."
              </p>

              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#FF9500] to-[#E68600] text-lg font-bold text-black">
                  EI
                </div>
                <div>
                  <p className="font-semibold text-white">Emmanuel Ike</p>
                  <p className="text-sm text-gray-500">Content Writer</p>
                </div>
              </div>
            </motion.div>

            {/* Testimonial 5 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="group relative overflow-hidden rounded-2xl border border-[#FF9500]/20 bg-gradient-to-br from-[#0a0a0a] to-black p-6 transition-all hover:border-[#FF9500]/40 hover:shadow-lg hover:shadow-[#FF9500]/10"
            >
              <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 fill-[#FF9500]" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              <p className="mb-6 text-base leading-relaxed text-gray-300">
                "MelloRemote gave me the skills and confidence to apply for international roles. Now working remotely for a Canadian tech startup!"
              </p>

              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#FF9500] to-[#E68600] text-lg font-bold text-black">
                  FO
                </div>
                <div>
                  <p className="font-semibold text-white">Fatima Olatunji</p>
                  <p className="text-sm text-gray-500">Data Entry Specialist</p>
                </div>
              </div>
            </motion.div>

            {/* Testimonial 6 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="group relative overflow-hidden rounded-2xl border border-[#FF9500]/20 bg-gradient-to-br from-[#0a0a0a] to-black p-6 transition-all hover:border-[#FF9500]/40 hover:shadow-lg hover:shadow-[#FF9500]/10"
            >
              <div className="mb-4 flex gap-1">
                {[...Array(4)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 fill-[#FF9500]" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <svg className="h-5 w-5 fill-gray-600" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              
              <p className="mb-6 text-base leading-relaxed text-gray-300">
                "Finally quit my 9-5! The community support and resources helped me transition to full-time freelancing. Making more and working less."
              </p>

              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#FF9500] to-[#E68600] text-lg font-bold text-black">
                  TM
                </div>
                <div>
                  <p className="font-semibold text-white">Tunde Musa</p>
                  <p className="text-sm text-gray-500">Freelance Designer</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Good News Section */}
      <section className="relative z-10 bg-gradient-to-b from-black via-[#0a0a0a] to-black px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h2 className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
              <span className="text-[#FF9500]">The Good News:</span> Remote Job Sourcing Rush Is Here
              <br />
              <span className="text-white">Will You Lock In?</span>
            </h2>
            
            <p className="mt-6 text-lg italic leading-relaxed text-gray-400 md:text-xl">
              "The good news is right now, We're living in the BIGGEST remote work REVOLUTION in history creating financial opportunities for anyone with a phone, internet, and a little guidance...."
            </p>
          </motion.div>

          {/* Key Points */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16 space-y-8"
          >
            <h3 className="text-2xl font-bold text-white md:text-3xl">Here's why:</h3>

            <div className="space-y-6">
              {/* Point 1 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-green-500 md:h-7 md:w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-base leading-relaxed text-gray-300 md:text-lg">
                  Remote jobs are now <span className="font-semibold text-white">open to global talent</span> — companies don't care where you live. Earn in dollars, pounds, or euros right from your home.
                </p>
              </motion.div>

              {/* Point 2 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-green-500 md:h-7 md:w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-base leading-relaxed text-gray-300 md:text-lg">
                  You <span className="font-semibold text-white">don't need a degree</span> — high-paying roles focus on skills like customer service, virtual assistance, and content creation that can be mastered quickly.
                </p>
              </motion.div>

              {/* Point 3 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-green-500 md:h-7 md:w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-base leading-relaxed text-gray-300 md:text-lg">
                  Remote work gives you <span className="font-semibold text-white">freedom and flexibility</span> — create your own lifestyle and schedule from anywhere.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Call-out Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="rounded-2xl border border-[#FF9500]/30 bg-gradient-to-br from-[#FF9500]/10 to-transparent p-8 text-center backdrop-blur-sm md:p-12"
          >
            <h3 className="mb-6 text-2xl font-bold text-white md:text-3xl">
              But here's the key:
            </h3>
            
            <p className="mb-4 text-lg leading-relaxed text-gray-200 md:text-xl">
              REMOTE JOBS can not Exist without You — Big Companies are looking for people from developing countries to hire instead of paying premium rates locally.
            </p>

            <p className="mb-6 text-base leading-relaxed text-gray-300 md:text-lg">
              All you need is the Right Knowledge and Access to these Opportunities — <span className="font-bold text-white">that's where I come in.</span>
            </p>

            <p className="text-xl font-bold italic text-[#FF9500] md:text-2xl">
              REMOTE JOBS are Goldmine. MELLOREMOTE ACCESS is the pickaxe.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="relative z-10 bg-gradient-to-b from-black via-[#0a0a0a] to-black px-6 py-12 md:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-6 text-center"
          >
            <h2 className="mb-1 text-2xl font-bold text-white md:text-3xl">
              MELLOREMOTE VIP
            </h2>
            <p className="text-sm text-gray-400">
              Packages and Bundles
            </p>
          </motion.div>

          {/* Pricing Cards */}
          <div className="grid gap-4 md:grid-cols-2">
            {/* Job Hacker - Featured */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative flex flex-col overflow-hidden rounded-2xl border-2 border-[#FF9500] bg-gradient-to-b from-[#FF9500]/10 to-black p-6 shadow-2xl shadow-[#FF9500]/20"
            >
              <div className="absolute right-4 top-4 rounded-full bg-[#FF9500] px-2 py-0.5 text-xs font-bold text-black">
                POPULAR
              </div>
              
              <div className="mb-6 text-center">
                <div className="mb-3 text-4xl">🚀</div>
                <h3 className="mb-2 text-xl font-bold text-white">
                  The Remote Job Hacker
                </h3>
                <p className="mb-4 text-xs text-gray-400">
                  How to Beat the System & Get Hired Fast
                </p>
                <div className="mb-1">
                  <span className="text-4xl font-bold text-[#FF9500]">₦50,000</span>
                </div>
                <p className="text-xs text-gray-500">Guaranteed Single Job Value</p>
              </div>

              <div className="mb-6 space-y-3">
                <div className="flex items-start gap-3">
                  <svg className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-300">Full Advanced Course + Everything from Starter Pack</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-300">Granted Job in Less than 3 Months of this Programme</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-300">Priority Job Access (get Job Alerts 24 hours Before Starter)</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-300">Customizable Proposal & Cover Letter Template</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-300">Monthly Live Q&A Sessions or Support Check-ins</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-300">Access to Mini-Course [How to Land Your First Remote Job in 7 Days]</span>
                </div>
              </div>

              <a href="https://chat.whatsapp.com/DstslOBVHWKKoq3MAkOBvm">
                <button className="mt-auto w-full rounded-lg bg-[#FF9500] py-3 font-semibold text-black transition-all hover:bg-[#FFB340]">
                  Join WhatsApp Group
                </button>
              </a>
            </motion.div>

            {/* Goldmine VIP */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative flex flex-col overflow-hidden rounded-2xl border border-gray-800 bg-gradient-to-b from-[#1a1a1a] to-black p-6 transition-all hover:border-[#FF9500]/50"
            >
              <div className="mb-6 text-center">
                <div className="mb-3 text-4xl">🏆</div>
                <h3 className="mb-2 text-xl font-bold text-white">
                  REMOTE GOLDMINE VIP INNER CIRCLE
                </h3>
                <p className="mb-4 text-xs text-gray-400">
                  Unlimited Jobs Value
                </p>
                <div className="mb-1">
                  <span className="text-4xl font-bold text-[#FF9500]">₦100,000</span>
                </div>
                <p className="text-xs text-gray-500">/Unlimited Jobs Value</p>
              </div>

              <div className="mb-6 space-y-3">
                <div className="flex items-start gap-3">
                  <svg className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-300">Full Professional Course + Everything from Hacker Pack</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-300">1-on-1 Personalized Job Application Reviews (Cover Letters, CV, Resume, Proposals)</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-300">Access to Premium High-Paying Remote Jobs not shared Publicly</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-300">Monthly Strategy call or Mentorship Session with Me and other Remote workers</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-300">Job Referral Priority - Your Profile gets sent first when Companies Request New Candidates</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-300">Direct Whatsapp or Chat Access for Instant Support</span>
                </div>
              </div>
                <a href="https://chat.whatsapp.com/DstslOBVHWKKoq3MAkOBvm">
                  <button className="mt-auto w-full rounded-lg border border-[#FF9500] bg-transparent py-3 font-semibold text-[#FF9500] transition-all hover:bg-[#FF9500] hover:text-black">
                Join WhatsApp Group
              </button>
                </a>
              
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
