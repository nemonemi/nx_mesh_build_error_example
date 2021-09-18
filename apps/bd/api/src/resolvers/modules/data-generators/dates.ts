export function* generateInfiniteDates(dateString: string = '2000-01-01', i: number = 0): Generator<Date> {
  while (true) {
    const date = new Date(dateString);

    date.setDate(date.getDate() + i);
    i += 1;

    yield date;
  }
}

export const date = generateInfiniteDates();
