export function* registrationNumberValues(): Generator<string> {
  let i = 0;
  while (true) {
    yield `some registration number 61c3aSe4612ZB ${i}`;
    i += 1;
  }
}

export const registrationNumber = registrationNumberValues();
