import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const socialLinks = [
  { name: 'GitHub', icon: 'github', href: '#' },
  { name: 'LinkedIn', icon: 'linkedin', href: '#' },
  { name: 'Twitter', icon: 'twitter', href: '#' },
  { name: 'YouTube', icon: 'youtube', href: '#' },
];

interface StatItemProps {
  value: string;
  label: string;
}

const StatItem = ({ value, label }: StatItemProps) => (
  <div className="flex flex-col items-center md:items-start">
    <span className="text-4xl md:text-5xl font-bold">{value}</span>
    <span className="text-xs md:text-sm text-muted-foreground">{label}</span>
  </div>
);

export default function Hero() {
  return (
    <section id="home" className="min-h-screen pt-24 pb-12 flex items-center relative">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Left Column - Text Content */}
        <motion.div 
          className="flex flex-col justify-center space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.span 
            className="text-lg md:text-xl font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Software Developer
          </motion.span>
          
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Hello I'm <br />
            <span className="text-green-accent">Luke Coleman</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg text-muted-foreground max-w-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            I excel at crafting elegant digital experiences and
            I am proficient in various programming languages and
            technologies.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap items-center gap-4 pt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Button 
              className="bg-transparent border border-green-accent text-green-accent hover:bg-green-accent/10 flex items-center gap-2"
            >
              DOWNLOAD CV
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            </Button>
            
            <div className="flex items-center gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="w-10 h-10 rounded-full border border-muted flex items-center justify-center text-muted-foreground hover:border-green-accent hover:text-green-accent transition-colors"
                  aria-label={link.name}
                >
                  {link.icon === 'github' && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                  )}
                  {link.icon === 'linkedin' && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                  )}
                  {link.icon === 'twitter' && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                  )}
                  {link.icon === 'youtube' && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
                  )}
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
        
        {/* Right Column - Profile Image */}
        <motion.div 
          className="flex items-center justify-center relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <div className="relative">
            {/* Animated Circle */}
            <svg 
              width="360" 
              height="360" 
              viewBox="0 0 360 360" 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full"
            >
              <circle 
                cx="180" 
                cy="180" 
                r="175" 
                fill="none" 
                stroke="#00f295" 
                strokeWidth="2" 
                strokeDasharray="10, 10" 
                className="animate-rotate-dash" 
              />
            </svg>
            
            {/* Profile Image */}
            <div className="w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden relative z-10">
              <img 
                src="/assets/images/profile.svg" 
                alt="Luke Coleman" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Stats at the bottom */}
      <div className="container mx-auto px-4 mt-12 lg:mt-0">
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <StatItem value="12" label="Years of experience" />
          <StatItem value="26" label="Projects completed" />
          <StatItem value="8" label="Technologies mastered" />
          <StatItem value="500+" label="Code commits" />
        </motion.div>
      </div>
    </section>
  );
}