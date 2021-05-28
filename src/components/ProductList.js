import {Container, Row, Col} from "react-bootstrap";
import ProductListItem from "./ProductListItem";
import {useContext} from "react";
import {ApplicationContext} from "./../contexts/ApplicationContext";

export default function ProductList() {
	let {products} = useContext(ApplicationContext)
	const productDisplay = products.map(product => {
		return (
			<Col xs={12} sm={6} md={4} lg={3} key={product._id}>
  				<ProductListItem product={product}/>
  			</Col>
		)
	})

	return (
		<Container className="my-5">
      		<Row>
      			{productDisplay}
      		</Row>
      	</Container>
	)
}