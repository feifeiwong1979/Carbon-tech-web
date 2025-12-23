import React, { useState, useEffect } from 'react';

// 组件引用
import Navbar from './Navbar';
import Footer from './Footer';
import HomeView from './HomeView';
import StoreView from './StoreView';
import ProductDetailView from './ProductDetailView';
import DesignersView from './DesignersView';
import ContactView from './ContactView';
import CartView from './CartView';
import AdminView from './AdminView';

// 数据引用
import translations from './translations'; // ⚠️ 注意：请确认文件名是 translation.js 还是 translations.js
import { companyConfig } from './constants';
import { initialProducts } from './productsData';

function App() {
  const [view, setView] = useState('home');
  const [lang, setLang] = useState('en'); // 默认语言
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState(initialProducts);

  // 1. 初始化语言
  useEffect(() => {
    const savedLang = localStorage.getItem('lang');
    if (savedLang) {
      setLang(savedLang);
    }
  }, []);

  // 2. 切换语言函数
  const changeLanguage = (newLang) => {
    setLang(newLang);
    localStorage.setItem('lang', newLang);
  };

  // 3. 购物车逻辑
  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart(prev => prev.filter(item => item.id !== productId));
  };

  const updateCartQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart(prev =>
      prev.map(item =>
        item.id === productId
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  // 4. 选择产品逻辑
  const selectProduct = (product) => {
    setSelectedProduct(product);
    setView('product-detail');
  };

  // 获取翻译对象 (如果 undefined 则回退到 'en')
  const t = translations[lang] || translations['en'];
  const isRTL = lang === 'ar';

  // 5. 视图渲染逻辑
  const renderView = () => {
    // 提取公共属性，避免重复代码
    const commonProps = {
      setView,
      lang,
      t,
      isRTL,
      cart,
      addToCart,
      removeFromCart,
      updateQuantity: updateCartQuantity, // 对应 CartView 的 props
      clearCart
    };

    switch (view) {
      case 'home':
        return (
          <HomeView
            {...commonProps}
            setSelectedCategory={setSelectedCategory}
          />
        );
      case 'store':
        return (
          <StoreView
            {...commonProps}
            products={products}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            onProductClick={selectProduct} // 对应 StoreView 的 props
          />
        );
      case 'product-detail':
        return (
          <ProductDetailView
            {...commonProps}
            product={selectedProduct}
            // ProductDetailView 可能没有 click handler，这里主要是展示
          />
        );
      case 'designers':
        return <DesignersView {...commonProps} />;
      case 'contact':
        return <ContactView {...commonProps} />;
      case 'cart':
        return <CartView {...commonProps} />;
      case 'admin':
        return (
          <AdminView
            {...commonProps}
            products={products}
            setProducts={setProducts}
          />
        );
      default:
        return (
          <HomeView
            {...commonProps}
            setSelectedCategory={setSelectedCategory}
          />
        );
    }
  };

  return (
    <div className={`min-h-screen bg-white ${isRTL ? 'rtl' : 'ltr'}`}>
      <Navbar
        view={view}
        setView={setView}
        lang={lang}                 // ✅ 关键修复：必须传递 lang
        setLang={changeLanguage}    // ✅ 关键修复：传递切换函数，但在 Navbar 里叫 setLang
        t={t}
        isRTL={isRTL}
        cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)} // Navbar 用的是 cartCount
      />
      
      <main>
        {renderView()}
      </main>
      
      <Footer
        setView={setView}
        lang={lang}
        t={t}
        isRTL={isRTL}
        companyConfig={companyConfig}
      />
    </div>
  );
}

export default App;