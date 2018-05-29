import * as React from 'react'
import Link from 'gatsby-link'

// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema
interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    }
  }
}

export default class extends React.Component<IndexPageProps, {after: number}> {
  public render() {
    return (
      <div>
        <div className="section">
          <h3><strong>The Archive</strong> is a long-term coliving house in the Mission.</h3><p> We value curiosity, reliability, intentionality, and benevolence; we believe that a community that cares for and empowers each other is a key element of a fulfilling and impactful life.</p>

          <hr/>

          <h3>Residents</h3>

          <p><strong>Arram</strong> was an early employee at Justin.tv and now runs ZeroCater, a business which he bootstrapped and ran from a spreadsheet for two years and which has since been covered by publications such as The New York Times, Forbes, and the Wall Street Journal. Tenacious, considerate, and with more utility belts than Batman, he spends his free time transforming the Archive into a mini-Exploratorium. Ask him about life extension, mad science, or Downton Abbey.</p>

          <p><strong>Ben</strong> has worked on Waze Carpool at Google, AI research at MIRI and OpenAI, and was a tech lead at Google’s secretive Area 120. His hobbies include conducting experiments to answer important questions like the consensus-best chocolate ice cream even though he spends most of his time in ketosis (and puts himself through the painful transition every week as an exercise in willpower). Calm and empathetic, Ben’s presence is a soothing influence on our house.</p>

          <p><strong>Devon</strong> is a writer (of code and words) now building safe and secure lending protocols on the blockchain at Bloom and producing a yet-unannounced interview series with computing pioneers. Before that, she was Editor in Chief at the Stanford Review and a triathlete. Her interests include urban planning, incentive design, ethics, synthetic biology, linguistics, and AI, and her (excellent) <a href="http://devonzuegel.com/">blog</a> has thousands of readers per month.</p>

          <p><strong>Feross</strong> writes open source software packages that are collectively downloaded 200 million times per month. He founded PeerCDN (acquired by Yahoo), Study Notes (reaches 800K+ students per month), and once had a side project garner worldwide media attention (YouTube Instant), but he’ll be the first to remind you that nobody really knows what they’re doing. Feross is articulate, humble, a true believer in decentralization, and once organized an impromptu JavaScript conference to get cheap flights and free lodging in Norway.</p>

          <p><strong>Jason</strong> is passionate about better preparing us for the coming unemployment crisis. He previously built a digital classroom at the Minerva Project (a university startup), and is now tackling the problem via matching people to better jobs with machine learning at Sourceress. He’s been profiled in Cal Newport's "Deep Work” for his habit of interleaving work with periods of intense study. Enthusiastic, inclusive, a tad gullible, half-giant, and Keeper of Keys and Grounds at the Archive, Jason is basically Hagrid.</p>

          <p><strong>Josh</strong> co-founded Sourceress (AI powered recruiting for mission driven companies) and Ember Hardware (futuristic laser-based VR display) with Kanjun; before that, he founded CloudFab (automated 3D printing and injection molding pricing), BitBlinder (web anonymity network). Before that, he worked at Addepar. Josh has signed the Founder’s Pledge, has two black belts, and takes great care to ensure that he’s never a burden on anyone else.</p>

          <p><strong>Kanjun</strong> is the CEO of Sourceress and previously cofounded Ember with Josh. Before that, she was the Chief of Staff and a PM and engineer at Dropbox. In a past life, she wrote a book that marries circuitry and sewing that's now taught in 60 Boston middle schools, arbitraged yarn from her dorm room, and designed high-frequency trading strategies. She’s diplomatic, has a talent for asking incisive questions, and her laugh can be heard from multiple zip codes.</p>

          <p><strong>Michael</strong> is an Entrepreneur-in-Residence fixing childcare and building an innovation studio for early childhood development. Loves teaching (five years volunteer teaching preschool, 4th, 5th, 8th grade). Previously a director at Minerva, a startup that raised $75 million to build a university from scratch, worked at Google, and organized hip-hop flash mobs at Harvard. Otherwise, he's probably reading.</p>

          <p><strong>Christina</strong>, prior to her current work at Sourceress, conducted HCI research at Delta Lab, was student body vice president at Northwestern, and hosted their first hackathon. Before that, she built a working wood pipe organ and opened a bakery in South Africa with her limited background in Easy-Bake Ovens. A loyal friend, a voracious speed reader, and an unabashed instigator; be aware that you're not going to have a relaxing day if Tina suggests that you "chill".</p>

          <p><strong>Tom</strong> is an AI researcher (OpenAI, Google Brain) working to protect AIs from adversaries that want to manipulate them. Prior to his research, Tom was the cofounder and CTO of Grouper, where he wrote algorithms that used Facebook data to match up millions of people in the real world. Tom probably takes himself the least seriously of anyone whose research has appeared in Scientific American. Enjoys spontaneous gift-giving, contact improv, and digital art.</p>

          <h3>We'd love to meet you! Check out our <a href="https://www.facebook.com/thearchivehouse/">Facebook page</a> to message us or learn about upcoming events.</h3>

        </div>
      </div>
    )
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
