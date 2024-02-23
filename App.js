import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, ImageBackground, TextInput } from 'react-native';

export default function App() {
    click = () => {
        alert('Você esta logado')
    }
    const fundo = {uri :'https://i.pinimg.com/originals/e7/c9/65/e7c96515a324ff2d68ce1a1418151690.jpg'}
    return (
        <View style={styles.container}>
     <ImageBackground  
    source={fundo} 
    resizeMode='cover'
        style={styles.imgBackground}
   >
            <Text style={{ fontSize: 30, }}>Login</Text>
            <TextInput style={{ height: 70, width: 300, border: 'solid', borderWidth: 1, borderColor: 'white', margin: '10px', color: 'white' }}
                placeholder='email'
                inputMode='email'
                color='white'
            />

            <TextInput style={{ height: 70, width: 300, border: 'solid', borderWidth: 1, borderColor: 'white', margin: '10px', color: 'white'}}
                placeholder='senha'
                inputMode='none'
                secureTextEntry={true}
                color='white'
            />
            <Button style={styles.btn}
                onPress={click}
                title="Entrar"
                color="black" />
                </ImageBackground>

        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
       
    },

    imgBackground: {
        justifyContent: 'center',
        alignItems: 'center',
        width:'100%',
        flex: 1,
    }
});




