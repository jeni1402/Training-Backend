const fs = require('fs');

const args = process.argv.slice(2);
const command = args[0];
const task = args.slice(1).join(' ');

const file = 'tasks.json';

// Read tasks
const readTasks = () => {
  try {
    return JSON.parse(fs.readFileSync(file));
  } catch {
    return [];
  }
};

// Save tasks
const saveTasks = (tasks) => {
  fs.writeFileSync(file, JSON.stringify(tasks, null, 2));
};

// Commands
if (command === 'add') {
  const tasks = readTasks();
  tasks.push(task);
  saveTasks(tasks);
  console.log('Task added:', task);

} else if (command === 'list') {
  const tasks = readTasks();
  console.log('Tasks:');
  tasks.forEach((t, i) => console.log(`${i + 1}. ${t}`));

} else if (command === 'delete') {
  const index = parseInt(args[1]) - 1;
  const tasks = readTasks();
  const removed = tasks.splice(index, 1);
  saveTasks(tasks);
  console.log('Deleted:', removed[0]);

} else {
  console.log('Commands: add, list, delete');
}