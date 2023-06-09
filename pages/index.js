import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
// import styles1 from '@/styles/Home1.module.css'
// import styles2 from '@/styles/Home2.module.css'
import Link from 'next/link'
import Script from 'next/script'
import Dummy from '@/components/dummy'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  // console.log(styles);
  return (
    <>
      <Head>
        <title>Hunting Coder</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="keywords" content="nextjx, huntingcoder blog, hunting coder" />
        <link rel="icon" href="/favicon.ico" />
        
      </Head>
      <Dummy />
      <nav className={styles.mainnav}>
        <ul>
          <Link href='/'><li>Home</li></Link>
          <Link href='/about'><li>About</li></Link>
          <Link href='/blog'><li>Blog</li></Link>
          <Link href='/contact'><li>Contact</li></Link>
        </ul>
      </nav>
      {/* <Script src='/sc.js' strategy='lazyOnload'></Script> */}
      <main className={styles.main}>
        <div className={styles.description}>
        </div>
        <div className={styles.center}>
         
        <style jsx>
            {`
            .mySpan{
              color: red;
            }
            `}
          </style>
         <h1 ><span className='mySpan dummy'>Hunting Coder</span></h1> 
        </div>
        <p>A blog for the coder by a coder</p>
        {/* <div className={`${styles1.con} ${styles2.con}`}> */}
          <div>
          <h2>Popular Blogs</h2>
               <div className='blogItem'>
                 <h3>How to learn Javascript in 2022?</h3>
                 <p>Javascript is the language used to design logic for the web.</p>
               </div>
               <div className='blogItem'>
                 <h3>How to learn Javascript in 2022?</h3>
                 <p>Javascript is the language used to design logic for the web.</p>
               </div>
               <div className='blogItem'>
                 <h3>How to learn Javascript in 2022?</h3>
                 <p>Javascript is the language used to design logic for the web.</p>
               </div>
            </div>
      

        
      </main>
    </>
  )
}
