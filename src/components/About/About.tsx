import { Container } from "./styles";
import SohilMaurya from "../../assets/sohil.png";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import boostrapIcon from "../../assets/bootstrap-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";
import ReduxIcon from '../../assets/redux logo.svg'
import FigmaIcon from '../../assets/figma-svgrepo-com.svg'
import JiraIcon from '../../assets/jira-svgrepo-com.svg'
import TailwindCss from '../../assets/tailwindcss-icon-svgrepo-com.svg'

const ScrollAnimationWrapper = ScrollAnimation as any;

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimationWrapper animateIn="fadeInLeft">
          <h2>About Me</h2>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
            Hi! I'm Sohil, a frontend developer with a focus on building responsive and user-friendly web apps. Skilled in React.js, Redux, Tailwind css, Node.js, Javascript, HTML5 and Material UI, I bring ideas to life with clean, efficient code.
          </p>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper animateIn="fadeInLeft" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
            I’ve worked on features like real-time data sync and dynamic forms, using tools like Formik and Next.js. My goal is to create websites that look great and run smoothly.
          </p>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper animateIn="fadeInLeft" delay={0.3 * 1000}>
          <p>
            If you need a new site or want to improve your current one, I’d love to chat about how we can make it happen. Let’s bring your vision to life together!
          </p>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>Here are my main skills:</h3>
        </ScrollAnimationWrapper>
        <div className="hard-skills">
          <div className="hability">
            <ScrollAnimationWrapper animateIn="fadeInUp" delay={0.10 * 1000}>
              <img src={reactIcon} alt="React" />
            </ScrollAnimationWrapper>
          </div>
          <div className="hability">
            <ScrollAnimationWrapper animateIn="fadeInUp" delay={0.12 * 1000}>
              <img src={ReduxIcon} alt="ReduxIcon" />
            </ScrollAnimationWrapper>
          </div>
          <div className="hability">
            <ScrollAnimationWrapper animateIn="fadeInUp" delay={0.12 * 1000}>
              <img src={TailwindCss} alt="Tailwind" />
            </ScrollAnimationWrapper>
          </div>
          <div className="hability">
            <ScrollAnimationWrapper animateIn="fadeInUp" delay={0.14 * 1000}>
              <img src={typescriptIcon} alt="Typescript" />
            </ScrollAnimationWrapper>
          </div>
          <div className="hability">
            <ScrollAnimationWrapper animateIn="fadeInUp" delay={0.15 * 1000}>
              <img src={FigmaIcon} alt="Vue" />
            </ScrollAnimationWrapper>
          </div>
          <div className="hability">
            <ScrollAnimationWrapper animateIn="fadeInUp" delay={0.16 * 1000}>
              <img src={nodeIcon} alt="Node" />
            </ScrollAnimationWrapper>
          </div>
          <div className="hability">
            <ScrollAnimationWrapper animateIn="fadeInUp" delay={0.17 * 1000}>
              <img src={htmlIcon} alt="Html" />
            </ScrollAnimationWrapper>
          </div>
          <div className="hability">
            <ScrollAnimationWrapper animateIn="fadeInUp" delay={0.18 * 1000}>
              <img src={cssIcon} alt="Css" />
            </ScrollAnimationWrapper>
          </div>
          <div className="hability">
            <ScrollAnimationWrapper animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={boostrapIcon} alt="bootstrap" />
            </ScrollAnimationWrapper>
          </div>
          <div className="hability">
            <ScrollAnimationWrapper animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={jsIcon} alt="JavaScript" />
            </ScrollAnimationWrapper>
          </div>
          <div className="hability">
            <ScrollAnimationWrapper animateIn="fadeInUp" delay={0.20 * 1000}>
              <img src={JiraIcon} alt="Jira" />
            </ScrollAnimationWrapper>
          </div>
        </div>
      </div>
      <div className="about-image">
        <ScrollAnimationWrapper animateIn="fadeInRight" delay={0.21 * 1000}>
          <img src={SohilMaurya} alt="Sohil Maurya" />
        </ScrollAnimationWrapper>
      </div>
    </Container>
  )
}
