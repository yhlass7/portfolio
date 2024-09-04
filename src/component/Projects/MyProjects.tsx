import React from 'react';
import styles from "./MyProjects.module.scss"
import SectionContent from "@/component/SectionContent/SectionContent";
import ContentBlock from "@/component/ContentBlock/ContentBlock";
import ProjectsCard from "@/component/ProjectsCard/ProjectsCard";
import {projectsData} from "@/data/projectsData";

const MyProjects = () => {
    return (
        <SectionContent className={styles["my-projects"]}>
            <ContentBlock title="My Projects" text="Things I’ve built so far"/>
            <div className={styles["my-projects__box"]}>
                {projectsData.map((project) =>
                    <ProjectsCard id={project.id} image={project.image} title={project.title}
                                  description={project.description} techStack={project.techStack} codeUrl={""}
                                  livePreviewUrl={""}></ProjectsCard>
                )}
            </div>
        </SectionContent>
    );
};

export default MyProjects;