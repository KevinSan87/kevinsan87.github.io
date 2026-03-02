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
      <div className="bg-[#0f172a] p-1 md:p-2 flex items-center justify-between border-b border-slate-800/50">
        <div className="flex gap-1 md:gap-1.5">
          <div className="w-1 h-1 md:w-2.5 md:h-2.5 rounded-full bg-[#ff5f56]" />
          <div className="w-1 h-1 md:w-2.5 md:h-2.5 rounded-full bg-[#ffbd2e]" />
          <div className="w-1 h-1 md:w-2.5 md:h-2.5 rounded-full bg-[#27c93f]" />
        </div>
        <div className="text-[6px] md:text-[10px] text-slate-500 flex items-center gap-1 md:gap-2 truncate px-1">
          <Code2 size={6} className="text-blue-400 shrink-0 md:w-[10px]" />
          <span className="truncate">portfolio.ts</span>
        </div>
        <div className="w-2 md:w-10" />
      </div>

      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar */}
        <div className="w-5 md:w-14 bg-[#0f172a] border-r border-slate-800/50 flex flex-col items-center py-2 gap-2 md:gap-6 text-slate-500">
          <button onClick={() => scrollToSection(aboutRef)} className="p-1 hover:text-blue-400 transition-colors">
            <User size={10} className="md:w-[18px] md:h-[18px]" />
          </button>
          <button onClick={() => scrollToSection(projectsRef)} className="p-1 hover:text-blue-400 transition-colors">
            <Layers size={10} className="md:w-[18px] md:h-[18px]" />
          </button>
          <button onClick={() => scrollToSection(stackRef)} className="p-1 hover:text-blue-400 transition-colors">
            <Database size={10} className="md:w-[18px] md:h-[18px]" />
          </button>
          <button onClick={() => scrollToSection(activityRef)} className="p-1 hover:text-blue-400 transition-colors">
            <Activity size={10} className="md:w-[18px] md:h-[18px]" />
          </button>
          <button onClick={() => scrollToSection(contactRef)} className="p-1 hover:text-blue-400 transition-colors">
            <Github size={10} className="md:w-[18px] md:h-[18px]" />
          </button>
        </div>

        {/* Main Editor Area */}
        <ScrollArea className="flex-1 bg-[#020617]">
          <div className="p-3 md:p-10 max-w-3xl mx-auto overflow-x-hidden">
            
            {/* Profile Header */}
            <motion.div 
              ref={aboutRef}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="flex flex-col md:flex-row items-center gap-3 md:gap-8 mb-6 md:mb-12"
            >
              <div className="relative group">
                <Avatar className="h-12 w-12 md:h-32 md:w-32 border-2 border-slate-800 relative z-10 overflow-hidden">
                  <AvatarImage src={profileImg} alt="Kevin" className="object-cover object-top scale-125" />
                  <AvatarFallback className="bg-slate-900 text-slate-400 text-[8px] md:text-2xl">KC</AvatarFallback>
                </Avatar>
                <div className="absolute bottom-0.5 right-0.5 w-2 h-2 md:w-5 md:h-5 bg-emerald-500 border border-[#020617] rounded-full z-20"></div>
              </div>
              
              <div className="text-center md:text-left w-full">
                <h1 className="text-[10px] md:text-3xl font-black text-white tracking-tight mb-0.5 break-words">Kevin de Santana Carvalho</h1>
                <p className="text-blue-400 font-medium mb-2 md:mb-4 text-[7px] md:text-lg">Software Engineering Student</p>
                <div className="flex flex-wrap justify-center md:justify-start gap-1 md:gap-2">
                  <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20 text-[6px] md:text-xs px-1 py-0">Fullstack</Badge>
                  <Badge className="bg-purple-500/10 text-purple-400 border-purple-500/20 text-[6px] md:text-xs px-1 py-0">Learning 🚀</Badge>
                </div>
              </div>
            </motion.div>

            {/* Code Block Section */}
            <section className="mb-6 md:mb-12 bg-slate-900/30 p-2 md:p-6 rounded-lg border border-slate-800/50 backdrop-blur-sm overflow-hidden">
              <div className="flex items-center gap-1 text-blue-400 mb-1 md:mb-4 text-[7px] md:text-sm">
                <span className="text-slate-600">1</span>
                <span className="text-purple-400">const</span>
                <span className="text-yellow-400">dev</span>
                <span className="text-slate-300">=</span>
                <span className="text-slate-300">{"{"}</span>
              </div>
              
              <div className="pl-2 md:pl-8 space-y-1">
                {codeLines.map((line, idx) => (
                  <motion.div 
                    key={line.label}
                    initial={{ opacity: 0, x: -5 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.5 + (idx * 0.1) }}
                    className="flex items-start gap-1 md:gap-4 text-[7px] md:text-sm"
                  >
                    <span className="text-slate-600 w-2 md:w-4 shrink-0">{idx + 2}</span>
                    <span className="text-blue-300 shrink-0">{line.label}:</span>
                    <span className={`${line.color} break-all`}>{line.value}</span>
                  </motion.div>
                ))}
              </div>
              
              <div className="text-slate-300 mt-1 text-[7px] md:text-sm">
                <span className="text-slate-600">{codeLines.length + 2}</span> {"}"};
              </div>
            </section>

            {/* About Section */}
            <section className="mb-6 md:mb-12">
              <h2 className="text-[9px] md:text-xl font-bold text-white mb-3 md:mb-6 flex items-center gap-2">
                <Terminal size={10} className="text-emerald-400 md:w-5 md:h-5" />
                SOBRE
              </h2>
              <div className="space-y-3 text-slate-400 leading-relaxed text-[8px] md:text-base">
                <p>Estudante de Software com foco em Backend. Experiência em regras de negócio, modelagem SQL e aplicações web completas.</p>
                <ul className="grid grid-cols-1 gap-1 pl-1">
                  {['Lógica de negócio', 'SQL Relacional', 'Integração Fullstack'].map((item) => (
                    <li key={item} className="flex items-center gap-1.5 text-slate-300">
                      <div className="w-1 h-1 bg-emerald-500 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Projects Section */}
            <section ref={projectsRef} className="mb-6 md:mb-12">
              <h2 className="text-[9px] md:text-xl font-bold text-white mb-3 md:mb-6 flex items-center gap-2">
                <Layers size={10} className="text-purple-400 md:w-5 md:h-5" />
                PROJETOS
              </h2>
              
              <div className="space-y-4">
                <div className="p-3 md:p-6 rounded-xl border border-slate-800 bg-slate-900/40">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-[9px] md:text-xl text-blue-400">LinkStudio</h3>
                    <ExternalLink size={10} className="text-slate-500 md:w-4 md:h-4" />
                  </div>
                  <p className="text-[8px] md:text-base text-slate-300 mb-2">Plataforma de Agendamento Web completa.</p>
                  <div className="flex flex-wrap gap-1">
                    {['SQL', 'React', 'Backend'].map((resp) => (
                      <span key={resp} className="text-[6px] md:text-xs px-1.5 py-0.5 bg-slate-800/50 rounded text-slate-400 border border-slate-700/50">{resp}</span>
                    ))}
                  </div>
                </div>

                <div className="p-3 md:p-6 rounded-xl border border-slate-800 bg-slate-900/40">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-[9px] md:text-xl text-orange-400">Jornada Espacial</h3>
                    <Github size={10} className="text-slate-500 md:w-4 md:h-4" />
                  </div>
                  <p className="text-[8px] md:text-base text-slate-300 mb-2">Projeto Java focado em POO e lógica.</p>
                  <div className="flex flex-wrap gap-1">
                    {['Java', 'POO', 'Git'].map((resp) => (
                      <span key={resp} className="text-[6px] md:text-xs px-1.5 py-0.5 bg-slate-800/50 rounded text-slate-400 border border-slate-700/50">{resp}</span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Stack Section */}
            <section ref={stackRef} className="mb-6 md:mb-12">
              <h2 className="text-[9px] md:text-xl font-bold text-white mb-3 md:mb-6 flex items-center gap-2">
                <Cpu size={10} className="text-blue-400 md:w-5 md:h-5" />
                STACK
              </h2>
              <div className="grid grid-cols-2 gap-1.5 md:gap-4">
                {stack.map((tech) => (
                  <div key={tech} className="flex items-center gap-1.5 p-1.5 md:p-3 rounded-lg bg-slate-900/50 border border-slate-800/50 text-[7px] md:text-sm text-slate-300">
                    <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                    {tech}
                  </div>
                ))}
              </div>
            </section>

            {/* GitHub Activity Section */}
            <section ref={activityRef} className="mb-6 md:mb-12">
              <h2 className="text-[9px] md:text-xl font-bold text-white mb-3 md:mb-6 flex items-center gap-2">
                <Activity size={10} className="text-emerald-400 md:w-5 md:h-5" />
                ATIVIDADE
              </h2>
              
              <div className="grid grid-cols-3 gap-2 mb-4">
                <div className="p-2 md:p-6 rounded-lg border border-slate-800 bg-slate-900/40 flex flex-col items-center text-center">
                  <span className="text-[10px] md:text-3xl font-black text-white">{githubStats.contributions}</span>
                  <span className="text-[5px] md:text-[10px] text-slate-500 uppercase">Contribs</span>
                </div>
                <div className="p-2 md:p-6 rounded-lg border border-slate-800 bg-slate-900/40 flex flex-col items-center text-center">
                  <span className="text-[10px] md:text-3xl font-black text-white">{githubStats.repos}</span>
                  <span className="text-[5px] md:text-[10px] text-slate-500 uppercase">Repos</span>
                </div>
                <div className="p-2 md:p-6 rounded-lg border border-slate-800 bg-slate-900/40 flex flex-col items-center text-center">
                  <span className="text-[10px] md:text-3xl font-black text-white">Ativo</span>
                  <span className="text-[5px] md:text-[10px] text-slate-500 uppercase">Status</span>
                </div>
              </div>

              <div className="p-2 md:p-6 rounded-lg border border-slate-800 bg-[#0f172a] overflow-hidden">
                <img 
                  src="https://ghchart.rshah.org/39d353/KevinSan87" 
                  alt="GitHub Chart"
                  className="w-full h-auto filter invert-[0.85] hue-rotate-[140deg] brightness-[0.6] contrast-[1.4]"
                />
              </div>
            </section>

            {/* Contact Section */}
            <section ref={contactRef} className="pb-4 md:pb-12">
              <div className="flex flex-wrap gap-2">
                <a href="https://github.com/KevinSan87" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-slate-800 text-white text-[7px] md:text-sm">
                  <Github size={10} /> GitHub
                </a>
                <a href="mailto:Kevindesantana87@gmail.com" className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-blue-600 text-white text-[7px] md:text-sm">
                  <Mail size={10} /> Email
                </a>
              </div>
            </section>
          </div>
        </ScrollArea>
      </div>

      {/* Footer Bar - VS Code Style */}
      <div className="bg-blue-600 text-white px-2 py-0.5 md:py-1.5 flex items-center justify-between text-[5px] md:text-[10px] font-bold">
        <div className="flex items-center gap-1 md:gap-4">
          <div className="flex items-center gap-1">
            <div className="w-1 h-1 bg-white rounded-full animate-pulse"></div>
            <span>main*</span>
          </div>
        </div>
        <div className="flex items-center gap-2 opacity-90">
          <span>UTF-8</span>
          <span>TSX</span>
        </div>
      </div>
    </div>
  );
};

export default ScreenContent;