import React from 'react';

interface Props {
  children: React.ReactNode;
}
const ButtonTextWrapper = ({ children }: Props) => {
  return (
    <span className="text-lg mx-2">
      {children}
    </span>
  )
}

export default ButtonTextWrapper;