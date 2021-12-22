import React from 'react';

interface Props {
  children: React.ReactNode;
}
const ArrowWrapper = ({ children }: Props) => {
  return (
    <span className="text-2xl">
      {children}
    </span>
  )
}

export default ArrowWrapper;