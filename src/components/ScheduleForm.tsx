import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addSchedule } from '../store/schedule';

interface ScheduleFormProps {
  onClose: () => void;
}

const ScheduleForm = ({ onClose }: ScheduleFormProps) => {
  const dispatch = useDispatch();
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [datetime, setDatetime] = useState('');
  const [place, setPlace] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(addSchedule({ id: parseInt(id), title, datetime, place, description }));
    onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
        <input type="hidden" value={id} onChange={(e) => setId(e.target.value)}></input>
      <label>
        Title:
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <label>
        Datetime:
        <input type="datetime-local" value={datetime} onChange={(e) => setDatetime(e.target.value)} />
      </label>
      <label>
        Place:
        <input type="text" value={place} onChange={(e) => setPlace(e.target.value)} />
      </label>
      <label>
        Description:
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      </label>
      <button type="submit">Add Schedule</button>
    </form>
  );
};

export default ScheduleForm;