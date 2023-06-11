import { TextInput, SafeAreaView, View, Image, TouchableOpacity, Text} from "react-native";
import styles from "./style";
import { Link } from "@react-navigation/native";

export default function loginPage(){
    return(
        <SafeAreaView style={styles.container}>
           {/* <View style={styles.viewImg}>
                <Image
                    style={styles.logoImg}
                    source={}
                />
            </View> */}
            <View style={styles.inputs}>
                <TextInput style={styles.inputEmail} placeholder='Email'/>
                <TextInput style={styles.inputSenha} placeholder='Senha'/>
            </View>
            <View style={styles.viewConfirmar}>
                <TouchableOpacity style={styles.btnConfirmar}>
                    <Text style={styles.txtBtnConfirmar}> Confirmar </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.viewLink}>
                <Link style={styles.link} to={{screen: "Register"}}>Registre-se...</Link>
                <Link style={styles.link} to={{screen: "ForgotPassword"}}>Esqueci a senha...</Link>
            </View>
        </SafeAreaView>
    )
}