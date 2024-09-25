import { Grid2 } from "@mui/material";
import ProjectItem from "./project-item";
import projects from "../../data/projects.json";

const ProjectsList = () => {
    return (
        <div id="projects-section">
            <Grid2
                container
                spacing={2}
                size={{ md: 10, sm: 12, xs: 12 }}
                offset={{ md: 1, sm: 0, xs: 0 }}
            >
                <Grid2 size={12}>
                    <h1>Featured Projects</h1>
                </Grid2>
                {projects.map((project) => (
                    <Grid2 key={project.name} size={{ md: 6, lg: 6,xl: 3, sm: 6, xs: 12 }}>
                        <ProjectItem project={project} />
                    </Grid2>
                ))}
            </Grid2>
        </div>
    );
};

export default ProjectsList;
