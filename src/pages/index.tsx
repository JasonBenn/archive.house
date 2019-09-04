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
            <a href="https://goo.gl/forms/pTT0HuMgG0xIgf9t2">shoot us a message</a>.
          </h3>
          <p>
            Interested in staying with us for a short amount of time instead? Check out one of our <a href="https://www.airbnb.com/rooms/30088791?guests=1&adults=1" target='blank'>Airbnb listings</a>.
          </p>
          <p>
            Or maybe you'd prefer to stay updated on future plans or events. If so, consider signing up for our <a href="https://tinyletter.com/archive-house-sf" target='blank'>occasional newsletter</a>.
          </p>

          <hr />
          <img src="/archive1.jpg" alt="Image of the living room at The Archive" />
          <hr />

          <h2>Residents</h2>

          <p>
            <strong>Annie Brett</strong> is an oceanographer, explorer and lawyer who spends her time thinking up novel ways to solve wicked ocean problems for Stanford and the World Economic Forum. In the more romantic past she spent several years as the youngest female captain in the Pacific, visiting remote islands, learning how to fix anything with duct tape, and amassing sea stories with an 18-person crew. Now that she has all the degrees, she spends her free time running National Geographic expeditions, tinkering with boats and plants, and searching for fresh raspberries.
          </p>

          <p>
            <strong>Arram Sabeti</strong> founded ZeroCater, a business he grew from his living room to over 150 people which has now sold over a quarter billion dollars in meals and has been covered by publications such as The New York Times, The Wall Street Journal, and Forbes. Tenacious, considerate, and with more utility belts than Batman, he spends his free time building robots and doing mad science.{' '}
            <a href="https://www.arr.am/">Homepage</a>.
          </p>

           <p>
            <strong>Austin Hou</strong> is a designer and engineer. An avid explorer of ideas, places, and experiences, he has flown 22.4x around the earth by distance and has spent time in 67 countries. He has worked on critical protocols at Stanford Hospital, the Deep Space Network at JPL/NASA, ML research at SETI, and co-founded Mavencook, a video cooking app. He also enjoys experimenting with creative technology - this year, he built lighting systems for the Temple at Burning Man. When not working, you can often find him behind the lens of a camera.{' '}
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
            <strong>Gillian Morris</strong> is the founder and CEO of <a href="http://hitlistapp.com/">Hitlist</a>, an app that alerts you when there are cheap flights for your dream trips. Before entering the start-up world, Gillian worked as a consultant, journalist, and educator in Turkey, China, Afghanistan, and Syria. Her work has appeared in/on the New York Times, Harvard Business Review, Buzzfeed, and others. Between flights, Gillian is fighting to regain her six pack thanks to the Archive's sweet home gym and sauna setup. <a href="http://gillian.im/">Blog</a>, <a href="http://twitter.com/gillianim">Twitter</a>, <a href="https://www.facebook.com/gillianim">Facebook</a>.
          </p>

          <p>
            <strong>Jason Benn</strong> is a self-taught machine learning engineer that has been profiled in Cal Newport's "Deep Work" for his habit of interleaving work with periods of intense study. These days he also spends his time watercolor painting and working on the Community Interviewing Project, AKA the Don't Make Other People's Mistakes project. Enthusiastic, inclusive, a tad gullible, half-giant, and Keeper of Keys and Grounds at the Archive, Jason is basically Hagrid.{' '}
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
            <strong>Nina Miolane</strong> is a researcher and lecturer at Stanford, where she explores the mysteries of healthy and pathological brains. She loves to think about the Minority Report of medicine: what if we could diagnose and cure diseases even before the symptoms appear? Prior to this, she was a machine learning engineer at Bay Labs working on the automatic diagnosis of cardiovascular diseases, she was also a graduate student in mathematical physics working on neutrinos detection. If not at the Archive, look for her on a flying trapeze at the circus, riding her motorcycle on the 1, or hiking in the wilderness! <a href="https://sites.google.com/site/ninamiolane/">Homepage</a>.
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
            his phone would manipulate him into becoming the person he wants to be. 
             <a href="http://twitter.com/tayroga">Twitter</a>

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
