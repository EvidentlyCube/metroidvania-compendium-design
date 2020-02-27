import React from 'react';
import { PageTitle } from '../common/PageTitle';
import { Narrow } from './Narrow';
import { PageHeader } from '../common/PageHeader';
import { PageSubtitle } from '../common/PageSubitle';
import { PageSection } from '../common/PageSection';
import { AbilityListBox } from '../listings/AbilityListBox';
import { AbilityListBoxes } from '../listings/AbilityListBoxes';
import { SearchRow } from '../common/SearchRow';

export function Page_Abilities() {
	return <>
		<Narrow>
			<PageHeader>
				<PageTitle>Abilities</PageTitle>
				<PageSubtitle>Powerups, skills, upgrades</PageSubtitle>
			</PageHeader>

			<PageSection>
				<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
				<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>
				<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
				<SearchRow placeholder="Find an ability"/>
			</PageSection>
			<AbilityListBoxes>
				<AbilityListBox section="Routing" group="Jumping" name="Jump">
					Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
				</AbilityListBox>
				<AbilityListBox section="Routing" group="Jumping" name="Jump">
					Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
				</AbilityListBox>
				<AbilityListBox section="Routing" group="Jumping" name="Jump">
					Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
				</AbilityListBox>
				<AbilityListBox section="Routing" group="Jumping" name="Jump">
					Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
				</AbilityListBox>
				<AbilityListBox section="Routing" group="Jumping" name="Jump">
					Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
				</AbilityListBox>
			</AbilityListBoxes>
		</Narrow>
	</>;
}