import React, {Component} from 'react';
import {View, Text, StatusBar, TouchableOpacity, Image, FlatList, Alert, ScrollView} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import firebase from 'firebase';
//my import 
import TextInputAdd from '../Components/TextInput/TextInputAdd';
import Container from '../Components/Container/Container';
import TaskList from '../Components/List/TaskList';
import Tasks from '../Data/Tasks';
console.ignoredYellowBox =[
    'setting a timer'
];
class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            tasks: [],
            details: '',
            date: '20-Feb-2018',
        };
        this.itemsRef = this.getRef().child('tasks');
    }

    getRef() {
        return firebase.database().ref();
    }

    listenForItems(itemsRef) {
        itemsRef.on('value', (snap) => {
    
          // get children as an array
          let items = [];
          let id = 0;
          snap.forEach((child) => {
            items.push({
                id: id,
                task: {
                    details: child.val().details,
                    date: child.val().date,
                    key: child.key
                  }
            });
            id++;
          });
    
          this.setState({
            tasks: items,
          });
    
        });
    }
    componentDidMount(){
        this.listenForItems(this.itemsRef);
    }

    addTask = () => {
        console.log(this.state.tasks.reverse())
    }
    saveTask = (props) => {
        const {details, date} = props;
        // console.log(details.split(''), date);
        if(details.split('').length != 0){
            let key = firebase.database().ref('/tasks').push().key
            //firebase.database().ref('/tasks').child(key).set({ details: details, date: date })
            this.itemsRef.push({ details: details, date: date })
            this.setState({details: ''})
        } else {
            Alert.alert(
                'Warning',
                'Text is empty',
                [
                    {text: 'Ok', onPress: () => null},
                ],
                { cancelable: false }
            )
        }
    }
    handlePress(itemKey, task){
        console.log(itemKey)
        if(itemKey){
            // alert('Remove Item')
            
            Alert.alert(
                'Delete',
                task.details,
                [
                    {text: 'Cancel', onPress: () => null},
                    {text: ' ', onPress: () => null},
                    {text: 'ok ', onPress: () => firebase.database().ref('tasks/' + itemKey).set(null)},
                ],
                { cancelable: false }
            )
        }
    }
    render(){
        return(
            <Container>
                <StatusBar translucent={true} />
                <View style={styles.warper}>
                    <View style={styles.header}>
                        <Text style={styles.headerText}>ToDo List</Text>
                        <TouchableOpacity onPress={this.addTask} style={styles.addButton}>
                        <Image source={require('../Components/Images/add.png')}  style={styles.icon}/>
                        </TouchableOpacity>
                    </View>
                    
                    <TextInputAdd value={this.state.details} onChangeText={(input)=>this.setState({details: input})} onPress={() =>this.saveTask({details: this.state.details, date: this.state.date})}/>
                    <ScrollView style={styles.taskList}>
                        <FlatList
                        data={this.state.tasks.reverse()}
                        renderItem={({item})=>(
                            <TaskList
                            details={item.task.details}
                            date={item.task.date}
                            onPress={()=> this.handlePress(item.task.key, item.task)}
                            />
                        )}
                        keyExtractor={item=> item.id}
                        />
                    </ScrollView>
                </View>
       </Container>
        )
    }
}

export default Home;


const styles = EStyleSheet.create({
    warper: {
        //marginHorizontal: 10,
    },
    header: {
        backgroundColor: '#1976d2',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 10,  
        borderBottomColor: '#bdbdbd',
        paddingRight: 5,
        marginBottom: 25,
    },
    headerText: {
        color: 'white',
        fontSize: 26,
        padding: 15,
    },
    addButton: {
        paddingHorizontal: 7,
        paddingVertical: 5,
        backgroundColor: '#E91E63',
        width: 50,
        height: 50,
        borderRadius: 35,
    }, 
    icon: {
        tintColor: '$primaryBackground',
    },
    taskList: {
        paddingBottom: 10,
    }
});