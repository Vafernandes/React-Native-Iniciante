import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Image
} from 'react-native';

import {
    Container,
    Text,
    Header,
    Left,
    Button,
    Icon,
    Body,
    Title,
    Right,
    Thumbnail,
    CardItem
} from 'native-base'

export default class App extends Component {
    render() {
        return(
            <Container style={styles.container}>
                <Header style={styles.header}>
                    <Left>
                        <Button transparent>
                            <Icon name="arrow-back"/>
                        </Button>
                    </Left>
                    <Body>
                        <Title>Pop-Info</Title>
                    </Body>
                    <Right />
                </Header>
                <View style={styles.dadosUsuario}>
                    <View style={styles.campoImgNome}>
                        <Thumbnail 
                            square
                            source={require('../img/icone.png')}
                            style={styles.img}
                        />
                        <Text style={styles.nomeUser}>Joaquim</Text>
                    </View>
                    <View style={styles.campoDados}>
                        <Text style={styles.infoDados}>Informações</Text>
                        <Text style={styles.txtInfo}>Código: 000012QX</Text> 
                        <Text style={styles.txtInfo}>Email: joaquim@pop.com</Text>
                        <Text style={styles.txtInfo}>CPF: 014.258.478-8</Text> 
                    </View>
                </View>
              
                <View style={styles.campoTitleInfo}>
                    <Text style={styles.titleInfo}>Dados Bancários</Text>
                </View>

                <View style={styles.campoInfo}>
                    
                    <View style={styles.campodadosBancario}>
                        <Text style={styles.txtdados}>Ag. 245-8</Text>
                        <Text style={styles.txtdados}>Cc. 14587-0</Text> 
                    </View>
                    <View style={styles.campodadosBancario}>
                        <Text style={styles.infoBanc}>Saldo: R$50.00</Text>
                        <Text style={styles.infoBanc}>Pontos: 100pop</Text>
                    </View>
                </View>

                <View style={styles.campoBtn}>
                    <View style={styles.btnSucess}>
                        <Button success full>
                                <Text>Confirmar Resgate</Text>
                        </Button>
                    </View>
                    <View style={styles.btnDanger}>
                        <Button danger full>
                            <Text>Cancelar Resgate</Text>
                        </Button>
                    </View>
                </View>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f4f5f5'
    },
    dadosUsuario: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 20
    },
    campoImgNome: {
       
    },
    img: {
        width: 70,
        height: 70
    },
    nomeUser: {
        paddingTop: 10,
        fontWeight: 'bold',
        fontSize: 20
    },
    infoDados: {
        fontWeight: 'bold',
        fontSize: 20,
        paddingBottom: 10
    },
    txtdados: {
        fontWeight: 'bold',
        color: '#adb0b8'
    },
    campoInfo: {
        backgroundColor: '#fff',
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingBottom: 20
        
    },
    campoTitleInfo: {
        backgroundColor: '#fff'
    },
    titleInfo: {
        fontWeight: 'bold',
        fontSize: 22,
        alignSelf: 'center',
        paddingTop: 15,
        paddingBottom: 15,
    },
    txtInfo: {
        fontWeight: 'bold',
        color: '#adb0b8'
    },
    infoBanc: {
        fontWeight: 'bold',
        padding: 5,
        paddingTop: 10  
    },
    campoBtn: {
        flexDirection: 'row',
    },
    btnSucess: {
        flex: 1
    },
    btnDanger: {
        flex: 1
    },
    campodadosBancario: {
        justifyContent: 'space-around',
        flexDirection: 'row'
    },
});