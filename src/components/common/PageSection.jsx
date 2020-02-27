import React from 'react';
import styled from 'styled-components';
import { Styles } from '../styles';

const Section = styled.section`
	margin-top: 0;
	margin-bottom: 40px;
`;

export function PageSection(props) {
	return <Section>{props.children}</Section>;
}