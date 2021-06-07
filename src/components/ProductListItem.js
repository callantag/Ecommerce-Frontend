import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ApplicationContext } from "./../contexts/ApplicationContext";
import { useContext } from "react";

export default function ProductListItem({
	product,
	viewBtn,
	setLastDeletedProduct,
}) {
	const { user } = useContext(ApplicationContext);

	const handleClickDelete = () => {
		fetch(`http://localhost:4000/api/products/${product._id}`, {
			method: "DELETE",
			headers: {
				Authorization: `Bearer ${localStorage.getItem("token")}`,
			},
		})
			.then((res) => res.json())
			.then((data) => {
				setLastDeletedProduct(data);
			})
			.catch((err) => console.log(err));
	};

	return (
		<Card>
			<Card.Body>
				<Card.Title>{product.name}</Card.Title>
				<Card.Text>{product.description}</Card.Text>
				<Card.Text>{product.price}</Card.Text>
				<Button className="my-1" variant="primary" block>
					Add to Cart
				</Button>
				{viewBtn ? (
					<Button
						as={Link}
						to={`/products/${product._id}`}
						className="my-1"
						variant="success"
						block
					>
						View
					</Button>
				) : (
					<></>
				)}
				{user.isAdmin ? (
					<>
						<Button
							className="my-1"
							variant="danger"
							onClick={handleClickDelete}
							block
						>
							Delete
						</Button>
						<Button
							className="my-1"
							variant="warning"
							as={Link}
							to={`/products/${product._id}`}
							block
						>
							Edit Product
						</Button>
					</>
				) : (
					""
				)}
			</Card.Body>
		</Card>
	);
}
