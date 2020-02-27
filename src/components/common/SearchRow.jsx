import React from 'react';
import styled from 'styled-components';
import { Styles } from '../styles';


const Input = styled.input`
	display: block;
	width: 100%;
	border: none;
	background: ${Styles.colorAccentBg};
	font-size: 24px;
	padding: 5px;
`;

export function SearchRow(props) {
	return <Input type="text" placeholder={props.placeholder}/>
}