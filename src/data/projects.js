import tenzies from '../assets/img/tenzies.png'
import cryptos from '../assets/img/cryptos.png'
import memeGenerator from '../assets/img/meme-generator.png'
import quizzical from '../assets/img/quizzical.png'
import infoWebsite from '../assets/img/info-website.png'
import instagramClone from '../assets/img/instagram-clone.png'
import youtubeClone from '../assets/img/youtube-clone.png'


export const projects = [
  { id: 1, 
    name: "Tenzies", 
    img: tenzies, 
    gitLink: 'https://github.com/humbertoluizgt/Tenzies',
    webLink: 'https://humbertoluizgt.github.io/Tenzies/',
    initial: { x: -400, scale: 0 }, 
    animate: { x: 0, scale: [0, 1] }, 
    transition: { delay: 1, duration: 1.2 } 
  }, 
  { id: 2, 
    name: "Cryptos", 
    img: cryptos, 
    gitLink:'https://github.com/humbertoluizgt/Cryptos',
    webLink: 'https://humbertoluizgt.github.io/Cryptos/',
    initial: { x: -1000, scale: 0 },
    animate: { x: 0, scale: [0, 1] },
    transition: { delay: 1.2, duration: 1.2 } 
  },
  { id: 3, 
    name: "Meme Generator", 
    img: memeGenerator, 
    gitLink: 'https://github.com/humbertoluizgt/Meme-Generator',
    webLink: 'https://humbertoluizgt.github.io/Meme-Generator/',
    initial: { x: -1600, scale: 0 }, 
    animate: { x: 0, scale: [0, 1] }, 
    transition: { delay: 1.4, duration: 1.2 } 
  },
  { id: 4, 
    name: "Quizzical", 
    img: quizzical,
    gitLink: 'https://github.com/humbertoluizgt/Quizzical',
    webLink: 'https://humbertoluizgt.github.io/Quizzical/', 
    initial: { x: -400, y: -800 , scale: 0 }, 
    animate: { x: 0, y: 0,  scale: [0, 1] }, 
    transition: { delay: 1, duration: 1.2 } 
  },
  { id: 5, 
    name: "Info Website", 
    img: infoWebsite, 
    gitLink: 'https://github.com/humbertoluizgt/Info-Website',
    webLink: 'https://humbertoluizgt.github.io/Info-Website/',
    initial: { x: -1000, y: -800, scale: 0 }, 
    animate: { x: 0, y: 0, scale: [0, 1] }, 
    transition: { delay: 1.2, duration: 1.2 } 
  },  
  { id: 6, 
    name: "Instagram Clone", 
    img: instagramClone, 
    gitLink: 'https://github.com/humbertoluizgt/Instagram-Clone',
    webLink: 'https://humbertoluizgt.github.io/Instagram-Clone/',
    initial: { x: -400, y: -1400, scale: 0 }, 
    animate: { x: 0, y: 0, scale: [0, 1] }, 
    transition: { delay: 1, duration: 1.2 } 
  },
  { id: 7, 
    name: "Youtube Clone", 
    img: youtubeClone, 
    gitLink: 'https://github.com/humbertoluizgt/Youtube-Clone',
    webLink: 'https://humbertoluizgt.github.io/Youtube-Clone/',
    initial: { x: -1000, y: -1400, scale: 0 }, 
    animate: { x: 0, y: 0, scale: [0, 1] }, 
    transition: { delay: 1.2, duration: 1.2 } 
  }
]  