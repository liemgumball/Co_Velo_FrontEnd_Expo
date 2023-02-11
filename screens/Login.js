import { SafeAreaView, View, TextInput, Button } from "react-native"
// import { secure}
// import { useRef } from "react"

const Login = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View>
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
        </SafeAreaView>
    );
}

export default Login;