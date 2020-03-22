import React from "react"
import { Parallax } from "react-spring/renderprops-addons.cjs"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Jobs from "../components/jobs"
import Projects from "../components/projects"
import About from "../components/about"
import Contact from "../components/contact"

const ArturWtf = () => (
  <Layout>
    <Parallax pages={8}>
      <Hero offset={0} factor={1} />
      <Jobs offset={1} factor={2} />
      <Projects offset={4} factor={2} />
      <About offset={6} factor={1} />
      <Contact offset={7} factor={1} />
    </Parallax>
  </Layout>
)

export default ArturWtf
