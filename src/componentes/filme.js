import { Button, Image, Text, View } from "react-native";

import styles from './style';
import { Link } from "@react-navigation/native";

const baseUrl = 'https://api.otaviolube.com'


export default function Cartao({filme}){

    const imgURL = baseUrl + filme.poster.data.attributes.url

    return(
        
        <View style={styles.container}>
            <View style={styles.viewimg}>
                <Image style={styles.img} source ={{uri: imgURL}}/>
            </View>
            <View style={styles.viewdata}>
                <Text style={styles.titulo}>{filme.titulo} </Text>                
                <Text style={styles.descricao}>{filme.sinopse} </Text> 
                <Link to={{screen: "DetailsPage", params:{filme: filme}}}>Saiba mais...</Link>              
                <Link to={{screen: "LoginPage"}}>COMPRAR</Link>             

            </View>
        </View>
    );
}