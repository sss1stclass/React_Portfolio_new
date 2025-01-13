import { Container } from "./styles";
import githubIcon from "../../assets/github.svg"
import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll";

const ScrollAnimationWrapper = ScrollAnimation as any;

export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">
        <ScrollAnimationWrapper animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/sss1stclass/Personalised-Youtube-Clone" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a>
                <a href="https://personalised-youtube-clone.vercel.app/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a> </div>
            </header>
            <div className="body">
              <h3>Personalised Youtube Clone</h3>
              <p>A YouTube clone built with React JS and Material UI, featuring a responsive sidebar, dynamic channel data fetching using Rapid Api Youtube V3, and conditional rendering of channel and video components. The app uses React hooks for state management and Material UI's component for layout styling. Key features include search functionality, recommended videos, and deployment on Vercel for scalability.</p>
            </div>
            <footer> <ul className="tech-list"> <li>React</li> <li>Rapid Api</li> <li>MaterialUI</li> <li>Vercel</li> </ul> </footer>
          </div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/sss1stclass/BookApp_Frontend_Vite-React-Typescript" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a>
                <a href="https://book-app-frontend-vite-react-typescript.vercel.app/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a> </div>
            </header>
            <div className="body">
              <h3>BookBuddy - Reading List Manager</h3>
              <p>Developed a React-based Book Listing Application that enables users to manage their reading list with CRUD functionality (add, edit, delete). It integrates a real-time API to fetch book cover images, enhancing the user experience. This project demonstrates skills in React, state management, API integration, and responsive design. </p>
            </div>
            <footer> <ul className="tech-list"> <li>React</li> <li>Redux</li> <li>MaterialUI</li> <li>Thunks</li> </ul> </footer>
          </div>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/sss1stclass/React-app---GOT-PEOPLE-" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /> </a>
                <a href="https://got-people-react-app.vercel.app/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" /></a>
              </div>
            </header>
            <div className="body">
              <h3>GOT-People</h3>
              <p>
                Created a React-based application using HTML, CSS, and TailwindCSS to display the cast of Game of Thrones. The app fetches data from an API and dynamically updates the cast information based on the selected family tabs. This project showcases skills in React, API integration, and responsive design with TailwindCSS
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>Material UI</li>
                <li>Axios</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/sss1stclass/Profiles_Finder" target="\_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
                <a href="https://profiles-finder-six.vercel.app/" target="\_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>GitHub Profile Finder</h3>
              <p>
                Built a simple web app using HTML, CSS, and JavaScript to search and display GitHub user profiles and their information in real-time. The app fetches data dynamically based on the username, offering an efficient and interactive user experience. This project highlights my skills in front-end development and API integration.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Tavascript</li>
                <li>React</li>
                <li>Material UI</li>
                <li>Particles.js</li>
                <li>Vercel</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </Container>
  );
}