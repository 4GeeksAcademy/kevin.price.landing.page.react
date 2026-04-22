import React from "react";
 
// Navbar 
const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<a className="navbar-brand" href="#">
				Blog de Kevin Martín Price
			</a>
			<div className="collapse navbar-collapse">
				<ul className="navbar-nav ms-auto">
					<li className="nav-item">
						<a className="nav-link active" href="#">Home</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">About</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">Services</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">Contact</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};
 
// Jumbotron 
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
 
// Card
const Card = ({ title, text, image }) => {
	return (
		<div className="col">
			<div className="card h-100 text-center">
				<img
					src={image}
					className="card-img-top"
					alt={title}
					style={{ height: "200px", objectFit: "cover" }}
				/>
				<div className="card-body">
					<h5 className="card-title">{title}</h5>
					<p className="card-text">{text}</p>
				</div>
				<div className="card-footer">
					<a href="#" className="btn btn-primary">Find Out More!</a>
				</div>
			</div>
		</div>
	);
};
 
// Home
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