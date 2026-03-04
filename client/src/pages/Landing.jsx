import React from "react";
import PageNavbar from "../components/PageNavbar";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { FiSearch } from "react-icons/fi";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./Landing.css";
import CardTile from "../components/Card/CardTile";
function Landing() {
	const sample = [
		{
			title: "Intro to programming",
			description: "Blog about programming",
			src: "https://i.ytimg.com/vi/tVftenlYw44/hqdefault.jpg",
			category: "programming",
		},
		{
			title: "Pet Games",
			description: "Blog about active pets",
			src: "https://media.istockphoto.com/id/453057261/photo/dog-and-cat-playing-together.jpg?s=612x612&w=0&k=20&c=KW9NYWxU-T8J0wHHcYLwE4FKNgtW2oYFp3E6r4RrcXU=",
			category: "pets",
		},
		{
			title: "AI & Future",
			description: "How AI will change future",
			src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ9UKU3um0V-WVEdeNh52zNIKNsoNEfF0N4g&s",
			category: "Technology",
		},
	];
	return (
		<div>
			<PageNavbar />
			<Container fluid className="bg bg-primary landing__wrapper text-light">
				<h1>Welcome to Fav Blogs</h1>
				<p>Explore number of blogs from various categories!</p>
				<InputGroup className="mb-3 w-50">
					<InputGroup.Text id="basic-addon1" className="iconWrapper">
						<FiSearch />
					</InputGroup.Text>
					<Form.Control type="search" placeholder="Start searching..." />
				</InputGroup>
			</Container>
			<Container>
				<h1 className="text-center m-5">All Blogs</h1>
				<Row xs={1} md={3} className="g-4">
					{sample.map((item, key) => (
						<Col key={key}>
							<CardTile
								title={item.title}
								src={item.src}
								category={item.category}
								description={item.description}
							/>
						</Col>
					))}
				</Row>
			</Container>
		</div>
	);
}

export default Landing;
