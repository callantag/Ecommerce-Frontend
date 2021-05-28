import {Card, Button} from "react-bootstrap";
import {Link} from "react-router-dom";

export default function ProductListItem({product, viewBtn}) {
	return (
		<Card>
			<Card.Body>
				<Card.Title> {product.name} </Card.Title>
				<Card.Text> {product.description} </Card.Text>
				<Card.Text> {product.price} </Card.Text>
				<Button className="my-1" variant="primary" block>Add to cart</Button>
				{
					viewBtn ?
					<Button 
						as={Link} 
						to={`/products/${product.id}`} 
						className="my-1" 
						variant="success" 
						block
					>View</Button>
					: <></>
				}
				<Button className="my-1" variant="danger" block>Delete</Button>
			</Card.Body>
		</Card>
	)
}