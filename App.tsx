import React from 'react';
import { SafeAreaView } from 'react-native';

import { CounterScreen } from './src/presentation/screens/CounterScreen';
import { PaperProvider } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const App = () => {
	return (
		<PaperProvider settings={{ icon: (props) => <Ionicons {...props} /> }}>
			<SafeAreaView style={[{ flex: 1 }]}>
				<CounterScreen />
			</SafeAreaView>
		</PaperProvider>
	);
};
