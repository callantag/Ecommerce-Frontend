import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductListItem from "./../components/ProductListItem";
import ProductListUpdate from "./../components/ProductListUpdate";
import { Container, Row, Col, Spinner } from "react-bootstrap";

export default function ProductSingle() {
	// /products/:id
	const { id } = useParams();
	const [product, setProduct] = useState({});
	const [isLoading, setIsLoading] = useState(true);
	const [lastUpdatedProduct, setLastUpdatedProduct] = useState({});

	useEffect(() => {
		fetch(`http://localhost:4000/api/products/${id}`)
			.then((res) => res.json())
			.then((data) => {
				setProduct(data);
				setIsLoading(false);
			})
			.catch((err) => console.log(err));
	}, [lastUpdatedProduct]);

	return (
		<Container>
			<Row>
				<Col xs={12} sm={10} md={6} className="mx-auto">
					{isLoading ? (
						<Spinner animation="border" role="status">
							<span className="visually-hidden"></span>
						</Spinner>
					) : (
						<ProductListItem product={product} />
					)}
				</Col>
				<Col>
					<ProductListUpdate
						product={product}
						setLastUpdatedProduct={setLastUpdatedProduct}
					/>
				</Col>
			</Row>
		</Container>
	);
}
