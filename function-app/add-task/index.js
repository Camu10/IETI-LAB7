var tasks = [{id : 1,
		descripcion: "Ejemplo",
    	responsable: {
      	name: "Carlos",
      	email: "carlos@mail.com"
    	},
    	status: "Ready",
    	dueDate: new Date("2020-09-07T21:11:54")}]

module.exports = async function (context, req) {
    context.log('Adding a task to the planner');

    const task = req.body;
    if (req.method == "GET"){
        context.res = {
            status: 200,
            body: tasks
        };
    }else{
        task.id = tasks.length+1;
        tasks.push(task);
        context.res = {
            status: 200,
            body: tasks
        };
    }
}