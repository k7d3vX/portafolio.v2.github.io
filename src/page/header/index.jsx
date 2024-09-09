import {
    Grid2,
    Link,
} from "@mui/material";
import workspace from "../../assets/icons8-workspace-100.png";

const Header = () => {

    const handleGoTo = (title) => () => {
        const id = `${title}-section`;
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    return (
        <header>
            <Grid2
                container
                spacing={2}
                justifyContent={"space-between"}
                alignItems={"baseline"}
            >
                <Grid2 size={"auto"} alignContent={"unset"}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <img
                            src={workspace}
                            alt="workspace"
                            style={{ width: "2.5rem", height: "2.5rem" }}
                        />
                        <h1 style={{ margin: "0" }}>Portafolio</h1>
                    </div>
                </Grid2>
                <Grid2 size={"auto"}>
                    <Link
                        component="button"
                        color="inherit"
                        variant="body1"
                        onClick={handleGoTo("about")}
                    >
                        <strong>About</strong>
                    </Link>{" "}
                    <Link
                        component="button"
                        color="inherit"
                        variant="body1"
                        onClick={handleGoTo("projects")}
                    >
                        <strong>Projects</strong>
                    </Link>{" "}
                    <Link
                        component="button"
                        color="inherit"
                        variant="body1"
                        onClick={handleGoTo("skills")}
                    >
                        <strong>Skills</strong>
                    </Link>{" "}
                    <Link
                        component="button"
                        color="inherit"
                        variant="body1"
                        onClick={handleGoTo("contact")}
                    >
                        <strong>Contact</strong>
                    </Link>{" "}
                </Grid2>
            </Grid2>
        </header>
    );
};

export default Header;
