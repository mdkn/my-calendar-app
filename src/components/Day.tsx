import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { Schedule } from '../types';

type DayProps = {
  day: number | null;
  month: number;
  schedules: Schedule[]
};

interface DayCellProps {
  isNull: boolean;
  isToday: boolean;
  day: number | null;
  schedules: Schedule[];
  children?: React.ReactNode;
}

const DayCell = ({isToday, isNull, day, schedules}: DayCellProps) => (
    <td className={`${isNull ? 'blank' : ''}${isToday ? '':''}`}>
    {day}
    {schedules.map((schedule) => (
        <div key={schedule.id}>{schedule.title}</div>
      ))}
    </td>
)


const Day: React.FC<DayProps> = ({ day, month }) => {
  const today = new Date();
  const year = today.getFullYear();

  const schedules = useSelector((state: RootState) => state.schedule.schedules);

  const filteredSchedules: Schedule[] = schedules.filter((schedule) => {
    const date = new Date(schedule.datetime);
    return date.getFullYear() === year && date.getMonth() === month && date.getDate() === day;
  });

  return (
    <DayCell isToday={day === today.getDate() && month === today.getMonth()} isNull={day === null} day={day} schedules={filteredSchedules}>
      {day}
      {filteredSchedules.map((schedule) => (
        <div key={schedule.id}>{schedule.title}</div>
      ))}
    </DayCell>
  );
};

export default Day;