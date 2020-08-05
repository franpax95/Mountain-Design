import React, { useState, useEffect } from 'react';
import './App.css';

import { Route, Switch, useLocation } from 'react-router-dom';
import { useTransition, animated, config } from 'react-spring';

import Navbar from './Navbar';

import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services';
import Contact from '../pages/Contact';

import { GiRobinHoodHat } from 'react-icons/gi';


const slides = [
    { id: 0, url: '/background/background1.jpg' },
    { id: 1, url: '/background/background2.jpg' },
    { id: 2, url: '/background/background3.jpg' }
];

const timeInterval = 8;

const App = () => {
    /** transition between components */
    const location = useLocation();
    const routeTransitions = useTransition(location, location => location.pathname, {
        from: { opacity: 0, position: 'absolute' },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        // config: config.molasses,
        config: { duration: 300 }
    });


    /** image background transition */
    const [index, setIndex] = useState(0);
    const imageTransitions = useTransition(slides[index], item => item.id, {
        from: { opacity: 0, position: 'fixed', top: 0, left: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config: config.molasses,
        unique: true,
        reset: true
    });
    useEffect(() => void setInterval(() => setIndex(state => (state + 1) % slides.length), (timeInterval * 1000)), []);

    
    return <>
        <div className="App">
            <div className="diagonal-layout">
                <Navbar />
                <div style={{ width: '100%', height: '100%', position: 'relative'}}>
                    {routeTransitions.map(({ item: location, props, key }) => (
                        <animated.div key={key} style={props} className="body">
                            <Switch location={location}>
                                <Route exact path="/" component={Home} />
                                <Route exact path="/about" component={About} />
                                <Route exact path="/services" component={Services} />
                                <Route exact path="/contact" component={Contact} />
                            </Switch>
                        </animated.div>
                    ))}
                </div>
            </div>
        </div>

        {/** logo */}
        <div className="logo">
            <GiRobinHoodHat />
            franpax95
        </div>

        {/** image background effect */}
        {imageTransitions.map(({ item, props, key }) => (
            <animated.div 
                key={key} 
                className="ImageFadeFixed" 
                style={{ ...props, backgroundImage: `url(${item.url})` }}
            />
        ))}
    </>;
}

export default App;