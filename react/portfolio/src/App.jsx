import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Certificates from './components/Certificates'
import ContactMe from './components/ContactMe.jsx'
import Footer from './components/Footer.jsx'
import Header from './components/Header'
import PersonalInfo from './components/PersonalInfo.jsx'
import ProjectList from './components/ProjectList.jsx'
import Skills from './components/Skills.jsx'
import { certificates, personalInfo, projectsList, skills } from './data.js'
import Navbar from './components/Navbar.jsx'
import ProjectDetails from './components/ProjectDetails.jsx'


function App() {

  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Header data={{name:personalInfo.name, about:personalInfo.about}}/>}></Route>
      <Route path='/projects' element={<ProjectList projectsList={projectsList} />}></Route>
      <Route path='/projects/:ID' element={<ProjectDetails />}></Route>
      <Route path='/certificates' element={<Certificates data={certificates}/>}> </Route>
      <Route path='/skills' element={<Skills skills={skills}/>}></Route>
      <Route path='/per-info' element={<PersonalInfo data={personalInfo}/>}></Route>
      <Route path='/contact-me' element={<ContactMe profile={personalInfo}/>}></Route>
    </Routes>
    <Footer />
    </BrowserRouter>
   )
}

export default App
