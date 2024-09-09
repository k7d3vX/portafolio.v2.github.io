import { Card, CardContent, Grid2 } from "@mui/material";
import PropTypes from "prop-types";
import "./style.css";

const SkillItem = ({ title, skills }) => {
    return (
        <Card
            style={{ background: "#112240" }}
            sx={{ width: 350, maxWidth: 400 }}
        >
            <CardContent>
                <Grid2 size={"auto"}>
                    <h2 style={{ margin: "0" }}>{title}</h2>
                    {skills.map((skill) => (
                        <p className="text-skill" key={skill}>
                            {skill}
                        </p>
                    ))}
                </Grid2>
            </CardContent>
        </Card>
    );
};

SkillItem.propTypes = {
    title: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SkillItem;
