import React from "react"
import { Parallax } from "react-spring/renderprops-addons.cjs"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Jobs from "../components/jobs"
import Projects from "../components/projects"
import Contributions from "../components/contributions"
import About from "../components/about"
import Contact from "../components/contact"

const ArturWtf = () => (
  <Layout>
    <Parallax pages={9}>
      <Hero offset={0} factor={1} />
      <Jobs offset={1} factor={2} />
      <Projects offset={3.3} factor={1.5} />
      <Contributions offset={5.5} factor={2} />
      <About offset={7} factor={1} />
      <Contact offset={8} factor={1} />
    </Parallax>
  </Layout>
)

export default ArturWtf
