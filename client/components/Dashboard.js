import React, { Component } from 'react';

import NavigationBar from './NavigationBar.js';

class Dashboard extends Component {
    render() {
        return (
            <main id="dashboard">
                <NavigationBar />
                
                <section className="masonry">
                    <div className="masonry__cards">

                        <div className="masonry__card">
                            <div className="masonry__content">
                                <img src="" alt=""/>
                                <h2 className="masonry__title"></h2>
                                <img src="" alt="" className="masonry__avatar"/>
                                <p className="masonry__author"></p>
                                <p className="masonry__category"></p>
                            </div>
                        </div>

                        <div className="masonry__card">
                            <div className="masonry__content">
                                <img src="" alt=""/>
                                <h2 className="masonry__title"></h2>
                                <img src="" alt="" className="masonry__avatar"/>
                                <p className="masonry__author"></p>
                                <p className="masonry__category"></p>
                            </div>
                        </div>

                        <div className="masonry__card">
                            <div className="masonry__content">
                                <img src="" alt=""/>
                                <h2 className="masonry__title"></h2>
                                <img src="" alt="" className="masonry__avatar"/>
                                <p className="masonry__author"></p>
                                <p className="masonry__category"></p>
                            </div>
                        </div>

                    </div>
                </section>

                <sections className="notifications">
                    <div className="notifications__images">
                        <img src="" alt=""/>
                    </div>
                </sections>
            </main>
        );
    }
}

export default Dashboard;