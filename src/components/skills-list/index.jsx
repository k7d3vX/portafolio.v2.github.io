import { Grid2 } from "@mui/material";
import SkillItem from "./skill-item";
import skills from "../../data/skills.json";

const SkillsList = () => {
    const { frontend, backend, databases, tools } = skills;
    return (
        <div id="skills-section">
            <Grid2
                container
                spacing={2}
                sx={{ margin: "5rem 0 5rem 0" }}
                size={{ md: 10, sm: 12, xs: 12 }}
                offset={{ md: 1, sm: 0, xs: 0 }}
            >
                <Grid2 size={12}>
                    <h1>Skills</h1>
                </Grid2>
                <Grid2 size={{ md: 3, sm: 3, xs: 12 }}>
                    <SkillItem title="Front-End" skills={frontend} />
                </Grid2>
                <Grid2 size={{ md: 3, sm: 3, xs: 12 }}>
                    <SkillItem title="Back-End" skills={backend} />
                </Grid2>
                <Grid2 size={{ md: 3, sm: 3, xs: 12 }}>
                    <SkillItem title="Databases" skills={databases} />
                </Grid2>
                <Grid2 size={{ md: 3, sm: 3, xs: 12 }}>
                    <SkillItem title="Tools" skills={tools} />
                </Grid2>
            </Grid2>
        </div>
    );
};

export default SkillsList;
