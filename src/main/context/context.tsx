import React, { useState } from "react";

export type ContextType = {
  favoriteCharacter: string;
  setFavoriteCharacter: any;
};

export const FavoriteCharacterContext = React.createContext<ContextType>({
  favoriteCharacter: "",
  setFavoriteCharacter: () => {},
});

interface Props {
  children: React.ReactNode;
}

export const ContextProvider: React.FC<Props> = ({ children }) => {
  const [favoriteCharacter, setFavoriteCharacter] = useState<string>("");

  return (
    <FavoriteCharacterContext.Provider
      value={{ favoriteCharacter, setFavoriteCharacter }}
    >
      {children}
    </FavoriteCharacterContext.Provider>
  );
};
