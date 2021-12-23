/**
 *  This custom hook handles debouncing when the user types in a search
 */
import React, { useState, useEffect } from "react";

const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    
    /**  Since this runs just when the hook wants to unmount. If the user remounts it
     *  by typing again the timer will be canceled and started again.
     * */
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce;