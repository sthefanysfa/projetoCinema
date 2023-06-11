import { TextInput, SafeAreaView, View, Image, TouchableOpacity, Text} from "react-native";
import styles from "./style"; 
import { Link } from "@react-navigation/native";


export default function ForgotPasswordPage(){
    return(
        <SafeAreaView style={styles.container}>
           {/* <View style={styles.viewImg}>
                <Image 
                    style={styles.logoImg}
                    source={require('../../assets/img/logoFilms.jpg')}
                />
    </View>*/}
            <View style={styles.inputs}>
                <TextInput style={styles.inputEmail} placeholder='Email'/>
                <TextInput style={styles.inputSenha} placeholder='Nova Senha'/>
                <TextInput style={styles.inputSenhaNovamente} placeholder='Digite a senha novamente'/>
            </View>
            <View style={styles.viewConfirmar}>
                <TouchableOpacity style={styles.btnConfirmar}> 
                    <Text style={styles.txtBtnConfirmar}> Confirmar </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.viewLink}>
                <Link style={styles.link} to={{screen: "Login"}}>Volte ao login...</Link>
            </View>
        </SafeAreaView>
    )
}