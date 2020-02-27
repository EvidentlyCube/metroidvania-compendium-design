import React from 'react';
import styled from 'styled-components';
import { Styles } from '../styles';

const Table = styled.table`
	width: 100%;
	
	th {
		text-align: left;
		color: ${Styles.colorHeader};
	}
`;

export function GamePageAbilityTable(props) {
	return <Table>
		<thead>
		<tr>
			<th>Ability</th>
			<th>In-Game name</th>
			<th>Description</th>
		</tr>
		</thead>
		<tbody>
		{props.children}
		</tbody>
	</Table>
}