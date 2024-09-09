import emailjs from "@emailjs/browser";

const {
    VITE_EJS_API_SERVICE_ID,
    VITE_EJS_API_PUBLIC_KEY,
    VITE_EJS_API_TEMPLATE_ID,
} = import.meta.env;
emailjs.init({
    publicKey: VITE_EJS_API_PUBLIC_KEY,
});

const sendEmail = async (email, name, message) => {
    return emailjs
        .send(VITE_EJS_API_SERVICE_ID, VITE_EJS_API_TEMPLATE_ID, {
            email,
            name,
            message,
        })
        .then(
            (response) => response,
            (error) => error
        );
};

export default { sendEmail };
