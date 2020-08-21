import React from 'react';

function CarsSelect({clients, valueHandler, setCarByOwner}) {

	return (
		<div style={{padding: 12}}>
			<select style={{borderRadius: 6, padding: 12}} multiple={true} value={[clients]} onChange={valueHandler}>
				{clients.map(client => (
					<option style={{padding: "4px 0"}} key={client.id} value={client.name}>
						{client.name}
					</option>
				))}
			</select>
			<div onClick={() => setCarByOwner("")}>Restart</div>

		</div>
	);
}

export default CarsSelect;
