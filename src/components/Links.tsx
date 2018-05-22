import * as React from 'react'

export const ExternalLink = (props: {children: React.ReactNode; link: string}) => (
  <a target="_blank" rel="noopener noreferrer" href={`http://${props.link}`}>
    {props.children}
  </a>
)
