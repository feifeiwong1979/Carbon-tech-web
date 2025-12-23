import React from 'react';

// ✅ 1. 注意：这里只接收 t, lang, setView。不要写 handleNavClick！
const Footer = ({ t = {}, lang, setView }) => {

  // ✅ 2. 我们在组件内部定义 handleNavClick
  // 这样无论父组件传没传，它都一定是个函数，就不会报错了
  const handleNavClick = (viewName) => {
    if (setView) {
      setView(viewName);
      window.scrollTo({ top: 0, behavior: 'smooth' }); // 点击后滚回顶部
    } else {
      console.error("setView is missing!");
    }
  };

  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-12 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Carbon-Based & Human Tech</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              {t.companyDesc || "Defining future living with innovative smart home solutions."}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.017 0C8.396 0 7.98.014 6.687.08 5.39.146 4.443.35 3.64.653c-.8.303-1.48.705-2.16 1.385-.68.68-1.082 1.36-1.385 2.16C.35 5.443.146 6.39.08 7.687.014 7.98 0 8.396 0 12.017s.014 4.037.08 5.33c.066 1.293.27 2.24.573 3.043.303.8.705 1.48 1.385 2.16.68.68 1.36 1.082 2.16 1.385.803.303 1.75.507 3.043.573 1.293.066 1.71.08 5.33.08s4.037-.014 5.33-.08c1.293-.066 2.24-.27 3.043-.573.8-.303 1.48-.705 2.16-1.385.68-.68 1.082-1.36 1.385-2.16.303-.803.507-1.75.573-3.043.066-1.293.08-1.71.08-5.33s-.014-4.037-.08-5.33c-.066-1.293-.27-2.24-.573-3.043-.303-.8-.705-1.48-1.385-2.16-.68-.68-1.36-1.082-2.16-1.385C19.557.35 18.61.146 17.317.08 16.024.014 15.608 0 12.017 0zm0 1.802c3.527 0 3.944.014 5.333.08 1.237.06 1.916.26 2.37.434.6.23 1.03.51 1.48.96.45.45.73.88.96 1.48.174.454.374 1.133.434 2.37.066 1.39.08 1.807.08 5.333s-.014 3.944-.08 5.333c-.06 1.237-.26 1.916-.434 2.37-.23.6-.51 1.03-.96 1.48-.45.45-.88.73-1.48.96-.454.174-1.133.374-2.37.434-1.39.066-1.807.08-5.333.08s-3.944-.014-5.333-.08c-1.237-.06-1.916-.26-2.37-.434-.6-.23-1.03-.51-1.48-.96-.45-.45-.73-.88-.96-1.48-.174-.454-.374-1.133-.434-2.37-.066-1.39-.08-1.807-.08-5.333s.014-3.944.08-5.333c.06-1.237.26-1.916.434-2.37.23-.6.51-1.03.96-1.48.45-.45.88-.73 1.48-.96.454-.174 1.133-.374 2.37-.434 1.39-.066 1.807-.08 5.333-.08zm0 12.198c-3.273 0-5.93-2.657-5.93-5.93s2.657-5.93 5.93-5.93 5.93 2.657 5.93 5.93-2.657 5.93-5.93 5.93zm0-9.802c-2.506 0-4.54 2.034-4.54 4.54s2.034 4.54 4.54 4.54 4.54-2.034 4.54-4.54-2.034-4.54-4.54-4.54zm6.866-1.554c-.576 0-1.044.468-1.044 1.044s.468 1.044 1.044 1.044 1.044-.468 1.044-1.044-.468-1.044-1.044-1.044z"/></svg>
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <span className="sr-only">WeChat</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 6.853-1.98-.005-.131-.009-.261-.009-.39 0-4.054-3.891-7.342-8.691-7.342zm7.26 0c-.005.13-.009.261-.009.39 0 1.885-.89 3.584-2.3 4.745-1.353 1.123-3.093 1.716-5.196 1.716-.276 0-.543.027-.811.05 2.479 2.082 1.886 5.766-1.24 7.822.005.131.009.261.009.39 0 4.054 3.891 7.342 8.691 7.342 4.8 0 8.691-3.288 8.691-7.342 0-4.054-3.891-7.342-8.691-7.342z"/></svg>
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
              </a>
            </div>
          </div>

          {/* Product Center */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold">{t.productCenter || "Product Center"}</h4>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => handleNavClick('home')} className="text-slate-400 hover:text-white transition-colors text-left w-full">{t.home || "Home"}</button></li>
              <li><button onClick={() => handleNavClick('store')} className="text-slate-400 hover:text-white transition-colors text-left w-full">{t.store || "Store"}</button></li>
              <li><button onClick={() => handleNavClick('designers')} className="text-slate-400 hover:text-white transition-colors text-left w-full">{t.designers || "Designers"}</button></li>
              <li><button onClick={() => handleNavClick('contact')} className="text-slate-400 hover:text-white transition-colors text-left w-full">{t.contact || "Contact"}</button></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold">{t.supportService || "Support"}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors block">{t.hotSearch || "Hot Search"}</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors block">FAQ</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors block">{t.procurement || "Procurement"}</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors block">{t.support || "Help Center"}</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold">{t.contactTitle || "Contact Us"}</h4>
            <div className="space-y-3 text-sm text-slate-400">
              <p className="flex items-start gap-2">
                <span className="font-bold text-white">{t.hotline || "Hotline"}:</span> 
                <span>+86 130 686 222 97</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="font-bold text-white">{t.email || "Email"}:</span>
                <span className="break-all">feifeiwongmax3@gmail.com</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="font-bold text-white">{t.address || "Address"}:</span>
                <span>{t.headquarters || "Shenzhen, China"}</span>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            {t.rights ? t.rights.replace('{year}', year) : `© ${year} Carbon-Based & Human Tech. All rights reserved.`}
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-slate-500 hover:text-white text-sm transition-colors">{t.privacy || "Privacy Policy"}</a>
            <a href="#" className="text-slate-500 hover:text-white text-sm transition-colors">{t.terms || "Terms of Service"}</a>
            <a href="#" className="text-slate-500 hover:text-white text-sm transition-colors">{t.sitemap || "Sitemap"}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
