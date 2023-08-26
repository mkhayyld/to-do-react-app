import task from "./TaskClass"

const generateId = () => {
    const F = new Date();
    return (F.getTime().toString());
}
const createTask = (title, ...rest) => {
    return new task(generateId(), title, ...rest);
}

export default createTask;