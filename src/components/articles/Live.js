import React, { useState } from 'react';
import { FaChevronRight, FaShareSquare } from 'react-icons/fa'
import flag from '../../assets/USflag1.jpg'
import { Helmet } from 'react-helmet'

const Live = () => {

    const [copied, setCopied] = useState(false);

    const handleShare = async () => {
        try {
          if (navigator.share) {
            await navigator.share({
              title: 'Share this link',
              url: window.location.href
            });
            console.log('Link shared successfully');
          } else {
            navigator.clipboard.writeText(window.location.href);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
          }
        } catch (error) {
          console.error('Error sharing link:', error);
        }
      };

    return (
        <div className='pt-[80px] max-w-[1100px] mx-auto'>
          <Helmet>
          <title>Welcome to our new website!</title>
          <meta name="description" content="Many thanks to James Kirk, a talented volunteer of ours for his expertise and help with it.
Now building on twelve years of success, AP76 has been strategically renewed or born again, as the case may be. Amid America’s modern-day turmoil, the timing could not be better." />
          <meta property="og:title" content="Welcome to our new website!" />
          <meta property="og:url" content="https://www.ap76.org/live" />
          <meta property="og:type" content="article"/>
          <meta property="og:description" content="Many thanks to James Kirk, a talented volunteer of ours for his expertise and help with it.
Now building on twelve years of success, AP76 has been strategically renewed or born again, as the case may be. Amid America’s modern-day turmoil, the timing could not be better." />
          <meta property="og:image" content="https://www.ap76.org/USflag1.jpg" />
          <meta name="author" content="Brendan Connelly" />
          <meta property="article:published_time" content="2024-03-25T08:00:00Z" />
          <meta name="twitter:title" content="Welcome to our new website!" />
          <meta name="twitter:description" content="Many thanks to James Kirk, a talented volunteer of ours for his expertise and help with it. Now building on twelve years of success, AP76 has been strategically renewed or born again, as the case may be. Amid America’s modern-day turmoil, the timing could not be better." />
          <meta name="twitter:image" content="https://www.ap76.org/USflag1.jpg" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@SupportAp76" />
          </Helmet>
          <div className='py-0 md:my-20'>
          </div>
          <div className='p-8 mb-20 w-full bg-white flex flex-col'>
            <div className='flex text-sm items-center space-x-2'>
                <a href='/'><p className='inline border-b-2 border-[#791414] hover:text-[#FF0000]'>Home</p></a>
                <p>{<FaChevronRight size={12}/>}</p>
                <a href='/news'><p className='inline border-b-2 border-[#791414] hover:text-[#FF0000]'>News</p></a>
                <p>{<FaChevronRight size={12}/>}</p>
                <p>Welcome To Our New Website!</p>
                <button onClick={handleShare} className='p-2 hover:text-[#FF0000]'>
                    <FaShareSquare size={20}/>
                </button>
                <div className={`copied-text ${copied ? 'show' : ''}`}>
                <p className='text-white bg-[#FF0000] p-1 rounded-sm'>Copied to clipboard!</p>
                </div>
            </div>
            <div className='flex justify-center items-center py-8'>
                <img src={flag} alt="flag" className='w-[600px]'/>
            </div>
            <h1 className='text-4xl font-bold'>Welcome to our new website!</h1>
            <div className='flex flex-row space-x-2'>
            <p className='my-2 text-xs font-semibold'>Brendan Connelly</p>
            <p className='my-2 text-xs'>|</p>
            <p className='my-2 text-xs text-[#FF0000]'>March 25, 2024</p>
            </div>
            <div className='my-4 space-y-4'>
            <p>Many thanks to James Kirk, a talented volunteer of ours for his expertise and help with it.</p>
            <p>Now building on twelve years of success, AP76 has been strategically renewed or born again, as the case may be.</p>
            <p>Amid America’s modern-day turmoil, the timing could not be better.</p>
            <p>Yes, love of country (Latin for Amor Patriae, or AP) dating back to the birth of America ('76) is as relevant as ever for AP76. But with all that America has done and not done lately, we want to check-in and clarify what our mission is and why it's worth fighting for.</p>
            <p>Stepping back, at the root of our founding to Unite America has also been a deep disdain for and hatred of pedophelia.</p>
            <p>But who ever wanted to talk about that, especially twelve years ago?</p>
            <p>Thankfully, awareness around what is today called "Human Trafficking" has come a long way since then. At least we can be thankful for storied pedophiles like Jeffrey Epstien and Harvey Weinstein for that.</p>
            <p>But many other scourges on American culture such as racism, slavery, political corruption and even some forms of taxation don’t fit within that moniker of Human Trafficking. And it's always been the intent of AP76 to unite those interested in creating solutions to those too (such as our first cause of keeping an innocent Amish farmer out of jail).</p>
            <p>As we've been in existence for more than a decade now, we’ve decided to enlist the early American abolitionist and freedom fighter John Brown for help with further defining our purpose.</p>
            <p>Brown was white, and he eventually got himself hung for his life-long fight for the freedom of blacks. Said his better-known black friend and ally Frederick Douglass, Brown's "zeal in the cause of my race was far greater than mine."</p>
            <p>What? A white guy caring as much about racism than a black guy? Indeed. It was as true then and it is now. At least it is for us at AP76. All of humanity matters to us.</p>
            <p>Turns out that Brown was an original American anti-racist. His life purpose was to Unite America, regardless of the melanin composition of their skin. Sady, he eventually became obsessed with the idea of taking any form of action—including vigilantism—to help win justice for enslaved black people.</p>
            <p>But on him, Henry David Thoreau wrote that "no man in America has ever stood up so persistently and effectively for the dignity of human nature." Further, Ralph Waldo Emerson said that he will “make the gallows glorious like the cross.”</p>
            <p>"Abolitionists, whose cause was immersed in Christian imagery, saw Brown’s death as a kind of blood atonement, akin to Christ’s death on the cross, a means of saving a corrupt nation tied to human bondage," further cites the post linked above.</p>
            <p>Wow.</p>
            <p>Beyond further indications of America's Judeo-Christian heritage is a phrase referencing "Human Bondage." Could this be a phrase that expands Human Trafficking to include that and many other forms of human oppression?</p>
            <p>Yes, eventually America did, of course, repent of its own Human Bondage through slavery with a bloody American Revolution.</p>
            <p>Today, a google search for the term references the fantastic first work of renowned novelist W. Somerset Maugham entitled, Of Human Bondage. Alas, search the web for the term without the preceding word "human" and you get... (we don't recommend doing it; suffice it to say we did and it was enough for us to terminate any idea of using it in any form or AP76 mission statement).</p>
            <p>So now for brevity, clarity and by way of update let's just say that AP76 exists as a means to Unite America in Original Human Freedom.</p>
            <p>We'll leave it at that for now. Further ideas for clarification and refinement of our purpose are welcome.</p>
            <p>Let's continue realizing the best of our American self-evident truths. We've still got the best chance in the world to do so. Indeed, there is much to unpack here so please join us!</p>
            <p></p>
            </div>
          </div>
        </div>
      )
}

export default Live