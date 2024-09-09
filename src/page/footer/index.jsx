import { Grid2 } from "@mui/material";
import { GitHub, LinkedIn, Mail } from "@mui/icons-material";
import "./style.css";

const Footer = () => {
    return (
        <footer>
            <Grid2 container justifyContent={"space-between"}>
                <Grid2 size={"auto"}>
                    <p className="text">
                        Copyright &copy; 2023{" "}
                        <a
                            href="https://github.com/cristalfloresbo"
                            target="_blank"
                            className="text-username"
                        >
                            @k7d3vX
                        </a>{" "}
                        All rights reserved.
                    </p>
                </Grid2>
                <Grid2 size={"auto"} alignSelf={"center"}>
                    <GitHub
                        sx={{ fontSize: "1.6rem", cursor: "pointer" }}
                        target="_blank"
                        href="https://github.com/cristalfloresbo"
                    ></GitHub>{" "}
                    <LinkedIn
                        sx={{ fontSize: "1.6rem", cursor: "pointer" }}
                        target="_blank"
                        href="www.linkedin.com/in/cristal-flores-bo"
                    ></LinkedIn>{" "}
                    <Mail
                        sx={{ fontSize: "1.6rem", cursor: "pointer" }}
                        target="_blank"
                        href="mailto: cristalflores.bo@gmail.com"
                    ></Mail>
                </Grid2>
            </Grid2>
        </footer>
    );
};

export default Footer;
