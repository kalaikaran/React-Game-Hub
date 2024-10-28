export const saveTasks = <T>(key: string, tasks: T) => {
  const taskSting = JSON.stringify(tasks);
  localStorage.setItem(key, taskSting);
};

export const getTasks = (key: string) => {
  const localTasks = localStorage.getItem(key);
  // await sleep(5000);
  return localTasks ? JSON.parse(localTasks) : undefined;
};

// async function sleep(m: number) {
//   await new Promise((resolve) => setTimeout(resolve, m));
// }
