import React from 'react';
import styled from 'styled-components';
import { Styles } from '../styles';
import AbilityJumpThumb from "../../assets/ability_jump.png";

const Row = styled.tr`
	line-height: 150%;
`;

export function GamePageAbilityRow(props) {
	return <Row>
		<td><a href="#">Jump Extension</a></td>
		<td>Hi-Jump Boots</td>
		<td>Increases Samus's jump height significantly.</td>
	</Row>
}