import { Grid2 } from "@mui/material";
import SkillItem from "./skill-item";
import skills from "../../data/skills.json";

const SkillsList = () => {
    const { frontend, backend, databases, tools } = skills;
    return (
        <div id="skills-section" style={{ padding: "3rem 10rem 3rem 10rem" }}>
            <h1>Skills</h1>
            <Grid2 container spacing={2} justifyContent={"space-between"}>
                <SkillItem title="Front-End" skills={frontend} />
                <SkillItem title="Back-End" skills={backend} />
                <SkillItem title="Databases" skills={databases} />
                <SkillItem title="Tools" skills={tools} />
            </Grid2>
        </div>
    );
};

export default SkillsList;
