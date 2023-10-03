import PhoneInput from "react-native-phone-number-input";
import CustomView from "../../utils/Component/UI/CustomView";
import theme, { Text } from "../../utils/theme";
import React, { useRef, useState } from "react";
import { router } from "expo-router";
import { ToastAndroid, StatusBar } from "react-native";
import CustomTouchableOpacity from "../../utils/Component/UI/CustomTouchableOpacity";

const Login = () => {
  const [value, setValue] = useState("");
  const phoneInput = useRef<PhoneInput>(null);
  const checkValid = phoneInput.current?.isValidNumber(value);

  const CheckPhoneNum = () => {
    if (checkValid) {
      router.push({ pathname: "/Registration", params: { phone: value } });
    } else {
      ToastAndroid.show("Enter valid number", ToastAndroid.SHORT);
    }
  };

  return (
    <CustomView variant="customView" style={{}}>
      <StatusBar backgroundColor={theme.colors.blue} />

      <Text variant="textLg">Please enter your mobile number</Text>
      <PhoneInput
        containerStyle={{ backgroundColor: "#dcdcdc", borderRadius: 5 }}
        textInputStyle={{ height: 20 }}
        textContainerStyle={{
          backgroundColor: "#dcdcdc",
          height: 50,
          borderRadius: 10,
        }}
        ref={phoneInput}
        defaultValue={value}
        defaultCode="IN"
        layout="first"
        onChangeText={(text) => {
          setValue(text);
        }}
        withDarkTheme={false}
        withShadow
        autoFocus
      />

      <CustomTouchableOpacity
        onPress={CheckPhoneNum}
        variant="customButton"
        style={{}}
      >
        <Text variant="textBase" color="white" style={{textAlign:'center'}}>
          Continue
        </Text>
      </CustomTouchableOpacity>
    </CustomView>
  );
};

export default Login;
