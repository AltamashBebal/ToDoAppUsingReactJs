import React from 'react';
import './style.css'
const Footer = () => {

    return (
        <>
<footer className="text-gray-700 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
    <img id="image" className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" src="%PUBLIC_URL%/logo.png" />
     
      <span className="ml-3 text-xl">Altamash Bebal</span>
    </a>
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2020 Altamash Bebal —
      <a href="https://www.instagram.com/_mr_altamash111/" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@mr_Altamash_111</a>
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <a href="https://www.facebook.com/altamash.bebal/" target="_blank" className="text-gray-500">
        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
        </svg>
      </a>
      <a href="https://twitter.com/AltamashBebal" target="_blank" className="ml-3 text-gray-500">
        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
        </svg>
      </a>
      <a href="https://www.instagram.com/_mr_altamash111/" target="_blank" className="ml-3 text-gray-500">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
        </svg>
      </a>
      <a href="https://www.linkedin.com/in/altamash-bebal-171a65181/" target="_blank" className="ml-3 text-gray-500">
        <img id="image" className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" src="%PUBLIC_URL%/logo.png" />
      </a>
    </span>
  
  </div>
</footer>
        </>
    );
}

export default Footer;