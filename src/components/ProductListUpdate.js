import { Card, Form, Button } from "react-bootstrap";
import { useState } from "react";

const ProductListUpdate = ({ product, setLastUpdatedProduct }) => {
	const [currentProduct, setCurrentProduct] = useState({});

	const handleChange = (e) => {
		setCurrentProduct({
			...currentProduct,
			[e.target.id]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		fetch(`http://localhost:4000/api/products/${product._id}`, {
			method: "PUT",
			body: JSON.stringify(currentProduct),
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${localStorage.getItem("token")}`,
			},
		})
			.then((res) => res.json())
			.then((data) => setLastUpdatedProduct(data))
			.catch((err) => console.log(err));
	};

	return (
		<Card.Body>
			<Form onSubmit={handleSubmit}>
				<Form.Group controlId="name">
					<Form.Label>Name:</Form.Label>
					<Form.Control type="text" onChange={handleChange} />
				</Form.Group>
				<Form.Group controlId="description">
					<Form.Label>Description:</Form.Label>
					<Form.Control type="text" onChange={handleChange} />
				</Form.Group>

				<Form.Group controlId="price">
					<Form.Label>Price:</Form.Label>
					<Form.Control type="number" min="0" onChange={handleChange} />
				</Form.Group>

				<Button type="submit">Update</Button>
			</Form>
		</Card.Body>
	);
};

export default ProductListUpdate;
