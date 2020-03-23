/** @jsx jsx */
import { jsx } from "theme-ui"
import SectionWrapper from "./section-wrapper"
// @ts-ignore
import ContributionsMDX from "../sections/contributions"

const Contributions = ({ offset, factor = 2 }: { offset: number; factor?: number }) => (
  <SectionWrapper offset={offset} factor={factor} slantDirection="right">
    <ContributionsMDX />
  </SectionWrapper>
)

export default Contributions
