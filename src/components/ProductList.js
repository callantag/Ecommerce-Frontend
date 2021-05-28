import {Container, Row, Col} from "react-bootstrap";
import ProductListItem from "./ProductListItem"

export default function ProductList() {
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