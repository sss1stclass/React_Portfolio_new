import { BrowserRouter } from "react-router-dom"
import { Container } from "./styles"
import ScrollAnimation from "react-animate-on-scroll"
import Illustration from "../../assets/illustration.svg"
import { NavHashLink } from "react-router-hash-link"
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'
import whatsapp from '../../assets/whatsapp.svg'
import Hello from '../../assets/Hello.gif'
import telegram from '../../assets/telegram.svg'

const ScrollAnimationWrapper = ScrollAnimation as any;
const NewNavHashLink = NavHashLink as any;
export function Hero() {
  return (
    <Container id="home">
      <div className="hero-text">
        <ScrollAnimationWrapper animateIn="fadeInUp">
          <p>Hello <img src={Hello} alt="Hello" width="20px" />, I'm</p>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper animateIn="fadeInUp" delay={0.2 * 1000}>
          <h1>Sohil Maurya</h1>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper animateIn="fadeInUp" delay={0.4 * 1000}>
          <h3>Frontend Developer</h3>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper animateIn="fadeInUp" delay={0.6 * 1000}>
          <p className="small-resume">2+ Years of Experience</p>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper animateIn="fadeInUp" delay={0.8 * 1000}>
          <BrowserRouter>
            <NewNavHashLink smooth to="#contact" className="button">Contact</NewNavHashLink>
          </BrowserRouter>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper animateIn="fadeInUp" delay={1 * 1000}>
          <div className="social-media"><a
            href="https://www.linkedin.com/in/sohil-maurya-154b741a2/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedin} alt="Linkedin" />
          </a>
            <a
              href="https://github.com/sss1stclass"
              target="_blank"
              rel="noreferrer"
            >
              <img src={githubIcon} alt="GitHub" />
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=%2B918674910143&text=Hello+Sohil"
              target="_blank"
              rel="noreferrer"
            >
              <img src={whatsapp} alt="Whatsapp" />
            </a>
            <a
              href="https://t.me"
              target="_blank"
              rel="noreferrer"
            >
              <img src={telegram} alt="telegram" />
            </a></div>
        </ScrollAnimationWrapper>
      </div>
      <div className="hero-image">
        <ScrollAnimationWrapper animateIn="fadeInRight" delay={1 * 1000}>
          <img src={Illustration} alt="Ilustração" />
        </ScrollAnimationWrapper>
      </div>
    </Container>
  )
}