import React from "react";

import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class BootstrapCarouselComponent extends React.Component {

    render() {
        return (
            <div>
                <div className='container-fluid' >
                    
                    <div className="row mb-5">
                        <div className="col-12">
                            <Carousel>
                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-4">
                                        <img
                                        className="d-block w-100"
                                        src="https://picsum.photos/500/300?img=1"
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        <p>50% Off on life insurance<br /> Deals Today </p>
                                    </Carousel.Caption>
                                        </div>
                                        <div className="col-4">
                                        <img
                                        className="d-block w-100"
                                        src="https://picsum.photos/500/300?img=1"
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        <p>50% Off on life insurance<br /> Deals Today </p>
                                    </Carousel.Caption>
                                        </div>
                                        <div className="col-4">
                                        <img
                                        className="d-block w-100"
                                        src="https://picsum.photos/500/300?img=1"
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        <p>50% Off on life insurance<br /> Deals Today </p>
                                    </Carousel.Caption>
                                        </div>
                                    </div>
                                </Carousel.Item>

                                <Carousel.Item>
                                <div className="row">
                                        <div className="col-4">
                                        <img
                                        className="d-block w-100"
                                        src="https://picsum.photos/500/300?img=2"
                                        alt="Second slide"
                                    />
                                    <Carousel.Caption>
                                        <p>50% Off on life insurance<br /> Deals Today</p>
                                    </Carousel.Caption>
                                    </div>

                                    <div className="col-4">
                                    <img
                                        className="d-block w-100"
                                        src="https://picsum.photos/500/300?img=3"
                                        alt="Third slide"
                                    />
                                    <Carousel.Caption>
                                        <p>50% Off on life insurance<br /> Deals Today</p>
                                    </Carousel.Caption>
                                    </div>

                                    <div className="col-4">
                                    <img
                                        className="d-block w-100"
                                        src="https://picsum.photos/500/300?img=3"
                                        alt="Fourth slide"
                                    />
                                    <Carousel.Caption>
                                        <p>50% Off on life insurance<br /> Deals Today</p>
                                    </Carousel.Caption>
                                    </div>
                                    </div>
                                </Carousel.Item>

                                <Carousel.Item>
                                    <div className="row">
                                        <div className="col-4">
                                        <img
                                        className="d-block w-100"
                                        src="https://picsum.photos/500/300?img=1"
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        <p>50% Off on life insurance<br /> Deals Today </p>
                                    </Carousel.Caption>
                                        </div>
                                        <div className="col-4">
                                        <img
                                        className="d-block w-100"
                                        src="https://picsum.photos/500/300?img=1"
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        <p>50% Off on life insurance<br /> Deals Today </p>
                                    </Carousel.Caption>
                                        </div>
                                        <div className="col-4">
                                        <img
                                        className="d-block w-100"
                                        src="https://picsum.photos/500/300?img=1"
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        <p>50% Off on life insurance<br /> Deals Today </p>
                                    </Carousel.Caption>
                                        </div>
                                    </div>
                                </Carousel.Item>
                                
                                <Carousel.Item>
                                <div className="row">
                                        <div className="col-4">
                                        <img
                                        className="d-block w-100"
                                        src="https://picsum.photos/500/300?img=2"
                                        alt="Second slide"
                                    />

                                    <Carousel.Caption>
                                        <p>50% Off on life insurance<br /> Deals Today</p>
                                    </Carousel.Caption>
                                    </div>
                                    <div className="col-4">
                                    <img
                                        className="d-block w-100"
                                        src="https://picsum.photos/500/300?img=3"
                                        alt="Third slide"
                                    />
                                    <Carousel.Caption>
                                        <p>50% Off on life insurance<br /> Deals Today</p>
                                    </Carousel.Caption>
                                    </div>
                                    <div className="col-4">
                                    <img
                                        className="d-block w-100"
                                        src="https://picsum.photos/500/300?img=3"
                                        alt="Fourth slide"
                                    />
                                    <Carousel.Caption>
                                        <p>50% Off on life insurance<br /> Deals Today</p>
                                    </Carousel.Caption>
                                    </div>
                                    </div>
                                </Carousel.Item>

                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}

export default BootstrapCarouselComponent;