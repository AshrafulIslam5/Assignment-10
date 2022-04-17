import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner-1.png'
import banner2 from '../../../images/banner-2.png'
import banner3 from '../../../images/banner-3.png'
import banner4 from '../../../images/banner-4.png'
import './Banner.css'

const Banner = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    style={{ height: '600px' }}
                    className="d-block w-100 object-fit"
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Taken The best shots</h3>
                    <p>Someone Trustful is Who I am.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={{ height: '600px' }}
                    className="d-block w-100 object-fit"
                    src={banner2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Capture Your memories</h3>
                    <p>I can Help you with storing your memories :)</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={{ height: '600px' }}
                    className="d-block w-100 object-fit"
                    src={banner3}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Never miss perfect shots</h3>
                    <p>They can't be missed</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={{ height: '600px' }}
                    className="d-block w-100 object-fit"
                    src={banner4}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>In any wedding</h3>
                    <p>
                        Any Religion's event is applicable
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};
export default Banner;