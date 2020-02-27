import React from 'react';
import styled from 'styled-components';
import { Styles } from '../styles';

const Header = styled.h2`
	color: ${Styles.colorHeader};
	font-size: ${Styles.sectionHeaderSize};
	margin-top: 0;
`;

export function SectionHeader(props) {
	return <Header>{props.children}</Header>;
}