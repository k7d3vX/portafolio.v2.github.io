import { Grid2 } from "@mui/material";
import ProjectItem from "./project-item";
import projects from "../../data/projects.json";

const ProjectsList = () => {
    return (
        <div id="projects-section" style={{ padding: "3rem 10rem 3rem 10rem" }}>
            <h1>Featured Projects</h1>
            <Grid2 container spacing={2}>
                {projects.map((project) => (
                    <Grid2 key={project.name} size={"auto"}>
                        <ProjectItem project={project} />
                    </Grid2>
                ))}
            </Grid2>
        </div>
    );
};

export default ProjectsList;
