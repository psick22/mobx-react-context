import React, { createContext, useContext } from 'react';
import { RootStore } from './RootStore';

export const StoreContext = createContext();
export const StoreProvider = StoreContext.Provider;

export const useStore = () => useContext(StoreContext);
