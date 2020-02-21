import React from 'react';
import { connect } from 'react-redux';
import { Text, View, StyleSheet } from 'react-native';
import ListView from '../components/ListView'

class completedTask extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todoList: props.todoList
        };
    }
    static getDerivedStateFromProps(props, state) {
        if(props.todoList !== state.todoList){
            return {
                todoList: props.todoList,
              };
        }
        return state.todoList;
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.headerLabel}>COMPLETED </Text>
                <View style={styles.listView}>
                    <ListView hint="Undo" data={this.state.todoList.filter(todo => todo.complete == true)} />
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

export default  connect(mapStateToProps)(completedTask)

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
    listView:{
        margin : 10,
        marginBottom : 120,
        overflow : 'hidden',
    }
  });



                    