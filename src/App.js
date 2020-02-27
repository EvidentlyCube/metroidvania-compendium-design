import React from 'react';
import { PageLayout } from './components/layout/PageLayout';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Content } from './components/layout/Content';
import { Page_Main } from './components/layout/Page_Main';
import { Page_Game } from './components/layout/Page_Game';
import { Page_Games } from './components/layout/Page_Games';
import { Page_Ability } from './components/layout/Page_Ability';
import { Page_Abilities } from './components/layout/Page_Abilities';
import { Page_Config } from './components/layout/Page_Config';

class App extends React.Component {

	constructor(props, context) {
		super(props, context);

		this.state = {
			page: 5
		};
	}

	render() {
		return (
			<PageLayout>
				<Header onChange={this.changePage}/>
				<Content>
					{this.getPage()}
				</Content>
				<Footer/>
			</PageLayout>
		);
	}

	changePage = page => {
		this.setState({page});
	};

	getPage() {
		switch (this.state.page) {
			case 0:
				return <Page_Main/>;

			case 1:
				return <Page_Games/>;

			case 2:
				return <Page_Abilities/>;

			case 3:
				return <Page_Game/>;

			case 4:
				return <Page_Ability/>;

			case 5:
				return <Page_Config/>;

			default:
				return <>page #{this.state.page}</>;
		}
	}
}

export default App;
