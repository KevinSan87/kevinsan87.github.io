"use client";

import React, { useRef, useState, useEffect } from 'react';
import { Terminal, Code2, User, Cpu, Github, Mail, ExternalLink, Monitor, Globe, Database, Layers, Coffee, Activity, Star, GitBranch, CheckCircle2 } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import profileImg from '@/assets/profile.jpg';

const ScreenContent = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const stackRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const activityRef = useRef<HTMLDivElement>(null);

  const [githubStats, setGithubStats] = useState({
    repos: 15,
    followers: 0,
    contributions: "2.7k+"
  });

  useEffect(() => {
    const fetchGithubData = async () => {
      try {
        const response = await fetch('https://api.github.com/users/KevinSan87');
        const data = await response.json();
        if (data.public_repos) {
          setGithubStats(prev => ({
            ...prev,
            repos: data.public_repos,
            followers: data.followers
          }));
        }
      } catch (error) {
        console.error("Erro ao buscar dados do GitHub:", error);
      }
    };

    fetchGithubData();
  }, []);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const codeLines = [
    { label: "name", value: "'Kevin de Santana Carvalho'", color: "text-emerald-400" },
    { label: "role", value: "'Software Engineering Student'", color: "text-emerald-400" },
    { label: "semester", value: "'6º Semestre'", color: "text-emerald-400" },
    { label: "focus", value: "'Fullstack Development'", color: "text-emerald-400" },
    { label: "status", value: "'Building robust systems'", color: "text-emerald-400" },
  ];

  const stack = [
    'Java', 
    'Node.js', 
    'TypeScript', 
    'SQL', 
    'C / C++', 
    'HTML', 
    'Git & GitHub', 
    'React', 
    'Web Architecture'
  ];

  return (
    <div className="h-full w-full bg-[#020617] text-slate-300 font-mono text-[8px] md:text-sm overflow-hidden flex flex-col border border-slate-800/50 rounded-sm">
      {/* Top Bar - VS Code Style */}
      <div className="bg-[#0f172a] p-1 md:p-2 flex items-center justify-between border-b border-slate-800/50 shrink-0">
        <div className="flex gap-1 md:gap-1.5">
          <div className="w-1 h-1 md:w-2.5 md:h-2.5 rounded-full bg-[#ff5f56]" />
          <div className="w-1 h-1 md:w-2.5 md:h-2.5 rounded-full bg-[#ffbd2e]" />
          <div className="w-1 h-1 md:w-2.5 md:h-2.5 rounded-full bg-[#27c93f]" />
        </div>
        <div className="text-[6px] md:text-[10px] text-slate-500 flex items-center gap-1 md:gap-2 truncate px-1">
          <Code2 size={7} className="text-blue-400 shrink-0 md:w-[10px]" />
          <span className="truncate">portfolio.ts</span>
        </div>
        <div className="w-2 md:w-10" />
      </div>

      <div className="flex-1 flex flex-col-reverse md:flex-row overflow-hidden">
        {/* Navigation Bar */}
        <div className="w-full md:w-14 h-8 md:h-auto bg-[#0f172a] border-t md:border-t-0 md:border-r border-slate-800/50 flex md:flex-col items-center justify-around md:justify-start py-0 md:py-6 gap-0 md:gap-6 text-slate-500 shrink-0">
          <button onClick={() => scrollToSection(aboutRef)} className="p-1.5 md:p-2 hover:text-blue-400 transition-colors">
            <User size={12} className="md:w-[18px] md:h-[18px]" />
          </button>
          <button onClick={() => scrollToSection(projectsRef)} className="p-1.5 md:p-2 hover:text-blue-400 transition-colors">
            <Layers size={12} className="md:w-[18px] md:h-[18px]" />
          </button>
          <button onClick={() => scrollToSection(stackRef)} className="p-1.5 md:p-2 hover:text-blue-400 transition-colors">
            <Database size={12} className="md:w-[18px] md:h-[18px]" />
          </button>
          <button onClick={() => scrollToSection(activityRef)} className="p-1.5 md:p-2 hover:text-blue-400 transition-colors">
            <Activity size={12} className="md:w-[18px] md:h-[18px]" />
          </button>
          <button onClick={() => scrollToSection(contactRef)} className="p-1.5 md:p-2 hover:text-blue-400 transition-colors">
            <Github size={12} className="md:w-[18px] md:h-[18px]" />
          </button>
        </div>

        {/* Main Editor Area */}
        <ScrollArea className="flex-1 bg-[#020617]">
          <div className="p-2 md:p-10 max-w-full mx-auto overflow-x-hidden">
            
            {/* Profile Header */}
            <motion.div 
              ref={aboutRef}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col md:flex-row items-center gap-2 md:gap-8 mb-4 md:mb-12"
            >
              <div className="relative">
                <Avatar className="h-12 w-12 md:h-32 md:w-32 border-2 border-slate-800 overflow-hidden">
                  <AvatarImage src={profileImg} alt="Kevin" className="object-cover object-top scale-125" />
                  <AvatarFallback className="bg-slate-900 text-slate-400 text-[8px] md:text-2xl">KC</AvatarFallback>
                </Avatar>
                <div className="absolute bottom-0 right-0 w-2 h-2 md:w-5 md:h-5 bg-emerald-500 border border-[#020617] rounded-full"></div>
              </div>
              
              <div className="text-center md:text-left">
                <h1 className="text-[10px] md:text-3xl font-black text-white tracking-tight leading-tight">Kevin de Santana Carvalho</h1>
                <p className="text-blue-400 font-medium mb-1 md:mb-4 text-[7px] md:text-lg">Software Engineering Student</p>
                <div className="flex flex-wrap justify-center md:justify-start gap-1 md:gap-2">
                  <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20 text-[5px] md:text-xs px-1 py-0">Fullstack</Badge>
                  <Badge className="bg-purple-500/10 text-purple-400 border-purple-500/20 text-[5px] md:text-xs px-1 py-0">Learning 🚀</Badge>
                </div>
              </div>
            </motion.div>

            {/* Code Block Section */}
            <section className="mb-4 md:mb-12 bg-slate-900/30 p-2 md:p-6 rounded-lg border border-slate-800/50 overflow-hidden">
              <div className="flex items-center gap-1 text-blue-400 mb-1 md:mb-4 text-[6px] md:text-sm">
                <span className="text-slate-600">1</span>
                <span className="text-purple-400">const</span>
                <span className="text-yellow-400">dev</span>
                <span className="text-slate-300">=</span>
                <span className="text-slate-300">{"{"}</span>
              </div>
              
              <div className="pl-2 md:pl-8 space-y-0.5 md:space-y-1">
                {codeLines.map((line, idx) => (
                  <div key={line.label} className="flex items-start gap-1 md:gap-4 text-[6px] md:text-sm">
                    <span className="text-slate-600 w-2 md:w-4 shrink-0">{idx + 2}</span>
                    <span className="text-blue-300 shrink-0">{line.label}:</span>
                    <span className={`${line.color} break-all`}>{line.value}</span>
                  </div>
                ))}
              </div>
              
              <div className="text-slate-300 mt-0.5 text-[6px] md:text-sm">
                <span className="text-slate-600">{codeLines.length + 2}</span> {"}"};
              </div>
            </section>

            {/* About Section */}
            <section className="mb-4 md:mb-12">
              <h2 className="text-[9px] md:text-xl font-bold text-white mb-2 md:mb-6 flex items-center gap-1.5">
                <Terminal size={10} className="text-emerald-400 md:w-5 md:h-5" /> SOBRE
              </h2>
              <div className="space-y-2 text-slate-400 leading-relaxed text-[7px] md:text-base">
                <p>Estudante de Software com foco em Backend, regras de negócio e banco de dados.</p>
                <ul className="space-y-1 pl-1">
                  {['Lógica e regras de negócio', 'Banco de Dados Relacional', 'Integração Fullstack'].map((item) => (
                    <li key={item} className="flex items-center gap-1 text-slate-300">
                      <div className="w-0.5 h-0.5 bg-emerald-500 rounded-full shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Projects Section */}
            <section ref={projectsRef} className="mb-4 md:mb-12">
              <h2 className="text-[9px] md:text-xl font-bold text-white mb-2 md:mb-6 flex items-center gap-1.5">
                <Layers size={10} className="text-purple-400 md:w-5 md:h-5" /> PROJETOS
              </h2>
              <div className="space-y-2 md:space-y-4">
                <div className="p-2 md:p-6 rounded-lg border border-slate-800 bg-slate-900/40">
                  <div className="flex justify-between items-start mb-1 md:mb-4">
                    <h3 className="font-bold text-[8px] md:text-xl text-blue-400">LinkStudio</h3>
                    <ExternalLink size={8} className="text-slate-500 md:w-4 md:h-4" />
                  </div>
                  <p className="text-[7px] md:text-base text-slate-300 mb-2">Plataforma de Agendamento.</p>
                  <div className="flex flex-wrap gap-1">
                    {['SQL', 'React'].map((t) => (
                      <span key={t} className="text-[5px] md:text-xs px-1 bg-slate-800 rounded text-slate-400">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Stack Section */}
            <section ref={stackRef} className="mb-4 md:mb-12">
              <h2 className="text-[9px] md:text-xl font-bold text-white mb-2 md:mb-6 flex items-center gap-1.5">
                <Cpu size={10} className="text-blue-400 md:w-5 md:h-5" /> STACK
              </h2>
              <div className="grid grid-cols-2 gap-1 md:gap-4">
                {stack.slice(0, 6).map((tech) => (
                  <div key={tech} className="flex items-center gap-1 p-1 md:p-3 rounded bg-slate-900/50 border border-slate-800/50 text-[6px] md:text-sm">
                    <div className="w-0.5 h-0.5 bg-blue-500 rounded-full shrink-0"></div> {tech}
                  </div>
                ))}
              </div>
            </section>

            {/* GitHub Activity Section */}
            <section ref={activityRef} className="mb-4 md:mb-12">
              <h2 className="text-[9px] md:text-xl font-bold text-white mb-2 md:mb-6 flex items-center gap-1.5">
                <Activity size={10} className="text-emerald-400 md:w-5 md:h-5" /> ATIVIDADE
              </h2>
              <div className="p-2 md:p-6 rounded-lg border border-slate-800 bg-[#0f172a] overflow-hidden">
                <div className="w-full overflow-x-auto scrollbar-hide">
                  <img 
                    src="https://ghchart.rshah.org/39d353/KevinSan87" 
                    alt="GitHub Chart"
                    className="min-w-[240px] w-full h-auto filter invert-[0.85] hue-rotate-[140deg] brightness-[0.6] contrast-[1.4] mix-blend-screen"
                  />
                </div>
              </div>
            </section>

            {/* Contact Section */}
            <section ref={contactRef} className="pb-2 md:pb-12">
              <div className="flex flex-wrap gap-1 md:gap-4">
                <a href="https://github.com/KevinSan87" target="_blank" className="flex items-center gap-1 px-2 py-1 rounded-full bg-slate-800 text-[6px] md:text-sm">
                  <Github size={8} /> GitHub
                </a>
                <a href="mailto:Kevindesantana87@gmail.com" className="flex items-center gap-1 px-2 py-1 rounded-full bg-blue-600 text-[6px] md:text-sm">
                  <Mail size={8} /> Contato
                </a>
              </div>
            </section>
          </div>
        </ScrollArea>
      </div>

      {/* Footer Bar */}
      <div className="bg-blue-600 text-white px-2 py-0.5 flex items-center justify-between text-[5px] md:text-[10px] font-bold shrink-0">
        <span>main*</span>
        <span className="opacity-90">TypeScript JSX</span>
      </div>
    </div>
  );
};

export default ScreenContent;