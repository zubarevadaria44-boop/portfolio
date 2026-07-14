"use client";

import { createContext, useContext, useEffect, useState } from "react";

const LanguageContext = createContext({
  lang: "ru",
  setLang: () => {},
});

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState("ru");

  useEffect(() => {
    const saved = typeof window !== "undefined" ? localStorage.getItem("smaige-lang") : null;
    if (saved === "ru" || saved === "en") {
      setLangState(saved);
    }
  }, []);

  const setLang = (next) => {
    setLangState(next);
    if (typeof window !== "undefined") {
      localStorage.setItem("smaige-lang", next);
    }
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
