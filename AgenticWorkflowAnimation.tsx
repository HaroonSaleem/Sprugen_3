
import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Mail, MessageCircle, Database, LayoutDashboard, Send } from 'lucide-react';

export const AgenticWorkflowAnimation: React.FC = () => {
  const tools = [
    { icon: <Mail size={20} />, label: "Email", x: -140, y: -100, color: "text-blue-400" },
    { icon: <MessageCircle size={20} />, label: "WhatsApp", x: 140, y: -100, color: "text-green-400" },
    { icon: <Database size={20} />, label: "CRM", x: 140, y: 100, color: "text-purple-400" },
    { icon: <LayoutDashboard size={20} />, label: "Sheets", x: -140, y: 100, color: "text-emerald-400" },
  ];

  return (
    <div className="relative w-full aspect-square max-w-[500px] mx-auto flex items-center justify-center">
      {/* Central AI Hub */}
      <div className="relative z-10">
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="w-24 h-24 rounded-[2rem] bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center text-white shadow-[0_0_50px_rgba(37,99,235,0.4)]"
        >
          <Bot size={44} />
        </motion.div>
        <div className="absolute -inset-4 bg-blue-500/20 rounded-full blur-2xl -z-10 animate-pulse"></div>
      </div>

      {/* Connection Lines & Tools */}
      {tools.map((tool, i) => (
        <React.Fragment key={i}>
          {/* Path */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
            <motion.path
              d={`M 250,250 Q ${250 + tool.x/2},${250 + tool.y} ${250 + tool.x},${250 + tool.y}`}
              fill="none"
              stroke="rgba(59, 130, 246, 0.1)"
              strokeWidth="2"
              strokeDasharray="5,5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: 0.5 + i * 0.2 }}
            />
            {/* Animated Data Packet */}
            <motion.circle
              r="4"
              fill={tool.color.includes('blue') ? '#3b82f6' : tool.color.includes('green') ? '#22c55e' : tool.color.includes('purple') ? '#a855f7' : '#10b981'}
              animate={{
                offsetDistance: ["0%", "100%"]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "linear"
              }}
              style={{
                offsetPath: `path("M 250,250 Q ${250 + tool.x/2},${250 + tool.y} ${250 + tool.x},${250 + tool.y}")`
              }}
            />
          </svg>

          {/* Tool Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 + i * 0.2 }}
            style={{ 
              transform: `translate(${tool.x}px, ${tool.y}px)`
            }}
            className="absolute p-4 glass-card rounded-2xl border border-white/10 flex flex-col items-center gap-2"
          >
            <div className={`p-3 rounded-xl bg-white/5 ${tool.color}`}>
              {tool.icon}
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">{tool.label}</span>
          </motion.div>
        </React.Fragment>
      ))}

      {/* Floating API Signals */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0, 1, 0],
              y: [0, -40],
              x: [(Math.random()-0.5)*100, (Math.random()-0.5)*200]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              delay: Math.random() * 5,
              ease: "easeOut" 
            }}
            className="absolute left-1/2 top-1/2 text-[10px] font-mono text-blue-400/40"
          >
            {`GET /api/v2/qualify`}
          </motion.div>
        ))}
      </div>
    </div>
  );
};
