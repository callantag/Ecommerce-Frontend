import {Card, Button} from "react-bootstrap";

export default function ProductListItem({product}) {
	return (
		<Card>
			<Card.Body>
				<Card.Title> {product.name} </Card.Title>
				<Card.Text> {product.description} </Card.Text>
				<Card.Text> {product.price} </Card.Text>
				<Button className="my-1" variant="primary" block>Add to cart</Button>
				<Button className="my-1" variant="success" block>Add to cart</Button>
				<Button className="my-1" variant="danger" block>Add to cart</Button>
			</Card.Body>
		</Card>
	)
}