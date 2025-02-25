import React from "react";

export function Hero({ children }) {
  return <div className={`flex flex-col`}>{children}</div>;
}

export function HeroTitle({ children }) {
  return <h2 className="mb-7 mt-36 text-xl lg:text-6xl font-semibold">{children}</h2>;
}

export function HeroDescription({ children }) {
  return <p>{children}</p>;
}
