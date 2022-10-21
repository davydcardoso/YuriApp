import AsyncStorage from '@react-native-community/async-storage';
import React, {
  createContext,
  ReactNode,
  useEffect,
  useState,
  useCallback,
  useContext,
} from 'react';

type AuthState = {
  token: string;
  user: object;
};

type SignInCredentialsProps = {
  username: string;
  password: string;
};

type AuthContextsProps = {
  loading: boolean;
  user: object;
  signIn(data: SignInCredentialsProps): Promise<void>;
  signOut(): void;
};

const AuthContext = createContext<AuthContextsProps>({} as AuthContextsProps);

type Props = {
  children: ReactNode;
};

export const AuthProvider: React.FC<Props> = ({children}) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<AuthState>({} as AuthState);

  useEffect(() => {
    async function handleLoadingData() {
      const [token, user] = await AsyncStorage.multiGet([
        '@brayanoficina:token',
        '@brayanoficina:user',
      ]);

      if (token[1] && user[1]) {
        setData({token: token[1], user: JSON.parse(user[1])});
      }

      setLoading(false);
    }

    handleLoadingData();
  }, []);

  const signIn = useCallback(
    async ({username, password}: SignInCredentialsProps) => {
      setLoading(true);
      setData({
        user: {username, password},
        token: '4a7281f3-05c0-40db-9490-2bebdab7dc29',
      });

      await AsyncStorage.setItem(
        '@brayanoficina:token',
        '4a7281f3-05c0-40db-9490-2bebdab7dc29',
      );

      await AsyncStorage.setItem(
        '@brayanoficina:user',
        JSON.stringify({username, password}),
      );

      setLoading(false);
    },
    [],
  );

  const signOut = async () => {
    setLoading(true);
    setData({} as AuthState);
    await AsyncStorage.clear();
    setLoading(false);
  };

  return (
    <AuthContext.Provider value={{loading, user: data.user, signIn, signOut}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
};
