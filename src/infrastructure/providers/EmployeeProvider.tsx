'use client';

import { createContext, ReactNode, useContext } from 'react';
import { useEmployeeProvider } from '@/infrastructure/hooks/useEmployeeProvider';

type EmployeeContextType = ReturnType<typeof useEmployeeProvider>;

const EmployeeContext = createContext<EmployeeContextType | null>(null);

export const EmployeeProvider = ({ children }: { children: ReactNode }) => {
  const providerValue = useEmployeeProvider();

  return (
    <EmployeeContext.Provider value={providerValue}>
      {children}
    </EmployeeContext.Provider>
  );
};

export const useEmployeeContext = () => {
  const context = useContext(EmployeeContext);
  if (!context) {
    throw new Error(
      'useEmployeeContext must be used within an EmployeeProvider'
    );
  }
  return context;
};
