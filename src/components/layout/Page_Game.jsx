import React from 'react';
import { PageTitle } from '../common/PageTitle';
import { Narrow } from './Narrow';
import { SectionHeader } from '../common/SectionHeader';
import { GameBox } from '../gamepage/GameBox';
import { GamePageAbilityTable } from '../gamepage/GamePageAbilityTable';
import { GamePageAbilityRow } from '../gamepage/GamePageAbilityRow';
import { GamePageAbilityRowSeparator } from '../gamepage/GamePageAbilityRowSeparator';
import { PageSubtitle } from '../common/PageSubitle';
import { PageHeader } from '../common/PageHeader';
import { PageSection } from '../common/PageSection';

export function Page_Game() {
	return <>
		<Narrow>
			<PageHeader>
				<PageTitle>Super Metroid (1994)</PageTitle>
				<PageSubtitle>Metroid Series</PageSubtitle>
			</PageHeader>
			<GameBox/>
			<PageSection>
				<SectionHeader>Description</SectionHeader>
				<article>
					<p>After having defeated Mother Brain, the leader of the Space Pirates who wanted to use alien creatures known as Metroids to dominate the world, the bounty hunter Samus Aran took the fight to the Metroids' homeland and eradicated them. Only a single Metroid larva remained. Samus took it to a galactic research station, and scientists assured her that the powers of the larva can be harnessed to help people. However, everything goes wrong when a dragon kills the scientists, takes away the larva, and destroys the research facility. Samus follows the dragon to the planet of Zebes, where she fought Mother Brain before. She must explore the dangerous planet, stay alive, and figure out a way to retrieve the larva.</p>
					<p>From <a href="https://www.mobygames.com/game/super-metroid">Moby Games</a>
					</p>
				</article>
			</PageSection>
			<PageSection>
				<SectionHeader>Analysis</SectionHeader>
				<article>
					<p>Super Metroid is often hailed as the best metroid and the best in the metroidvania genre. But there is one very specific aspect that ensured this game is still played to the death - sequence breaking. Where Metroid Zero Mission seems like it was engineered with sequence breaks in mind Super Metroid feels organic, as if they were not the intentions of the devs (which might as well be true, there are people who claim both) which also translated to many more ways to break the game.</p>

					<p>Super Metroid is the to-go game to experience brilliant level design both in terms of fun factor for regular players and exploitability by pros.</p>
				</article>
			</PageSection>
			<PageSection>
				<SectionHeader>Abilities (List)</SectionHeader>
				<GamePageAbilityTable>
					<GamePageAbilityRowSeparator>Default Abilities</GamePageAbilityRowSeparator>
					<GamePageAbilityRow/>
					<GamePageAbilityRow/>
					<GamePageAbilityRow/>
					<GamePageAbilityRow/>
					<GamePageAbilityRow/>
					<GamePageAbilityRow/>
					<GamePageAbilityRowSeparator>Routing Abilities</GamePageAbilityRowSeparator>
					<GamePageAbilityRow/>
					<GamePageAbilityRow/>
					<GamePageAbilityRow/>
					<GamePageAbilityRow/>
					<GamePageAbilityRow/>
					<GamePageAbilityRow/>
					<GamePageAbilityRow/>
					<GamePageAbilityRowSeparator>Combat</GamePageAbilityRowSeparator>
					<GamePageAbilityRow/>
					<GamePageAbilityRow/>
					<GamePageAbilityRowSeparator>Accessibility</GamePageAbilityRowSeparator>
					<GamePageAbilityRow/>
					<GamePageAbilityRow/>
					<GamePageAbilityRow/>
					<GamePageAbilityRow/>
					<GamePageAbilityRow/>
				</GamePageAbilityTable>
			</PageSection>
		</Narrow>
	</>;
}