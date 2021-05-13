import React, { useEffect, useState } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useHttp from './hooks/use-http';

function App() {
  const [tasks, setTasks] = useState([]);

  const { isLoading, error, sendRequest } = useHttp();

  useEffect(() => {
    const transformTasks = tasksObj => {
      const loadedTasks = [];

      for (const taskKey in tasksObj) {
        loadedTasks.push({ id: taskKey, text: tasksObj[taskKey].text });
      }

      setTasks(loadedTasks);
    };

    sendRequest(
      {
        url: 'https://custom-hook-guide-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json',
      },
      transformTasks
    );
  }, [sendRequest]);

  const addTaskHandler = task => {
    setTasks(preState => preState.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={addTaskHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={sendRequest}
      />
    </React.Fragment>
  );
}

export default App;
