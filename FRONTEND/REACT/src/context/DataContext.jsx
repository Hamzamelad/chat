import React, { useState, useEffect, createContext, useContext } from "react";
import axios from "axios";

const DataContext = createContext();
export const useData = () => useContext(DataContext);

const DataContextProvider = ({ children }) => {
    const [conversations, setConversations] = useState();
    const [currentConv, setCurrentConv] = useState(0);

    const getConversations = () => {
        axios
            .get("http://127.0.0.1:8000/api/conversation/list/")
            .then((response) => {
                setConversations(response.data);
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        getConversations();
    }, []);
    return (
        <DataContext.Provider
            value={{
                conversations: conversations,
                currentConv: currentConv,
                setCurrentConv: setCurrentConv,
            }}
        >
            {children}
        </DataContext.Provider>
    );
};

export default DataContextProvider;
