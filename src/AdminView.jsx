import React, { useState } from 'react';
// ✅ 1. 引入图标
import { Settings, LogOut, Package, DollarSign, Plus, Edit3, Trash2 } from './icons';
// ✅ 2. 引入数据
import { categoriesData } from './productsData';
// ✅ 3. 引入刚才创建的模态框组件
import ProductFormModal from './ProductFormModal';

const AdminView = ({ products, setProducts, lang, t, isRTL, setView }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === "admin") {
      setIsAuthenticated(true);
    } else {
      alert("Wrong password!");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setPassword("");
    setView('home');
  };

  const handleDelete = (id) => {
    if (window.confirm(t.deleteConfirm)) {
      setProducts(products.filter(p => p.id !== id));
    }
  };

  const handleEdit = (product) => {
    const productWithDesc = {
       ...product,
       desc: product.desc || { zh: "", en: "", ar: "" }
    };
    setCurrentProduct(productWithDesc); 
    setIsEditing(true);
  };

  const handleAdd = () => {
    setCurrentProduct({
      id: Date.now(),
      name: { zh: "", en: "", ar: "" },
      price: 0,
      category: "daily",
      tag: { zh: "", en: "", ar: "" },
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800",
      desc: { zh: "", en: "", ar: "" } 
    });
    setIsEditing(true);
  };

  const handleSave = () => {
    if (!currentProduct) return;
    const exists = products.find(p => p.id === currentProduct.id);
    if (exists) {
      setProducts(products.map(p => p.id === currentProduct.id ? currentProduct : p));
    } else {
      setProducts([...products, currentProduct]);
    }
    setIsEditing(false);
    setCurrentProduct(null);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 animate-entry">
         <div className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-md text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-600"><Settings size={32} /></div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">{t.adminDashboard}</h2>
            <p className="text-slate-500 mb-8">{t.loginRequired}</p>
            <form onSubmit={handleLogin} className="space-y-4">
               <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder={t.passwordPlaceholder} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 outline-none text-center text-lg" autoFocus />
               <button type="submit" className="w-full bg-slate-900 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition-all">{t.enter}</button>
            </form>
            <button onClick={() => setView('home')} className="mt-6 text-slate-400 hover:text-slate-600 text-sm underline">{t.cancel}</button>
         </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 pb-20 animate-entry">
      {isEditing && (
        <ProductFormModal 
          currentProduct={currentProduct}
          setCurrentProduct={setCurrentProduct}
          setIsEditing={setIsEditing}
          t={t}
          handleSave={handleSave}
          categoriesData={categoriesData}
          lang={lang}
        />
      )}
      <div className="bg-slate-900 text-white py-8 shadow-md">
         <div className="container mx-auto px-4 flex justify-between items-center">
            <div className="flex items-center gap-4">
               <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center"><Settings size={20} /></div>
               <h1 className="text-2xl font-bold">{t.adminDashboard}</h1>
            </div>
            <button onClick={handleLogout} className="flex items-center gap-2 text-red-300 hover:text-red-100 bg-red-900/30 px-4 py-2 rounded-lg transition-colors"><LogOut size={18} /> {t.cancel}</button>
         </div>
      </div>
      <div className="container mx-auto px-4 py-10">
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
               <div className="flex items-center justify-between mb-4"><h3 className="text-slate-500 font-bold uppercase text-xs tracking-wider">{t.totalSKU}</h3><Package className="text-blue-500" size={20} /></div>
               <p className="text-3xl font-extrabold text-slate-900">{products.length}</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
               <div className="flex items-center justify-between mb-4"><h3 className="text-slate-500 font-bold uppercase text-xs tracking-wider">{t.avgPrice}</h3><DollarSign className="text-green-500" size={20} /></div>
               <p className="text-3xl font-extrabold text-slate-900">¥ {Math.round(products.reduce((acc, p) => acc + p.price, 0) / products.length)}</p>
            </div>
            <button onClick={handleAdd} className="bg-blue-600 hover:bg-blue-700 text-white p-6 rounded-2xl shadow-lg flex flex-col items-center justify-center gap-2 transition-all hover:scale-105"><Plus size={32} /><span className="font-bold">{t.addProduct}</span></button>
         </div>
         <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="overflow-x-auto">
               <table className="w-full text-left border-collapse">
                  <thead className="bg-slate-50 border-b border-slate-100">
                     <tr>
                        <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider w-20">ID</th>
                        <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider w-24">Img</th>
                        <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">{t.productName}</th>
                        <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">{t.productCategory}</th>
                        <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">{t.productPrice}</th>
                        <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">{t.actions}</th>
                     </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                     {products.map(product => (
                        <tr key={product.id} className="hover:bg-slate-50 transition-colors">
                           <td className="p-4 text-sm text-slate-400 font-mono">#{product.id}</td>
                           <td className="p-4"><div className="w-12 h-12 rounded-lg bg-slate-100 overflow-hidden"><img src={product.image} alt="" className="w-full h-full object-cover" /></div></td>
                           <td className="p-4 font-bold text-slate-900">{product.name[lang]}</td>
                           <td className="p-4"><span className="inline-block px-2 py-1 text-xs font-bold bg-blue-50 text-blue-600 rounded-md uppercase">{categoriesData.find(c => c.id === product.category)?.name[lang]}</span></td>
                           <td className="p-4 font-mono font-medium text-slate-700">¥ {product.price}</td>
                           <td className="p-4 text-right">
                             <div className="flex items-center justify-end gap-2">
                                <button onClick={() => handleEdit(product)} className="p-2 hover:bg-blue-100 text-blue-600 rounded-lg transition-colors"><Edit3 size={18} /></button>
                                <button onClick={() => handleDelete(product.id)} className="p-2 hover:bg-red-100 text-red-600 rounded-lg transition-colors"><Trash2 size={18} /></button>
                             </div>
                           </td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
         </div>
      </div>
    </div>
  );
};

export default AdminView;