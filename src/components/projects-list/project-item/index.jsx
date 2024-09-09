import { GitHub, OpenInNew } from "@mui/icons-material";
import PropTypes from "prop-types";
import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    Typography,
} from "@mui/material";

const ProjectItem = ({ project }) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea href={project.liveDemo} target="_blank">
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {project.name}
                    </Typography>
                    <Typography
                        variant="body2"
                        sx={{ color: "text.secondary" }}
                    >
                        {project.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button
                    size="small"
                    color="primary"
                    variant="contained"
                    style={{
                        textTransform: "none",
                        background: "#0D1117",
                        color: "white",
                    }}
                    href={project.liveDemo}
                    target="_blank"
                >
                    <OpenInNew
                        sx={{ marginRight: "0.5rem", fontSize: "1.1rem" }}
                    />
                    Live Demo
                </Button>
                <Button
                    size="small"
                    color="primary"
                    variant="contained"
                    style={{
                        textTransform: "none",
                        background: "#0D1117",
                        color: "white",
                    }}
                    target="_blank"
                    href={project.github}
                >
                    <GitHub
                        sx={{ marginRight: "0.5rem", fontSize: "1.1rem" }}
                    />
                    GitHub
                </Button>
            </CardActions>
        </Card>
    );
};

ProjectItem.propTypes = {
    project: PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        liveDemo: PropTypes.string.isRequired,
        github: PropTypes.string.isRequired,
    }).isRequired,
};

export default ProjectItem;
