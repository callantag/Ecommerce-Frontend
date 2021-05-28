import {Card, Button} from "react-bootstrap";

export default function ProductListItem() {
	return (
		<Card>
			<Card.Body>
				<Card.Title>__product_name__</Card.Title>
				<Card.Text>
				__product_description__
				</Card.Text>
				<Card.Text>
				__price__
				</Card.Text>
				<Button className="my-1" variant="primary" block>Add to cart</Button>
				<Button className="my-1" variant="success" block>Add to cart</Button>
				<Button className="my-1" variant="danger" block>Add to cart</Button>
			</Card.Body>
		</Card>
	)
}