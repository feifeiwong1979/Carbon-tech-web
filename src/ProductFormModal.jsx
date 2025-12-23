import React, { useState } from 'react';
// ✅ 修正路径：从同级目录引入图标
import { XCircle, Save, ImageIcon } from './icons';

const ProductFormModal = ({ 
  currentProduct, 
  setCurrentProduct, 
  setIsEditing, 
  t, 
  handleSave, 
  categoriesData, 
  lang 
}) => {
  const [descImgUrls, setDescImgUrls] = useState({ zh: "", en: "", ar: "" });

  if (!currentProduct) return null;

  const updateField = (field, value, subField = null) => {
    if (subField) {
      setCurrentProduct({ 
        ...currentProduct, 
        [field]: { ...currentProduct[field], [subField]: value } 
      });
    } else {
      setCurrentProduct({ ...currentProduct, [field]: value });
    }
  };

  const handleInsertImage = (l) => {
    const url = descImgUrls[l];
    if (!url) return;
    
    // Create HTML image tag
    const imgTag = `<br/><img src="${url}" alt="Product Detail" style="width: 100%; border-radius: 8px; margin: 10px 0;" /><br/>`;
    
    // Get current description safely
    const currentDesc = currentProduct.desc ? (currentProduct.desc[l] || "") : "";
    
    // Append image tag
    updateField("desc", currentDesc + imgTag, l);
    
    // Clear input
    setDescImgUrls(prev => ({ ...prev, [l]: "" }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-modal">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl p-8 m-4 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold text-slate-900">{currentProduct.id ? t.editProduct : t.addProduct}</h3>
          <button onClick={() => setIsEditing(false)} className="text-slate-400 hover:text-slate-600"><XCircle size={24} /></button>
        </div>
        
        <div className="space-y-6">
          {/* Main Image Preview & Input */}
          <div className="w-full h-48 bg-slate-100 rounded-xl overflow-hidden relative group">
             <img src={currentProduct.image} alt="Preview" className="w-full h-full object-cover" />
             <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white text-sm">{t.imageLink}</p>
             </div>
          </div>
          <div>
             <label className="block text-sm font-bold text-slate-700 mb-1">{t.imageLink}</label>
             <input type="text" value={currentProduct.image} onChange={(e) => updateField("image", e.target.value)} className="w-full p-3 border rounded-lg" />
          </div>

          {/* Name Fields */}
          <div className="grid grid-cols-3 gap-4">
             {[ "zh", "en", "ar"].map(l => (
               <div key={l}>
                  <label className="block text-sm font-bold text-slate-700 mb-1">{t.productName} ({l.toUpperCase()})</label>
                  <input type="text" value={currentProduct.name[l]} onChange={(e) => updateField("name", e.target.value, l)} className="w-full p-3 border rounded-lg" dir={l === "ar" ? "rtl" : "ltr"} />
               </div>
             ))}
          </div>

          {/* Price & Category */}
          <div className="grid grid-cols-2 gap-6">
             <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">{t.productPrice}</label>
                <input type="number" value={currentProduct.price} onChange={(e) => updateField("price", Number(e.target.value))} className="w-full p-3 border rounded-lg" />
             </div>
             <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">{t.productCategory}</label>
                <select value={currentProduct.category} onChange={(e) => updateField("category", e.target.value)} className="w-full p-3 border rounded-lg bg-white">
                   {categoriesData.filter(c => c.id !== "all").map(c => (
                      <option key={c.id} value={c.id}>{c.name[lang]}</option>
                   ))}
                </select>
             </div>
          </div>

          {/* Tag Fields */}
          <div className="grid grid-cols-3 gap-4">
             {[ "zh", "en", "ar"].map(l => (
               <div key={l}>
                  <label className="block text-sm font-bold text-slate-700 mb-1">{t.productTag} ({l.toUpperCase()})</label>
                  <input type="text" value={currentProduct.tag ? currentProduct.tag[l] : ""} onChange={(e) => updateField("tag", e.target.value, l)} className="w-full p-3 border rounded-lg" dir={l === "ar" ? "rtl" : "ltr"} />
               </div>
             ))}
          </div>

          {/* Detailed Description Fields with Image Insert System */}
          <div className="space-y-4 border-t border-slate-100 pt-4">
             <h4 className="font-bold text-slate-900">{t.productDesc}</h4>
             {[ "zh", "en", "ar"].map(l => (
               <div key={l} className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <label className="block text-sm font-bold text-slate-500 mb-2 flex justify-between">
                    <span>{l.toUpperCase()}</span>
                    <span className="text-xs font-normal text-slate-400">HTML Supported</span>
                  </label>
                  
                  {/* Image Insertion Toolbar */}
                  <div className="flex gap-2 mb-2">
                    <input 
                      type="text" 
                      placeholder={t.imageUrlPlaceholder}
                      value={descImgUrls[l]}
                      onChange={(e) => setDescImgUrls(prev => ({ ...prev, [l]: e.target.value }))}
                      className="flex-1 p-2 text-xs border rounded focus:outline-none focus:border-blue-500"
                    />
                    <button 
                      type="button"
                      className="bg-slate-200 hover:bg-slate-300 px-3 py-1 rounded text-xs font-bold transition-colors flex items-center gap-1"
                      onClick={() => handleInsertImage(l)}
                    >
                      <ImageIcon size={12} /> {t.insertImage}
                    </button>
                  </div>

                  <textarea 
                    rows="5" 
                    value={currentProduct.desc ? currentProduct.desc[l] : ""} 
                    onChange={(e) => updateField("desc", e.target.value, l)} 
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" 
                    dir={l === "ar" ? "rtl" : "ltr"} 
                  />
               </div>
             ))}
          </div>

        </div>
        <div className="flex gap-4 mt-8 pt-6 border-t border-slate-100">
           <button onClick={handleSave} className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2"><Save size={18} /> {t.saveBtn}</button>
           <button onClick={() => setIsEditing(false)} className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 py-3 rounded-lg font-bold">{t.cancel}</button>
        </div>
      </div>
    </div>
  );
};

export default ProductFormModal;