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
          <h3>
            <strong>The Archive</strong> is a long-term coliving house near Dolores
            Park in San Francisco.
          </h3>
          <p>
            We value curiosity, reliability, intentionality, and benevolence; we
            believe that a community that cares for and empowers each other is key
            to a fulfilling and impactful life.
          </p>

          <p>
            The Archive is growing! If you'd like to consider living with us, do{' '}
            <a href="https://goo.gl/forms/KntxP2F8QxVEQbWD3">get in touch</a>. We
            also have a{' '}
            <a href="https://www.facebook.com/thearchivehouse/">Facebook page</a>{' '}
            where we occasionally post public-facing events.
          </p>

          <hr />

          <h3>Residents</h3>

          <p>
            <strong>Arram Sabeti</strong> was an early employee at Justin.tv and now
            runs ZeroCater, a business which he bootstrapped and ran from a
            spreadsheet for two years and which has since been covered by
            publications such as The New York Times, Forbes, and the Wall Street
            Journal. Tenacious, considerate, and with more utility belts than Batman,
            he spends his free time transforming the Archive into a
            mini-Exploratorium. Ask him about life extension, mad science, or Downton
            Abbey. <a href="https://www.arr.am/">Homepage</a>.
          </p>

          <p>
            <strong>Ben Mann</strong> has worked on Waze Carpool at Google, AI
            research at MIRI and OpenAI, and was a tech lead at Google’s
            Area 120. Ben's hobbies include meditation, writing, experimentally
            determining the best brand of chocolate, and masochistically entering
            ketosis every week for months as an exercise in willpower. Calm and
            empathetic, Ben’s presence is a soothing influence on our house.{' '}
            <a href="https://benjmann.net/">Homepage</a>.
          </p>

          <p>
            <strong>Christina Kim</strong>, prior to her current work at Sourceress,
            conducted HCI research at Delta Lab, was student body vice president at
            Northwestern, and hosted their first hackathon. Before that, she built a
            working wood pipe organ and opened a bakery in South Africa with her
            limited background in Easy-Bake Ovens. A loyal friend, a voracious speed
            reader, and an unabashed instigator; be aware that you're not going to
            have a relaxing day if Tina suggests that you "chill".{' '}
            <a href="http://christina.kim/">Homepage</a>.
          </p>

          <p>
            <strong>Devon Zuegel</strong> is a writer (of code and words), and the
            thing she cares most about is unlocking human potential. In this vein,
            she thinks a lot about incentive design, tools for thought, and cities.
            These days, she is building lending protocols on the blockchain at{' '}
            <a className="subtle" href="https://bloom.co">Bloom</a>, producing a yet-unannounced
            interview series with computing pioneers, and{' '}
            <del>blustering on and on</del> writing about land use policy on her (excellent) blog. Before
            that, she was Editor in Chief at the{' '}
            <a className="subtle" href="https://stanfordreview.org/">Stanford Review</a> and a
            triathlete.{' '}
            <a href="http://devonzuegel.com/">Blog</a>,{' '}
            <a href="https://twitter.com/devonzuegel/">Twitter</a>.
          </p>

          <p>
            <strong>Feross Aboukhadijeh</strong> writes open source software packages
            that are collectively downloaded 200 million times per month. He founded
            PeerCDN (acquired by Yahoo), Study Notes (reaches 800K+ students per
            month), and once had a side project garner worldwide media attention
            (YouTube Instant), but he’ll be the first to remind you that nobody
            really knows what they’re doing. Feross is articulate, humble, a true
            believer in decentralization, and once organized an impromptu JavaScript
            conference in the nothern-most human settlement on Earth in Longyearbyen,
            Svalbard.{' '}
            <a href="https://feross.org/">Homepage</a>,{' '}
            <a href="https://twitter.com/feross">Twitter</a>.
          </p>

          <p>
            <strong>Jason Benn</strong> is passionate about better preparing us for
            the coming unemployment crisis. He previously built a digital classroom
            at the Minerva Project (a university startup), and is now tackling the
            problem from another angle by building the machine learning systems at
            Sourceress. He’s been profiled in Cal Newport's "Deep Work" for his habit
            of interleaving work with periods of intense study. Enthusiastic,
            inclusive, a tad gullible, half-giant, and Keeper of Keys and Grounds at
            the Archive, Jason is basically Hagrid.
          </p>

          <p>
            <strong>Josh Albrecht</strong> has cofounded Sourceress (AI powered
            recruiting for mission driven companies), Ember Hardware (futuristic
            laser-based VR display), CloudFab (automated 3D printing and injection
            molding pricing), BitBlinder (web anonymity network), and worked at
            Addepar. Josh has signed the Founder’s Pledge, has two black belts, and
            is Arram's definition of conscientiousness (despite miscounting the
            number of classes required to graduate as a CS and math major).{' '}
            <a href="http://joshalbrecht.com/">Homepage</a>.
          </p>

          <p>
            <strong>Kanjun Qiu</strong> is the CEO of Sourceress and previously
            cofounded Ember with Josh. Before that, she was the Chief of Staff, PM
            and engineer at Dropbox. In a past life, she wrote a book that about
            sewing and circuitry that's now taught in 60 Boston middle schools,
            arbitraged yarn from her dorm room, and designed high-frequency trading
            strategies. She’s diplomatic, has a talent for asking incisive questions,
            and her laugh can be heard from multiple zip codes.
          </p>

          <p>
            <strong>Michael Lai</strong> is an Entrepreneur-in-Residence working on
            improving childcare, is building an innovation studio for early childhood
            development focusing on low-income populations, and has five years of
            experience volunteering at local schools. Before that he was the youngest
            director at the Minerva Project, worked on education initiatives at
            Google.org, competed on Harvard's Varsity Golf team, and organized
            hip-hop flash mobs. If he's not working or dancing, he's probably
            reading. <a href="http://mtclai.com/">Homepage</a>.
          </p>

          <p>
            <strong>Tom Brown</strong> is an AI researcher (OpenAI, Google Brain)
            working to protect AIs from adversaries that want to manipulate them.
            Prior to his research, Tom was the cofounder and CTO of Grouper, where he
            wrote algorithms that used Facebook data to match up millions of people
            in the real world. Tom probably takes himself the least seriously of
            anyone whose research has appeared in Scientific American. Tom delights
            in contact improv, digital art, and spontaneous gift-giving.{' '}
            <a href="">Homepage</a>.
          </p>
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
