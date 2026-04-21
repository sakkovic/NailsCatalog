import React from 'react';

interface PlaceholderProps {
  text: string;
}

export const Placeholder: React.FC<PlaceholderProps> = ({ text }) => {
  return <span className="placeholder">[{text}]</span>;
};
