import { Text,View } from "react-native"
import { Octicons, Ionicons, Fontisto } from '@expo/vector-icons';
import { StyledInputLabel, LeftIcon, StyledTextInput,RightIcon ,Colors} from "./styles"
const MyTextInput = ({ label, icon, isPassword, hidePassword, setHidePassword, ...props }) => {
    return (
        <View>
            <LeftIcon>
                <Octicons name={icon} size={30} color={Colors.brand} />
            </LeftIcon>
            <StyledInputLabel>{label}</StyledInputLabel>
            <StyledTextInput {...props} />
            {
                isPassword && (
                    <RightIcon onPress={() => setHidePassword(!hidePassword)}>
                        <Ionicons name={hidePassword ? "md-eye-off" : "md-eye"} size={30} color={Colors.darkLight} />
                    </RightIcon>
                )
            }
        </View>
    )
}
export default MyTextInput