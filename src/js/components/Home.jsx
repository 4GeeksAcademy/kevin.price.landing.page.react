import React from "react";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import Card from "./card";

const Home = () => {
    const cards = [
        {
            title: "Paisaje Rural",
            text: "Aqui podeis ver las fotos del paisaje rural mas bonito de España",
            image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=500&h=325&fit=crop",
        },
        {
            title: "Fotos Rally",
            text: "Fotones que hice en el rally de galicia este año",
            image: "https://images.unsplash.com/photo-1541348263662-e068662d82af?w=500&h=325&fit=crop",
        },
        {
            title: "Festival Musical",
            text: "Como me lo pasé en este evento!",
            image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=500&h=325&fit=crop",
        },
        {
            title: "Vacaciones con la familia",
            text: "Tiempo de calidad con la familia!",
            image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=500&h=325&fit=crop",
        },
    ];

    return (
        <div>
            <Navbar />

            <div className="container mt-4">
                <Jumbotron />

                <div className="row row-cols-1 row-cols-md-4 g-4">
                    {cards.map((card, index) => (
                        <Card key={index} title={card.title} text={card.text} image={card.image} />
                    ))}
                </div>
            </div>

            <footer className="text-center py-3 mt-5 bg-light">
                <p className="mb-0">Copyright &copy; Your Website 2019</p>
            </footer>
        </div>
    );
};

export default Home;