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
    <Parallax pages={12.6}>
      <Hero offset={0} factor={1} />
      <Jobs offset={1.5} factor={2} />
      <Projects offset={4.8} factor={1.5} />
      <Contributions offset={7.5} factor={2} />
      <About offset={10.8} factor={1} />
      <Contact offset={11.8} factor={1} />
    </Parallax>
  </Layout>
)

export default ArturWtf
