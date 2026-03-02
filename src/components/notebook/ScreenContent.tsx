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
    { label: "status", value: "'Building robust systems and logic'", color: "text-emerald-400" },
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
    <div className="h-full w-full bg-[#020617] text-slate-300 font-mono text-[11px] md:text-sm overflow-hidden flex flex-col border border-slate-800/50 rounded-sm">
      {/* Top Bar - VS Code Style */}
      <div className="bg-[#0f172a] p-1 md:p-2 flex items-center justify-between border-b border-slate-800/50 shrink-0">
        <div className="flex gap-1 md:gap-1.5">
          <div className="w-1.5 h-1.5 md:w-2.5 md:h-2.5 rounded-full bg-[#ff5f56]" />
          <div className="w-1.5 h-1.5 md:w-2.5 md:h-2.5 rounded-full bg-[#ffbd2e]" />
          <div className="w-1.5 h-1.5 md:w-2.5 md:h-2.5 rounded-full bg-[#27c93f]" />
        </div>
        <div className="text-[8px] md:text-[10px] text-slate-400 flex items-center gap-1 md:gap-2 truncate px-1">
          <Code2 size={8} className="text-blue-400 shrink-0 md:w-[10px]" />
          <span className="truncate">portfolio.ts</span>
        </div>
        <div className="w-4 md:w-10" />
      </div>

      <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
        {/* Sidebar / Top Navigation */}
        <div className="w-full md:w-14 bg-[#0f172a] border-b md:border-b-0 md:border-r border-slate-800/50 flex flex-row md:flex-col items-center justify-center md:justify-start py-1.5 md:py-3 gap-4 md:gap-6 text-slate-500 shrink-0">
          <button 
            onClick={() => scrollToSection(aboutRef)}
            className="p-1 md:p-2 hover:bg-slate-800/50 rounded-md hover:text-blue-400 transition-colors"
          >
            <User size={14} className="md:w-[18px] md:h-[18px]" />
          </button>
          <button 
            onClick={() => scrollToSection(projectsRef)}
            className="p-1 md:p-2 hover:bg-slate-800/50 rounded-md hover:text-blue-400 transition-colors"
          >
            <Layers size={14} className="md:w-[18px] md:h-[18px]" />
          </button>
          <button 
            onClick={() => scrollToSection(stackRef)}
            className="p-1 md:p-2 hover:bg-slate-800/50 rounded-md hover:text-blue-400 transition-colors"
          >
            <Database size={14} className="md:w-[18px] md:h-[18px]" />
          </button>
          <button 
            onClick={() => scrollToSection(activityRef)}
            className="p-1 md:p-2 hover:bg-slate-800/50 rounded-md hover:text-blue-400 transition-colors"
          >
            <Activity size={14} className="md:w-[18px] md:h-[18px]" />
          </button>
          <button 
            onClick={() => scrollToSection(contactRef)}
            className="p-1 md:p-2 hover:bg-slate-800/50 rounded-md hover:text-blue-400 transition-colors"
          >
            <Github size={14} className="md:w-[18px] md:h-[18px]" />
          </button>
        </div>

        {/* Main Editor Area */}
        <ScrollArea className="flex-1 bg-[#020617]">
          <div className="p-4 md:p-10 max-w-3xl mx-auto overflow-x-hidden">
            
            {/* Profile Header */}
            <motion.div 
              ref={aboutRef}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col md:flex-row items-center gap-4 md:gap-8 mb-8 md:mb-12"
            >
              <div className="relative">
                <div className="absolute -inset-0.5 bg-blue-500/20 rounded-full"></div>
                <Avatar className="h-20 w-20 md:h-32 md:w-32 border border-slate-800 relative z-10 overflow-hidden">
                  <AvatarImage 
                    src={profileImg} 
                    alt="Kevin" 
                    className="object-cover object-top scale-110" 
                  />
                  <AvatarFallback className="bg-slate-900 text-slate-400 text-sm md:text-2xl">KC</AvatarFallback>
                </Avatar>
                <div className="absolute bottom-1 right-1 w-3 h-3 md:w-5 md:h-5 bg-emerald-500 border-2 border-[#020617] rounded-full z-20"></div>
              </div>
              
              <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2 mb-1 md:mb-2">
                  <h1 className="text-base md:text-3xl font-black text-white tracking-tight">Kevin de Santana Carvalho</h1>
                  <Monitor size={14} className="text-blue-400 md:w-5 md:h-5" />
                </div>
                <p className="text-blue-400 font-bold mb-3 md:mb-4 text-[10px] md:text-lg">Software Engineering Student</p>
                <div className="flex flex-wrap justify-center md:justify-start gap-1.5 md:gap-2">
                  <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20 text-[8px] md:text-xs px-2 py-0.5">Fullstack Development</Badge>
                  <Badge className="bg-purple-500/10 text-purple-400 border-purple-500/20 text-[8px] md:text-xs px-2 py-0.5">Always Learning 🚀</Badge>
                </div>
              </div>
            </motion.div>

            {/* Code Block Section */}
            <section className="mb-8 md:mb-12 bg-slate-900/40 p-4 md:p-6 rounded-lg border border-slate-800/50 overflow-hidden">
              <div className="flex items-center gap-1 text-blue-400 mb-2 md:mb-4 text-[10px] md:text-sm">
                <span className="text-slate-600">1</span>
                <span className="text-purple-400">const</span>
                <span className="text-yellow-400">dev</span>
                <span className="text-slate-300">=</span>
                <span className="text-slate-300">{"{"}</span>
              </div>
              
              <div className="pl-2 md:pl-8 space-y-1.5">
                {codeLines.map((line, idx) => (
                  <div 
                    key={line.label}
                    className="flex items-start gap-2 md:gap-4 text-[10px] md:text-sm"
                  >
                    <span className="text-slate-600 w-3 md:w-4 shrink-0">{idx + 2}</span>
                    <span className="text-blue-300 shrink-0">{line.label}:</span>
                    <span className={`${line.color} break-words`}>{line.value}</span>
                  </div>
                ))}
              </div>
              
              <div className="text-slate-300 mt-1.5 text-[10px] md:text-sm">
                <span className="text-slate-600">{codeLines.length + 2}</span> {"}"};
              </div>
            </section>

            {/* About Section */}
            <section className="mb-8 md:mb-12">
              <h2 className="text-sm md:text-xl font-bold text-white mb-4 md:mb-6 flex items-center gap-2">
                <div className="p-1.5 bg-emerald-500/10 rounded-md">
                  <Terminal size={16} className="text-emerald-400 md:w-5 md:h-5" />
                </div>
                SOBRE
              </h2>
              <div className="space-y-4 text-slate-300 leading-relaxed text-[11px] md:text-base">
                <p>
                  Estudante de Software com foco em desenvolvimento Backend. Experiência na implementação de regras de negócio e modelagem de banco de dados, além de conhecimento em frontend para desenvolvimento de aplicações web completas.
                </p>
                <p>
                  Tenho vivência prática aplicando conceitos como:
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 pl-2">
                  {[
                    'Lógica e regras de negócio',
                    'Banco de Dados Relacional',
                    'Integração entre frontend e backend',
                    'Estruturação de aplicações web'
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-slate-200">
                      <div className="w-1 h-1 bg-emerald-500 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Projects Section */}
            <section ref={projectsRef} className="mb-8 md:mb-12">
              <h2 className="text-sm md:text-xl font-bold text-white mb-4 md:mb-6 flex items-center gap-2">
                <div className="p-1.5 bg-purple-500/10 rounded-md">
                  <Layers size={16} className="text-purple-400 md:w-5 md:h-5" />
                </div>
                PROJETOS EM DESTAQUE
              </h2>
              
              <div className="space-y-6">
                <div className="p-4 md:p-6 rounded-xl border border-slate-800 bg-slate-900/40 hover:border-blue-500/50 transition-colors">
                  <div className="flex justify-between items-start mb-3 md:mb-4">
                    <div>
                      <h3 className="font-bold text-xs md:text-xl text-blue-400">LinkStudio</h3>
                      <p className="text-[10px] md:text-sm text-slate-500">Plataforma de Agendamento Web</p>
                    </div>
                    <a href="https://www.linkstudio.com.br/" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-800 rounded-full">
                      <ExternalLink size={14} className="text-white md:w-4 md:h-4" />
                    </a>
                  </div>
                  <p className="text-[11px] md:text-base text-slate-200 mb-4">
                    Desenvolvimento de uma aplicação web completa para gerenciamento de agendamentos.
                  </p>
                </div>

                <div className="p-4 md:p-6 rounded-xl border border-slate-800 bg-slate-900/40 hover:border-orange-500/50 transition-colors">
                  <div className="flex justify-between items-start mb-3 md:mb-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-bold text-xs md:text-xl text-orange-400">Jornada Espacial</h3>
                        <Coffee size={16} className="text-orange-500 md:w-5 md:h-5" />
                      </div>
                      <p className="text-[10px] md:text-sm text-slate-500">Projeto em Java – Faculdade (POO)</p>
                    </div>
                    <a href="https://github.com/KevinSan87/Jornada-Espacial" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-800 rounded-full">
                      <Github size={14} className="text-white md:w-4 md:h-4" />
                    </a>
                  </div>
                  <p className="text-[11px] md:text-base text-slate-200 mb-4">
                    Aplicação Java focada na lógica de programação e modelagem orientada a objetos.
                  </p>
                </div>
              </div>
            </section>

            {/* Stack Section */}
            <section ref={stackRef} className="mb-8 md:mb-12">
              <h2 className="text-sm md:text-xl font-bold text-white mb-4 md:mb-6 flex items-center gap-2">
                <div className="p-1.5 bg-blue-500/10 rounded-md">
                  <Cpu size={16} className="text-blue-400 md:w-5 md:h-5" />
                </div>
                STACK
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
                {stack.map((tech) => (
                  <div key={tech} className="flex items-center gap-2 p-2 md:p-3 rounded-lg bg-slate-900/50 border border-slate-800/50 text-[10px] md:text-sm text-slate-200">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    {tech}
                  </div>
                ))}
              </div>
            </section>

            {/* GitHub Activity Section */}
            <section ref={activityRef} className="mb-8 md:mb-12">
              <h2 className="text-sm md:text-xl font-bold text-white mb-4 md:mb-6 flex items-center gap-2">
                <div className="p-1.5 bg-emerald-500/10 rounded-md">
                  <Activity size={16} className="text-emerald-400 md:w-5 md:h-5" />
                </div>
                GITHUB ACTIVITY
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="p-4 md:p-6 rounded-xl border border-slate-800 bg-slate-900/40 flex flex-col items-start gap-2">
                  <div className="flex items-center gap-2 text-emerald-400">
                    <Activity size={14} />
                    <span className="text-[10px] font-bold uppercase tracking-widest">Activity</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xl md:text-3xl font-black text-white">{githubStats.contributions}</span>
                    <span className="text-[10px] text-slate-500 font-medium">Contributions</span>
                  </div>
                </div>

                <div className="p-4 md:p-6 rounded-xl border border-slate-800 bg-slate-900/40 flex flex-col items-start gap-2">
                  <div className="flex items-center gap-2 text-blue-400">
                    <GitBranch size={14} />
                    <span className="text-[10px] font-bold uppercase tracking-widest">Repos</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xl md:text-3xl font-black text-white">{githubStats.repos}+</span>
                    <span className="text-[10px] text-slate-500 font-medium">Public Projects</span>
                  </div>
                </div>

                <div className="p-4 md:p-6 rounded-xl border border-slate-800 bg-slate-900/40 flex flex-col items-start gap-2">
                  <div className="flex items-center gap-2 text-purple-400">
                    <CheckCircle2 size={14} />
                    <span className="text-[10px] font-bold uppercase tracking-widest">Status</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xl md:text-3xl font-black text-white">Active</span>
                    <span className="text-[10px] text-slate-500 font-medium">Developer</span>
                  </div>
                </div>
              </div>

              <div className="p-4 md:p-6 rounded-xl border border-slate-800 bg-[#0f172a] overflow-hidden relative">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Github size={14} className="text-slate-400" />
                      <span className="text-[10px] md:text-sm text-slate-300 font-bold">@KevinSan87</span>
                    </div>
                  </div>
                  
                  <div className="w-full flex items-center justify-center overflow-hidden">
                    <img 
                      src="https://ghchart.rshah.org/39d353/KevinSan87" 
                      alt="Kevin's GitHub Contributions Chart"
                      className="w-full h-auto filter invert-[0.85] hue-rotate-[140deg] brightness-[0.7] contrast-[1.2]"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Contact Section */}
            <section ref={contactRef} className="pb-6 md:pb-12">
              <div className="flex flex-wrap gap-2 md:gap-4">
                <a href="https://github.com/KevinSan87" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 text-white text-[10px] md:text-sm">
                  <Github size={14} className="md:w-4 md:h-4" /> GitHub
                </a>
                <a href="mailto:Kevindesantana87@gmail.com" className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600 text-white text-[10px] md:text-sm">
                  <Mail size={14} className="md:w-4 md:h-4" /> Contato
                </a>
              </div>
            </section>
          </div>
        </ScrollArea>
      </div>

      {/* Footer Bar - VS Code Style */}
      <div className="bg-blue-600 text-white px-2 md:px-4 py-1 md:py-1.5 flex items-center justify-between text-[8px] md:text-[10px] font-bold shrink-0">
        <div className="flex items-center gap-2 md:gap-4">
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full"></div>
            <span>main*</span>
          </div>
        </div>
        <div className="flex items-center gap-2 md:gap-4">
          <span>UTF-8</span>
          <span>TypeScript JSX</span>
        </div>
      </div>
    </div>
  );
};

export default ScreenContent;