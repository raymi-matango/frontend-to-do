import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBook, faUsers, faClock } from '@fortawesome/free-solid-svg-icons';
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import TareasPagina from "./screens/TareasPagina";
import ColaboradoresPagina from "./screens/ColaboradoresPagina";
import ProximosPagina from "./screens/ProximosPagina";

const TareaStackNavigator = createStackNavigator();

// Crear el Stack Navigator para Tareas
function MyStack() {
  return (
    <TareaStackNavigator.Navigator initialRouteName="TareaScreen">
      <TareaStackNavigator.Screen 
        name="TareaScreen" 
        component={TareasPagina}
        options={{ headerShown: false }} 
      />
      <TareaStackNavigator.Screen 
        name="CompartirScreen" 
        component={ColaboradoresPagina}
        options={{ headerShown: false }} 
      />
    </TareaStackNavigator.Navigator>
  );
}

// Crear el Tab Navigator
const Tab = createBottomTabNavigator();

function MyTab() {
  return (
    <Tab.Navigator
      initialRouteName="Tareas"
      screenOptions={{
        tabBarActiveTintColor: "#4d409e", // Color para la etiqueta y el ícono cuando está activo
        tabBarInactiveTintColor: "#796fb6", // Color para la etiqueta y el ícono cuando no está activo
        tabBarLabelStyle: {
          fontSize: 14, // Aumenta el tamaño de la etiqueta
          fontWeight: 'bold', // Hace la etiqueta en negrita
        },
      }}
    >
      <Tab.Screen
        name="Tareas"
        component={MyStack}
        options={{
          tabBarLabel: "Tareas",
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon icon={faBook} size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Compartidos"
        component={ColaboradoresPagina} // Puedes usar una pantalla diferente para "Compartidos" o usar MyStack
        options={{
          tabBarLabel: "Compartidos",
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon icon={faUsers} size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Próximos"
        component={ProximosPagina}
        options={{
          tabBarLabel: "Próximos",
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon icon={faClock} size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <MyTab />
    </NavigationContainer>
  );
}
