import React from 'react';
import { StyleSheet, View } from 'react-native';

export const Tarea4Screen = () => {
	return (
		<View style={styles.container}>
			<View style={styles.box1} />
			<View style={styles.box2} />
			<View style={styles.box3} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#341478',
		justifyContent: 'center',
		minHeight: 200,
	},
	box1: {
		backgroundColor: '#281abc',
		borderWidth: 5,
		borderColor: 'white',
		width: 70,
		minHeight: 70,
		position: 'absolute',
		right: 0,
		top: 20,
	},
	box2: { backgroundColor: '#bc581a', borderWidth: 5, borderColor: 'white', width: 70, minHeight: 70, alignSelf: 'center' },
	box3: { backgroundColor: '#099ede', borderWidth: 5, borderColor: 'white', width: 70, minHeight: 70, position: 'absolute', bottom: 20 },
});
