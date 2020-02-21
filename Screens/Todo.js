import React from 'react';
import { connect } from 'react-redux';
import { Text, View, StyleSheet, TextInput, TouchableHighlight } from 'react-native';
import ListView from '../components/ListView';
import { addnewtodoItem } from '../redux/action';


class todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todoList: props.todoList,
            newTodo : ''
        };
    }
    static getDerivedStateFromProps(props, state){
        if(props.todoList !== state.todoList){
            return {
                todoList: props.todoList,
              };
        }
        return state.todoList;
    }

    createNewTodoObject(){
        var obj = {
            "id": this.props.todoList.length + 1,
            "description": this.state.newTodo,
            "complete": false,
        }
        this.props.addNewTask(obj);
        this.setState({newTodo : ''});
    }
    render() {
        var isDisableButton = this.state.newTodo.length == 0 ? true : false;
        return (
            <View style={styles.container}>
                <Text style={styles.headerLabel}>TODO </Text>
                <View style={styles.addTodoView} >
                    <TextInput
                        style={styles.addTodo}
                        placeholder="Add Todo"
                        onChangeText={(text) => this.setState({ newTodo: text })}
                        value={this.state.newTodo}
                    />
                    <TouchableHighlight
                        style={[styles.addButton, {backgroundColor : isDisableButton ? "#d4d4d4" : "#e3744f" }]}
                        disabled={isDisableButton}
                        onPress={() => this.createNewTodoObject()}
                    >
                        <Text style={styles.buttonText}> Add New Todo </Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.listView}>
                    <ListView hint="Done" data={this.state.todoList.filter(todo => todo.complete == false)} />
                </View>
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        todoList: state.todoList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addNewTask: (value) => dispatch(addnewtodoItem(value))
    }
}

export default  connect(mapStateToProps,mapDispatchToProps)(todo)

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#546dc7',
      height : '100%'
    },
    headerLabel:{
        marginTop: 50,
        height : 50,
        width : '100%',
        color : "#fff",
        fontSize : 25,
        fontWeight : 'bold',
        textAlign : 'center'
    },
    addTodoView:{
        marginHorizontal : 10,
        display : "flex",
        flexDirection : 'row'
    },
    addTodo:{
        height: 50,
        flex : 3,
        backgroundColor : "#fff",
    },
    addButton:{
        height: 50,
        flex : 1,
        marginLeft : 5,
    },
    buttonText:{ 
        height: 50, 
        fontSize: 15, 
        color: '#FFF',
        alignItems : "center",
        textAlign : 'center',
        paddingTop : 5
    },
    listView:{
        margin : 10,
        marginBottom : 170,
        overflow : 'hidden',
    }
  });



                    