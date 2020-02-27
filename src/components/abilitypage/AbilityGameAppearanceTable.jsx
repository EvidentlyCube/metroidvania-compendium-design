import React from 'react';
import styled from 'styled-components';
import { Styles } from '../styles';
import AbilityJumpThumb from "../../assets/ability_jump.png";

const Table = styled.table`
	width: 100%;
	
	th {
		text-align: left;
		color: ${Styles.colorHeader};
	}
`;

export function AbilityGameAppearanceTable(props) {
	return <Table>
		<thead>
		<tr>
			<th></th>
			<th>Game</th>
			<th>In-Game name</th>
			<th>Description</th>
		</tr>
		</thead>
		<tbody>
		{props.children}
		</tbody>
	</Table>
}