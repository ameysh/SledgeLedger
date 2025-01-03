import React, { createContext, useContext, useState } from 'react';

type DateFormatContextType = {
  dateFormat: string;
  setDateFormat: (format: string) => void;
};

const DateFormatContext = createContext<DateFormatContextType | undefined>(undefined);

export const DateFormatProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [dateFormat, setDateFormat] = useState('DD/MM/YYYY');

  return (
    <DateFormatContext.Provider value={{ dateFormat, setDateFormat }}>
      {children}
    </DateFormatContext.Provider>
  );
};

export const useDateFormat = () => {
  const context = useContext(DateFormatContext);
  if (context === undefined) {
    throw new Error('useDateFormat must be used within a DateFormatProvider');
  }
  return context;
};
