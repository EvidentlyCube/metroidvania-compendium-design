import React from 'react';
import styled from 'styled-components';
import { HeaderLink } from './HeaderLink';
import { Styles } from '../styles';

const Comp = styled.div`
	display: flex;
	justify-content: center;
	padding: 10px;
	background: ${Styles.colorDarkBg};
	color: ${Styles.colorTextOnDarkBg};
	
	a {
		color: ${Styles.colorTextOnDarkBg};
	}
`;

export function Footer() {
	return <Comp>
		This is a mockup of the design for Metroidvania Compendium.
		Follow on&nbsp;<a href="https://github.com/EvidentlyCube/metroidvania-compendium">GitHub</a>.
	</Comp>;
}