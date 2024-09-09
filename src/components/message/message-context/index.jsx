import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import MessageWrapper from "../message-wrapper";

const MessageContext = createContext();

const MessageProvider = ({ children }) => {
    const [message, setMessage] = useState(null);

    const addMessage = (message) => {
        setMessage(message);
    };

    useEffect(() => {
        if (message) {
            setTimeout(() => setMessage(null), 5000);
        }
    }, [message]);

    return (
        <MessageContext.Provider value={{ addMessage }}>
            {message && <MessageWrapper message={message} />}
            {children}
        </MessageContext.Provider>
    );
};

MessageProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export { MessageContext, MessageProvider };
