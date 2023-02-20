import React from 'react'
import { Helmet } from 'react-helmet'

import { Navbar, Footer, Landing, About, Skills, Testimonials, Blog, Education, Experience, Contacts, Projects, Services, Achievement, ProjectPage } from '../../components'
import { headerData } from '../../data/headerData'
// import ProjectPage from '../../components/Project/ProjectPage'

function Main() {
    return (
        <div>
            <Helmet>
                <title>{headerData.name} - Porfolio</title>
            </Helmet>

            <Navbar />        
            <Landing />
            <About />
            <Skills />
            <Education />  
            <ProjectPage/>          
            {/* <Projects /> */}
            <Experience />
            {/* <ProjectPage/> */}
            {/* <Achievement /> */}
            {/* <Services/> */}
            {/* <Blog /> */}
            <Contacts />
            <Footer />
        </div>
    )
}

export default Main
