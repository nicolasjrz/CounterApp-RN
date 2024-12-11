import React from 'react';
import { StyleSheet, View } from 'react-native';

export const Tarea10Screen = () => {
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
		alignItems: 'center',
	},
	box1: { backgroundColor: '#281abc', borderWidth: 10, borderColor: 'white', width: 100, height: 100, top: 100, right: 100 },
	box2: { backgroundColor: '#bc581a', borderWidth: 10, borderColor: 'white', width: 100, height: 100, right: 0, top: 50 },
	box3: { backgroundColor: '#099ede', borderWidth: 10, borderColor: 'white', width: 100, height: 100, left: 100, bottom: 100 },
});
