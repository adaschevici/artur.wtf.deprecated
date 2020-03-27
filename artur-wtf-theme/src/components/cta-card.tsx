/** @jsx jsx */
import React from "react"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import { jsx } from "theme-ui"

type CTACardProps = {
  callToAction: string
  link: string
  bg: string
}

const CTACard = ({ link, callToAction, bg }: CTACardProps) => (
  <OutboundLink
    href={link}
    target="_blank"
    rel="noreferrer noopener"
    sx={{
      width: `100%`,
      position: `relative`,
      textDecoration: `none`,
      borderRadius: `lg`,
      px: 4,
      py: [4, 5],
      color: `white`,
      background: bg || `none`,
      transition: `all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important`,
      "&:hover": {
        color: `white !important`,
        transform: `translateY(-5px)`,
        boxShadow: `xl`,
      },
    }}
  >
    <div
      sx={{
        letterSpacing: `wide`,
        pt: 2,
        fontSize: [4, 5],
        fontWeight: `medium`,
        lineHeight: 1,
      }}
    >
      {callToAction}
    </div>
  </OutboundLink>
)

export default CTACard

