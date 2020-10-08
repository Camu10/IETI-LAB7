import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import UserList from './components/TaskList';

class  App extends Component{

  constructor(props) {
      super(props);
      this.state = {
          tasksList: [],
      };
  }

  componentDidMount() {
    fetch('https://ietilab7-task-api.azurewebsites.net/api/add-task?code=okVaEA9KV89dsB4Q9uG66sRVffDIUfmz4ngK8JV745IzUqY24VuJLw==')
        .then(response => response.json())
        .then(data => {
            let taskList = [];
            data.forEach(function (task) {
              taskList.push({
                task
              })
            });
            this.setState({tasksList: taskList});
        });
  }
  render(){
    return (
       <div>
        <h1>Task List</h1>
          <UserList tasksList={this.state.tasksList}/>
      </div>
    );
  }
}

export default App;
