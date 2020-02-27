import React from 'react';
import styled from 'styled-components';
import { Styles } from '../styles';
import AbilityJumpThumb from "../../assets/ability_jump.png";

const Row = styled.div`
	display:list-item;
	margin-left: 30px;
	width: 100%;
	margin-bottom: 10px;
`;

export function AbilityVariant(props) {
	return <Row>{props.children}</Row>
}