import { useContext } from "react";
import {
    Button,
    FormControl,
    FormHelperText,
    Grid2,
    InputLabel,
    OutlinedInput,
    TextField,
} from "@mui/material";
import * as Yup from "yup";
import messageService from "../../api/message/message.service";
import { Field, Form, Formik } from "formik";
import { MessageContext } from "../message/message-context";
import "./style.css";

const validationSchema = Yup.object({
    name: Yup.string().required("Nombre es requerido"),
    email: Yup.string().email("Email inválido").required("Email es requerido"),
    message: Yup.string().required("Mensaje es requerido"),
});

const Contact = () => {
    const { addMessage } = useContext(MessageContext);

    const handleSendMessage = (values, resetForm) => {
        messageService
            .sendEmail(values.email, values.name, values.message)
            .then(() => {
                addMessage({
                    message: "Gracias por contactarme. Te respondere en breve.",
                    severity: "success",
                });
                resetForm();
            })
            .catch(() => {
                addMessage({
                    message: "Error al enviar el correo.",
                    severity: "warning",
                });
            });
    };

    return (
        <Grid2
            container
            sx={{
                justifyContent: "center",
                alignItems: "center",
                display: "grid",
            }}
        >
            <Grid2
                id="contact-section"
                size={12}
                justifyContent={"center"}
                display={"grid"}
            >
                <h2
                    style={{
                        fontSize: "1.875rem",
                        lineHeight: "2.25rem",
                        margin: "0",
                        textAlign: "center",
                    }}
                >
                    Get in Touch
                </h2>
                <br />
                <p
                    style={{
                        color: "#6e6e77",
                        fontSize: "1.25rem",
                        lineHeight: "1.625",
                        margin: "0",
                        textAlign: "center",
                        width: "110vh",
                    }}
                >
                    I&apos;m always open to new opportunities and
                    collaborations. <br />
                    Feel free to reach out to me.
                </p>
            </Grid2>

            <Formik
                initialValues={{
                    name: "",
                    email: "",
                    message: "",
                }}
                validationSchema={validationSchema}
                onSubmit={(values, { resetForm }) => {
                    handleSendMessage(values, resetForm);
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    isValid,
                }) => (
                    <Form>
                        <Grid2 container spacing={1}>
                            <Grid2
                                size={12}
                                justifyContent={"center"}
                                display={"grid"}
                            >
                                <FormControl
                                    error={Boolean(touched.name && errors.name)}
                                >
                                    <InputLabel htmlFor="name">Name</InputLabel>
                                    <Field
                                        id="name"
                                        as={OutlinedInput}
                                        name="name"
                                        label="Nombre"
                                        variant="outlined"
                                        fullWidth
                                        style={{
                                            background: "white",
                                            width: "70vh",
                                            borderRadius: "6px",
                                        }}
                                        error={Boolean(
                                            touched.name && errors.name
                                        )}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.name}
                                    />
                                    {errors.name && touched.name && (
                                        <FormHelperText id="name">
                                            {errors.name}
                                        </FormHelperText>
                                    )}
                                </FormControl>
                            </Grid2>
                            <Grid2
                                size={12}
                                justifyContent={"center"}
                                display={"grid"}
                            >
                                <FormControl
                                    error={Boolean(
                                        touched.email && errors.email
                                    )}
                                >
                                    <InputLabel htmlFor="email">
                                        Email
                                    </InputLabel>
                                    <Field
                                        id="email"
                                        as={OutlinedInput}
                                        name="email"
                                        label="Email"
                                        type="email"
                                        variant="outlined"
                                        fullWidth
                                        style={{
                                            background: "white",
                                            width: "70vh",
                                            borderRadius: "6px",
                                        }}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                    />
                                    {errors.email && touched.email && (
                                        <FormHelperText id="email">
                                            {errors.email}
                                        </FormHelperText>
                                    )}
                                </FormControl>
                            </Grid2>
                            <Grid2
                                size={12}
                                justifyContent={"center"}
                                display={"grid"}
                            >
                                <FormControl
                                    error={Boolean(
                                        touched.message && errors.message
                                    )}
                                >
                                    <TextField
                                        id="message"
                                        error={Boolean(
                                            touched.message && errors.message
                                        )}
                                        label="Message"
                                        multiline
                                        rows={4}
                                        fullWidth
                                        style={{
                                            background: "white",
                                            width: "70vh",
                                            borderRadius: "6px",
                                        }}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.message}
                                    />
                                    {errors.message && touched.message && (
                                        <FormHelperText id="message">
                                            {errors.message}
                                        </FormHelperText>
                                    )}
                                </FormControl>
                            </Grid2>
                            <Grid2
                                size={12}
                                justifyContent={"center"}
                                display={"grid"}
                            >
                                <Button
                                    variant="contained"
                                    style={{
                                        background: "#0D1117",
                                        color: "white",
                                        width: "70vh",
                                        textTransform: "none",
                                    }}
                                    type="submit"
                                    disabled={!isValid}
                                >
                                    Send Mensage
                                </Button>
                            </Grid2>
                        </Grid2>
                    </Form>
                )}
            </Formik>
        </Grid2>
    );
};

export default Contact;
