import React from "react"
import ProjectCard from "../components/project-card"
import JobCard from "../components/job-card"
import ContributionCard from "../components/contribution-card"

export default {
  // eslint-disable-next-line react/display-name
  ProjectCard: ({ link, title, bg, children }) => (
    <ProjectCard link={link} title={title} bg={bg}>
      {children}
    </ProjectCard>
  ),
  JobCard: ({ link, title, bg, children }) => (
    <JobCard link={link} title={title} bg={bg}>
      {children}
    </JobCard>
  ),
  ContributionCard: ({ link, title, bg, children }) => (
    <ContributionCard link={link} title={title} bg={bg}>
      {children}
    </ContributionCard>
  ),
}
