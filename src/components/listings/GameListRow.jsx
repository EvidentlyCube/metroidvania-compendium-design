import React from 'react';
import styled from 'styled-components';
import { Styles } from '../styles';
import { PageTitle } from '../common/PageTitle';
import { PageSubtitle } from '../common/PageSubitle';

const Box = styled.a`
	display: flex;
	flex-direction: row;
	align-items: center;
	margin-bottom: 20px;
	text-decoration: none;
	
	&:hover {
		background: ${Styles.colorAccentBg};
	}
`;

const BoxArt = styled.img`
	height: 100px;
	background-color: black;
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
	background-image: url("${props => props.url}");
	margin-right: 40px;
	flex: 0 0 150px;
`;

const Titles = styled.div`
	display: flex;
	flex-direction: column;
`;

export function GameListRow(props) {
	return <Box href="#">
		<BoxArt url="https://steamuserimages-a.akamaihd.net/ugc/90469956945157107/05A816D9D18F48CEE9FE3E0AA8706B0BF81B669E/"/>
		<Titles>
			<PageTitle>{props.game}</PageTitle>
			<PageSubtitle>{props.series}</PageSubtitle>
		</Titles>
	</Box>;
}