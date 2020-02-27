import React from 'react';
import styled from 'styled-components';
import { Styles } from '../styles';

const Comp = styled.div`
	padding-top: ${Styles.headerHeight};
	display: flex;
	flex-direction: column;
`;

export function PageLayout(props) {
	return <Comp>{props.children}</Comp>;
}