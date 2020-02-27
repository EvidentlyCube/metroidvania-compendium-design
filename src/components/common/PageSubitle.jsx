import React from 'react';
import styled from 'styled-components';
import { Styles } from '../styles';

const Header = styled.h2`
	color: ${Styles.colorAlt};
	font-size: 16px;
	margin-top: 0;
	margin-bottom: 0;
	font-weight: lighter;
`;

export function PageSubtitle(props) {
	return <Header>{props.children}</Header>;
}