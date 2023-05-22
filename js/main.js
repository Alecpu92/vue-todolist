var app = new Vue (
    {
        el: "#container",
        data: {
            newTask: {
                text: "", 
                done: false
            },
            tasks: [
                {
                    text: 'Fare la doccia', 
                    done: false
                },
                {
                    text: 'Sistemare il giardino',
                    done: false
                },
                {
                    text: 'Fare la spesa', 
                    done: false
                },
                {
                    text: 'Preparare il pranzo', 
                    done: false
                },
            ]
        },
        methods: {
            deleteTask(index){
                this.tasks.splice(index, 1);
            },
            addNewTask(){
                this.tasks.push(this.newTask);
                this.newTask = {    
                    text: "", 
                    done: false
                };
            },
            doneTask(index){
                this.tasks[index].done = true;
            }
        }
    }
);