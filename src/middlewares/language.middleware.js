import createMiddleware from "next-intl/middleware";

export const locales = [
  { code: "en", label: "English", flag: "gb" },
  { code: "fa", label: "Farsi", flag: "ir" },
   
];

const localesCode = locales.map((locale) => locale.code);

export const LanguageMiddleware = {
  middleware: createMiddleware({
    locales: localesCode,
    defaultLocale: "fa",
  }),
  matcher: /\/((?!api|_next|.*\\..*).*)/,
};
