import Section from '../UI/Section';
import TaskForm from './TaskForm';
import useHttp from '../../hooks/use-http';

const NewTask = ({ onAddTask }) => {
  const { isLoading, error, sendRequest } = useHttp();

  const enterTaskHandler = taskText => {
    sendRequest({
      url: 'https://custom-hook-guide-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: taskText,
    });
    onAddTask(taskText);
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
