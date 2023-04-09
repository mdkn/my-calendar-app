interface Schedule {
  id: number;
  title: string;
  start: Date;
  end: Date;
  memo: string;
}

function getScheduleList(): Schedule[] {
  const data = localStorage.getItem('scheduleList');

  if (data) {
    return JSON.parse(data);
  }

  return [];
}

function addSchedule(schedule: Schedule): void {
  const schedules = getScheduleList();

  schedule.id = Date.now();
  schedules.push(schedule);

  localStorage.setItem('scheduleList', JSON.stringify(schedules));
}

function removeSchedule(id: number): void {
  const schedules = getScheduleList().filter((schedule) => schedule.id !== id);

  localStorage.setItem('scheduleList', JSON.stringify(schedules));
}

export { getScheduleList, addSchedule, removeSchedule };
