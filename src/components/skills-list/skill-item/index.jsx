import { Card, CardContent } from "@mui/material";
import PropTypes from "prop-types";
import "./style.css";

const SkillItem = ({ title, skills }) => {
    return (
        <Card className="card-skill-item">
            <CardContent>
                <h2 className="card-title-skill-item">{title}</h2>
                {skills.map((skill) => (
                    <p className="text-skill" key={skill}>
                        - {skill}
                    </p>
                ))}
            </CardContent>
        </Card>
    );
};

SkillItem.propTypes = {
    title: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SkillItem;
