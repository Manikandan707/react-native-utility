import { NativeModules } from 'react-native';

type UtilityType = {
  multiply(a: number, b: number): Promise<number>;
};

const { Utility } = NativeModules;

export default Utility as UtilityType;
