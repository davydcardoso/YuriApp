import React, {createContext, ReactNode, useContext, useRef} from 'react';
import DropdownAlert, {DropdownAlertType} from 'react-native-dropdownalert';

const DropdownContext = createContext({});

type Props = {
  children: ReactNode;
};

export enum AlertType {
  INFO = 'info',
  WARN = 'warn',
  ERROR = 'error',
  CUSTOM = 'custom',
  SUCCESS = 'success',
}

export const DropdownAlertProvider: React.FC<Props> = ({children}) => {
  const ref = useRef<DropdownAlertType>();

  return (
    <DropdownContext.Provider
      //@ts-ignore
      value={{ref}}>
      {children}
      <DropdownAlert
        //@ts-ignore
        ref={ref}
      />
    </DropdownContext.Provider>
  );
};

export const useDropdownAlert = () => useContext(DropdownContext);
