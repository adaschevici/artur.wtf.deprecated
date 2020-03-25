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
    <Parallax pages={10.4}>
      <Hero offset={0} factor={1} />
      <Jobs offset={1.5} factor={2} />
      <Projects offset={3.8} factor={1.5} />
      <Contributions offset={5.8} factor={2} />
      <About offset={8.9} factor={1} />
      <Contact offset={9.9} factor={1} />
    </Parallax>
  </Layout>
)

export default ArturWtf
