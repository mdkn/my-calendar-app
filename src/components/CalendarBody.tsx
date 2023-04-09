import React from 'react';
import Day from './Day';
import { RootState } from '../store';
import AddScheduleForm from './ScheduleForm'
import { useSelector } from 'react-redux';
import { Schedule } from '../types';

type CalendarBodyProps = {
  year: number;
  month: number;
};

function CalendarBody({ year, month }: CalendarBodyProps) {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const daysInMonth = new Date(
    year,
    month + 1,
    0
  ).getDate();
  const firstDayOfMonth = new Date(
    year,
    month,
    1
  ).getDay();

  const monthDays = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const blankDays = Array.from({ length: firstDayOfMonth - 1 }, (_, i) => null);
  const allDays = [...blankDays, ...monthDays];

  const rows = Array.from({ length: Math.ceil(allDays.length / 7) }, (_, i) =>
    allDays.slice(i * 7, i * 7 + 7)
  );

  const schedules = useSelector((state: RootState) => state.schedule.schedules)

  return (
    <div className="calendar-body">
      <table>
        <thead>
          <tr>
            {daysOfWeek.map((day) => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {row.map((day) => (
                <Day key={day} day={day} month={month} schedules={schedules} />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CalendarBody;
