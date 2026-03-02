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
    <div className="h-full w-full bg-[#020617] text-slate-300 font-mono text-[9px] md:text-sm overflow-hidden flex flex-col border border-slate-800/50 rounded-sm">
      {/* Top Bar - VS Code Style */}
      <div className="bg-[#0f172a] p-1 md:p-2 flex items-center justify-between border-b border-slate-800/50 shrink-0">
        <div className="flex gap-1 md:gap-1.5">
          <div className="w-1.5 h-1.5 md:w-2.5 md:h-2.5 rounded-full bg-[#ff5f56] hover:bg-[#ff5f56]/80 cursor-pointer" />
          <div className="w-1.5 h-1.5 md:w-2.5 md:h-2.5 rounded-full bg-[#ffbd2e] hover:bg-[#ffbd2e]/80 cursor-pointer" />
          <div className="w-1.5 h-1.5 md:w-2.5 md:h-2.5 rounded-full bg-[#27c93f] hover:bg-[#27c93f]/80 cursor-pointer" />
        </div>
        <div className="text-[7px] md:text-[10px] text-slate-500 flex items-center gap-1 md:gap-2 truncate px-1">
          <Code2 size={8} className="text-blue-400 shrink-0 md:w-[10px]" />
          <span className="truncate">portfolio.ts</span>
        </div>
        <div className="w-4 md:w-10" />
      </div>

      <div className="flex-1 flex flex-col md:flex-row overflow-hidden min-h-0">
        {/* Sidebar / Top Navigation */}
        <div className="w-full md:w-14 bg-[#0f172a] border-b md:border-b-0 md:border-r border-slate-800/50 flex flex-row md:flex-col items-center justify-center md:justify-start py-1.5 md:py-3 gap-4 md:gap-6 text-slate-500 shrink-0">
          <button 
            onClick={() => scrollToSection(aboutRef)}
            className="p-1 md:p-2 hover:bg-slate-800/50 rounded-md hover:text-blue-400 transition-colors"
            title="Sobre"
          >
            <User size={12} className="md:w-[18px] md:h-[18px]" />
          </button>
          <button 
            onClick={() => scrollToSection(projectsRef)}
            className="p-1 md:p-2 hover:bg-slate-800/50 rounded-md hover:text-blue-400 transition-colors"
            title="Projetos"
          >
            <Layers size={12} className="md:w-[18px] md:h-[18px]" />
          </button>
          <button 
            onClick={() => scrollToSection(stackRef)}
            className="p-1 md:p-2 hover:bg-slate-800/50 rounded-md hover:text-blue-400 transition-colors"
            title="Stack"
          >
            <Database size={12} className="md:w-[18px] md:h-[18px]" />
          </button>
          <button 
            onClick={() => scrollToSection(activityRef)}
            className="p-1 md:p-2 hover:bg-slate-800/50 rounded-md hover:text-blue-400 transition-colors"
            title="Atividade"
          >
            <Activity size={12} className="md:w-[18px] md:h-[18px]" />
          </button>
          <button 
            onClick={() => scrollToSection(contactRef)}
            className="p-1 md:p-2 hover:bg-slate-800/50 rounded-md hover:text-blue-400 transition-colors"
            title="Contato"
          >
            <Github size={12} className="md:w-[18px] md:h-[18px]" />
          </button>
        </div>

        {/* Main Editor Area */}
        <ScrollArea className="flex-1 bg-[#020617] min-h-0">
          <div className="px-2 py-4 md:p-10 max-w-full md:max-w-3xl mx-auto overflow-x-hidden">
            
            {/* Profile Header */}
            <motion.div 
              ref={aboutRef}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="flex flex-col md:flex-row items-center gap-4 md:gap-8 mb-8 md:mb-12 w-full"
            >
              <div className="relative group shrink-0">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
                <Avatar className="h-16 w-16 md:h-32 md:w-32 border-2 border-slate-800 relative z-10 overflow-hidden">
                  <AvatarImage 
                    src={profileImg} 
                    alt="Kevin" 
                    className="object-cover object-top scale-125 group-hover:scale-150 transition-transform duration-500" 
                  />
                  <AvatarFallback className="bg-slate-900 text-slate-400 text-xs md:text-2xl">KC</AvatarFallback>
                </Avatar>
                <div className="absolute bottom-1 right-1 w-3 h-3 md:w-5 md:h-5 bg-emerald-500 border-2 border-[#020617] rounded-full z-20"></div>
              </div>
              
              <div className="text-center md:text-left min-w-0 w-full">
                <div className="flex items-center justify-center md:justify-start gap-2 mb-1 md:mb-2">
                  <h1 className="text-[10px] md:text-3xl font-black text-white tracking-tight truncate">Kevin de Santana Carvalho</h1>
                  <Monitor size={10} className="text-blue-400 animate-pulse md:w-5 md:h-5 shrink-0" />
                </div>
                <p className="text-blue-400 font-medium mb-3 md:mb-4 text-[8px] md:text-lg">Software Engineering Student</p>
                <div className="flex flex-wrap justify-center md:justify-start gap-1 md:gap-2">
                  <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20 text-[6px] md:text-xs px-1 py-0 md:px-2.5 md:py-0.5">Fullstack</Badge>
                  <Badge className="bg-purple-500/10 text-purple-400 border-purple-500/20 text-[6px] md:text-xs px-1 py-0 md:px-2.5 md:py-0.5">Learning 🚀</Badge>
                </div>
              </div>
            </motion.div>

            {/* Code Block Section */}
            <section className="mb-8 md:mb-12 bg-slate-900/30 p-2 md:p-6 rounded-lg border border-slate-800/50 backdrop-blur-sm overflow-hidden w-full">
              <div className="flex items-center gap-1 text-blue-400 mb-2 md:mb-4 text-[7px] md:text-sm">
                <span className="text-slate-600">1</span>
                <span className="text-purple-400">const</span>
                <span className="text-yellow-400">dev</span>
                <span className="text-slate-300">=</span>
                <span className="text-slate-300">{"{"}</span>
              </div>
              
              <div className="pl-2 md:pl-8 space-y-1.5">
                {codeLines.map((line, idx) => (
                  <motion.div 
                    key={line.label}
                    initial={{ opacity: 0, x: -5 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.5 + (idx * 0.1) }}
                    className="flex items-start gap-1.5 md:gap-4 text-[7px] md:text-sm w-full"
                  >
                    <span className="text-slate-600 w-2 md:w-4 shrink-0">{idx + 2}</span>
                    <span className="text-blue-300 shrink-0">{line.label}:</span>
                    <span className={`${line.color} break-all whitespace-pre-wrap`}>{line.value}</span>
                  </motion.div>
                ))}
              </div>
              
              <div className="text-slate-300 mt-1.5 text-[7px] md:text-sm">
                <span className="text-slate-600">{codeLines.length + 2}</span> {"}"};
              </div>
            </section>

            {/* About Section */}
            <section className="mb-8 md:mb-12 w-full">
              <h2 className="text-[10px] md:text-xl font-bold text-white mb-4 md:mb-6 flex items-center gap-2">
                <div className="p-1 bg-emerald-500/10 rounded-md">
                  <Terminal size={12} className="text-emerald-400 md:w-5 md:h-5" />
                </div>
                SOBRE
              </h2>
              <div className="space-y-4 text-slate-400 leading-relaxed text-[8px] md:text-base">
                <p>
                  Estudante de Software com foco em desenvolvimento Backend. Experiência na implementação de regras de negócio e modelagem de banco de dados.
                </p>
                <ul className="grid grid-cols-1 gap-2 pl-1">
                  {[
                    'Lógica e regras de negócio',
                    'Banco de Dados Relacional',
                    'Integração Fullstack',
                    'Estruturação de aplicações'
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-slate-300">
                      <div className="w-1 h-1 bg-emerald-500 rounded-full shrink-0" />
                      <span className="truncate">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Projects Section */}
            <section ref={projectsRef} className="mb-8 md:mb-12 w-full">
              <h2 className="text-[10px] md:text-xl font-bold text-white mb-4 md:mb-6 flex items-center gap-2">
                <div className="p-1 bg-purple-500/10 rounded-md">
                  <Layers size={12} className="text-purple-400 md:w-5 md:h-5" />
                </div>
                PROJETOS
              </h2>
              
              <div className="space-y-4">
                {/* Project 1: LinkStudio */}
                <div className="p-3 md:p-6 rounded-xl border border-slate-800 bg-slate-900/40 hover:border-blue-500/50 transition-colors group w-full">
                  <div className="flex justify-between items-start mb-2 md:mb-4">
                    <div className="min-w-0">
                      <h3 className="font-bold text-[9px] md:text-xl text-blue-400 truncate">LinkStudio</h3>
                      <p className="text-[7px] md:text-sm text-slate-500 truncate">Agendamento Web</p>
                    </div>
                    <a href="https://www.linkstudio.com.br/" target="_blank" rel="noopener noreferrer" className="p-1.5 bg-slate-800 rounded-full hover:bg-blue-600 transition-colors shrink-0">
                      <ExternalLink size={10} className="text-white md:w-4 md:h-4" />
                    </a>
                  </div>
                  <p className="text-[8px] md:text-base text-slate-300 mb-3 line-clamp-2">
                    Aplicação web completa para gerenciamento de agendamentos.
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {['Backend', 'SQL', 'React'].map((resp) => (
                      <span key={resp} className="text-[6px] md:text-xs px-1.5 py-0.5 bg-slate-800/50 rounded-md text-slate-400 border border-slate-700/50">
                        {resp}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project 2: Jornada Espacial */}
                <div className="p-3 md:p-6 rounded-xl border border-slate-800 bg-slate-900/40 hover:border-orange-500/50 transition-colors group w-full">
                  <div className="flex justify-between items-start mb-2 md:mb-4">
                    <div className="min-w-0">
                      <div className="flex items-center gap-1">
                        <h3 className="font-bold text-[9px] md:text-xl text-orange-400 truncate">Jornada Espacial</h3>
                        <Coffee size={10} className="text-orange-500 md:w-5 md:h-5 shrink-0" />
                      </div>
                      <p className="text-[7px] md:text-sm text-slate-500 truncate">Java – POO</p>
                    </div>
                    <a href="https://github.com/KevinSan87/Jornada-Espacial" target="_blank" rel="noopener noreferrer" className="p-1.5 bg-slate-800 rounded-full hover:bg-orange-600 transition-colors shrink-0">
                      <Github size={10} className="text-white md:w-4 md:h-4" />
                    </a>
                  </div>
                  <p className="text-[8px] md:text-base text-slate-300 mb-3 line-clamp-2">
                    Aplicação Java focada em lógica e modelagem orientada a objetos.
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {['Java', 'POO', 'Git'].map((resp) => (
                      <span key={resp} className="text-[6px] md:text-xs px-1.5 py-0.5 bg-slate-800/50 rounded-md text-slate-400 border border-slate-700/50">
                        {resp}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Stack Section */}
            <section ref={stackRef} className="mb-8 md:mb-12 w-full">
              <h2 className="text-[10px] md:text-xl font-bold text-white mb-4 md:mb-6 flex items-center gap-2">
                <div className="p-1 bg-blue-500/10 rounded-md">
                  <Cpu size={12} className="text-blue-400 md:w-5 md:h-5" />
                </div>
                STACK
              </h2>
              <div className="grid grid-cols-2 gap-2 md:gap-4">
                {stack.map((tech) => (
                  <div key={tech} className="flex items-center gap-1.5 p-1.5 md:p-3 rounded-lg bg-slate-900/50 border border-slate-800/50 text-[7px] md:text-sm text-slate-300 truncate">
                    <div className="w-1 h-1 bg-blue-500 rounded-full shrink-0"></div>
                    <span className="truncate">{tech}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* GitHub Activity Section */}
            <section ref={activityRef} className="mb-8 md:mb-12 w-full">
              <h2 className="text-[10px] md:text-xl font-bold text-white mb-4 md:mb-6 flex items-center gap-2">
                <div className="p-1 bg-emerald-500/10 rounded-md">
                  <Activity size={12} className="text-emerald-400 md:w-5 md:h-5" />
                </div>
                ATIVIDADE
              </h2>
              
              <div className="grid grid-cols-1 gap-3 mb-4">
                <div className="p-3 md:p-6 rounded-xl border border-slate-800 bg-slate-900/40 flex flex-col gap-1">
                  <span className="text-[6px] md:text-[10px] font-bold uppercase tracking-widest text-emerald-400/60">Contributions</span>
                  <span className="text-lg md:text-3xl font-black text-white">{githubStats.contributions}</span>
                </div>
                <div className="p-3 md:p-6 rounded-xl border border-slate-800 bg-slate-900/40 flex flex-col gap-1">
                  <span className="text-[6px] md:text-[10px] font-bold uppercase tracking-widest text-blue-400/60">Repositories</span>
                  <span className="text-lg md:text-3xl font-black text-white">{githubStats.repos}+</span>
                </div>
              </div>

              {/* Contribution Chart Container - Fixed Horizontal Scroll */}
              <div className="p-3 md:p-6 rounded-xl border border-slate-800 bg-[#0f172a] w-full overflow-hidden">
                <div className="w-full overflow-x-auto pb-2 scrollbar-hide">
                  <div className="min-w-[400px] md:min-w-full">
                    <img 
                      src="https://ghchart.rshah.org/39d353/KevinSan87" 
                      alt="GitHub Chart"
                      className="w-full h-auto filter invert-[0.85] hue-rotate-[140deg] brightness-[0.6] contrast-[1.4] mix-blend-screen"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Contact Section */}
            <section ref={contactRef} className="pb-20 md:pb-12 w-full">
              <div className="flex flex-wrap gap-2">
                <a href="https://github.com/KevinSan87" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-800 text-white text-[7px] md:text-sm transition-all">
                  <Github size={10} /> GitHub
                </a>
                <a href="mailto:Kevindesantana87@gmail.com" className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-600 text-white text-[7px] md:text-sm transition-all">
                  <Mail size={10} /> Contato
                </a>
              </div>
            </section>
          </div>
        </ScrollArea>
      </div>

      {/* Footer Bar - VS Code Style */}
      <div className="bg-blue-600 text-white px-2 md:px-4 py-1 md:py-1.5 flex items-center justify-between text-[6px] md:text-[10px] font-bold shrink-0">
        <div className="flex items-center gap-2 md:gap-4">
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full animate-pulse"></div>
            <span>main*</span>
          </div>
        </div>
        <div className="flex items-center gap-2 md:gap-4 opacity-90">
          <span>UTF-8</span>
          <span>TSX</span>
        </div>
      </div>
    </div>
  );
};

export default ScreenContent;