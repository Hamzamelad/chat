import React, { useState, useEffect, createContext, useContext } from "react";
import axios from "axios";

const DataContext = createContext();
export const useData = () => useContext(DataContext);

const DataContextProvider = ({ children }) => {
    const [conversations, setConversations] = useState();
    const [currentConv, setCurrentConv] = useState(0);

    const getConversations = () => {
        console.log('new conv')
        axios
            .get("http://127.0.0.1:8000/api/conversation/list/")
            .then((response) => {
                setConversations(response.data);
                console.log(1,response.data)
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        getConversations();
    }, []);

    useEffect(() => {
        console.log(conversations);
    }, [conversations]);
    return (
        <DataContext.Provider
            value={{
                conversations: conversations,
                setConversations: setConversations,
                currentConv: currentConv,
                setCurrentConv: setCurrentConv,
            }}
        >
            {children}
        </DataContext.Provider>
    );
};

export default DataContextProvider;
