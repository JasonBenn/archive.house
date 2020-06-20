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
            If you&rsquo;d like to live with us, {' '}
            <a href="https://goo.gl/forms/pTT0HuMgG0xIgf9t2">shoot us a message</a>.
          </h3>
          <p>
            You can stay updated on future plans or events via our <a href="https://tinyletter.com/archive-house-sf" target='blank'>occasional newsletter</a> or <a href="https://www.facebook.com/thearchivehouse/" target='blank'>Facebook page</a>, or follow our journey to grow into a village <a href="https://groups.google.com/forum/#!forum/archive-cohousing-updates" target='blank'>here</a>. You can also follow our housemates' thoughts on <a href="https://twitter.com/i/lists/1211543505807392769" target='blank'>Twitter</a> or <a href="https://zapier.com/engine/rss/7208702/archive-blog" target='blank'>RSS</a>!
          </p>

          <hr />
          <img src="/archive1.jpg" alt="Image of the living room at The Archive" />
          <hr />

          <h2>Residents</h2>

          <p>
            <strong>Amanda Askell</strong> is a research scientist on the policy team at OpenAI where her goal is to help make AI go well for the world. Before working on AI she did research in philosophy on the ways that infinities break ethical theories. She’s originally from Scotland but has adapted to the Bay Area by adopting popular regional hobbies like climbing, autodidactism, and engaging with weird art.{' '}
            <a href="https://askell.io/">Homepage</a>.
          </p>

          <p>
            <strong>Annie Brett</strong> is an oceanographer, explorer and lawyer who spends her time thinking up novel ways to solve wicked ocean problems for Stanford and the World Economic Forum. In the more romantic past she spent several years as the youngest female captain in the Pacific, visiting remote islands, learning how to fix anything with duct tape, and amassing sea stories with an 18-person crew. Now that she has all the degrees, she spends her free time running National Geographic expeditions, tinkering with boats and plants, and searching for fresh raspberries.
          </p>

          <p>
            <strong>Armand Cognetta</strong> is a chemical biologist whose graduate work was focused on developing chemo-proteomic platform technologies to make drug discovery safer and more effective. He's read roughly one book for every ten days he’s been literate, and his life goal is to spontaneously recreate the Inigo/Wesley swordfight scene from The Princess Bride on a ping pong table with a masked stranger. He spends his free time skiing, biking, running, and doing other suffer-intensive activities. Currently, he’s building a drug discovery platform company based on a novel technology to target "undruggable” proteins and create better therapeutics.{' '}
            <a href="https://arman.do/">Homepage</a>,{' '}
            <a href="https://twitter.com/armandcognetta">Twitter</a>.
          </p>

          <p>
            <strong>Arram Sabeti</strong> founded ZeroCater, a business he grew from his living room to over 150 people which has now sold over a quarter billion dollars in meals and has been covered by publications such as The New York Times, The Wall Street Journal, and Forbes. Tenacious, considerate, and with more utility belts than Batman, he spends his free time building robots and doing mad science.{' '}
            <a href="https://www.arr.am/">Homepage</a>.
          </p>

           <p>
            <strong>Austin Hou</strong> is a designer and engineer. An avid explorer of ideas, places, and experiences, he has flown 23x around the earth by distance and has spent time in 72 countries. He has worked on emergency protocols at Stanford Hospital, the Deep Space Network at NASA, and cofounded Planetarium and Mavencook. He enjoys experimenting with creative technology, such as lighting systems for the Temple at Burning Man. Right now, he’s working on <a href="https://alpha.currents.fm">Currents</a>, a new project in the music space.{' '}
            <a href="http://ayh.io/">Homepage</a>.
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
            <strong>Chris V</strong> is an engineer, startup founder, amateur locksmith, and part-time tow truck driver. When not building useful things, he likes type annotating Python, making art in the desert, and creating <a href="https://poopscoop.io">stupid hackathon</a> projects. He'll almost certainly let you borrow his camping gear.
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
            <strong>Jason Benn</strong> went from an unhappy financial consultant with no math or programming skills to a machine learning engineer after five years of part-time, self-directed study, for which he was profiled in Cal Newport's "Deep Work". These days he spends his time researching tools for thought, spearheading <a href="https://groups.google.com/forum/#!forum/archive-cohousing-updates">Archive Cohousing</a>, and watercolor painting. Enthusiastic, inclusive, a tad gullible, half-giant, and Keeper of Keys and Grounds at the Archive, Jason is basically Hagrid.{' '}
            <a href="https://jasonbenn.com/">Homepage</a>.
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
            <strong>Laura D'Asaro</strong> is the co-founder/CBO at <a href="https://chirpschips.com/">Chirps</a> and spends most of her time thinking about how to get people to eat more bugs. They got a deal on Shark Tank in 2017, and Chirps are now in stores nationwide. When not cooking up crickets, you’ll usually find her working on her next crazy plan, like constructing the world’s largest nachos, or figuring out how to grow a giant pumpkin and make it into a boat. She also plays the ukulele poorly but passionately, can walk on her hands, and has an unusual love of watermelon.
          </p>

          <p>
            <strong>Michael Lai</strong>'s six word story is “failed professional athlete,
            striving education entrepreneur.” He is currently exploring startup ideas to improve
            childcare in America and building a nonprofit venture studio for early childhood development.
            Previously, he was a Director helping build a university from scratch at Minerva Project,
            worked at Google.org, and competed on Harvard's varsity golf team (where he
            was decidedly NOT the next Tiger Woods). His passion for education starts from the classroom —
            6 years volunteer teaching preschool, elementary, and middle school.
            If he’s not starting <a href="http://mtclai.com/organizing">flashmob dance parties</a>, meditating,
            or adding magic to a friend's day, he’s probably curled up with <a href="http://bit.ly/michaelreads">a book</a>.{' '}
            <a href="http://mtclai.com/">Homepage</a>.
          </p>

          <p>
            <strong>Michelle Valentine</strong> invests in early stage software companies at Index Ventures, a venture capital fund. Before venture, she worked in investment banking primarily structuring large debt related financings. In her free time, she plays for a netball league and is a forever learner of Buddhist philosophy. <a href="https://www.forbes.com/profile/michelle-valentine">Profile</a>.
          </p>

          <p>
            <strong>Rilka Li</strong> is a designer, engineer, aerialist, and nascent installation artist. Currently her brainspace is devoted to bettering the experience of labeling vast quantities of data at <a href="https://scale.com">Scale AI</a>, and to the endeavor of learning how to fabricate almost anything. She’s happiest when thinking about humans interact with their world and with each other, and gets unusually excited about unconventional grammatical constructions, fandom as a cultural phenomenon, and cucumbers. <a href="http://rilka.li/">Homepage</a>.
          </p>

          <p>
            <strong>Taylor Rogalski</strong> is a product designer and aspiring engineer
            at <a href="http://pioneer.app">Pioneer</a>. Previously, he led design at ClassDojo,
            built personalized learning software for Summit Public Schools, and helped people
            stalk their friends with Facebook Graph Search. He thinks the attention economy is
            harvesting human potential and filling our brains with sludge, and instead wishes
            his phone would manipulate him into becoming the person he wants to be.{' '}
            <a href="http://twitter.com/tayroga">Twitter</a>.
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
            <strong>Tommy Collison</strong> is an Irish startup person, coder, writer, and pilot-in-training. He's working on growth and international expansion at <a href="http://lambdaschool.com">Lambda School</a>, where he's also studying web development. His dubious achievement is that he's kept a list of every book he's read since 2009. <a href="https://twitter.com">Twitter</a>, <a href="https://tommycollison.com">homepage</a>.
          </p>

          <p>
            <strong>Zain Shah</strong> is an ML engineer at Opendoor. Before that he was a research scientist at OpenAI and founder of a mobile analytics company called Watchsend. He has a knack for scrappy solutions to hard problems: be it gathering unsupervised training data for deep learning, finding great flight deals, or memorizing 200 digits of pi in case he’s ever without a calculator. <a href="http://tarzain.com/">Homepage</a>.
          </p>

          <hr />

          <img src="/archive3.jpg" alt="Image of the The Archive's backyard" />
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
