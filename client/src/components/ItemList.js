import { Button, Table } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const ItemList = ({ items }) => {
	return (
		<Table striped bordered hover variant="dark" responsive className="tbl-sm">
			<thead>
				<tr>
					<th>Item</th>
					<th>Serial number</th>
					<th>Qty</th>
					<th>Defective</th>
					<th></th>
				</tr>
			</thead>
			<tbody>
				{items.map((item, index) => (
					<tr key={index}>
						<td>{item.selectedItem}</td>
						<td>{item.serial}</td>
						<td>{item.qty}</td>
						<td>
							{item.isDefect ? (
								<small>Defective</small>
							) : (
								<small>Good Condition</small>
							)}
						</td>
						<td className="text-center">
							<LinkContainer to="/addroom" className="bg-red">
								<Button variant="secondary" className="btn-sm">
									<i className="fas fa-edit"></i>
								</Button>
							</LinkContainer>
							<LinkContainer to="/addroom">
								<Button variant="danger" className="btn-sm mx-2">
									<i className="fas fa-trash mx-2"></i>
								</Button>
							</LinkContainer>
						</td>
					</tr>
				))}
			</tbody>
		</Table>
	);
};

export default ItemList;
