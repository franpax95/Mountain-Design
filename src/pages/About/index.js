import React from 'react';
import './About.css';

import Title from '../../components/Title';
import Paragraph from '../../components/Paragraph';

import { GiAges, GiAquarius, GiBuyCard, GiChart } from 'react-icons/gi';


const About = (props) => {
    return (
        <div className="About">
            <Title>About</Title>

            <div className="article">
                <div className="icon">
                    <GiAges />
                </div>
                <Paragraph>
                    Nullam gravida mi vel arcu mattis interdum. Pellentesque elementum maximus tellus eget scelerisque. Quisque odio.
                </Paragraph>
            </div>
            <div className="article">
                <div className="icon">
                    <GiBuyCard />
                </div>
                <Paragraph>
                    In hac habitasse platea dictumst. Pellentesque habitant morbi tristique senectus et netus et malesuada fames.
                </Paragraph>
            </div>
            <div className="article">
                <div className="icon">
                    <GiChart />
                </div>
                <Paragraph>
                    Vivamus sit amet cursus nisl. Etiam porttitor nunc a eleifend feugiat. Suspendisse at mauris aliquet.
                </Paragraph>
            </div>
            <div className="article">
                <div className="icon">
                    <GiAquarius />
                </div>
                <Paragraph>
                    Sed a mauris quis dui tincidunt ultricies. Vivamus accumsan ex eu tristique ultricies. Suspendisse potenti.
                </Paragraph>
            </div>
        </div>
    );
}

export default About;