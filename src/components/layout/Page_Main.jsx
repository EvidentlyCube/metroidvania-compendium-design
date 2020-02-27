import React from 'react';
import styled from 'styled-components';
import { Narrow } from './Narrow';

const Box = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`;

const Title = styled.h1`
	font-size: 5vw;
	text-align: center;
	text-decoration: underline;
`;

const Description = styled.article`
	font-size: 24px;
	text-align: justify;
`;

export function Page_Main(props) {
	return <Box>
		<Title>Metroidvania Compendium</Title>
		<Narrow>
			<Description>
				<p>
					A comprehensive compendium of abilities in Metroidvania games.
					Perfect research material for your own game. Excellent if you want to learn more about the genre you love.
					Invaluable source of inspiration for any kind of game.
				</p>
				<h2>Beware spoilers!</h2>
				<p>
					<a href="#">Configure your experience</a> to avoid them.
				</p>
			</Description>
		</Narrow>
	</Box>;
}