import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type MainParamList = {
  Login: undefined;
  Dogs: { name: string };
  Favorites: undefined;
};

export type LoginScreenProp = NativeStackNavigationProp<MainParamList, 'Login'>;
export type DogsScreenProp = RouteProp<MainParamList, 'Dogs'>;
