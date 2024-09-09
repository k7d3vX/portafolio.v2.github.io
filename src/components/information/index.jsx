import { Badge, Button, Grid2, styled } from "@mui/material";
import photo from "../../assets/cristal.png";
import bolivia from "../../assets/bolivia.png";
import cv from "../../api/cv/cv.service";
import "./style.css";

const StyledImage = styled("img")({
    width: "15rem",
    height: "15.8rem",
    borderRadius: "9999px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
});

const Information = () => {
    return (
        <Grid2
            container
            sx={{
                alignContent: "center",
                justifyContent: "center",
                margin: "5rem",
            }}
        >
            <Grid2 id="about-section" size={5}>
                <h1>About me</h1>
                <p className="text-information">
                    Experienced software developer with a strong focus on
                    excellence across all development stages. Expert in
                    designing scalable solutions, following best practices for
                    coding, and debugging complex issues. Committed to
                    continuous maintenance and optimization, enhancing software
                    performance while addressing evolving user needs.
                </p>
                <Button
                    color="inherit"
                    className="botton-download-cv"
                    variant="body1"
                    size="small"
                    onClick={cv.downloadCVEn}
                >
                    <strong>Download CV(EN)</strong>
                </Button>{" "}
                <Button
                    color="inherit"
                    className="botton-download-cv"
                    variant="body1"
                    size="small"
                    onClick={cv.downloadCVEs}
                >
                    <strong>Download CV(ES)</strong>
                </Button>
            </Grid2>
            <Grid2 size={2}>
                <Badge
                    overlap="circular"
                    anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                    badgeContent={<img src={bolivia} width={70} height={70} />}
                >
                    <StyledImage src={photo} draggable="false" />
                </Badge>
            </Grid2>
        </Grid2>
    );
};

export default Information;
