import React,{useContext} from 'react';

import { ThemeContext } from '../../contexts/ThemeContext';

import { servicesData } from '../../data/servicesData';

import './Services.css'
import SingleService from './SingleService/SingleService';

function Services() {

    const { theme } = useContext(ThemeContext);
    return (
        <>
            {servicesData.length > 0 && (
                <div className="services" id="services" style={{backgroundColor:theme.secondary}}>
                    <div className="services-header">
                        <h1 style={{color: theme.primary}}>Hobby</h1>
                    </div>
                    <div className="services-body">
                        <p style={{color:theme.tertiary80}}>
                        Find what you love and let it kill you – Charles Bukowski
                        </p>
                        <div className="services-bodycontainer">
                            {servicesData.map(services => (
                                <SingleService
                                key={services.id}
                                id={services.id}
                                title={services.title}
                                icon={services.icon}/>
                            ))}
                        </div>
                    </div>
                </div>
            )}
       </>
    )
}

export default Services
