import React, { Component } from "react";
import { Image } from "react-native";
import { AppRegistry } from 'react-native';

import {
	Content,
	Text,
	List,
	ListItem,
	Icon,
	Container,
	Left,
	Right,
	Badge,
	Button,
	View,
	StyleProvider,
	getTheme,
	variables,
} from "native-base";

const datas = [
	{
		name: "Dashboard",
		route: "Dashboard",
		icon: "phone-portrait",
		bg: "#C5F442",
	},
	{
		name: "Updates",
		route: "Updates",
		icon: "easel",
		bg: "#C5F442",
	},
	{
		name: "Email",
		route: "Email",
		icon: "phone-portrait",
		bg: "#477EEA",
		types: "8",
	},
];

export default class SideBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			shadowOffsetWidth: 1,
			shadowRadius: 4,
		};
	}

	render() {
		return (
			<Container>
				<Content bounces={false} style={{ flex: 1, backgroundColor: "#fff", top: -1 }}>
					<List
						dataArray={datas}
						renderRow={data =>
							<ListItem button noBorder onPress={() => this.props.navigation.navigate(data.route)}>
								<Left>
									<Icon active name={data.icon} style={{ color: "#777", fontSize: 26, width: 30 }} />
									<Text style={{ fontWeight: "400", fontSize: 16 }}>
										{data.name}
									</Text>
								</Left>
								{data.types &&
									<Right style={{ flex: 1 }}>
										
									</Right>}
							</ListItem>}
					/>
				</Content>
			</Container>
		);
	}
}
AppRegistry.registerComponent('app', () => SideBar);
