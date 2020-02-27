import React from 'react';
import styled from 'styled-components';
import HijumpIcon from '../../assets/ability_supermetroid_hijump.png';
import { Styles } from '../styles';

const Container = styled.tr`
	width: 54px;
	height: 54px;
	display: flex;
	justify-content: center;
	align-items: center;
	background: ${Styles.colorDarkBg};
`;

const Img = styled.img`
	width: 48px;
	height: 48px;
	flex: 0 0 48px;
	display: block;
	background: black;
`;

export function AbilityIcon() {
	return <Container>
		<Img src={HijumpIcon}/>
	</Container>;
}