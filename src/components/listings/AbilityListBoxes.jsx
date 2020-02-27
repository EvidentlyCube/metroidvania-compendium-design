import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
`;

export function AbilityListBoxes(props) {
	return <Box>{props.children}</Box>;
}