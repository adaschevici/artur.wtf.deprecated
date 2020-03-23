/** @jsx jsx */
import { jsx } from "theme-ui"
import SectionWrapper from "./section-wrapper"
// @ts-ignore
import ProjectsMDX from "../sections/projects"

const Projects = ({ offset, factor = 2 }: { offset: number; factor?: number }) => (
  <SectionWrapper offset={offset} factor={factor} slantDirection="left">
    <ProjectsMDX />
  </SectionWrapper>
)

export default Projects
