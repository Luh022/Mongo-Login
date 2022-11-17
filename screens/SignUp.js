import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import React, { useState } from 'react';


const SignUp = ({navigation}) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async () => {
        if (name === ''|| email === '' || password === '') {
            alert("All fields are required");
            return;
        }
        await axios.post("exp://192.168.1.195:19000", {name, email,password})
        alert("Sign Up Successful");
    };
    /*const [state, setState] = useContext(AuthContext);

    const handleSubmit = async () => {
        if (name === ''|| email === '' || password === '') {
            alert("All fields are required");
            return;
        }
        const resp = await axios.post( <link rel="stylesheet" href="http://www.localhost/signup"></link>,{name, email, password});
        if(resp.data.error)
            alert(resp.data.error)
        else {
            setState(resp.data);
            await AsyncStorage.setItem("auth-rn", JSON.stringify(resp.data));
            alert("Sign Up Sucessful");
            navigation.navigate("Home");
        }
    }; */

   return (
        <View style={styles.container}>
            <Text style={styles.signupText}>SignUp</Text>
            <View style={{marginHorizontal: 24}}>
                <Text style={{fontSize: 16, color: '#8e93a1'}}>NAME</Text>
                <TextInput style={styles.signupInput} value={name} onChangeText={text => setName(text)} autoCapitalize="words" autoCorrect={false}/>
            </View>
            <View style={{marginHorizontal: 24}}>
                <Text style={{fontSize: 16, color: '#8e93a1'}}>EMAIL</Text>
                <TextInput style={styles.signupInput} value={email} onChangeText={text => setEmail(text)} autoCompleteType="email" keyboardType='email-address' />
            </View>
            <View style={{marginHorizontal: 24}}>
                <Text style={{fontSize: 16, color: '#8e93a1'}}>PASSWORD</Text>
                <TextInput style={styles.signupInput} value={password} onChangeText={text => setPassword(text)} secureTextEntry={true} autoCompleteType="password"/>
            </View>
            <TouchableOpacity onPress={handleSubmit} style={styles.buttonStyle}>
                <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    signupText: {
        fontSize: 30,
        textAlign: 'center'
    },
    signupInput: {
        borderBottomWidth: 0.5,
        height: 48,
        borderBottomColor: "#8e93a1",
        marginBottom: 30,
    },
    buttonStyle: {
        backgroundColor: "darkmagenta",
        height: 50,
        marginBottom: 20,
        justifyContent: "center",
        marginHorizontal: 15,
        borderRadius: 15,
    },
    buttonText: {
        fontSize: 20,
        textAlign: 'center',
        color: '#fff',
        textTransform: 'uppercase',
        fontWeight: 'bold'
    }
})

export default SignUp;