import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { FAB } from 'react-native-paper';
import { globalStyles } from '../theme/globals.styles';

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
		<View style={globalStyles.centerConteiner}>
			<Text style={globalStyles.title}>{num} cm</Text>

			{/* <View>
				<Button onPress={() => changeNum(+1)} style={[globalStyles.button]} mode="contained">
					<Text style={globalStyles.text}>+1</Text>
				</Button>

				<Button onPress={() => changeNum(-1)} style={[globalStyles.button]} mode="contained">
					<Text style={globalStyles.text}>-1</Text>
				</Button>
			</View> */}

			<FAB icon="add-outline" style={globalStyles.fabRight} onPress={() => changeNum(+1)} />
			<FAB icon="remove-outline" style={globalStyles.fabLeft} onPress={() => changeNum(-1)} />
		</View>
	);
};
