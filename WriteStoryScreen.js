import React from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text, Alert } from 'react-native';
import firebase from 'firebase';
import db from '../config';

export default class WriteScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            AuthorName: '',
            TitleName: '',
            story: '',
        };
    }

    submitStory = async () => {
            db.collection("a").add({
                'TitleName' : this.state.TitleName,
                'AuthorName' : this.state.TitleName,
                'story' : this.state.story,
                'data' : firebase.firestore.Timestamp.now().toDate()
            })
            this.setState({
                AuthorName: '',
                TitleName: '',
                story: ''
            });
            Alert.alert("Submitted");
    }
    
    render() {
        return(
            <View style = {styles.container}>
                <Text style={styles.head}>Story Hub</Text>
                <TextInput
                    style={styles.titleName}
                    placeholder="Title of the Story"
                    value={this.state.TitleName}
                    onChangeText={text=>{
                        this.setState({
                            TitleName: text,
                        })
                    }}/>
                <TextInput
                    style={styles.authorName}
                    placeholder="Author of the Story"
                    value={this.state.AuthorName}
                    onChangeText={text=>{
                        this.setState({
                            AuthorName: text,
                        })
                    }}/>
                <TextInput
                    style={styles.story}
                    multiline = {true}
                    placeholder="Write the Story"
                    value={this.state.story}
                    onChangeText={text=>{
                        this.setState({
                            story: text,
                        })
                    }}/>

                <TouchableOpacity
                    style={styles.button}
                    onPress={this.submitStory}>
                    
                    <Text style={styles.text}>Submit</Text>
                    <Text style={{fontSize:10, textAlign: 'center'}}>(Don't leave blank spaces)</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    head: {
      fontSize: 30,
      backgroundColor: 'maroon',
      textAlign: 'center',
      justifyContent: 'center',
      paddingLeft: 200,
      paddingRight: 200,
      paddingTop: 15,
      paddingBottom: 15,
      marginTop: 10,
    },
    titleName: {
        marginTop: 120,
        width: 400,
        height: 50,
        borderWidth: 1.0,
        fontSize: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    authorName: {
        marginTop: 10,
        width: 400,
        height: 50,
        borderWidth: 1.0,
        fontSize: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    story: {
        marginTop: 10,
        width: 400,
        height: 200,
        borderWidth: 1.0,
        fontSize: 20,
        alignItems: 'center'
    },
    button: {
        backgroundColor: 'green',
        width: 150,
        height: 50,
        borderWidth: 1.0,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#fff',
    },
    text: {
        color: 'black',
        fontSize: 15,
        textAlign: 'center',
    }
})