const { inquirerMenu, inquirerInput } = require("./helpers/inquirer");
const { TaskRepository } = require("./repositories/TaskRepository");

const main = async () => {
  const taskRepository = new TaskRepository();
  let option = "";

  do {
    option = await inquirerMenu();
    switch (option) {
      case 1:
        console.log("El usuario seleccionó la opción crear tarea");
        const title = await inquirerInput("Task title");
        taskRepository.createTask(title);

        break;
      case 2:
        //TODO mostrar la lista de tareas de la base de datos.

        console.log(taskRepository.getAlltasks());
        break;
    }
  } while (option !== "X");
  {
  }
};

main();
