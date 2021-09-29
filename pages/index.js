import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Date from '../components/date'

import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({allPostsData}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h2 className={utilStyles.headingLg}>Pokemon Ipsum</h2>  
        <h3 className={utilStyles.headingMd}>From: <a href="https://omatsuri.app/lorem-ipsum">https://omatsuri.app/lorem-ipsum</a></h3>     
        <p>
          Weezing alternately shrinks and inflates its twin bodies to mix together toxic gases inside. The more the gases are mixed, the more powerful the toxins become. The Pokémon also becomes more putrid.Farfetch’d is always seen with a stalk from a plant of some sort. Apparently, there are good stalks and bad stalks. This Pokémon has been known to fight with others over stalks.Furret has a very slim build. When under attack, it can slickly squirm through narrow spaces and get away. In spite of its short limbs, this Pokémon is very nimble and fleet.
          </p>
          <p>
          They’re such cowards that they won’t hunt alone. When five or so of them get together, they suddenly turn ferocious!With eyes that can see in pitch-darkness, it never lets its prey escape. Some even call it “the emperor of dark nights.”While it can transform into anything, each Ditto apparently has its own strengths and weaknesses when it comes to transformations.
          </p>
          <p>
          Whiscash shakes the ground at high intensities to intimidate its opponents. It swallows its prey whole—along with mud from the swamp floor.They eat so many fish Pokémon that when Wailord become too numerous, fishermen have to chase them off.Regice cloaks itself with frigid air of -328 degrees Fahrenheit. Things will freeze solid just by going near this Pokémon. Its icy body is so cold, it will not melt even if it is immersed in magma.
          </p>        
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
