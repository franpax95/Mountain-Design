import React from 'react';
import './Services.css';

import { ServiceTitle } from '../../components/Title';
import Paragraph from '../../components/Paragraph';
import Img from 'react-cool-img';

import loading from '../../loading.svg';

const Services = (props) => {
    return (
        <div className="Services">
            <div className="section">
                <div className="img">
                    <Img src="/services/img1.jpg" alt="" placeholder={loading} />
                </div>
                <div className="content">
                    <ServiceTitle>Lorem ipsum dolor.</ServiceTitle>
                    <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus.</Paragraph>
                </div>
            </div>

            <div className="section">
                <div className="content">
                    <ServiceTitle>Interdum et malesuada.</ServiceTitle>
                    <Paragraph>Praesent nec urna dui. Phasellus feugiat id elit eu scelerisque. Aliquam erat.</Paragraph>
                </div>
                <div className="img">
                    <Img src="/services/img2.jpg" alt="" placeholder={loading} />
                </div>
            </div>

            <div className="section">
                <div className="img">
                    <Img src="/services/img3.jpg" alt="" placeholder={loading} />
                </div>
                <div className="content">
                    <ServiceTitle>Donec tincidunt lacinia.</ServiceTitle>
                    <Paragraph>Cras tincidunt ex vel massa faucibus, convallis ullamcorper lorem scelerisque. Suspendisse nec dui ut nulla.</Paragraph>
                </div>
            </div>
        </div>
    );
}

export default Services;