
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import moviepage from './src/pages/moviepage';
import moviedetailspage from './src/pages/moviedatailspage';
import loginPage from './src/pages/loginpage';
import RegisterPage from './src/pages/RegisterPage';
import ForgotPasswordPage from './src/pages/ForgotPasswordPage';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name= 'Moviepage' component={moviepage} options={{headerShown: false}}/>
      <Stack.Screen name= 'DetailsPage' component={moviedetailspage}/>
      <Stack.Screen name= 'LoginPage' component={loginPage}/>
      <Stack.Screen name= 'Register' component={RegisterPage}/>
      <Stack.Screen name= 'ForgotPassword' component={ForgotPasswordPage}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}