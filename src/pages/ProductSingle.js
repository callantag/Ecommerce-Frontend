import {Container, Row, Col, Spinner} from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductListItem from "./../components/ProductListItem";

export default function ProductSingle() {

	const { id } = useParams()
	const [product, setProduct] = useState({})
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		fetch(`http://localhost:4000/api/products/${id}`)
		.then(res=> res.json())
		.then(data=> {
			setProduct(data)
			setIsLoading(false)
		})
		.catch(err=>console.log(err))
	},[])

	return (
		<Container>
			<Row>
				<Col xs={12} sm={10} md={6} className="mx-auto">
					{
						isLoading ? 
						<Spinner animation="border" role="status">
							<span className="visually-hidden"></span>
						</Spinner>
						:
						<ProductListItem product={product} />
					}
				</Col>
			</Row>
		</Container>
	)
}