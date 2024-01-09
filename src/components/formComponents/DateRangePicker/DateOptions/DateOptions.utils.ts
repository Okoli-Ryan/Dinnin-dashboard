export function getStartDateForThisWeek() {
  const today = new Date();
  const startOfWeek = new Date(today.setDate(today.getDate() - today.getDay()));
  return startOfWeek;
}

export function getEndDateForThisWeek() {
  const today = new Date();
  const endOfWeek = new Date(
    today.setDate(today.getDate() - today.getDay() + 6)
  );
  return endOfWeek;
}

export function getStartDateForLastWeek() {
  const today = new Date();
  const startOfLastWeek = new Date(
    today.setDate(today.getDate() - today.getDay() - 7)
  );
  return startOfLastWeek;
}

export function getEndDateForLastWeek() {
  const today = new Date();
  const endOfLastWeek = new Date(
    today.setDate(today.getDate() - today.getDay() - 1)
  );
  return endOfLastWeek;
}

export function getStartDateForThisMonth() {
  const today = new Date();
  const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
  return startOfMonth;
}

export function getEndDateForThisMonth() {
  const today = new Date();
  const endOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
  return endOfMonth;
}

export function getStartDateForLastMonth() {
  const today = new Date();
  const startOfLastMonth = new Date(
    today.getFullYear(),
    today.getMonth() - 1,
    1
  );
  return startOfLastMonth;
}

export function getEndDateForLastMonth() {
  const today = new Date();
  const endOfLastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
  return endOfLastMonth;
}

export function getStartDateForThisYear() {
  const today = new Date();
  const startOfYear = new Date(today.getFullYear(), 0, 1);
  return startOfYear;
}

export function getEndDateForThisYear() {
  const today = new Date();
  const endOfYear = new Date(today.getFullYear(), 11, 31);
  return endOfYear;
}

export function getStartDateForLastYear() {
  const today = new Date();
  const startOfLastYear = new Date(today.getFullYear() - 1, 0, 1);
  return startOfLastYear;
}

export function getEndDateForLastYear() {
  const today = new Date();
  const endOfLastYear = new Date(today.getFullYear() - 1, 11, 31);
  return endOfLastYear;
}

export function getStartDateForAllTime() {
  const startDate = new Date(2000, 0, 1);
  return startDate;
}

// Note: The "All Time" option does not need an end date as it represents an indefinite time period.
