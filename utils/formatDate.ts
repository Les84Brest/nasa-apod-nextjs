import { Dayjs } from "dayjs";

export function formatDate(date: Dayjs | null): string {
  if (!date) {
    return '';
  }
  
  return date.format('YYYY-MM-DD');
}