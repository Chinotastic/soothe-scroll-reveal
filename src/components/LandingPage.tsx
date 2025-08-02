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
import { Link } from 'react-router-dom';




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
    <div className="min-h-screen bg-celeste overflow-x-hidden">
      {/* Header */}
      <header className={`fixed top-0 left-0 w-full z-50 bg-header text-header-foreground py-4 px-6 shadow-soft transition-transform duration-300`}>
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
      <section className="relative flex flex-col justify-center items-center px-6 overflow-hidden py-12 sm:py-24 ">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-[#58c9e7] -z-10" />
        
        {/* Hero Content */}
        <div className="max-w-zxl mx-auto w-full grid lg:grid-cols-2 gap-1 items-center ">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center items-start text-left px-4 sm:items-center sm:text-center text-center "
          >
            <div className="w-full max-w-3xl mx-auto">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-3xl sm:text-5xl md:text-6xl font-bohme text-azul mt-6 sm:mt-18 leading-tight max-w-3xl"
              >
                <span className="block">Rodillos 100% de caucho</span>
                <span className="block">reciclado.</span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="font-clash text-2xl sm:text-xl md:text-3xl text-gray-700 mt-4 mb-8"
              >
                Recuperá tu cuerpo. Cuidá el planeta.
              </motion.p>

              <div className="flex justify-center">
                <a
                href="https://moahu3.mitiendanube.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 sm:mt-8 bg-[#23326a] hover:bg-[#1b2655] text-white font-clash text-xl sm:text-3xl font-semibold py-4 px-12 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Comprar ahora
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
      <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      >
      <section className="py-16 bg-[#FAF9F6]">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bohme font-bold text-[#23326a]">
            ¿Por que elegir Moahu?
          </h2>
          <p className="mt-2 text-xl font-clash text-gray-600">
            Cada rodillo está diseñado pensando en tu rendimiento y en el cuidado del medio ambiente
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-8">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="relative rounded-xl overflow-hidden shadow-lg bg-cover bg-center w-[80%] aspect-square mx-auto sm:w-full sm:aspect-auto sm:h-[400px]"
            style={{ backgroundImage: "url('/lovable-uploads/foto1.png')" }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center p-4">
              <div className="bg-white p-3 rounded-full mb-4">
                <span className="text-[#23326a] text-2xl">🛡️</span>
              </div>
              <h3 className="text-white font-clash font-bold text-lg">Firme y resistente</h3>
              <p className="text-gray-200 font-clash text-sm mt-2">
                Soporta hasta 150kg. Diseñado para durar años de uso intensivo.
              </p>
            </div>
          </motion.div>


          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="relative rounded-xl overflow-hidden shadow-lg bg-cover bg-center w-[80%] aspect-square mx-auto sm:w-full sm:aspect-auto sm:h-[400px]"
            style={{ backgroundImage: "url('/lovable-uploads/foto6.jpeg')" }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center p-4">
              <div className="bg-white p-3 rounded-full mb-4">
                <span className="text-[#23326a] text-2xl">♻️</span>
              </div>
              <h3 className="text-white font-clash font-bold text-lg">Hecho con caucho reciclado</h3>
              <p className="text-gray-200 font-clash text-sm mt-2">
                100% materiales reciclados. Cuidás tu cuerpo y el planeta.
              </p>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="relative rounded-xl overflow-hidden shadow-lg bg-cover bg-center w-[80%] aspect-square mx-auto sm:w-full sm:aspect-auto sm:h-[400px]"
            style={{ backgroundImage: "url('/lovable-uploads/foto3.png')" }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center p-4">
              <div className="bg-white p-3 rounded-full mb-4">
                <span className="text-[#23326a] text-2xl">❤️</span>
              </div>
              <h3 className="text-white font-clash font-bold text-lg">Ideal para recuperación</h3>
              <p className="text-gray-200 font-clash text-sm mt-2">
                Mejora la circulación y reduce la tensión muscular despues del entrenamiento.
              </p>
            </div>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="relative rounded-xl overflow-hidden shadow-lg bg-cover bg-center w-[80%] aspect-square mx-auto sm:w-full sm:aspect-auto sm:h-[400px]"
            style={{ backgroundImage: "url('/lovable-uploads/foto4.jpeg')" }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center p-4">
              <div className="bg-white p-3 rounded-full mb-4">
                <span className="text-[#23326a] text-2xl">👤</span>
              </div>
              <h3 className="text-white font-clash font-bold text-lg">Diseñado por atletas</h3>
              <p className="text-gray-200 font-clash text-sm mt-2">
                Creados por profesionales del deporte que entienden tus necesidades.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      </motion.div>
      
        <section className="py-20 px-6 bg-celeste">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-bohme text-3xl sm:text-5xl text-azul">
              Como usar tu rodillo Moahu
            </h2>
            <p className="mt-2 text-xl text-gray-600 font-clash">
              Técnicas simples y efectivas para maximizar tu recuperación muscular
            </p>
          </motion.div>


          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto ">
            {[
              {
                title: "Gemelos",
                desc: "Ideal después de correr o entrenar. Mejora la circulación y reduce la fatiga muscular.",
                video: "/videos/gemelos.mp4",
              },
              {
                title: "Isquiotibiales",
                desc: "Perfecto para aliviar tensiones después de largas jornadas de trabajo o entrenamiento.",
                video: "/videos/isquios.mp4",
              },
              {
                title: "Glúteos",
                desc: "Esencial para runners y ciclistas. Mantiene la flexibilidad y previene lesiones.",
                video: "/videos/gluteos.mp4",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="bg-gray-100 rounded-xl overflow-hidden shadow-lg flex flex-col"
              >
                <div className="relative group aspect-[4/5] sm:aspect-[16/9] lg:aspect-[9/10]">
                  <video
                    src={item.video}
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-clash font-bold text-xl text-azul">{item.title}</h3>
                  <p className="text-gray-600 text-base mt-2">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Sobre Moahu Section */}
        <section className="py-20 px-6 bg-[#FAF9F6]">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Texto */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="font-bohme text-3xl sm:text-5xl text-azul mb-6">
                Sobre Moahu
              </h2>
              <p className="text-xl text-gray-700 font-clash mb-8">
                Nacimos de la pasión por el deporte y el compromiso con el medio ambiente.
                Somos atletas que entendemos la importancia de una buena recuperación.
              </p>

              {/* Lista de valores */}
              <ul className="space-y-6">
                <motion.li
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex items-start"
                >
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4 text-blue-500 text-xl">
                    ❤️
                  </span>
                  <div>
                    <h3 className="font-clash font-bold text-2xl text-azul">Nuestra misión</h3>
                    <p className="text-gray-700 font-clash text-lg">
                      Ayudar a los atletas a recuperarse mejor mientras cuidamos el planeta con productos sustentables.
                    </p>
                  </div>
                </motion.li>

                <motion.li
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="flex items-start"
                >
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-4 text-green-500 text-xl">
                    ♻️
                  </span>
                  <div>
                    <h3 className="font-clash font-bold text-2xl text-azul">Compromiso ambiental</h3>
                    <p className="text-gray-700 font-clash text-lg">
                      Cada rodillo está hecho con caucho 100% reciclado, reduciendo el impacto ambiental sin comprometer la calidad.
                    </p>
                  </div>
                </motion.li>

                <motion.li
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="flex items-start"
                >
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center mr-4 text-pink-500 text-xl">
                    🏋️
                  </span>
                  <div>
                    <h3 className="font-clash font-bold text-2xl text-azul">Diseñado por atletas</h3>
                    <p className="text-gray-700 font-clash text-lg">
                      Nuestro equipo incluye fisioterapeutas, runners y entrenadores que testean cada producto.
                    </p>
                  </div>
                </motion.li>
              </ul>
            </motion.div>

            {/* Imagen */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="flex flex-col items-center"
            >
              <div className="bg-white rounded-xl shadow-lg overflow-hidden p-4">
                <img
                  src="/lovable-uploads/fotovera.jpeg"
                  alt="Atleta usando rodillo Moahu"
                  className="rounded-lg object-cover w-full h-auto max-h-[500px] lg:max-h-[500px] mx-auto"
                />
                <p className="text-center text-gray-600 italic mt-4 font-clash">
                  "Creemos que cuidar tu cuerpo y el planeta van de la mano"
                </p>
                <p className="text-center text-gray-500 text-sm mt-1">- Moahu</p>
              </div>
            </motion.div>
          </div>
        </section>



        {/* Contactanos Section */}
        <section className="py-20 px-6 bg-celeste">
          <div className="max-w-7xl mx-auto">
            {/* Título */}
            <div className="text-center mb-12">
              <h2 className="font-bohme text-3xl sm:text-5xl text-azul">Contactanos</h2>
              <p className="mt-2 text-xl text-gray-600 font-clash">
                ¿Tenés alguna pregunta? Estamos acá para ayudarte
              </p>
            </div>

            {/* Contenido */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* Columna izquierda - Métodos de contacto */}
              <div className="space-y-8">
                
                {/* WhatsApp */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-500 text-2xl">
                    💬
                  </div>
                  <div>
                    <h3 className="font-clash font-bold text-lg text-azul">WhatsApp</h3>
                    <p className="text-gray-600">+54 9 11 23498257</p>
                    <a
                      href="https://wa.me/5491123498257"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline text-sm"
                    >
                      Enviar mensaje
                    </a>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center text-pink-500 text-2xl">
                    📷
                  </div>
                  <div>
                    <h3 className="font-clash font-bold text-lg text-azul">Instagram</h3>
                    <p className="text-gray-600">@Moahu_</p>
                    <a
                      href="https://www.instagram.com/moahu_"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline text-sm"
                    >
                      Seguinos
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-500 text-2xl">
                    📧
                  </div>
                  <div>
                    <h3 className="font-clash font-bold text-lg text-azul">Email</h3>
                    <p className="text-gray-600">moahuboards@gmail.com</p>
                    <a
                      href="mailto:moahuboards@gmail.com"
                      className="text-blue-500 hover:underline text-sm"
                    >
                      Escribinos
                    </a>
                  </div>
                </div>
              </div>

              {/* Columna derecha - Formulario */}
              <div className="bg-gray-50 rounded-xl shadow-lg p-8">
                <h3 className="font-clash font-bold text-lg text-azul mb-6">
                  ¿Sos una empresa y querés comprar por mayor?
                </h3>

                <form
                  action="https://formsubmit.co/moahuboards@gmail.com"
                  method="POST"
                  className="space-y-6"
                >
                  <input type="hidden" name="_subject" value="ALERTA MAYORISTA" />
                  <input type="hidden" name="_captcha" value="false" />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <input
                      type="text"
                      name="Nombre"
                      placeholder="Tu nombre"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300"
                    />
                    <input
                      type="email"
                      name="Email"
                      placeholder="tu@email.com"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300"
                    />
                  </div>

                  <textarea
                    name="Mensaje"
                    placeholder="¿En qué podemos ayudarte?"
                    rows={4}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300"
                  ></textarea>

                  <button
                    type="submit"
                    className="w-full bg-azul text-white py-3 rounded-lg"
                  >
                    Enviar mensaje
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      <a
        href="https://moahu3.mitiendanube.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#23326a] hover:bg-[#1b2655] text-white font-clash text-lg sm:text-xl font-semibold py-3 px-6 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
      >
        Comprar ahora
      </a>

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
          <p className="text-base sm:text-xl md:text-3xl font-clash">Recuperá tu cuerpo. Cuidá el planeta.</p>

          {/* Logo */}
          <img src="/lovable-uploads/Logo.png" alt="Moahu Logo" className="w-30 h-16" />
        </div>
      </footer>

    </div>
  )
}