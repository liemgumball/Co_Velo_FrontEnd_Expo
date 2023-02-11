import { View, SafeAreaView, FlatList, Text, TextInput, Button } from "react-native";
import { COLORS } from "../constants"

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <TextInput
            placeholder={'Username'}
          // style={{flex : 1}}
          />
          <TextInput
            placeholder={'Password'}
          // secureTextEntry={true}
          // style={{flex : 2}}
          />

          <Button
            title={'Login'}
          // style={{flex : 3}}
          // onPress={this.onLogin.bind(this)}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
