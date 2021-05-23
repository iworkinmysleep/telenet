import { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import ItemList from "./ItemList";

const AddItem = ({ teacherName, roomNumber, items, setItems }) => {
	const [selectedItem, setSelectedItem] = useState("Choose...");
	const [serial, setSerial] = useState("");
	const [qty, setQty] = useState(1);
	const [isDefect, setIsDefect] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		setItems([
			...items,
			{
				selectedItem,
				serial,
				qty,
				isDefect,
			},
		]);
		setSelectedItem("");
		setSerial("");
		setQty(1);
		setIsDefect(false);
	};

	return (
		<>
			<Form onSubmit={handleSubmit}>
				<Row>
					<Form.Group as={Col} controlId="selectedItem">
						<Form.Label>Choose Item</Form.Label>
						<Form.Control
							as="select"
							value={selectedItem}
							onChange={(e) => setSelectedItem(e.target.value)}>
							<option>Choose...</option>
							<option>Active Board</option>
							<option>Info Board</option>
							<option>Valcom Speaker</option>
						</Form.Control>
					</Form.Group>

					<Form.Group as={Col} controlId="serial">
						<Form.Label>Serial number</Form.Label>
						<Form.Control
							type="text"
							placeholder="Enter serial number"
							value={serial}
							onChange={(e) => setSerial(e.target.value)}
						/>
					</Form.Group>
					<Form.Group as={Col} controlId="qty">
						<Form.Label>Qty</Form.Label>
						<Form.Control
							type="number"
							placeholder="Enter qty"
							value={qty}
							onChange={(e) => setQty(e.target.value)}
						/>
					</Form.Group>
					<Form.Group as={Col} id="defective" className="my-3">
						<Form.Check
							className="my-4"
							type="checkbox"
							label="Defective"
							checked={isDefect}
							onChange={(e) => setIsDefect(e.target.checked)}
						/>
					</Form.Group>
				</Row>

				<Button variant="outline-primary" type="submit">
					Add Item
				</Button>
			</Form>
			<div className="my-5">
				<Row>
					<Col>
						<h4>
							Room Number: <strong className="text-info">{roomNumber}</strong>
						</h4>
					</Col>
					<Col>
						<h4>
							Teacher: <strong className="text-info">{teacherName}</strong>
						</h4>
					</Col>
				</Row>

				<ItemList items={items} />
			</div>
		</>
	);
};

export default AddItem;
