import React from 'react';
// 引入通用图标
import { 
  ArrowRight, ArrowLeft, ChevronRight, ChevronLeft, 
  PenTool, Award, 
  Zap, Heart, Cat, Sparkles, Target, Leaf 
} from './Icons_temp'; 

import { leadDesigner } from './constants';
import { categoriesData } from './productsData';

// 建立字符串到组件的映射
const iconMap = {
  Zap: Zap,
  Heart: Heart,
  Cat: Cat,
  Sparkles: Sparkles,
  Target: Target,
  Leaf: Leaf
};

// 🟢 自定义 WeChat 图标 (标准品牌形状)
const WeChatIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M8.5,1.5c-4.1,0-7.5,3.1-7.5,7c0,2.1,1,4,2.7,5.4c-0.3,1.1-1,2.5-1.1,2.6c-0.1,0.2,0,0.5,0.3,0.5c0.1,0,0.2,0,0.3-0.1
    c0.4-0.2,2.3-1.4,3.2-2c0.7,0.2,1.4,0.3,2.1,0.3c0.3,0,0.6,0,0.9-0.1c-0.2-0.8-0.3-1.6-0.3-2.5C9.1,6.8,13,3,17.9,3
    c0.4,0,0.8,0,1.2,0.1C17.3,1.6,13.2,0.1,8.5,1.5z M18,5c-3.6,0-6.5,2.7-6.5,6c0,1.9,0.9,3.6,2.4,4.7c-0.3,1-0.9,2.2-1,2.3
    c-0.1,0.2,0,0.4,0.2,0.5c0.1,0,0.2,0,0.3-0.1c0.3-0.2,2-1.2,2.8-1.8c0.6,0.2,1.2,0.3,1.8,0.3c3.6,0,6.5-2.7,6.5-6S21.6,5,18,5z
    M16,9.5c-0.6,0-1-0.4-1-1s0.4-1,1-1s1,0.4,1,1S16.6,9.5,16,9.5z M20,9.5c-0.6,0-1-0.4-1-1s0.4-1,1-1s1,0.4,1,1S20.6,9.5,20,9.5z
    M6.5,7C5.7,7,5,6.3,5,5.5S5.7,4,6.5,4S8,4.7,8,5.5S7.3,7,6.5,7z M10.5,7C9.7,7,9,6.3,9,5.5S9.7,4,10.5,4S12,4.7,12,5.5
    S11.3,7,10.5,7z"/>
  </svg>
);

// 🟣 自定义 Instagram 图标 (标准品牌形状)
const InstagramIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const HomeView = ({ setView, lang, t, isRTL, setSelectedCategory }) => {
  const IconArrowRightComponent = isRTL ? ArrowLeft : ArrowRight;
  const IconChevronRightComponent = isRTL ? ChevronLeft : ChevronRight;
  const gradientDir = isRTL ? 'l' : 'r';
  const heroGradientClass = `absolute inset-0 bg-gradient-to-${gradientDir} from-slate-50 via-transparent to-transparent`;
  const floatPositionClass = isRTL ? 'right-1/4' : 'left-1/4';
  const floatBgClass = `absolute top-1/3 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-xl hidden md:block animate-float ${floatPositionClass}`;

  return (
    <div className="animate-entry">
      <section id="home" className="relative h-[600px] md:h-[700px] flex items-center bg-slate-50 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-blue-50/50 z-0"></div>
        
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10 h-full">
          <div className="order-2 md:order-1 space-y-8 p-8 md:p-12 rounded-3xl transition-all duration-500 border border-white/40 bg-white/70 backdrop-blur-md shadow-xl hover:shadow-2xl hover:-translate-y-1 relative z-20">
            <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider rounded-full shadow-sm">{t ? t.newCollection : 'New'}</span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-tight">{t ? t.heroTitle : 'Design'}<br/><span className="text-gradient">{t ? t.heroTitleHighlight : 'Future'}</span></h1>
            <p className="text-lg text-slate-600 max-w-lg leading-relaxed">{t ? t.heroDesc : ''}</p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button onClick={() => setView('store')} className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 px-8 py-4 rounded-full font-bold text-lg transition-all hover:-translate-y-1 shadow-lg shadow-yellow-400/30 flex items-center gap-2">{t ? t.shopNow : 'Shop'} <IconArrowRightComponent size={20} /></button>
              <button className="px-8 py-4 rounded-full font-bold text-slate-700 border-2 border-slate-300 hover:border-slate-800 hover:text-slate-900 hover:bg-white transition-colors">{t ? t.watchVideo : 'Video'}</button>
            </div>
          </div>
        </div>

        <div className={`absolute top-0 w-full md:w-[100%] h-full z-0 order-1 md:order-2 ${isRTL ? 'left-0' : 'right-0'}`}>
            <div className="relative w-full h-full">
              <img src="img/main.png" alt="Smart Living Room" className="w-full h-full object-cover" />
              <div className={heroGradientClass}></div>
            </div>
            <div className={floatBgClass}>
                <div className="text-slate-500 font-bold uppercase text-xs mb-1">AI 智能光感灯</div>
                <div className="text-xl font-extrabold text-blue-700">¥ 199.00</div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full absolute -bottom-1 -left-1"></div>
            </div>
        </div>

        {/* 🟢 新增：左下角社交媒体栏 (WeChat & IG) */}
        <div className={`absolute bottom-8 ${isRTL ? 'right-8' : 'left-8'} z-30 hidden md:flex flex-col gap-4`}>
          <div className="group relative">
            <div onClick={() => {
              navigator.clipboard.writeText('feifeiwongmax3').then(() => {
                window.open('wechat://', '_blank');
                alert('微信号已复制到剪贴板，请在微信中搜索添加好友');
              }).catch(err => {
                console.error('复制失败:', err);
                window.open('wechat://', '_blank');
              });
            }} className="w-12 h-12 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-green-600 hover:bg-green-500 hover:text-white transition-all duration-300 shadow-lg border border-white/50 cursor-pointer">
               <WeChatIcon className="w-7 h-7" />
            </div>
            {/* Tooltip for WeChat ID */}
            <div className="absolute left-14 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-xs px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
               feifeiwongmax3
            </div>
          </div>
          
          <div className="group relative">
             <a href="https://www.instagram.com/feifeiwong6133/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-pink-600 hover:bg-pink-500 hover:text-white transition-all duration-300 shadow-lg border border-white/50">
               <InstagramIcon className="w-6 h-6" />
             </a>
            {/* Tooltip for IG Handle */}
            <div className="absolute left-14 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-xs px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
               @feifeiwong6133
            </div>
          </div>
        </div>

      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">{t ? t.curated : ''}</h2>
            <p className="text-slate-500 text-lg">{t ? t.curatedDesc : ''}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categoriesData.filter(c => c.id !== 'all').map((item, idx) => {
              const IconComponent = iconMap[item.icon] || Zap; 

              return (
                <div 
                  key={idx} 
                  onClick={() => {
                    setSelectedCategory(item.id);
                    setView('store');
                  }}
                  className="bg-slate-50 p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer group border border-transparent hover:bg-white hover:border-slate-200"
                >
                  <div className={`w-16 h-16 ${item.bg} ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <IconComponent size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{item.name[lang] || item.name['en']}</h3>
                  <p className="text-slate-500 text-sm mb-6 leading-relaxed">{item.desc[lang] || item.desc['en']}</p>
                  <span className="inline-flex items-center text-sm font-bold text-slate-900 group-hover:text-blue-700 transition-colors">{t ? t.browseSeries : 'Browse'} <IconChevronRightComponent size={16} className={isRTL ? "mr-1" : "ml-1"} /></span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Product Section */}
      <section id="featured" className="py-24 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-800 text-sm font-bold uppercase tracking-wider rounded-full shadow-sm mb-4">{t ? t.smartNew : 'Smart Arrival'}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{t ? t.monthlyFeature : 'Featured This Month'}</h2>
            <p className="text-slate-600 text-lg">{t ? t.notJustSofa : 'More Than Just A Sofa'}</p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Product Image */}
                <div className="relative overflow-hidden">
                  <img src="img/DIYCLOCKROCK.jpg" alt="Smart Sofa" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-6 left-6">
                    <span className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-full font-bold text-sm shadow-lg">{t ? t.save : 'Save'} 25%</span>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-lg">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-slate-900">AI智能沙发</h3>
                          <p className="text-slate-600 text-sm">Smart Lounge Chair</p>
                        </div>
                        <div className="text-right">
                          <div className="text-3xl font-extrabold text-blue-700">¥ 2,999</div>
                          <div className="text-slate-500 line-through text-sm">¥ 3,999</div>
                        </div>
                      </div>
                      <button onClick={() => setView('store')} className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-bold transition-colors">
                        {t ? t.details : 'View Details'}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Product Details */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="mb-8">
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">{t ? t.notJustSofa : 'More Than Just A Sofa'}</h3>
                    <p className="text-slate-600 text-lg leading-relaxed mb-8">{t ? t.sofaDesc : 'A smart lounge chair with built-in pressure sensors...'}</p>

                    <div className="space-y-4 mb-8">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <Zap size={24} className="text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-900 mb-1">智能坐姿识别</h4>
                          <p className="text-slate-600 text-sm">自动检测坐姿并调节支撑角度</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <Heart size={24} className="text-green-600" />
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-900 mb-1">健康提醒</h4>
                          <p className="text-slate-600 text-sm">久坐提醒，呵护脊椎健康</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <Sparkles size={24} className="text-purple-600" />
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-900 mb-1">环境感知</h4>
                          <p className="text-slate-600 text-sm">根据环境光线自动调节氛围</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="designers" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
             <div className="max-w-2xl">
               <div className="flex items-center gap-2 mb-4"><PenTool size={20} className="text-yellow-500" /><span className="text-blue-700 font-bold uppercase text-sm tracking-widest">{t ? t.designLeadTitle : ''}</span></div>
               <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">{t ? t.designSoul : ''}</h2>
             </div>
             <p className={`text-slate-500 max-w-md text-base leading-relaxed ${isRTL ? 'border-r-4 pr-4' : 'border-l-4 pl-4'} border-yellow-400`}>{t ? t.designQuote : ''}</p>
          </div>
          <div className="bg-slate-50 rounded-[2.5rem] p-8 md:p-12 flex flex-col md:flex-row items-center gap-12 border border-slate-100 shadow-sm transition-all hover:shadow-lg">
            <div className="w-full md:w-1/3 shrink-0">
                <div className="relative overflow-hidden rounded-2xl aspect-[3/4] shadow-2xl group">
                  <img src={leadDesigner.image} alt={leadDesigner.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 border-[6px] border-white/10 rounded-2xl z-10 pointer-events-none"></div>
                </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600"><Award size={24} /></div>
                  <span className="text-slate-900 font-bold uppercase tracking-widest text-sm bg-white px-3 py-1 rounded-full shadow-sm">{leadDesigner.title[lang]}</span>
              </div>
              <h3 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8">{leadDesigner.name}</h3>
              <div className="relative">
                <p className="text-slate-600 text-lg md:text-xl leading-loose mb-8 font-light italic relative z-10">{leadDesigner.desc[lang]}</p>
              </div>
              <div className="flex items-center gap-6 pt-6 border-t border-slate-200">
                  <button onClick={() => setView('designers')} className="flex items-center gap-2 text-blue-700 font-bold hover:text-blue-900 transition-colors">{t ? t.viewPortfolio : 'Portfolio'} <IconArrowRightComponent size={18} /></button>
                  <span className="text-slate-400 text-sm">|</span>
                  <span className="text-slate-500 font-medium text-sm">{t ? t.designerTitle : 'Designer'}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeView;
