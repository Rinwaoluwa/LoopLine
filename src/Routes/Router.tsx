import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { PersistGate } from "redux-persist/es/integration/react";
import { persistor, store } from '../config/store/store';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feed } from '../screens/Feed/Feed';
import { ChatList } from '../screens/ChatList/ChatList';
import { SavedArticles } from '../screens/SavedArticles/SavedArticles';
import { Chat } from '../screens/Chat/Chat';
import { ArticleDetail } from '../screens/ArticleDetail/ArticleDetails';
import Icon from '../../assets/svgs/icon';
import { palette } from '../config/palette';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function BottomTab() {
    return (
        <Tab.Navigator 
            screenOptions={{ 
                tabBarShowLabel: false,
                tabBarActiveTintColor: palette.black,
                tabBarInactiveTintColor: palette.grey,
                headerShown: false,
            }}
        >
            <Tab.Screen 
                name="home" 
                component={Feed} 
                options={{ tabBarIcon: ({ color }) => <Icon name="home" fill={color} />,}} 
            />
            <Tab.Screen 
                name="messages" 
                component={ChatList}
                options={{ tabBarIcon: ({ color }) => <Icon name="chat" fill={color} />,}} 
            />
            <Tab.Screen 
                name="saved" 
                component={SavedArticles}
                options={{ tabBarIcon: ({ color }) => <Icon name="bookmark" fill={color} />,}}
            />
        </Tab.Navigator>
    )
}

function AppNavigation() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='maintab' component={BottomTab} />
            <Stack.Screen name='article' component={ArticleDetail} />
            <Stack.Screen name='chat' component={Chat} />
        </Stack.Navigator>
    )
}



export function Router() {
    return (
        <NavigationContainer>
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <AppNavigation />
                </PersistGate>
            </Provider>
        </NavigationContainer>
    )
}