import React from 'react';
import styled from 'styled-components';
import { Styles } from '../styles';
import AbilityJumpThumb from "../../assets/ability_jump.png";

const Row = styled.tr`
	td {
		padding-top: 20px;
		padding-left: 20px;
		color: ${Styles.colorAlt};
	}
`;

export function GamePageAbilityRowSeparator(props) {
	return <Row>
		<td colspan="3">{props.children}</td>
	</Row>
}