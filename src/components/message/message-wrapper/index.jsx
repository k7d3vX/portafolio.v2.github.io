import { useState } from "react";
import { Alert, Stack } from "@mui/material";
import PropTypes from "prop-types";
import "./style.css";

const MessageWrapper = ({ message }) => {
    const [show, setShow] = useState(true);
    return (
        <>
            {message && (
                <Stack className="message" spacing={2}>
                    {show && message && (
                        <Alert
                            variant="filled"
                            severity={message.severity}
                            onClose={() => setShow(false)}
                        >
                            {message.message}
                        </Alert>
                    )}
                </Stack>
            )}
        </>
    );
};

MessageWrapper.propTypes = {
    message: PropTypes.shape({
        severity: PropTypes.string.isRequired,
        message: PropTypes.string.isRequired,
    }).isRequired,
};

export default MessageWrapper;
