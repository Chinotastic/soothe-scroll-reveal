import { Suspense } from 'react'
import { motion } from 'framer-motion'
import FoamRoller3D from './FoamRoller3D'
import ScrollSection from './ScrollSection'
import { Button } from '@/components/ui/button'
import { Star, ArrowRight, CheckCircle } from 'lucide-react'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-header text-header-foreground py-4 px-6 sticky top-0 z-50 shadow-soft">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="font-title text-2xl font-bold"
          >
            FlexRoll
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button variant="secondary" size="sm" className="bg-white/20 hover:bg-white/30 text-white border-white/30">
              Shop Now
            </Button>
          </motion.div>
        </div>
      </header>

      {/* Hero Section with 3D Model */}
      <section className="relative min-h-screen flex flex-col justify-center items-center px-6 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted -z-10" />
        
        {/* Hero Content */}
        <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left z-10"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-title text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight"
            >
              Unlock Your
              <span className="block text-primary">Recovery</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-body text-xl md:text-2xl text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Professional-grade foam roller designed for athletes and fitness enthusiasts who demand the best.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 text-lg">
                Get Yours Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <div className="flex items-center justify-center lg:justify-start gap-2 text-sm text-muted-foreground">
                <div className="flex text-primary">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <span>4.9/5 from 2,847 reviews</span>
              </div>
            </motion.div>
          </motion.div>

          {/* 3D Model */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative"
          >
            <Suspense fallback={
              <div className="w-full h-[400px] md:h-[500px] bg-muted/30 rounded-lg animate-pulse flex items-center justify-center">
                <div className="text-muted-foreground">Loading 3D Model...</div>
              </div>
            }>
              <FoamRoller3D />
            </Suspense>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <ScrollSection className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-title text-4xl md:text-5xl font-bold text-foreground mb-12">
            Why Athletes Choose FlexRoll
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Deep Tissue Relief",
                description: "Advanced texture design penetrates deep into muscle tissue for maximum recovery."
              },
              {
                title: "Professional Grade", 
                description: "Built to withstand intensive daily use in professional training facilities."
              },
              {
                title: "Ergonomic Design",
                description: "Perfectly balanced weight and grip for comfortable, controlled movements."
              }
            ].map((benefit, index) => (
              <ScrollSection key={index} delay={index * 0.2} className="text-center">
                <div className="bg-card p-8 rounded-xl shadow-soft hover:shadow-lg transition-shadow">
                  <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-title text-xl font-bold text-foreground mb-3">
                    {benefit.title}
                  </h3>
                  <p className="font-body text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              </ScrollSection>
            ))}
          </div>
        </div>
      </ScrollSection>

      {/* Real Usage Photos Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <ScrollSection className="text-center mb-16">
            <h2 className="font-title text-4xl md:text-5xl font-bold text-foreground mb-4">
              See It In Action
            </h2>
            <p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto">
              Join thousands of athletes who trust FlexRoll for their recovery routine.
            </p>
          </ScrollSection>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Image 1 */}
            <ScrollSection direction="left" delay={0.2}>
              <div className="group relative overflow-hidden rounded-xl shadow-soft hover:shadow-lg transition-all duration-500">
                <img 
                  src="/lovable-uploads/0c4fdea4-d69a-42e4-b84f-746639fdb42b.png"
                  alt="Athlete using foam roller for leg recovery"
                  className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="font-title text-lg font-semibold">Professional Recovery</p>
                  <p className="font-body text-sm opacity-90">Target specific muscle groups</p>
                </div>
              </div>
            </ScrollSection>

            {/* Image 2 */}
            <ScrollSection direction="up" delay={0.4}>
              <div className="group relative overflow-hidden rounded-xl shadow-soft hover:shadow-lg transition-all duration-500">
                <img 
                  src="/lovable-uploads/44b2e2d2-304e-42d7-9c54-e19c0635844a.png"
                  alt="Athlete performing foam rolling exercise"
                  className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="font-title text-lg font-semibold">Enhanced Flexibility</p>
                  <p className="font-body text-sm opacity-90">Improve range of motion</p>
                </div>
              </div>
            </ScrollSection>

            {/* Image 3 */}
            <ScrollSection direction="right" delay={0.6}>
              <div className="group relative overflow-hidden rounded-xl shadow-soft hover:shadow-lg transition-all duration-500">
                <img 
                  src="/lovable-uploads/a1da0c35-5850-40bb-8f81-033a990c7f7f.png"
                  alt="Athlete using foam roller in gym setting"
                  className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="font-title text-lg font-semibold">Daily Training</p>
                  <p className="font-body text-sm opacity-90">Built for intensive use</p>
                </div>
              </div>
            </ScrollSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <ScrollSection className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-title text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Elevate Your Recovery?
          </h2>
          <p className="font-body text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Join the thousands of athletes who've made FlexRoll their go-to recovery tool.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-12 py-4 text-xl">
              Order Now - $89
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
            <div className="text-sm text-muted-foreground">
              ✓ Free shipping • ✓ 30-day return • ✓ 2-year warranty
            </div>
          </div>
        </div>
      </ScrollSection>

      {/* Footer */}
      <footer className="bg-header text-header-foreground py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="font-title text-2xl font-bold mb-4">FlexRoll</div>
          <p className="font-body text-sm opacity-80">
            Professional recovery tools for serious athletes
          </p>
        </div>
      </footer>
    </div>
  )
}