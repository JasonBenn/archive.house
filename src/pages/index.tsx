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
          <h2>
            <strong>The Archive</strong> is a long-term coliving house near Dolores
            Park in San&nbsp;Francisco.
          </h2>
          <p>
            We value curiosity, reliability, intentionality, and benevolence; we
            believe that a community that cares for and empowers each other is key
            to a fulfilling and impactful life.
          </p>

          <h3>
            The Archive is growing! If you&rsquo;d like to live with us, {' '}
            <a href="https://goo.gl/forms/KntxP2F8QxVEQbWD3">shoot us a message</a>.
          </h3>

          <hr />
          <img src="/archive1.jpg" alt="Image of the living room at The Archive" />
          <hr />

          <h2>Residents</h2>

          <p>
            <strong>Arram Sabeti</strong> founded ZeroCater, a business he grew from his living room to over 150 people which has now sold over a quarter billion dollars in meals and has been covered by publications such as The New York Times, The Wall Street Journal, and Forbes. Tenacious, considerate, and with more utility belts than Batman, he spends his free time building robots and doing mad science. <a href="https://www.arr.am/">Homepage</a>.
          </p>

           <p>
            <strong>Austin Hou</strong> is a designer and engineer. An avid explorer of ideas, places, and experiences, he has flown 22.4x around the earth by distance and has spent time in 67 countries. He has worked on critical protocols at Stanford Hospital, the Deep Space Network at JPL/NASA, ML research at SETI, and co-founded Mavencook, a video cooking app. He also enjoys experimenting with creative technology - this year, he built lighting systems for the Temple at Burning Man. When not working, you can often find him behind the lens of a camera. <a href="http://ayh.io/">Homepage</a>.
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
            conducted HCI research at{' '}
            <a className="subtle" href="http://dtr.northwestern.edu/">Delta Lab</a>, was student body vice president at
            Northwestern, and hosted their first hackathon. Before that, she built a
            working wood pipe organ and opened a bakery in South Africa with her
            limited background in Easy-Bake Ovens. A loyal friend, a voracious speed
            reader, and an unabashed instigator; be aware that you're not going to
            have a relaxing day if Tina suggests that you "chill".{' '}
            <a href="http://christina.kim/">Blog</a>,{' '}
            <a href="https://github.com/christinakim">GitHub</a>,{' '}
            <a href="https://twitter.com/christinahkim">Twitter</a>.
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
            <strong>Feross Aboukhadijeh</strong> writes open source software packages that are
            collectively downloaded 200 million times per month. He founded PeerCDN (acquired by
            Yahoo), <a className="subtle" href="https://www.apstudynotes.org">Study Notes</a>{' '}
            (reaches 800K+ students per month), and once garnered worldwide media attention
            for a clever hack (YouTube Instant). Feross loves to build things that make people
            say "Whoa, I didn't know that was possible!". He once ran an impromptu JavaScript
            conference in the nothern-most human settlement on Earth, Svalbard.{' '}
            <a href="https://feross.org/">Blog</a>,{' '}
            <a href="https://github.com/feross">GitHub</a>,{' '}
            <a href="https://twitter.com/feross">Twitter</a>.
          </p>

          <p>
            <strong>Gillian Morris</strong> is the founder and CEO of <a href="http://hitlistapp.com/">Hitlist</a>, an app that alerts you when there are cheap flights for your dream trips. Before entering the start-up world, Gillian worked as a consultant, journalist, and educator in Turkey, China, Afghanistan, and Syria. Her work has appeared in/on the New York Times, Harvard Business Review, Buzzfeed, and others. Between flights, Gillian is fighting to regain her six pack thanks to the Archive's sweet home gym and sweat lodge setup. <a href="http://gillian.im/">Blog</a>, <a href="http://twitter.com/gillianim">Twitter</a>, <a href="https://www.facebook.com/gillianim">Facebook</a>.
          </p>

          <p>
            <strong>Jason Benn</strong> is passionate about better preparing us for
            the coming unemployment crisis. He previously built a digital classroom
            at the Minerva Project (a university startup), and is now tackling the
            problem from another angle by building the machine learning systems at
            Sourceress. He’s been profiled in Cal Newport's "Deep Work" for his habit
            of interleaving work with periods of intense study. Enthusiastic,
            inclusive, a tad gullible, half-giant, and Keeper of Keys and Grounds at
            the Archive, Jason is basically Hagrid.{' '}
            <a href="https://jasonbenn.com/">Homepage</a>,{' '}
            <a href="https://www.facebook.com/jasoncbenn">Facebook</a>.
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
            <strong>Tom Brown</strong> is an exceptionally tall AI researcher
            (OpenAI, Google Brain) trying to save the world by breaking AI systems
            (and make them less breaky in general). Before becoming a <em>very serious person</em>,
            Tom was the cofounder of Grouper, where he served over a million drinks to partiers in bars
            around the world. In his free time, Tom enjoys acroyoga, VR sculpting and plumbing the depths
            of the internet for flowing space pants.{' '}
            <a href="https://medium.com/@nottombrown">Blog</a>,{' '}
            <a href="https://github.com/nottombrown">GitHub</a>,{' '}
            <a href="https://twitter.com/nottombrown">Twitter</a>.
          </p>

          <p>
            <strong>Zain Shah</strong> is an ML engineer at Opendoor. Before that he was a research scientist at OpenAI and founder of a mobile analytics company called Watchsend. He has a knack for scrappy solutions to hard problems: be it gathering unsupervised training data for deep learning, finding great flight deals, or memorizing 200 digits of pi in case he’s ever without a calculator. <a href="http://tarzain.com/">Homepage</a>.
          </p>

          <hr />

          <img src="/archive2.jpg" alt="Image of the The Archive residents laughing" />
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
