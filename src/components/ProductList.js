import {Container, Row, Col} from "react-bootstrap";
import ProductListItem from "./ProductListItem";
import {useContext} from "react";
import {ApplicationContext} from "./../contexts/ApplicationContext";

export default function ProductList() {
	let {products} = useContext(ApplicationContext)
	
	return (
		<Container className="my-5">
      		<Row>
      			<Col xs={12} sm={6} md={4} lg={3}>
      				<ProductListItem />
      			</Col>
      		</Row>
      	</Container>
	)
}