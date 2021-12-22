import React, { createContext, useState } from "react";

interface Breed {
  id: string;
  name: string;
}
interface ContextProps {
  breedList: Breed[];
  setBreedList: (e: Breed[]) => void;
}

export const BreedsContext = createContext<ContextProps>(null);

export const BreedsProvider = ({ children }) => {
  const [breedList, setBreedList] = useState<unknown | string[]>();
  const values = { breedList, setBreedList } as ContextProps;

  return (
    <BreedsContext.Provider value={values}>{children}</BreedsContext.Provider>
  );
};
