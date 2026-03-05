import { useEffect, useState } from "react";

export function useDebounce<T>(value: T, delay: number = 500): T {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

/*
A função useDebounce serve para atrasar (debounce) 
a execução de uma ação ou atualização de estado 
enquanto o usuário está digitando (ou fazendo alguma ação repetitiva rápida), 
evitando que algo aconteça muitas vezes seguidas.
*/