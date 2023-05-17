import moment from 'moment';

export function getCurrentDateTime() {
  const currentDateTime = moment().format('YYYY-MM-DD HH:mm:ss');
  return currentDateTime;
}

export function getCurrentDate() {
  const currentDate = moment().format('YYYY-MM-DD');
  return currentDate;
}

export function getCurrentTime() {
  const currentTime = moment().format('HH:mm:ss');
  return currentTime;
}
