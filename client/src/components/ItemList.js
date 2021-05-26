import axios from "axios";
import { useState, useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const ItemList = () => {

	useEffect(() => {
		
	}, []);

	

	return (
		<div className="my-5">
			<Table
				striped
				bordered
				hover
				variant="dark"
				responsive
				className="tbl-sm my-5">
				<thead>
					<tr>
						<th>Room Number</th>
						<th>Teacher</th>
						<th>Item</th>
						<th>Serial number</th>
						<th>Qty</th>
						<th>Defective</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{/* {items.map((item) => (
						<tr key={item._id}>
							<td>{item.roomNumber}</td>
							<td>{item.teacherName}</td>
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
								<Button
									variant="danger"
									className="btn-sm mx-2"
									onClick={() => deleteItem(item._id)}>
									<i className="fas fa-trash mx-2"></i>
								</Button>
							</td>
						</tr>
					))} */}
				</tbody>
			</Table>
		</div>
	);
};

export default ItemList;
