import React, { Component } from 'react';

class Dashboard extends Component {
    render() {
        return (
            <main id="dashboard">
               <nav className="masthead">
                    <div className="masthead__brand"></div>
                    <ul className="masthead__list">
                        <li className="masthead__item"></li>
                        <li className="masthead__item"></li>
                    </ul>
                    <form className="form">
                        <input className="form--search" type="search"/>
                    </form>
                    <div className="masthead__icons">
                        <div className="masthead__icon--compass"></div>
                        <div className="masthead__icon--add"></div>
                        <div className="masthead__icon--alerts"></div>
                        <div className="masthead__icon--avatar"></div>
                    </div>
                    <div className="masthead__mobile">
                        <div className="masthead__mobile--brand"></div>
                        <div className="masthead__mobile--search"></div>
                        <div className="masthead__mobile--menu"></div>
                        <div className="masthead__mobile--user"></div>
                        <div className="masthead__mobile--brand"></div>

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