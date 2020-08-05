import React from 'react';
import './Home.css';

import Title from '../../components/Title';
import Paragraph from '../../components/Paragraph';

const Home = (props) => {
    return (
        <div className="Home">
            <Title>Home</Title>

            <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales tincidunt tellus quis convallis. Etiam ac purus sit amet orci vestibulum laoreet. Ut consequat neque nibh, non commodo libero pellentesque sed. Donec vel hendrerit libero.
            </Paragraph>

            <hr style={{ margin: '50px 0', border: 'none', borderBottom: 'solid 1px white', width: '100%' }}/>
            
            <Paragraph>
                Integer egestas massa eget sapien dapibus rhoncus. Donec quis fermentum justo, nec ornare ipsum. Nulla tempus elementum lectus sit amet sagittis. Aliquam imperdiet tempus iaculis. Vivamus et porta velit, non porttitor quam. Nunc tempus ipsum.
            </Paragraph>
        </div>
    );
}

export default Home;