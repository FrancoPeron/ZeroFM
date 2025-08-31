import { h } from "preact";
import { useState, useEffect } from "preact/hooks";
// import Burger from '@/components/appComponents/burger/burger';
// import NavBar from '@/components/appComponents/navBar/navbar';
import WidgetLogo from "@/components/widgetLogo";
import WidgetSocial from "@/components/WidgetSocial";
// import WidgetRadio from '@/components/appComponents/widgetRadio/widgetRadio';
// import WidgetTv from '@/components/appComponents/widgetTv/widgetTv';

const Header = () => {
  return (
    <header className="w-full flex items-center justify-between p-2 xs:p-3 sm:p-4 px-2 xs:px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16 max-w-[1920px] mx-auto">
        {/* Botón de navbar a la izquierda */}
        <a 
          href="https://www.catrielonline.com.ar" 
          target="_blank" 
          rel="noopener noreferrer"
          className="px-2 py-1.5 xs:px-3 xs:py-2 sm:px-4 sm:py-2 md:px-6 text-2xl font-bold text-center uppercase text-white flex items-center gap-2"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.875 3H4.125C2.953 3 2 3.897 2 5v14c0 1.103.953 2 2.125 2h15.75C21.047 21 22 20.103 22 19V5c0-1.103-.953-2-2.125-2m0 16H4.125c-.057 0-.096-.016-.113-.016q-.01 0-.012.008L3.988 5.046c.007-.01.052-.046.137-.046h15.75c.079.001.122.028.125.008l.012 13.946c-.007.01-.052.046-.137.046" fill="#fff"/>
            <path d="M6 7h6v6H6zm7 8H6v2h12v-2zm1-4h4v2h-4zm0-4h4v2h-4z" fill="#fff"/>
          </svg>
          <span className="hidden md:inline">Catriel Online</span>
          <span className="md:hidden">Catriel</span>
        </a>
        
        {/* Logo centrado */}
        <a href="/" className="flex items-center gap-1 xs:gap-2 sm:gap-3 md:gap-4">
          <WidgetLogo />
        </a>
        
        {/* Redes sociales a la derecha */}
        <WidgetSocial />
    </header>
  );
};

export default Header;