import React, {createContext, useContext} from "react";

const ControlerContext = createContext();
export const useControler = () => useContext(ControlerContext);

export const ControlerContextProvider = ({children}) => {
    const [isShown, setIsShown] = React.useState(true)

    const value = {
        isShown: isShown,
        setIsShown: setIsShown
    }
    return (
        <ControlerContext.Provider value={value}>
            {children}
        </ControlerContext.Provider>
    )
}