import React from 'react';
import styled from 'styled-components';
import { HeaderLink } from './HeaderLink';
import { Styles } from '../styles';

const Comp = styled.div`
	flex: 1 0;
	padding: 20px;
`;

export function Content(props) {
	return <Comp>{props.children}</Comp>;
}