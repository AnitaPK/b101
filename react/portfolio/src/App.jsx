import './App.css'
import Certificates from './components/Certificates'
import Header from './components/Header'
import PersonalInfo from './components/PersonalInfo.jsx'
import { certificates, personalInfo } from './data.js'


function App() {

  return (
    <>
    {/* <Navbar /> */}
    <Header data={{name:personalInfo.name, about:personalInfo.about}}/>
    {/* <ProjectList /> */}
    <Certificates data={certificates}/>
    <PersonalInfo data={personalInfo}/>
    {/* <Footer /> */}
    </>
   )
}

export default App
