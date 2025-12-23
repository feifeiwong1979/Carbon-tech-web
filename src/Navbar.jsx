import React, { useState } from 'react';
// ✅ 确保从 icons 引入图标和 Logo
import { Menu, X, ShoppingCart, Globe, Search, User, CarbonLogo } from './Icons_temp'; 

const Navbar = ({ view, setView, lang = 'en', setLang, t = {}, isRTL, cartCount = 0 }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 安全的语言切换
  const toggleLanguage = () => {
    const nextLang = lang === 'en' ? 'zh' : (lang === 'zh' ? 'ar' : 'en');
    if (setLang) {
      setLang(nextLang);
    }
  };

  // ✅ 核心修复：确保 displayLang 永远有值，不会是 undefined
  const displayLang = (lang && typeof lang === 'string') ? lang.toUpperCase() : 'EN';

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 shadow-sm transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer group" 
            onClick={() => setView && setView('home')}
          >
            <div className="text-blue-600 transition-transform group-hover:scale-110 duration-300">
              <CarbonLogo />
            </div>
            <div className="hidden md:block">
              <h1 className="text-xl font-bold text-slate-900 tracking-tight leading-none">Carbon-Based</h1>
              <p className="text-xs text-slate-500 font-medium tracking-widest uppercase">Human Tech</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {['home', 'store', 'designers', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => setView && setView(item)}
                className={`text-sm font-bold uppercase tracking-wider transition-colors relative hover:text-blue-600 ${view === item ? 'text-blue-600' : 'text-slate-600'}`}
              >
                {t && t[item] ? t[item] : item}
                {view === item && <span className="absolute -bottom-8 left-0 w-full h-1 bg-blue-600 rounded-t-full"></span>}
              </button>
            ))}
          </div>

          {/* Icons & Actions */}
          <div className="hidden md:flex items-center gap-6">
            <button className="text-slate-400 hover:text-blue-600 transition-colors">
              <Search size={20} />
            </button>
            
            <button 
              onClick={toggleLanguage} 
              className="flex items-center gap-2 text-slate-600 hover:text-blue-600 font-bold text-xs uppercase tracking-wider bg-slate-50 px-3 py-2 rounded-full transition-colors"
            >
              <Globe size={16} />
              <span>{displayLang}</span>
            </button>

            <button onClick={() => setView && setView('admin')} className="text-slate-400 hover:text-blue-600 transition-colors">
              <User size={20} />
            </button>

            <button 
              onClick={() => setView && setView('cart')} 
              className="relative text-slate-600 hover:text-blue-600 transition-colors group"
            >
              <ShoppingCart size={24} className="group-hover:fill-blue-100" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full shadow-md animate-bounce">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-slate-600 hover:bg-slate-50 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-slate-100 shadow-xl animate-in slide-in-from-top-5">
          <div className="flex flex-col p-4 space-y-4">
            {['home', 'store', 'designers', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => { if(setView) setView(item); setIsMenuOpen(false); }}
                className={`text-left p-4 rounded-xl font-bold uppercase tracking-wider ${view === item ? 'bg-blue-50 text-blue-600' : 'text-slate-600 hover:bg-slate-50'}`}
              >
                {t && t[item] ? t[item] : item}
              </button>
            ))}
            <div className="flex justify-between items-center pt-4 border-t border-slate-100 mt-2 px-2">
               <button onClick={toggleLanguage} className="flex items-center gap-2 text-slate-600 font-bold text-sm">
                 <Globe size={18} /> {displayLang}
               </button>
               <button onClick={() => { if(setView) setView('cart'); setIsMenuOpen(false); }} className="relative flex items-center gap-2 text-slate-600 font-bold text-sm">
                 <ShoppingCart size={18} /> Cart
                 {cartCount > 0 && <span className="bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">{cartCount}</span>}
               </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;