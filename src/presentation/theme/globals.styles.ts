import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
	centerConteiner: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	title: {
		fontSize: 80,
		fontWeight: '300',
		color: 'black',
	},
	text: {
		color: 'white',
		fontSize: 14,
	},
	button: {
		backgroundColor: '#5856D6',
		paddingHorizontal: 20,
		paddingVertical: 10,
		borderRadius: 10,
	},
	fabRight: {
		position: 'absolute',
		margin: 16,
		right: 0,
		bottom: 15,
	},
	fabLeft: {
		position: 'absolute',
		margin: 16,
		left: 0,
		bottom: 15,
	},
});
