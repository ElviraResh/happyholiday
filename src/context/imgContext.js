import { createContext, useContext } from "react";
import { useImage } from "../hooks/useImage";
import { holidaysContext } from "./holidaysContext";

export const imgContext = createContext({});

export const ImgContextProvider = ({children}) => {
  const {holiday} = useContext(holidaysContext);
  const [img, setImg] = useImage(holiday);

  return (
    <imgContext.Provider value={{img, setImg}}>
      {children}
    </imgContext.Provider>
  )
}