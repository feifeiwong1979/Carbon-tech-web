export const globalStyles = `
  /* Logo 颜色与动画 */
  .carbon-logo-svg rect { fill: #1D4ED8; transition: fill 0.3s ease; }
  .carbon-logo-svg path, .carbon-logo-svg circle { stroke: #FACC15; fill: #FACC15; transition: all 0.3s ease; }
  .carbon-logo-svg path[fill="none"] { fill: none; }
  
  .group:hover .carbon-logo-svg rect { fill: #1E40AF; }
  .group:hover .carbon-logo-svg path, 
  .group:hover .carbon-logo-svg circle { stroke: #FDE047; fill: #FDE047; }

  /* 导航栏磨砂效果 */
  .scrolled-nav { 
      background-color: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(10px);
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
      padding-top: 12px !important;
      padding-bottom: 12px !important;
  }

  /* 动画关键帧 */
  @keyframes fadeInUp { 
      from { opacity: 0; transform: translateY(20px); } 
      to { opacity: 1; transform: translateY(0); } 
  }
  .animate-entry { animation: fadeInUp 0.8s ease-out forwards; }
  
  @keyframes float { 
      0%, 100% { transform: translateY(0); } 
      50% { transform: translateY(-6px); } 
  }
  .animate-float { animation: float 4s ease-in-out infinite; }
  
  /* 模态框动画 */
  @keyframes modalIn {
    from { opacity: 0; transform: scale(0.95); }
    to { opacity: 1; transform: scale(1); }
  }
  .animate-modal { animation: modalIn 0.2s ease-out forwards; }

  /* 文字渐变 */
  .text-gradient {
      background: linear-gradient(to right, #2563EB, #1D4ED8);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
  }
`;