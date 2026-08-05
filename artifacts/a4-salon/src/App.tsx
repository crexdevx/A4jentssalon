import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Scissors, Sparkles, Wind, Hand, Crown, Star, MapPin, Phone, Clock, Menu, X } from 'lucide-react';
import heroImg from '@assets/file_000000001b688208932afc657ac7302c_1785915993695.png';

const WHATSAPP_URL = "https://wa.me/918486754335?text=Hello%20A4%20Gents%20Salon,%20I%20would%20like%20to%20book%20an%20appointment!";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const slideInLeft = {
  hidden: { opacity: 0, x: -70 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.55, ease: "easeOut" } }
};

const slideInRight = {
  hidden: { opacity: 0, x: 70 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.55, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.13 }
  }
};

const NAV_LINKS = [
  { label: 'HOME',     href: '#home'     },
  { label: 'SERVICES', href: '#services' },
  { label: 'ABOUT US', href: '#about'    },
  { label: 'CONTACT',  href: '#contact'  },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full bg-[#111111]/90 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <a href="#home" className="font-heading font-bold text-2xl tracking-wide text-white">
              A4 GENTS SALON
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-[#F5C518] font-heading font-semibold text-sm tracking-widest transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#F5C518] text-[#111111] px-6 py-2.5 rounded-full font-heading font-bold tracking-wide hover:bg-yellow-400 hover:scale-105 transition-all duration-300"
            >
              BOOK APPOINTMENT
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-[#F5C518] focus:outline-none"
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#111111] border-b border-white/10 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {NAV_LINKS.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 text-lg font-heading font-semibold tracking-widest text-gray-300 hover:text-[#F5C518]"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center mt-4 bg-[#F5C518] text-[#111111] px-6 py-3 rounded-full font-heading font-bold tracking-wide"
              >
                BOOK APPOINTMENT
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function Hero() {
  return (
    /* pt-20 offsets the fixed navbar (h-20 = 80px) so image isn't hidden behind it */
    <section id="home" className="w-full pt-20 bg-[#111111]">
      <img
        src={heroImg}
        alt="A4 Gents Salon — Style That Speaks You"
        className="w-full h-auto object-contain block"
      />
    </section>
  );
}

const services = [
  { id: 1, name: "Haircut", desc: "Precision cuts tailored to your head shape and lifestyle.", icon: <Scissors className="w-6 h-6" /> },
  { id: 2, name: "Hairstyling", desc: "Expert styling using premium products for a lasting look.", icon: <Wind className="w-6 h-6" /> },
  { id: 3, name: "Facials", desc: "Deep cleansing and rejuvenation for clear, healthy skin.", icon: <Sparkles className="w-6 h-6" /> },
  { id: 4, name: "Massage", desc: "Relaxing head and shoulder massages to melt away stress.", icon: <Hand className="w-6 h-6" /> },
  { id: 5, name: "Wedding & Events", desc: "Complete grooming packages for your special day.", icon: <Crown className="w-6 h-6" /> },
];

function Services() {
  return (
    <section id="services" className="py-24 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4 uppercase tracking-wide">
            Our Services
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Crafted for the modern gentleman
          </p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              variants={index % 2 === 0 ? slideInLeft : slideInRight}
              className={`group bg-[#1a1a1a] p-8 border-2 border-white/10 relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-[#F5C518] hover:shadow-[8px_8px_0px_0px_rgba(245,197,24,0.3)] ${index === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-white/10 group-hover:bg-[#F5C518] transition-colors duration-300"></div>
              
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-full border-2 border-white/20 flex items-center justify-center bg-white/5 group-hover:bg-[#F5C518] group-hover:border-[#F5C518] transition-colors duration-300">
                  <div className="text-white group-hover:text-[#111111] transition-colors duration-300">{service.icon}</div>
                </div>
                <div className="text-4xl font-heading font-bold text-white/10 group-hover:text-[#F5C518]/20 transition-colors">
                  0{service.id}
                </div>
              </div>
              
              <h3 className="text-2xl font-heading font-bold text-white mb-3 uppercase tracking-wide">
                {service.name}
              </h3>
              <p className="text-gray-400 leading-relaxed font-sans">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-16 text-center">
          <a 
            href={WHATSAPP_URL} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block border-b-2 border-[#F5C518] text-[#F5C518] font-heading font-bold text-xl uppercase tracking-wider hover:text-white hover:border-white transition-colors pb-1"
          >
            View Full Menu & Pricing →
          </a>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="block text-sm font-bold tracking-widest text-[#F5C518] uppercase mb-4">
              About Us
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 uppercase leading-tight"
            >
              Crafted for the <span className="text-[#F5C518]">Modern</span> Man
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-gray-400 text-lg leading-relaxed mb-6">
              A4 Gents Salon Nalbari is Assam's premier destination for men's grooming. Founded with a passion for precision and style, we bring world-class barbering techniques to the heart of Nalbari.
            </motion.p>
            <motion.p variants={fadeInUp} className="text-gray-400 text-lg leading-relaxed mb-10">
              Our expert stylists — led by Abdul — have mastered the art of the perfect cut, shave, and style. Every client walks out looking sharp and feeling confident.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-[#F5C518] text-[#111111] px-8 py-4 rounded-full font-heading font-bold text-lg uppercase tracking-wider hover:bg-yellow-400 transition-colors duration-300"
              >
                MEET THE TEAM →
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { value: '5+',   label: 'Years Experience' },
              { value: '25+',  label: 'Google Reviews'   },
              { value: '4.5★', label: 'Rating'           },
              { value: '100%', label: 'Satisfaction'     },
            ].map((stat, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="bg-[#1a1a1a] border-2 border-white/10 hover:border-[#F5C518] p-8 text-center transition-colors duration-300"
              >
                <div className="text-4xl font-heading font-bold text-[#F5C518] mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const reviews = [
  { id: 1, name: "Rahima Begum", text: "Good saloon.", rating: 5 },
  { id: 2, name: "Jack Thakuria", text: "The best hairstylist Name Abdul. Must recommend", rating: 5 },
  { id: 3, name: "Priyanka Das", text: "A truly premium experience. The ambiance is immaculate and the staff incredibly professional. My husband looks 10 years younger!", rating: 5 },
];

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}

function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4 uppercase tracking-wide">
            Client Reviews
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            What our clients are saying
          </p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {reviews.map((review) => (
            <motion.div 
              key={review.id}
              variants={fadeInUp}
              className="bg-[#1a1a1a] p-8 border-2 border-white/10 flex flex-col h-full hover:border-[#F5C518] transition-colors duration-300 shadow-[4px_4px_0px_0px_rgba(245,197,24,0.15)]"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="flex space-x-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#F5C518] text-[#F5C518]" />
                  ))}
                </div>
                <GoogleIcon />
              </div>
              
              <p className="text-gray-300 italic flex-grow mb-6 text-lg font-sans">
                "{review.text}"
              </p>
              
              <div className="border-t-2 border-white/10 pt-4 mt-auto">
                <h4 className="font-heading font-bold text-white text-xl uppercase">
                  {review.name}
                </h4>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function MapSection() {
  return (
    <section id="contact" className="py-24 bg-[#111111]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4 uppercase tracking-wide">
            Find Us
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto flex items-center justify-center gap-2">
            <MapPin className="text-[#F5C518] w-5 h-5" />
            Mahendra Narayan Choudhury Balika Mahavidyalaya area, Ward No. 7, Nalbari, Assam
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full border-4 border-[#111111] rounded-2xl overflow-hidden shadow-2xl relative bg-gray-100"
        >
          <iframe
            src="https://maps.google.com/maps?q=Mahendra+Narayan+Choudhury+Balika+Mahavidyalaya,+near+MNC+College,+Ward+No.+7,+Nalbari,+Majdia,+Assam+781353&output=embed"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            className="w-full grayscale filter contrast-125 hover:grayscale-0 transition-all duration-700"
            title="A4 Gents Salon Nalbari Location"
          />
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#111111] text-white pt-20 pb-10 border-t-8 border-[#F5C518]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="lg:col-span-2">
            <h2 className="font-heading font-bold text-4xl tracking-wide mb-6">
              A4 GENTS SALON<br />NALBARI
            </h2>
            <p className="text-gray-400 mb-6 max-w-md text-lg leading-relaxed">
              Elevating men's grooming with precision, style, and a touch of class. Experience the best haircut in town.
            </p>
            <div className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/10 w-fit">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#F5C518] text-[#F5C518]" />
                ))}
              </div>
              <span className="text-sm font-bold">4.5 / 5 · 25 Google Reviews</span>
            </div>
          </div>
          
          <div>
            <h3 className="font-heading font-bold text-xl uppercase tracking-wider mb-6 text-[#F5C518]">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-6 h-6 shrink-0 mt-0.5 text-[#F5C518]" />
                <span className="text-gray-300">Ward No. 7, Nalbari, Majdia,<br />Assam 781353</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-6 h-6 shrink-0 text-[#F5C518]" />
                <a href="tel:08486754335" className="text-gray-300 hover:text-white transition-colors text-lg">
                  084867 54335
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-6 h-6 shrink-0 text-[#F5C518]" />
                <span className="text-gray-300">Open · Closes 9 PM</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-heading font-bold text-xl uppercase tracking-wider mb-6 text-[#F5C518]">Quick Action</h3>
            <p className="text-gray-400 mb-6">Ready to look your best? Skip the wait and secure your spot now.</p>
            <a 
              href={WHATSAPP_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#F5C518] text-[#111111] w-full px-6 py-4 rounded-full font-heading font-bold text-lg uppercase tracking-wider hover:bg-white transition-colors duration-300"
            >
              BOOK ON WHATSAPP →
            </a>
          </div>

        </div>
        
        <div className="pt-8 border-t border-white/10 text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2025 A4 Gents Salon Nalbari. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-[#111111] font-sans selection:bg-[#F5C518] selection:text-[#111111]">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Reviews />
        <MapSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
