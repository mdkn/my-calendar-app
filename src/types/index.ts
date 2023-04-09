interface Schedule {
  id: number;
  title: string;
  datetime: string;
  place: string;
  description: string;
}

interface ScheduleState {
  schedules: Schedule[];
}

type ScheduleAction =
  | {
      type: 'schedule/addSchedule';
      payload: Schedule;
    }
  | {
      type: 'schedule/removeSchedule';
      payload: number;
    };

export type { Schedule, ScheduleState, ScheduleAction };
