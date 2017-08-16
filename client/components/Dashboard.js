import React, { Component } from 'react';

class Dashboard extends Component {
    render() {
        return (
            <main id="dashboard">
               <nav className="masthead">
                    <div className="masthead__brand"></div>
                    <ul className="masthead__links">
                        <li className="masthead__link"></li>
                        <li className="masthead__link"></li>
                    </ul>
                    <form className="masthead__form">
                        <input className="masthead__input--search" type="search"/>
                    </form>
                    <div className="masthead__icons">
                        <div className="masthead__icon masthead--compass"></div>
                        <div className="masthead__icon masthead--add"></div>
                        <div className="masthead__icon masthead--alerts"></div>
                        <div className="masthead__icon masthead--avatar"></div>
                    </div>
                    <div className="masthead__mobiles">
                        <div className="masthead__mobile">
                            <span className="masthead__mobile--brand fa fa-pinterest"></span>
                        </div>
                        <div className="masthead__mobile">
                            <span className="masthead__mobile--search fa fa-search"></span>
                        </div>
                        <div className="masthead__mobile">
                            <span className="masthead__mobile--menu fa fa-bars"></span>
                        </div>
                        <div className="masthead__mobile">
                            <span className="masthead__mobile--user fa fa-user"></span>
                        </div>
                        <div className="masthead__mobile">
                            <span className="masthead__mobile--notifications fa fa-bell"></span>
                        </div>
                    </div>
               </nav>

                <section className="posts">
                    <div className="posts__cards">
                        <img src="" alt=""/>
                        <div className="posts__content">
                            <h2 className="posts__title"></h2>
                            <img src="" alt="" className="posts__avatar"/>
                            <p className="posts__author"></p>
                            <p className="posts__category"></p>
                        </div>
                    </div>
                </section>

                <sections id="notifications">
                    <div className="notifications__images">
                        <img src="" alt=""/>
                    </div>
                </sections>
            </main>
        );
    }
}

export default Dashboard;