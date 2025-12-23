import React from 'react';
import { Mail, Phone, MapPin } from './components/common/icons';
import { companyConfig } from './constants';
import ContactForm from './ContactForm';

const ContactView = ({ lang, t, isRTL }) => {
  return (
    <div className="animate-entry min-h-screen bg-slate-50 pb-20">
      <div className="bg-blue-900 text-white py-24 relative overflow-hidden">
         <div className="absolute inset-0 opacity-20">
            <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
         </div>
         <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">{t.contactTitle}</h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">{t.contactDesc}</p>
         </div>
      </div>

      <div className="container mx-auto px-4 -mt-12 relative z-20">
         <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row border border-slate-100">
            {/* Left Info Column */}
            <div className="md:w-5/12 bg-slate-50 p-10 flex flex-col border-b md:border-b-0 md:border-r border-slate-100">
               <h3 className="text-xl font-bold text-slate-900 mb-8">{t.globalPresence}</h3>
               
               <div className="space-y-6 flex-grow">
                  {[
                    { icon: Phone, label: t.hotline, value: companyConfig.contact.phone },
                    { icon: Mail, label: t.email, value: companyConfig.contact.email },
                    { icon: MapPin, label: t.address, value: companyConfig.contact.address[lang] }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4 group">
                       <div className="w-12 h-12 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-blue-600 shadow-sm group-hover:border-blue-200 transition-colors shrink-0">
                          <item.icon size={22} />
                       </div>
                       <div className="pt-1">
                          <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">{item.label}</p>
                          <p className="font-bold text-slate-800 leading-snug">{item.value}</p>
                       </div>
                    </div>
                  ))}
               </div>

               <div className="mt-10 w-full h-48 bg-slate-200 rounded-xl overflow-hidden relative group border border-slate-200">
                  <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="Map" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-700 grayscale group-hover:grayscale-0" />
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                     <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-bold text-slate-700 shadow-sm flex items-center gap-2 transform group-hover:scale-105 transition-transform">
                        <MapPin size={14} className="text-red-500 fill-red-500" /> {t.visitUs}
                     </div>
                  </div>
               </div>
            </div>

            {/* Right Form Column */}
            <div className="md:w-7/12 p-10 md:p-12 bg-white">
               <div className="mb-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{t.sendMessage}</h3>
                  <p className="text-slate-500 text-sm">{t.formSubtitle}</p>
               </div>
               <ContactForm t={t} />
            </div>
         </div>
      </div>
    </div>
  );
};

export default ContactView;
