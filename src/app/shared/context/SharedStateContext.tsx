import React, { createContext, useContext, useState, ReactNode } from 'react';
import { inicialState } from './inicialState';
import { StateInterface } from './stateInterface';
import { StateManagementService } from './stateManagementService';

// Defina os tipos para o estado compartilhado

type SharedStateContextType = {
  sharedState: StateInterface;
  setSharedState: React.Dispatch<React.SetStateAction<StateInterface>>;
  stateManagementService: StateManagementService
};

const SharedStateContext = createContext<SharedStateContextType | undefined>(
  undefined
);

export function SharedStateProvider({ children }: { children: ReactNode }) {
  const [sharedState, setSharedState] = useState<StateInterface>(inicialState);

  const stateManagementService = new StateManagementService(sharedState, setSharedState);
  
  return (
    <SharedStateContext.Provider value={{ sharedState, setSharedState,stateManagementService }}>
      {children}
    </SharedStateContext.Provider>
  );
}

export function useSharedState() {
  const context = useContext(SharedStateContext);
  if (context === undefined) {
    throw new Error('useSharedState must be used within a SharedStateProvider');
  }
  return context;
}
