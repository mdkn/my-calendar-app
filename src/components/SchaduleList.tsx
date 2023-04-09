import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { removeSchedule } from '../store/schedule';
import { Schedule } from '../types';

const ScheduleList: React.FC = () => {
  const schedules = useSelector((state: RootState) => state.schedule.schedules);
  const dispatch = useDispatch();

  const handleRemove = (id: number) => {
    dispatch(removeSchedule(id));
  };

  return (
    <ul>
      {schedules.map((schedule: Schedule) => (
        <li key={schedule.id}>
          {schedule.title} {schedule.datetime.toLocaleString()} {schedule.description}{' '}
          <button onClick={() => handleRemove(schedule.id)}>削除</button>
        </li>
      ))}
    </ul>
  );
};

export default ScheduleList;
