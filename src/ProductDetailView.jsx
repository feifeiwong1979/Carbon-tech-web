import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, Plus, CheckCircle } from './components/common/icons';

const ProductDetailView = ({ product, addToCart, setView, t, lang, isRTL }) => {
  const [activeImg, setActiveImg] = useState(product.image);
  const IconArrowLeftComponent = isRTL ? ArrowRight : ArrowLeft;

  return (
    <div className="animate-entry min-h-screen bg-white pb-20">
      <div className="container mx-auto px-4 py-8">
        <button onClick={() => setView('store')} className="flex items-center gap-2 text-slate-500 hover:text-blue-600 mb-8 font-medium transition-colors">
          <IconArrowLeftComponent size={20} /> {t.backToStore}
        </button>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Gallery */}
          <div className="space-y-4">
            <div className="aspect-square bg-slate-100 rounded-2xl overflow-hidden border border-slate-100">
               <img src={activeImg} alt={product.name[lang]} className="w-full h-full object-cover" />
            </div>
            {/* Placeholder thumbnails */}
            <div className="flex gap-4 overflow-x-auto pb-2">
               {[product.image, "https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?w=200", "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=200"].map((img, idx) => (
                  <div 
                    key={idx} 
                    onClick={() => setActiveImg(img)}
                    className={`w-20 h-20 rounded-lg cursor-pointer border-2 overflow-hidden flex-shrink-0 ${activeImg === img ? 'border-blue-600' : 'border-transparent'}`}
                  >
                     <img src={img} className="w-full h-full object-cover" alt="" />
                  </div>
               ))}
            </div>
          </div>

          {/* Info */}
          <div>
             <div className="mb-6">
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-bold rounded-full mb-4 uppercase tracking-wider">{product.tag?.[lang] || 'New'}</span>
                <h1 className="text-4xl font-extrabold text-slate-900 mb-2">{product.name[lang]}</h1>
                <p className="text-3xl font-bold text-blue-600">¥ {product.price}</p>
             </div>

             <div className="prose prose-slate mb-8 text-slate-600 leading-relaxed" 
                  dangerouslySetInnerHTML={{ __html: product.desc && product.desc[lang] ? product.desc[lang] : 'No description available.' }}>
             </div>

             <div className="flex gap-4 border-t border-slate-100 pt-8">
                <button 
                  onClick={() => addToCart(product)}
                  className="flex-1 bg-slate-900 hover:bg-blue-700 text-white py-4 rounded-xl font-bold shadow-lg transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3"
                >
                   <Plus size={20} /> {t.addToInquiryList}
                </button>
             </div>

             <div className="mt-12 bg-slate-50 p-6 rounded-xl border border-slate-100">
                <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2"><CheckCircle size={18} className="text-green-500" /> {t.productFeatures}</h4>
                <ul className="space-y-3 text-sm text-slate-600">
                   <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2"></span>
                      Eco-friendly material certificate (ISO 14001)
                   </li>
                   <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2"></span>
                      2-year global warranty support
                   </li>
                   <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2"></span>
                      Compatible with standard smart home hubs
                   </li>
                </ul>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailView;
