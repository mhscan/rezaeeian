export function Card({ children, customClass }) {
  return <div className={`flex flex-col ${customClass} `}>{children}</div>;
}

export function TitleCard({ children }) {
  return <h4 className={`text-2xl font-normal`}>{children}</h4>;
}

export function DescriptionCard({ children }) {
  return <p className={`text-base font-normal  `}>{children}</p>;
}
