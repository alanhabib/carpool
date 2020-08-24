import React from 'react';

function CarsSelect({clients, valueHandler, setCarByOwner}) {

	return (
		<div style={{
			padding: 12
		}}>
			<select
				style={{
					borderRadius: 6,
					padding: 12,
					color: "#F2F2F7",
					backgroundColor: "#3A3A3C",
					border: "1px solid #0A84FF",
				}}
				multiple={true}
				value={[clients]}
				onChange={valueHandler}
			>
				{clients.map(client => (
					<option
						style={{
							padding: 8,
							border: "1px solid #30D158",
							margin: "4px 0",
							textAlign: "center"
						}}
						key={client.id}
						value={client.name}
					>
						{client.name}
					</option>
				))}
			</select>
			<div
				style={{
					marginTop: 8,
					border: "solid #FF453A 1px",
					borderRadius: 6,
					padding: 8,
					textAlign: "center"
				}}
				onClick={() => setCarByOwner("")}
			>
				{"Show all"}
			</div>
		</div>
	);
}

export default CarsSelect;
