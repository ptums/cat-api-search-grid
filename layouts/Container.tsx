/**
 *  This layout component provides spacing for different screen resolutions
 */
import React from 'react';

interface Props {
  children: React.ReactNode;
}

const Container = ({ children }: Props) => {
  return (
    <div className="m-4 xl:m-0 xl:mx-auto xl:my-9 max-w-screen-xl">
      {children}
    </div>
  )
}

export default Container;