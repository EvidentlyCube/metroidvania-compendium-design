import React from 'react';
import { PageTitle } from '../common/PageTitle';
import { Narrow } from './Narrow';
import { GameListRow } from '../listings/GameListRow';
import styled from 'styled-components';
import { Styles } from '../styles';
import { PageHeader } from '../common/PageHeader';
import { PageSubtitle } from '../common/PageSubitle';
import { PageSection } from '../common/PageSection';
import { SearchRow } from '../common/SearchRow';

export function Page_Games() {
	return <>
		<Narrow>
			<PageHeader>
				<PageTitle>Games</PageTitle>
				<PageSubtitle>Check the spoilers options if you don't see a game!</PageSubtitle>
			</PageHeader>

			<PageSection>
				<p>Find your favorite Metroidvania and learn more about it!</p>
				<SearchRow placeholder="Find a game"/>
			</PageSection>
			<GameListRow game="Metroid" series="Metroid"/>
			<GameListRow game="Metroid 2: Return of Samus" series="Metroid"/>
			<GameListRow game="Super Metroid" series="Metroid"/>
			<GameListRow game="Metroid Fusion" series="Metroid"/>
			<GameListRow game="Metroid Zero Mission" series="Metroid"/>
			<GameListRow game="Star Trek: Starfleet Academy: Starship Bridge Simulator." series="Independent"/>
		</Narrow>
	</>;
}