import React, { useState } from 'react';
import { Button, Pressable, StyleSheet, Text, View } from 'react-native';

export const CounterScreen = () => {
	const [num, setNum] = useState(0);

	const changeNum = (numero: number) => {
		// Prevenir que el contador baje por debajo de 0
		if (num + numero < 0) {
			return;
		}

		setNum(num + numero);
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>{num}</Text>

			<View>
				<Pressable onPress={() => changeNum(+1)} style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}>
					<Text style={styles.text}>+1</Text>
				</Pressable>

				<Pressable onPress={() => changeNum(-1)} style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}>
					<Text style={styles.text}>-1</Text>
				</Pressable>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	title: {
		fontSize: 80,
		textAlign: 'center',
		color: 'black',
		fontWeight: 300,
	},
	button: {
		backgroundColor: '#5856D6',
		paddingHorizontal: 20,
		paddingVertical: 10,
		borderRadius: 10,
	},
	buttonPressed: { backgroundColor: '#4746AB' },
	text: {
		color: 'white',
		fontSize: 14,
	},
});
