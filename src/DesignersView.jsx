import React from 'react';
import { PenTool, Award, Target, Leaf, Sparkles } from './components/common/icons';
import { leadDesigner } from './constants';

const DesignersView = ({ lang, t, isRTL }) => {
  return (
    <div className="animate-entry min-h-screen bg-white">
      {/* Header */}
      <div className="bg-slate-900 text-white py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">{t.designers}</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">{t.designQuote}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        {/* Lead Designer */}
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-32">
          <div className="lg:w-1/2 relative">
             <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
               <img src={leadDesigner.image} alt={leadDesigner.name} className="w-full h-full object-cover" />
             </div>
             <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-yellow-400 rounded-full z-[-1]"></div>
          </div>
          <div className="lg:w-1/2">
             <div className="flex items-center gap-3 mb-6">
                <span className="w-12 h-1 bg-blue-600"></span>
                <span className="text-blue-600 font-bold uppercase tracking-widest">{leadDesigner.title[lang]}</span>
             </div>
             <h2 className="text-5xl font-bold text-slate-900 mb-8">{leadDesigner.name}</h2>
             <p className="text-xl text-slate-600 leading-relaxed mb-10">{leadDesigner.desc[lang]}</p>
             <div className="grid grid-cols-2 gap-8">
                <div>
                   <h4 className="text-3xl font-bold text-slate-900 mb-2">10+</h4>
                   <p className="text-slate-500">Years Experience</p>
                </div>
                <div>
                   <h4 className="text-3xl font-bold text-slate-900 mb-2">25+</h4>
                   <p className="text-slate-500">International Awards</p>
                </div>
             </div>
          </div>
        </div>

        {/* Philosophy */}
        <div className="mb-32">
           <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900">{t.philosophyTitle}</h2>
           </div>
           <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: t.philosophy1, desc: t.philosophy1Desc, icon: Target },
                { title: t.philosophy2, desc: t.philosophy2Desc, icon: Sparkles },
                { title: t.philosophy3, desc: t.philosophy3Desc, icon: Leaf }
              ].map((item, idx) => (
                <div key={idx} className="bg-slate-50 p-10 rounded-2xl text-center hover:shadow-xl transition-shadow">
                   <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 text-blue-600 shadow-sm">
                      <item.icon size={32} />
                   </div>
                   <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
                   <p className="text-slate-500">{item.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
};

export default DesignersView;
