import React, { createContext, useContext, useState } from "react";
import locales from "../app/locales";

type Language = "zh-CN" | "en-US";
type LocaleMessages = typeof locales;
type LocalesType = Record<Language, LocaleMessages>;
type LocaleContextType = {
  locale: Language;
  messages: LocaleMessages;
  setLocaleMessages: (locale: Language) => void;
};

const LocaleContext = createContext<LocaleContextType>({
  locale: "zh-CN",
  messages: locales["zh-CN"],
  setLocaleMessages: (locale: Language) => {},
});

export const useLocale = () => useContext(LocaleContext);

interface LocaleProviderProps {
  children: React.ReactNode;
}

export const LocaleProvider: React.FC<LocaleProviderProps> = ({ children }) => {
  const [locale, setLocale] = useState<Language>("zh-CN");
  const [messages, setMessages] = useState<LocaleMessages>(locales["zh-CN"]);
  const setLocaleMessages = (locale: Language) => {
    setLocale(locale);
    setMessages(locales[locale]);
  };

  return (
    <LocaleContext.Provider value={{ locale, messages, setLocaleMessages }}>
      {children}
    </LocaleContext.Provider>
  );
};
