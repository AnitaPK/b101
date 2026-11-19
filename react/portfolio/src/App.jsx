import './App.css'
import Certificates from './components/Certificates'
import ContactMe from './components/ContactMe.jsx'
import Footer from './components/Footer.jsx'
import Header from './components/Header'
import PersonalInfo from './components/PersonalInfo.jsx'
import ProjectList from './components/ProjectList.jsx'
import Skills from './components/Skills.jsx'
import { certificates, personalInfo, projectsList, skills } from './data.js'


function App() {

  return (
    <>
    {/* <Navbar /> */}
    <Header data={{name:personalInfo.name, about:personalInfo.about}}/>
    <ProjectList projectsList={projectsList} />
    <Certificates data={certificates}/>
    <Skills skills={skills}/>
    <PersonalInfo data={personalInfo}/>
    <ContactMe />
    <Footer />
    </>
   )
}

export default App
