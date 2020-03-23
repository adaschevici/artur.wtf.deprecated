import React from "react"
import ProjectCard from "../components/project-card"
import JobCard from "../components/job-card"
import ContributionCard from "../components/contribution-card"
import HeroHeader from "../components/hero-header"

export default {
  // eslint-disable-next-line react/display-name
  ProjectCard: ({ link, title, bg, children }) => (
    <ProjectCard link={link} title={title} bg={bg}>
      {children}
    </ProjectCard>
  ),
  // eslint-disable-next-line react/display-name
  JobCard: ({ link, title, period, role, bg, children }) => (
    <JobCard link={link} title={title} bg={bg} period={period} role={role}>
      {children}
    </JobCard>
  ),
  // eslint-disable-next-line react/display-name
  ContributionCard: ({ link, title, bg, children }) => (
    <ContributionCard link={link} title={title} bg={bg}>
      {children}
    </ContributionCard>
  ),
  // eslint-disable-next-line react/display-name
  HeroHeader: ({ children }) => (
    <HeroHeader>
      {children}
    </HeroHeader>
  ),
}
