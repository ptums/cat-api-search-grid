import React from 'react';

interface Props {
  error: string;
}
const Error = ({error}: Props) => (
  <div className="h-screen w-full flex flex-col justify-center items-center">
    <p className="text-xl font-bold">There was an error with the search!</p>
    {error}
  </div>
)

export default Error;