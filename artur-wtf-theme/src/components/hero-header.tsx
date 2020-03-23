/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"

type HeroHeaderProps = {
  children: React.ReactNode
}

const HeroHeader = ({ children }: HeroHeaderProps) => (
  <div
    sx={{
      display: `flex`,
      flexDirection: `row`,
    }}
  >
    {children}
  </div>
)

export default HeroHeader
