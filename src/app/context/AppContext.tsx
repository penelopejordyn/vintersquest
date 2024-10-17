'use client'
import { createContext, useContext, useState } from 'react';

interface AppState {
  carboySize: number;
  abv: number;
  sweetness: number;
  fermentable: string;
  setCarboySize: (size: number) => void;
  setABV: (abv: number) => void;
  setSweetness: (sweetness: number) => void;
  setFermentable: (fermentable: string) => void;
}

const AppContext = createContext<AppState | undefined>(undefined);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [carboySize, setCarboySize] = useState<number>(0);
  const [abv, setABV] = useState<number>(0);
  const [sweetness, setSweetness] = useState<number>(0);
  const [fermentable, setFermentable] = useState<string>("");

  return (
    <AppContext.Provider value={{ carboySize, abv, sweetness, fermentable, setCarboySize, setABV, setSweetness, setFermentable }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
