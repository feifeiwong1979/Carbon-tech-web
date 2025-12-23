import React, { useState } from 'react';
// ✅ 修正路径：从同级目录引入图标
import { ArrowRight } from './icons.jsx';

const ContactForm = ({ t }) => {
  const [desc, setDesc] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent / 消息已发送 / تم إرسال الرسالة");
  };
  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div className="grid md:grid-cols-2 gap-5">
        <div className="space-y-1">
          <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">{t.nameLabel}</label>
          <input type="text" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100 outline-none transition-all text-sm" placeholder={t.namePlaceholder} />
        </div>
        <div className="space-y-1">
          <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">{t.phoneLabel}</label>
          <input type="tel" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100 outline-none transition-all text-sm" placeholder={t.phonePlaceholder} />
        </div>
      </div>
      <div className="space-y-1">
        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">{t.descLabel}</label>
        <textarea rows="4" value={desc} onChange={(e) => setDesc(e.target.value)} className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100 outline-none transition-all text-sm resize-none" placeholder={t.descPlaceholder}></textarea>
      </div>
      <button type="submit" className="w-full bg-slate-900 hover:bg-blue-700 text-white font-bold py-4 rounded-lg transition-all shadow-lg hover:shadow-blue-500/20 transform hover:-translate-y-0.5 flex items-center justify-center gap-2">
        {t.send} <ArrowRight size={18} />
      </button>
    </form>
  );
};

export default ContactForm;