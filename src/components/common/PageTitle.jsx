import React from 'react';
import styled from 'styled-components';
import { Styles } from '../styles';

const Header = styled.h1`
	color: ${Styles.colorHeader};
	font-size: 32px;
	margin-top: 0;
	margin-bottom: 0;
`;

export function PageTitle(props) {
	return <Header>{props.children}</Header>;
}