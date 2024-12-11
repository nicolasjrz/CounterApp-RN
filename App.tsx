import React from 'react';
import { SafeAreaView } from 'react-native';

import { CounterScreen } from './src/presentation/screens/CounterScreen';
import { PaperProvider } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Tarea1Screen } from './src/presentation/screens/tareas/Tarea1';
import { Tarea2Screen } from './src/presentation/screens/tareas/Tarea2';
import { Tarea3Screen } from './src/presentation/screens/tareas/Tarea3';
import { Tarea4Screen } from './src/presentation/screens/tareas/Tarea4';
import { Tarea5Screen } from './src/presentation/screens/tareas/Tarea5';
import { Tarea6Screen } from './src/presentation/screens/tareas/Tarea6';
import { Tarea7Screen } from './src/presentation/screens/tareas/Tarea7';
import { Tarea8Screen } from './src/presentation/screens/tareas/Tarea8';
import { Tarea9Screen } from './src/presentation/screens/tareas/Tarea9';
import { Tarea10Screen } from './src/presentation/screens/tareas/Tarea10';

export const App = () => {
	return (
		<PaperProvider settings={{ icon: (props) => <Ionicons {...props} /> }}>
			<SafeAreaView style={{ flex: 1 }}>
				{/* <CounterScreen /> */}

				<Tarea10Screen />
			</SafeAreaView>
		</PaperProvider>
	);
};
