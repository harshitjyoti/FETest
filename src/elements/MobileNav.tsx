import React, { FC, useState } from "react";

interface IMobileNavProps {
  count: number;
  handleChange: (index: number) => void;
}

export const MobileNav: FC<IMobileNavProps> = ({ count, handleChange }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  if (count < 2) return null;

  return (
    <nav className="dotnav">
      <ul className="dotnav-dots">
        {Array.from({ length: count }, (_, index) => (
          <li
            key={index}
            className={
                currentIndex === index ? "dotnav-dot dotnav-dot_active" : "dotnav-dot"
            }
            onClick={() => {
              setCurrentIndex(index)
              handleChange(index)
            }}
          />
        ))}
      </ul>
    </nav>
  );
};
