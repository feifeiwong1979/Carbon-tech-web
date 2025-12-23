import React from 'react';
// ✅ 1. 修正路径：从同级目录引入图标
import { Filter, Settings, ShoppingCart, ChevronRight, ChevronLeft } from './Icons_temp';
// ✅ 2. 修正路径：从同级目录引入数据
import { companyConfig } from './constants';
import { categoriesData } from './productsData';

const StoreView = ({ products, selectedCategory, setSelectedCategory, lang, t, isRTL, setView, addToCart, onProductClick }) => {
  const filteredProducts = selectedCategory === "all"
    ? products
    : products.filter(p => p.category === selectedCategory);

  const currentCategoryName = categoriesData.find(c => c.id === selectedCategory)?.name[lang] || t.allProducts;
  const IconChevronRight = isRTL ? ChevronLeft : ChevronRight;

  return (
    <div className="min-h-screen bg-slate-50 pb-20 animate-entry">
      <div className="bg-blue-900 text-white py-16">
         <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">{t.store} - {companyConfig.name[lang]}</h1>
            <p className="text-blue-200 text-lg">全场满 ¥500 包邮 · 30天无理由退换</p>
         </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
           <aside className="w-full md:w-64 flex-shrink-0">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 sticky top-24">
                 <div className="flex justify-between items-center mb-6">
                   <h3 className="font-bold text-slate-900 text-lg">{t.category}</h3>
                   <Filter size={18} className="text-slate-400" />
                 </div>
                 <ul className="space-y-2">
                    {categoriesData.map(cat => (
                      <li
                        key={cat.id}
                        onClick={() => setSelectedCategory(cat.id)}
                        className={`cursor-pointer px-4 py-3 rounded-xl text-sm font-medium transition-all ${selectedCategory === cat.id ? 'bg-blue-600 text-white shadow-md' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}`}
                      >
                        {cat.name[lang]}
                      </li>
                    ))}
                 </ul>
                 <div className="mt-8 pt-8 border-t border-slate-100">
                    <h3 className="font-bold text-slate-900 mb-4">{t.priceRange}</h3>
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                       <input type="text" placeholder="¥ 0" className="w-20 p-2 border border-slate-200 rounded outline-none focus:border-blue-500" />
                       <input type="text" placeholder="¥" className="w-20 p-2 border border-slate-200 rounded outline-none focus:border-blue-500" />
                    </div>
                 </div>
                 <div className="mt-8 pt-8 border-t border-slate-100">
                    <button onClick={() => setView("admin")} className="flex items-center gap-2 text-xs text-slate-400 hover:text-blue-600 transition-colors w-full">
                       <Settings size={12} /> {t.admin}
                    </button>
                 </div>
              </div>
           </aside>
           <main className="flex-1">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-slate-900">{currentCategoryName}</h2>
                <span className="text-sm text-slate-500 font-medium bg-white px-3 py-1 rounded-full border border-slate-200">
                  {t.totalItems.replace("{count}", filteredProducts.length)}
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                 {filteredProducts.map(product => (
                    <div 
                      key={product.id} 
                      onClick={() => onProductClick(product)} // Click to view details
                      className="bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 cursor-pointer"
                    >
                       <div className="relative h-64 overflow-hidden bg-slate-100">
                          <img src={product.image} alt={product.name[lang]} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                          {product.tag && product.tag[lang] && <span className={`absolute top-3 bg-yellow-400 text-blue-900 text-xs font-bold px-2 py-1 rounded-md shadow-sm ${isRTL ? 'right-3' : 'left-3'}`}>{product.tag[lang]}</span>}
                          <button 
                            onClick={(e) => { e.stopPropagation(); addToCart(product); }}
                            className={`absolute bottom-3 bg-white text-slate-900 p-3 rounded-full shadow-lg hover:bg-blue-600 hover:text-white transition-colors opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 duration-300 ${isRTL ? 'left-3' : 'right-3'}`}
                          >
                             <ShoppingCart size={20} />
                          </button>
                       </div>
                       <div className="p-5">
                          <p className="text-xs text-slate-500 mb-2 font-medium uppercase">{categoriesData.find(c => c.id === product.category)?.name[lang]}</p>
                          <h3 className="font-bold text-slate-900 mb-4 truncate text-lg group-hover:text-blue-600 transition-colors">{product.name[lang]}</h3>
                          <div className="flex justify-between items-end border-t border-slate-50 pt-4">
                             <span className="font-extrabold text-xl text-blue-700">¥ {product.price}</span>
                             <span className="text-xs text-slate-400 line-through mb-1">¥ {Math.round(product.price * 1.2)}</span>
                          </div>
                       </div>
                    </div>
                 ))}
              </div>
           </main>
        </div>
      </div>
    </div>
  );
};

export default StoreView;