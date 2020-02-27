import React from 'react';
import styled from 'styled-components';
import { HeaderLink } from './HeaderLink';
import { Styles } from '../styles';

const Comp = styled.div`
	top: 0;
	left: 0;
	right: 0;
	position: fixed;
	height: ${Styles.headerHeight};
	align-items: center;  
	display: flex;
	justify-content: space-between;
	padding: 10px;
	box-sizing: border-box;
	background: ${Styles.colorDarkBg};
	color: ${Styles.colorTextOnDarkBg};
`;

export function Header(props) {
	return <Comp>
		<div>
			<strong>Metroidvania Compendium Mockup</strong>
			<span> » Page Name</span>
		</div>
		<div>
			<HeaderLink onChange={props.onChange} value={0}>Home</HeaderLink>
			<HeaderLink onChange={props.onChange} value={1}>Game List</HeaderLink>
			<HeaderLink onChange={props.onChange} value={3}>Game</HeaderLink>
			<HeaderLink onChange={props.onChange} value={2}>Abilities</HeaderLink>
			<HeaderLink onChange={props.onChange} value={4}>Ability</HeaderLink>
			<HeaderLink onChange={props.onChange} value={5}>Config</HeaderLink>
		</div>
	</Comp>;
}