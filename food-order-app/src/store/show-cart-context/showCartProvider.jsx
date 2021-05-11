import { createContext, useState } from 'react';

export const showCartContext = createContext({});

const ShowCartContextProvider = ({ children }) => {
  const [cartShown, setCartShown] = useState(false);

  const showCartHandler = () => {
    setCartShown(true);
  };
  const hiddenCartHandler = () => {
    setCartShown(false);
  };

  return (
    <showCartContext.Provider
      value={{
        isShown: cartShown,
        onShow: showCartHandler,
        onHidden: hiddenCartHandler,
      }}
    >
      {children}
    </showCartContext.Provider>
  );
};

export default ShowCartContextProvider;
