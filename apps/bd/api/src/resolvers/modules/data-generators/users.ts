import { Certificate } from '../../../.mesh';

export function* generateUsers(): Generator<Certificate['created_by']> {
  while (true) {
    yield {
      sma_id: 'first-user-id',
      first_name: 'Rand',
      last_name: "al'Thor",
    };
    yield {
      sma_id: 'second-user-id',
      first_name: 'Perrin',
      last_name: 'Aybara',
    };
    yield {
      sma_id: 'third-user-id',
      first_name: 'Mat',
      last_name: 'Cauthon',
    };
    yield {
      sma_id: 'fourth-user-id',
      first_name: 'Nynaeve',
      last_name: "al'Meara",
    };
    yield {
      sma_id: 'fifth-user-id',
      first_name: 'Egwene',
      last_name: "al'Vere",
    };
    yield {
      sma_id: 'sixth-user-id',
      first_name: 'Lan',
      last_name: 'Mandragoran',
    };
  }
}
