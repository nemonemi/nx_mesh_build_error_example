import { datatype } from 'faker';
import { Certificate } from '../../.mesh';
import { certificateType, getCertificateProperties } from './data-generators/certificate';
import { generateInfiniteDates } from './data-generators/dates';
import { generateUsers } from './data-generators/users';

export interface WithTypename<typenameValue> {
  __typename: typenameValue;
}

const certificateCreatedAt = generateInfiniteDates();
const user = generateUsers();
const generatedList = Array.from(Array(4).keys());

export type RequiredCertificate = Certificate & WithTypename<'Certificate'>;

export const certificates: RequiredCertificate[] = generatedList.map(
  (key): RequiredCertificate => ({
    __typename: 'Certificate',
    created_at: certificateCreatedAt.next().value,
    created_by: user.next().value,
    id: key === 0 ? '1' : datatype.uuid(),
    properties: getCertificateProperties(),
    type: certificateType.next().value,
  })
);
