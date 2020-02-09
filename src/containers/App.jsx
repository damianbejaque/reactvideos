import React, { useState, useEffect } from 'react';
import Header from "../components/Header";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";
import Footer from "../components/Footer";
import useInitialState from "../hooks/useInitialState"
import "../assets/styles/App.scss";

const API = "http://localhost:3000/initalState";

const App = () => {
    const inititalState = useInitialState(API);


    return inititalState.length === 0 ? <h1>Loading...</h1> : (
        <div className="App">
            <Header />
            <Search />
            {inititalState.mylist.length > 0 &&
                <Categories title="Mi Lista">
                    <Carousel >
                    </Carousel>
                </Categories>
            }
            <Categories title="Tendencias">
                <Carousel >
                    {inititalState.trends.map(item =>
                        <CarouselItem key={item.id} {...item} />
                    )}
                </Carousel>
            </Categories>

            <Categories title="Originales">
                <Carousel >
                    {inititalState.originals.map(item =>
                        <CarouselItem key={item.id} {...item} />
                    )}
                </Carousel>
            </Categories>

            <Footer />
        </div>
    )
};
export default App;