import { Container, Row, Col } from "react-bootstrap";
import ProductListItem from "./ProductListItem";
import { useEffect, useState } from "react";

export default function ProductList() {
	const [products, setProducts] = useState([]);
	const [lastDeletedProduct, setLastDeletedProduct] = useState({});

	useEffect(() => {
		fetch("http://localhost:4000/api/products")
			.then((res) => res.json())
			.then((data) => {
				setProducts(data);
			})
			.catch((err) => console.log(err));
	}, [lastDeletedProduct]);

	const productDisplay = products.map((product) => {
		return (
			<Col xs={12} sm={6} md={4} lg={3} key={product._id}>
				<ProductListItem
					product={product}
					viewBtn={true}
					setLastDeletedProduct={setLastDeletedProduct}
				/>
			</Col>
		);
	});

	return (
		<Container className="my-5">
			<Row>{productDisplay}</Row>
		</Container>
	);
}
