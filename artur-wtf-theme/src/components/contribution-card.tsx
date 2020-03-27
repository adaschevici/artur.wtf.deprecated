/** @jsx jsx */
import React from "react"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import { jsx } from "theme-ui"
import VideoEmbed from "./video-embed"

type ContributionCardProps = {
  link: string
  title: string
  children: React.ReactNode
  bg: string
  videoSource?: string
}

const ContributionCard = ({ videoSource, title, children, bg }: ContributionCardProps) => (
  <OutboundLink
    target="_blank"
    rel="noreferrer noopener"
    sx={{
      width: `100%`,
      boxShadow: `lg`,
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
    {videoSource && <VideoEmbed videoSource={videoSource} />}
    <div sx={{ opacity: 0.85, textShadow: `0 2px 10px rgba(0, 0, 0, 0.3)` }}>{children}</div>
    <div
      sx={{
        letterSpacing: `wide`,
        pt: 4,
        fontSize: [4, 5],
        fontWeight: `medium`,
        lineHeight: 1,
      }}
    >
      {title}
    </div>
  </OutboundLink>
)

export default ContributionCard
