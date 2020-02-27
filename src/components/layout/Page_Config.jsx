import React from 'react';
import styled from 'styled-components';
import { PageTitle } from '../common/PageTitle';
import { Narrow } from './Narrow';
import { SectionHeader } from '../common/SectionHeader';
import { PageHeader } from '../common/PageHeader';
import { PageSubtitle } from '../common/PageSubitle';
import { PageSection } from '../common/PageSection';
import { Styles } from '../styles';
import { SearchRow } from '../common/SearchRow';

const Buttons = styled.div`
	display: flex;
	margin-bottom: 20px;
`;

const Button = styled.div`
	font-size: 24px;
	flex-grow: 1;
	cursor: pointer;
	text-align: center;
	background: ${Styles.colorAccentBg};
	padding: 20px;
	&:hover {
		background: ${Styles.colorAccentDarkBg};
	}
`;

const GameLabel = styled.label`
	display: block;
	margin-bottom: 10px;
`;

const Controls = styled.div`
	margin-bottom: 20px;
`

function Game(props) {
	return <GameLabel for={props.id}>
		<input id={props.id} type="checkbox"/> {props.game}
	</GameLabel>
}

export function Page_Config() {
	return <>
		<Narrow>
			<PageHeader>
				<PageTitle>Configuration</PageTitle>
				<PageSubtitle>Customize your experience</PageSubtitle>
			</PageHeader>
			<PageSection>
				<SectionHeader>Visible games</SectionHeader>
				<article>
					<p>There are a lot of spoilers in here for games you may not have played. Please select the games which you'd like to see.</p>
				</article>
				<Controls>
					<Buttons>
						<Button>Select All</Button>
						<Button>Unselect All</Button>
					</Buttons>
					<SearchRow placeholder="Find a game"/>
				</Controls>
				<Game id="id-1" game="Metroid"/>
				<Game id="id-2" game="Metroid 2: Return of Samus"/>
				<Game id="id-3" game="Super Metroid"/>
				<Game id="id-4" game="Metroid Fusion"/>
				<Game id="id-5" game="Metroid Zero Mission"/>
				<Game id="id-6" game="Star Trek: Starfleet Academy: Starship Bridge Simulator. Star Trek: Starfleet Academy: Starship Bridge Simulator. Star Trek: Starfleet Academy: Starship Bridge Simulator."/>
			</PageSection>
		</Narrow>
	</>;
}