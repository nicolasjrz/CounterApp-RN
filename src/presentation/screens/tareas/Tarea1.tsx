import React from 'react';
import { StyleSheet, View } from 'react-native';

export const Tarea1Screen = () => {
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
		justifyContent: 'space-between',
	},
	box1: { backgroundColor: '#281abc', borderWidth: 4, borderColor: 'white', width: 100, flex: 1 },
	box2: { backgroundColor: '#bc581a', borderWidth: 4, borderColor: 'white', width: 100, flex: 6 },
	box3: { backgroundColor: '#099ede', borderWidth: 4, borderColor: 'white', width: 100, flex: 1 },
});
