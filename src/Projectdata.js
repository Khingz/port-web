import calculatorImg from './assets/img/calculator-6.png'
import ibakachiImg from './assets/img/ibakachi-4.png'
import portfolioImg from './assets/img/portfolio-1.png'
import sluralsightImg from './assets/img/sluralsight-3.png'
import weatherImg from './assets/img/weatherapp-2.png'
import beachresortImg from './assets/img/beachreosrt-8.jpg'
import weightImg from './assets/img/weightconverter-7.png'


const Project =  [
    // {
    //   name: '',
    //   desc: '',
    //   img: '',
    //   imgName: '',
    //   gitRepo: '',
    //   liveURL: '',
    //   tools: []
    // },
    {
      name: 'Weather App',
      desc: 'A simple weather app that check current weather for various location',
      img: {weatherImg},
      imgName: 'weatherImg',
      gitRepo: 'https://github.com/Khingz/weatherapp',
      liveURL: 'https://weatherapp-kk.vercel.app/',
      tools: ['React']
    },
    {
      name: 'Portfolio',
      desc: 'A simple dark mode personal portfolio website',
      img: {portfolioImg},
      imgName: 'portfolioImg',
      gitRepo: 'https://github.com/Khingz/My-Portfolio',
      liveURL: 'https://kingsley-akpan.vercel.app/',
      tools: ['HTML', 'CSS', 'Javascript', 'Netlify-form']
    },
    {
        name: 'Beach Resort',
        desc: 'A code along react project by John Smilga',
        img: {beachresortImg},
        imgName: 'beachresortImg',
        gitRepo: 'https://github.com/Khingz/Beach-Resort-Code-Along',
        liveURL: 'https://react-beachresort-codealong.netlify.app/',
        tools: ['React']
      },
      {
        name: 'Calculator',
        desc: 'A simple calculator',
        img: {calculatorImg},
        imgName: 'calculatorImg',
        gitRepo: 'https://github.com/Khingz/simple-caculator',
        liveURL: 'https://trusting-meitner-b0cde8.netlify.app/',
        tools: ['HTML', 'CSS', 'Javascript']
      },
      {
        name: 'Alumni Web',
        desc: 'A web sample site for an alumni association',
        img: {ibakachiImg},
        imgName: 'ibakachiImg',
        gitRepo: 'https://github.com/Khingz/IbakachiAlumniweb',
        liveURL: 'https://ibakachi.vercel.app/',
        tools: ['HTML', 'CSS', 'Javascript']
      },
      {
          name: 'Sluralsight',
          desc: 'A clone pluralsight web landing page as at the set time',
          img: {sluralsightImg},
          imgName: 'sluralsightImg',
          gitRepo: 'https://github.com/Khingz/Sluralsight',
          liveURL: 'https://khingz.github.io/Sluralsight/',
          tools: ['HTML', 'CSS', 'Javascript']
      },
      {
        name: 'Weight converter',
        desc: 'A simple weight converter',
        img: {weightImg},
        imgName: 'weightImg',
        gitRepo: 'https://github.com/Khingz/Simpl-weight-converter',
        liveURL: 'https://simple-weight-converter.vercel.app/',
        tools: ['HTML', 'CSS', 'Javascript']
      }
  ]
  
  export default Project