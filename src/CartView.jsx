import React from 'react';
// ✅ 修正：使用 icons.jsx 中导出的正确名字 (Minus, Plus, Trash2)
import { ShoppingCart, Plus, Minus, Trash2, Mail } from './icons.jsx';

const CartView = ({ cart, removeFromCart, updateQuantity, lang, t, setView }) => {
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const generateCSV = () => {
    // BOM for Excel to recognize UTF-8
    const BOM = "\uFEFF";
    let csvContent = "data:text/csv;charset=utf-8," + BOM;
    csvContent += "ID,Name,Price,Quantity,Subtotal\n";
    cart.forEach(item => {
      const name = item.name[lang] || item.name["en"];
      const row = `${item.id},"${name}",${item.price},${item.quantity},${item.price * item.quantity}`;
      csvContent += row + "\n";
    });
    csvContent += `,,,Total,${totalPrice}`;
    return encodeURI(csvContent);
  };

  const handleSendInquiry = () => {
    if (cart.length === 0) return;

    // 1. Download CSV
    const csvData = generateCSV();
    const link = document.createElement("a");
    link.setAttribute("href", csvData);
    link.setAttribute("download", "inquiry_list.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // 2. Open Mail Client
    let body = `${t.inquiryBodyIntro}\n\n`;
    cart.forEach(item => {
      body += `- ${item.name[lang] || item.name["en"]} x ${item.quantity} (¥${item.price})\n`;
    });
    body += `\n${t.cartTotal}: ¥${totalPrice}\n\n`;
    
    window.location.href = `mailto:feifeiwongmax3@gmail.com?subject=${encodeURIComponent(t.inquirySubject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-20 animate-entry">
      <div className="bg-slate-900 text-white py-16">
         <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">{t.cartTitle}</h1>
            <p className="text-slate-400 text-lg">{t.cartTotal}: ¥ {totalPrice}</p>
         </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {cart.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl shadow-sm border border-slate-100">
             <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-300">
                <ShoppingCart size={40} />
             </div>
             <h2 className="text-2xl font-bold text-slate-900 mb-4">{t.cartEmpty}</h2>
             <button onClick={() => setView("store")} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-bold transition-all">{t.cartGoShop}</button>
          </div>
        ) : (
          <div className="space-y-6">
            {cart.map(item => (
              <div key={item.id} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col sm:flex-row items-center gap-6">
                 <img src={item.image} alt="" className="w-24 h-24 rounded-xl object-cover bg-slate-100" />
                 <div className="flex-1 text-center sm:text-left">
                    <h3 className="font-bold text-lg text-slate-900 mb-1">{item.name[lang]}</h3>
                    <p className="text-blue-600 font-bold">¥ {item.price}</p>
                 </div>
                 <div className="flex items-center gap-4">
                    <div className="flex items-center border border-slate-200 rounded-lg">
                       {/* ✅ 修正组件名: MinusIcon -> Minus */}
                       <button onClick={() => updateQuantity(item.id, -1)} className="p-2 hover:bg-slate-50 text-slate-500"><Minus size={16} /></button>
                       <span className="w-10 text-center font-bold text-slate-900">{item.quantity}</span>
                       {/* ✅ 修正组件名: PlusIcon -> Plus */}
                       <button onClick={() => updateQuantity(item.id, 1)} className="p-2 hover:bg-slate-50 text-slate-500"><Plus size={16} /></button>
                    </div>
                    {/* ✅ 修正组件名: TrashIcon -> Trash2 */}
                    <button onClick={() => removeFromCart(item.id)} className="p-2 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                       <Trash2 size={20} />
                    </button>
                 </div>
              </div>
            ))}

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 mt-8">
               <div className="flex justify-between items-center mb-8 pb-8 border-b border-slate-100">
                  <span className="text-xl font-bold text-slate-700">{t.cartTotal}</span>
                  <span className="text-3xl font-extrabold text-blue-700">¥ {totalPrice}</span>
               </div>
               <button onClick={handleSendInquiry} className="w-full bg-slate-900 hover:bg-blue-700 text-white py-5 rounded-xl font-bold text-lg shadow-xl flex items-center justify-center gap-3 transition-all hover:-translate-y-1">
                  <Mail size={24} /> {t.cartSendInquiry}
               </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartView;