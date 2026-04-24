import React from "react";

const Jumbotron = () => {
    return (
        <div className="p-5 mb-4 bg-light rounded-3">
            <h1 className="display-4">Bienvenidos!</h1>
            <p className="lead">
                Mi blog de fotografia! Espero que disfruten :)
            </p>
            <a href="#" className="btn btn-primary btn-lg">
                Pincha para ver más!
            </a>
        </div>
    );
};

export default Jumbotron;