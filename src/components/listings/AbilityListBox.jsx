import React from 'react';
import styled from 'styled-components';
import { Styles } from '../styles';
import { PageTitle } from '../common/PageTitle';
import { PageSubtitle } from '../common/PageSubitle';

const Box = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	margin-bottom: 20px;
	text-decoration: none;
	
	background: ${Styles.colorAccentBg};
	padding: 10px 20px 20px;
	box-sizing: border-box;
	flex: 0 0 390px;
	
	&:hover {
		background: ${Styles.colorAccentBg};
	}
`;

const Title = styled.header`
	font-size: 32px;
	margin-top: 0;
	margin-bottom: 20px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`;

const Soft = styled.span`
	font-weight: lighter;
	color: ${Styles.colorAlt};
	font-size: 16px;
`;

const Hard = styled.span`
	color: ${Styles.colorHeader};
	font-weight: lighter;
	font-size: 32px;
`;

const Description = styled.article`
	
`;

export function AbilityListBox(props) {
	return <Box>
		<Title>
			<PageTitle>{props.name}</PageTitle>
			<PageSubtitle>{props.section} » {props.group}</PageSubtitle>
		</Title>
		<Description>{props.children}</Description>
	</Box>;
}