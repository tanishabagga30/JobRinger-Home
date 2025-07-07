'use client';
import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // ✅ Global states
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showcart,setShowCart] = useState(false);
  const [user, setUser] = useState(null); // future auth
  const [cart, setCart] = useState([]);   // future cart
  const [showModal, setShowModal] = useState(false);

  // ✅ Reusable actions
  const toggleMobileMenu = () => setIsMobileMenuOpen(prev => !prev);
  const openMobileMenu = () => setIsMobileMenuOpen(true);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);
 const openCart = () => setShowCart(true);
 const closeCart = () => setShowCart(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <AppContext.Provider
      value={{
        isMobileMenuOpen,
        toggleMobileMenu,
        openMobileMenu,
        closeMobileMenu,
        user,
        setUser,
        cart,
        setCart,
        openCart,
        closeCart,
        showcart,
        setShowCart,
        selectedProduct,
        setSelectedProduct,
        showModal,setShowModal
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
