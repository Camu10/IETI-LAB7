import React, {Component} from 'react';

export class TaskList extends Component {

    constructor(props){
        super(props)
    }

    render(){
        
        console.log(this.props.tasksList)
        const data = this.props.tasksList;
        const items = data.map((task) => (
             <tr key={task.toString()}>
                <td>{task.task.id}</td>
                <td>{task.task.descripcion}</td>
                <td>{task.task.responsable.name}</td>
                <td>{task.task.responsable.email}</td>
                <td>{task.task.status}</td>
                <td>{new Date(task.task.dueDate).toLocaleDateString()}</td>
            </tr>
        ));
        return(
            <table>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>descripcion</th>
                    <th>Responsable Name</th>
                    <th>Responsable Email</th>
                    <th>Status</th>
                    <th>Date</th>
                </tr>
                </thead>
                <tbody>
                    {items}
                </tbody>
            </table>
        );

    }
}

export default TaskList;