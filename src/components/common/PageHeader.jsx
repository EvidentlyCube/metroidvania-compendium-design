import React from 'react';
import styled from 'styled-components';
import { Styles } from '../styles';

const Header = styled.header`
	margin-top: 0;
	margin-bottom: 40px;
`;

export function PageHeader(props) {
	return <Header>{props.children}</Header>;
}