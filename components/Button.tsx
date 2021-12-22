import React from "react";


interface Props {
  handlePage:() => void;
  children: React.ReactNode;
  isDisabled: boolean;
}

const Button = ({ handlePage, isDisabled, children }: Props) => (
  <button
    className="hover:cursor-pointer disabled:opacity-25"
    onClick={handlePage}
    disabled={isDisabled}
  >
    {children}
  </button>
);

export default Button;
