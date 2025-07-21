import { Suspense } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import FoamRoller3D from './FoamRoller3D'
import ScrollSection from './ScrollSection'
import { Button } from '@/components/ui/button'
import { Star, ArrowRight, CheckCircle } from 'lucide-react'
import { useEffect, useState } from "react";
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { ThreeDViewer } from "@/components/ThreeDViewer";




export default function LandingPage() {
  const [showHeader, setShowHeader] = useState(true);
let lastScrollY = 0;

useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setShowHeader(false); // Scrolling down
    } else {
      setShowHeader(true); // Scrolling up
    }
    lastScrollY = window.scrollY;
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

  return (
    <div className="min-h-screen bg-celeste">
      {/* Header */}
      <header className={`bg-header text-header-foreground py-4 px-6 shadow-soft transition-transform duration-300 ${showHeader ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="max-w-6xl mx-auto flex justify-center items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="font-bohme text-2xl text-celeste"
          >
            <img src="/lovable-uploads/Logo.png" alt="Moahu logo" className="w-24 h-auto object-contain" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
           
          </motion.div>
        </div>
      </header>

      {/* Hero Section with 3D Model */}
      <section className="relative min-h-screen flex flex-col justify-center items-center px-6 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-[#58c9e7] -z-10" />
        
        {/* Hero Content */}
        <div className="max-w-zxl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center items-center text-center px-4"
          >
            <div className="max-w-md w-full">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl sm:text-5xl md:text-6xl font-bohme text-azul mt-12 sm:mt-20 leading-tight"
              >
                Rodillos 100% de caucho reciclado.
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="font-clash text-2xl sm:text-xl md:text-2xl text-gray-700 mt-4 mb-8"
              >
                Recuperá tu cuerpo. Cuidá el planeta.
              </motion.p>

              <div className="flex justify-center">
                <a
                  href="/comprar"
                  className="mt-4 sm:mt-8 bg-[#23326a] hover:bg-[#1b2655] text-white font-clash text-xl sm:text-3xl sm:text-2xl font-semibold py-4 px-12 rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  Comprá ahora
                </a>
              </div>
            </div>
          </motion.div>

          {/* 3D Model */}
          <motion.div>
            <Suspense fallback={
              <div className="w-full h-[400px] md:h-[500px] bg-muted/30 rounded-lg animate-pulse flex items-center justify-center ">
                <div className="text-muted-foreground">Loading 3D Model...</div>
              </div>
            }>
              <ThreeDViewer />

            </Suspense>
          </motion.div>
        </div>
      </section>
    
      <section className="w-full py-20 px-6 bg-[#f7f7f7]">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    
    {/* Video a la izquierda con animación de entrada desde la izquierda */}
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="w-full h-full"
    >
      <video
        src="/lovable-uploads/Video2.mp4"
        controls
        autoPlay
        loop
        muted
        className="w-[450px] h-[600px] object-cover rounded-xl shadow-xl"
      />
    </motion.div>

    {/* Texto a la derecha con animación de entrada desde la derecha */}
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="flex flex-col gap-6 text-2xl text-gray-700 font-clash max-w-lg text-center"
    >
      <p>
        Diseño macizo y firme para elongar y recuperar cada músculo.
      </p>
      <p>
        Ideales para entrenamientos, rehabilitación y prevención de lesiones.
      </p>
      <p>
        Más duraderos que los rodillos convencionales: no se rompen ni se deforman.
      </p>
    </motion.div>

  </div>
</section>



      {/* Real Usage Photos Section */}
      <section className="py-20 px-6 bg-muted/30 relative overflow-hidden">
        {/* Parallax Background Elements */}
        <motion.div 
          className="absolute inset-0 opacity-5"
          style={{ 
            y: useTransform(useScroll().scrollYProgress, [0, 1], [-100, 100])
          }}
        >
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
        </motion.div>

        <div className="max-w-6xl mx-auto relative z-10">
          <ScrollSection direction="scale" className="text-center mb-16">
            <h2 className="font-bohme text-4xl sm:text-5xl md:text-6xl text-azul mb-4 leading-tight">
              Eleva tu<br className="block sm:hidden" /> entrenamiento
            </h2>
          </ScrollSection>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Image 1 - Enhanced with scale animation */}
            <ScrollSection direction="scale" delay={0.2} parallax={true}>
              <motion.div 
                className="group relative overflow-hidden rounded-xl shadow-soft hover:shadow-lg transition-all duration-500"
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
                }}
              >
                <motion.img 
                  src="/lovable-uploads/0c4fdea4-d69a-42e4-b84f-746639fdb42b.png"
                  alt="Deportista usando el rodillo para recuperación"
                  className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Fondo negro translúcido activado con hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />

                {/* Texto visible al hacer hover */}
                <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 translate-y-5 group-hover:translate-y-0 transition duration-300">
                  <p className="font-bohme text-lg font-semibold">Recuperación profesional</p>
                  <p className="font-clash text-sm opacity-90">Activa zonas musculares clave</p>
                </div>
              </motion.div>
            </ScrollSection>


            {/* Image 2 - Enhanced with left slide and parallax */}
            <ScrollSection direction="scale" delay={0.2} parallax={true}>
              <motion.div 
                className="group relative overflow-hidden rounded-xl shadow-soft hover:shadow-lg transition-all duration-500"
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
                }}
              >
                <motion.img 
                  src="/lovable-uploads/foto4.jpeg"
                  alt="Deportista usando el rodillo para recuperación"
                  className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Fondo negro translúcido activado con hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />

                {/* Texto visible al hacer hover */}
                <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 translate-y-5 group-hover:translate-y-0 transition duration-300">
                  <p className="font-bohme text-lg font-semibold">Entrená mas fuerte</p>
                  <p className="font-clash text-sm opacity-90">Recuperá mas rapido</p>
                </div>
              </motion.div>
            </ScrollSection>


            {/* Image 3 - Enhanced with right slide and parallax */}
            <ScrollSection direction="scale" delay={0.2} parallax={true}>
              <motion.div 
                className="group relative overflow-hidden rounded-xl shadow-soft hover:shadow-lg transition-all duration-500"
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
                }}
              >
                <motion.img 
                  src="/lovable-uploads/a1da0c35-5850-40bb-8f81-033a990c7f7f.png"
                  alt="Deportista usando el rodillo para recuperación"
                  className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Fondo negro translúcido activado con hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />

                {/* Texto visible al hacer hover */}
                <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 translate-y-5 group-hover:translate-y-0 transition duration-300">
                  <p className="font-bohme text-lg font-semibold">Hecho para durar</p>
                  <p className="font-clash text-sm opacity-90">Diseñado para resultados</p>
                </div>
              </motion.div>
            </ScrollSection>

          </div>
        </div>
      </section>

      

      <footer className="bg-azul text-white py-10 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          
          {/* Redes sociales */}
          <div className="flex gap-4 items-center invert">
            <a href="https://wa.me/5491123498257" target="_blank" rel="noopener noreferrer">
              <img src="/icons/whatsapp.svg" alt="WhatsApp" className="w-8 h-8 hover:scale-110 transition-transform" />
            </a>
            <a href="https://www.instagram.com/moahu_" target="_blank" rel="noopener noreferrer">
              <img src="/icons/instagram.svg" alt="Instagram" className="w-8 h-8 hover:scale-110 transition-transform" />
            </a>
          </div>

          {/* Eslogan */}
          <p className="text-sm sm:text-base font-clash sm:text-2xl">Recuperá tu cuerpo. Cuidá el planeta.</p>

          {/* Logo */}
          <img src="/lovable-uploads/Logo.png" alt="Moahu Logo" className="w-30 h-16" />
        </div>
      </footer>

    </div>
  )
}