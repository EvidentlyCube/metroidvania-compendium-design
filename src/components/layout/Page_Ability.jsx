import React from 'react';
import { PageTitle } from '../common/PageTitle';
import { Narrow } from './Narrow';
import { SectionHeader } from '../common/SectionHeader';
import { PageHeader } from '../common/PageHeader';
import { PageSubtitle } from '../common/PageSubitle';
import { AbilityVariant } from '../abilitypage/AbilityVariant';
import { AbilityGameAppearanceTable } from '../abilitypage/AbilityGameAppearanceTable';
import { AbilityGameAppearanceRow } from '../abilitypage/AbilityGameAppearanceRow';
import { PageSection } from '../common/PageSection';

export function Page_Ability() {
	return <>
		<Narrow>
			<PageHeader>
				<PageTitle>Jumping</PageTitle>
				<PageSubtitle>Routing » Jumping</PageSubtitle>
			</PageHeader>
			<PageSection>
				<SectionHeader>Description</SectionHeader>
				<article>
					<p>The regular ability to jump. In almost any platformer game it's an intrinsic ability of the protagonist.</p>
				</article>
				<SectionHeader>Analysis</SectionHeader>
				<article>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nibh diam, posuere quis purus a, congue laoreet mauris. Nulla efficitur elementum nunc ac sagittis. Vestibulum id mattis nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec a ex congue, pulvinar leo non, vulputate nisl. Donec nec sapien urna. Curabitur sit amet tempor dolor. Nullam faucibus porta sem vitae elementum.</p>
				</article>
			</PageSection>

			<PageSection>
				<SectionHeader>Variants</SectionHeader>
				<AbilityVariant>May be used in top-down games as a time-to-time or regular mechanic for added gameplay.</AbilityVariant>
				<AbilityVariant>May be used in non-action games (like RPGs or 3/4 perspective games).</AbilityVariant>
				<AbilityVariant>May be an ability that needs to be collected by the protagonist.</AbilityVariant>
				<AbilityVariant>May be used in top-down games as a time-to-time or regular mechanic for added gameplay.</AbilityVariant>
				<AbilityVariant>May be used in non-action games (like RPGs or 3/4 perspective games).</AbilityVariant>
				<AbilityVariant>May be an ability that needs to be collected by the protagonist.</AbilityVariant>
				<AbilityVariant>May be used in top-down games as a time-to-time or regular mechanic for added gameplay.</AbilityVariant>
				<AbilityVariant>May be used in non-action games (like RPGs or 3/4 perspective games).</AbilityVariant>
				<AbilityVariant>May be an ability that needs to be collected by the protagonist.</AbilityVariant>
				<AbilityVariant>May be used in top-down games as a time-to-time or regular mechanic for added gameplay.</AbilityVariant>
				<AbilityVariant>May be used in non-action games (like RPGs or 3/4 perspective games).</AbilityVariant>
				<AbilityVariant>May be an ability that needs to be collected by the protagonist.</AbilityVariant>
			</PageSection>

			<PageSection>
				<SectionHeader>Appearances</SectionHeader>
				<AbilityGameAppearanceTable>
					<AbilityGameAppearanceRow/>
					<AbilityGameAppearanceRow/>
					<AbilityGameAppearanceRow/>
					<AbilityGameAppearanceRow/>
					<AbilityGameAppearanceRow/>
					<AbilityGameAppearanceRow/>
					<AbilityGameAppearanceRow/>
					<AbilityGameAppearanceRow/>
					<AbilityGameAppearanceRow/>
				</AbilityGameAppearanceTable>
			</PageSection>
		</Narrow>
	</>;
}