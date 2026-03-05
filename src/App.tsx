/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Instagram, 
  Twitter, 
  Youtube, 
  Mail, 
  ExternalLink, 
  ArrowRight, 
  Star, 
  Camera, 
  Zap,
  TrendingUp,
  Users,
  MessageCircle,
  Menu,
  X,
  ChevronRight
} from 'lucide-react';
import { SocialStat, Project, Brand } from './types';

const stats: SocialStat[] = [
  { platform: 'Instagram', followers: '850K', engagement: '4.2%', icon: 'Instagram' },
  { platform: 'TikTok', followers: '1.2M', engagement: '8.5%', icon: 'Zap' },
  { platform: 'YouTube', followers: '320K', engagement: '5.1%', icon: 'Youtube' },
];

const projects: Project[] = [
  { id: 1, title: 'Summer Glow Campaign', category: 'Beauty', imageUrl: 'https://picsum.photos/seed/beauty1/800/1000' },
  { id: 2, title: 'Urban Tech Essentials', category: 'Lifestyle', imageUrl: 'https://picsum.photos/seed/tech1/800/1000' },
  { id: 3, title: 'Sustainable Fashion Week', category: 'Fashion', imageUrl: 'https://picsum.photos/seed/fashion1/800/1000' },
  { id: 4, title: 'Luxury Travel Diary', category: 'Travel', imageUrl: 'https://picsum.photos/seed/travel1/800/1000' },
  { id: 5, title: 'Gen-Z Finance Series', category: 'Education', imageUrl: 'https://picsum.photos/seed/finance1/800/1000' },
  { id: 6, title: 'Fitness Revolution', category: 'Wellness', imageUrl: 'https://picsum.photos/seed/fitness1/800/1000' },
];

const brands: Brand[] = [
  { name: 'Nike', logo: 'https://picsum.photos/seed/nike/200/100' },
  { name: 'Glossier', logo: 'https://picsum.photos/seed/glossier/200/100' },
  { name: 'Apple', logo: 'https://picsum.photos/seed/apple/200/100' },
  { name: 'Prada', logo: 'https://picsum.photos/seed/prada/200/100' },
  { name: 'Spotify', logo: 'https://picsum.photos/seed/spotify/200/100' },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-brand-black selection:bg-brand-orange selection:text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-brand-black/80 backdrop-blur-md py-4' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-display tracking-tighter"
          >
            YANA <span className="text-brand-orange">JAIN</span>
          </motion.div>
          
          <div className="hidden md:flex gap-12 items-center">
            {['Work', 'Stats', 'About', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-sm font-semibold uppercase tracking-widest hover:text-brand-orange transition-colors"
              >
                {item}
              </a>
            ))}
            <button className="bg-white text-black px-6 py-2 rounded-full text-sm font-bold hover:bg-brand-orange hover:text-white transition-all">
              BOOK NOW
            </button>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-brand-black flex flex-col items-center justify-center gap-8 pt-20"
          >
            {['Work', 'Stats', 'About', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-4xl font-display uppercase"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-black/50 to-brand-black" />
          <img 
            src="https://picsum.photos/seed/yana-hero/1920/1080" 
            alt="Yana Jain" 
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1 border border-white/20 rounded-full text-xs font-bold tracking-[0.3em] uppercase mb-6 bg-white/5 backdrop-blur-sm">
              Digital Creator & Influencer
            </span>
            <h1 className="text-[15vw] md:text-[12vw] font-display leading-[0.85] uppercase tracking-tighter mb-4">
              YANA <br />
              <span className="text-stroke">JAIN</span>
            </h1>
            <p className="max-w-xl mx-auto text-lg md:text-xl text-white/70 font-light leading-relaxed mb-10">
              Defining the next generation of lifestyle, fashion, and tech through a 18-year-old's lens.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="group bg-brand-orange text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:scale-105 transition-transform">
                VIEW PORTFOLIO <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <div className="flex gap-6 mt-4 sm:mt-0">
                <Instagram className="w-6 h-6 hover:text-brand-orange cursor-pointer transition-colors" />
                <Zap className="w-6 h-6 hover:text-brand-orange cursor-pointer transition-colors" />
                <Youtube className="w-6 h-6 hover:text-brand-orange cursor-pointer transition-colors" />
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30"
        >
          <div className="w-[1px] h-20 bg-gradient-to-b from-white/30 to-transparent mx-auto" />
          <span className="text-[10px] uppercase tracking-widest mt-4 block">Scroll</span>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-24 px-6 bg-white text-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {stats.map((stat, idx) => (
              <motion.div 
                key={stat.platform}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="text-center md:text-left border-b md:border-b-0 md:border-r border-black/10 last:border-0 pb-8 md:pb-0 md:pr-12"
              >
                <div className="flex items-center justify-center md:justify-start gap-3 mb-4 text-brand-orange">
                  {stat.platform === 'Instagram' && <Instagram size={20} />}
                  {stat.platform === 'TikTok' && <Zap size={20} />}
                  {stat.platform === 'YouTube' && <Youtube size={20} />}
                  <span className="text-xs font-bold uppercase tracking-widest">{stat.platform}</span>
                </div>
                <div className="text-6xl md:text-7xl font-display mb-2">{stat.followers}</div>
                <div className="flex items-center justify-center md:justify-start gap-2 text-black/50 font-semibold">
                  <TrendingUp size={16} />
                  <span>{stat.engagement} Engagement Rate</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden">
              <img 
                src="https://picsum.photos/seed/yana-about/800/1000" 
                alt="Yana Jain" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-brand-orange rounded-full flex items-center justify-center p-8 text-center rotate-12 animate-float">
              <span className="font-display text-2xl leading-none">18 YEARS YOUNG</span>
            </div>
          </motion.div>

          <div>
            <h2 className="text-sm font-bold text-brand-orange tracking-[0.4em] uppercase mb-6">The Story</h2>
            <h3 className="text-5xl md:text-7xl font-display uppercase leading-none mb-8">
              Authentic. <br />
              Bold. <br />
              Digital Native.
            </h3>
            <p className="text-xl text-white/70 font-light leading-relaxed mb-8">
              At 18, Yana Jain isn't just following trends—she's creating them. With a unique blend of high-fashion aesthetics and relatable Gen-Z storytelling, she has built a community of over 2 million followers across platforms.
            </p>
            <div className="grid grid-cols-2 gap-8 mb-10">
              <div>
                <h4 className="font-bold text-white mb-2">Based In</h4>
                <p className="text-white/60">New Delhi / Mumbai</p>
              </div>
              <div>
                <h4 className="font-bold text-white mb-2">Specialties</h4>
                <p className="text-white/60">Fashion, Tech, Lifestyle</p>
              </div>
            </div>
            <button className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                <ArrowRight />
              </div>
              <span className="font-bold uppercase tracking-widest text-sm">Read Full Bio</span>
            </button>
          </div>
        </div>
      </section>

      {/* Featured Work / Gallery */}
      <section id="work" className="py-32 px-6 bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <h2 className="text-sm font-bold text-brand-orange tracking-[0.4em] uppercase mb-4">Portfolio</h2>
              <h3 className="text-5xl md:text-7xl font-display uppercase">Featured <br /> Campaigns</h3>
            </div>
            <p className="max-w-md text-white/50 text-right">
              A curated selection of brand collaborations and creative projects that define my visual language.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-6">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-500">
                      <ExternalLink size={24} />
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[10px] font-bold text-brand-orange uppercase tracking-widest mb-2 block">{project.category}</span>
                    <h4 className="text-xl font-bold">{project.title}</h4>
                  </div>
                  <ChevronRight className="text-white/20 group-hover:text-brand-orange transition-colors" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-24 border-y border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
          <span className="text-xs font-bold text-white/30 uppercase tracking-[0.5em]">Trusted By Global Brands</span>
        </div>
        <div className="flex whitespace-nowrap gap-20 animate-marquee">
          {[...brands, ...brands].map((brand, idx) => (
            <div key={idx} className="flex items-center gap-4 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer">
              <img src={brand.logo} alt={brand.name} className="h-12 w-auto object-contain" referrerPolicy="no-referrer" />
              <span className="font-display text-2xl uppercase">{brand.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
          >
            <h2 className="text-sm font-bold text-brand-orange tracking-[0.4em] uppercase mb-8">Get In Touch</h2>
            <h3 className="text-6xl md:text-8xl font-display uppercase mb-12 leading-none">
              Let's Create <br />
              <span className="text-stroke">Together</span>
            </h3>
            
            <div className="glass-card p-12 mb-12">
              <p className="text-2xl font-light mb-8">For business inquiries, brand collaborations, and press:</p>
              <a 
                href="mailto:hello@yanajain.com" 
                className="text-3xl md:text-5xl font-display text-brand-orange hover:underline underline-offset-8"
              >
                HELLO@YANAJAIN.COM
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-12">
              <div className="text-center">
                <div className="text-white/40 text-xs uppercase tracking-widest mb-4">Management</div>
                <p className="font-bold">Elite Creators Agency</p>
              </div>
              <div className="text-center">
                <div className="text-white/40 text-xs uppercase tracking-widest mb-4">Socials</div>
                <div className="flex gap-6">
                  <Instagram className="hover:text-brand-orange cursor-pointer" />
                  <Zap className="hover:text-brand-orange cursor-pointer" />
                  <Youtube className="hover:text-brand-orange cursor-pointer" />
                  <Twitter className="hover:text-brand-orange cursor-pointer" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-sm text-white/30">
            © 2024 YANA JAIN. ALL RIGHTS RESERVED.
          </div>
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-white/50">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Media Kit</a>
          </div>
          <div className="text-sm font-display">
            MADE WITH <span className="text-brand-orange">PASSION</span>
          </div>
        </div>
      </footer>

      {/* Custom Marquee Style */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
}
