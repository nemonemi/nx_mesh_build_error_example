import {
  Certificate,
  CertificatePropertiesVariants,
} from '../../../../.mesh';
import { WithTypename } from '../../certificates';
import { date } from '../dates';
import { certificateName } from './certificate-names';
import { scopeAndLimitations } from './certificate-scope-and-limitations';
import { getCertificateSections } from './certificate-sections';
import { getCertificateTypeProperties } from './certificate-type-properties';
import { getCertificateTypes } from './certificate-types';

function* registrationNumberValues(): Generator<string> {
  let i = 0;
  while (true) {
    yield `some registration number 61c3aSe4612ZB ${i}`;
    i += 1;
  }
}
const registrationNumber = registrationNumberValues();

export const certificateSections = getCertificateSections();

const certificateTypeProperties = getCertificateTypeProperties();
export const certificateTypes = getCertificateTypes(certificateTypeProperties, certificateSections);
export function* generateInfiniteCertificateTypes(): Generator<Certificate['type']> {
  const [first, second, third] = certificateTypes;
  while (true) {
    yield first;
    yield second;
    yield third;
  }
}
export const certificateType = generateInfiniteCertificateTypes();

type CertificatePropertiesVariant = CertificatePropertiesVariants &
  (WithTypename<'CertificatePropertySimple'> | WithTypename<'CertificatePropertyDate'>);
export function getCertificateProperties(): CertificatePropertiesVariant[] {
  const certificatePropertySimple = 'CertificatePropertySimple';
  const certificatePropertyDate = 'CertificatePropertyDate';

  const [
    nameProp,
    typeProp,
    sectionProp,
    validFromProp,
    validUntilProp,
    registrationNumberProp,
    scopeAndLimitationsProp,
  ] = certificateTypeProperties;

  return [
    {
      __typename: certificatePropertySimple,
      property: nameProp,
      value: certificateName.next().value,
    },
    {
      __typename: certificatePropertySimple,
      property: typeProp,
      value: certificateType.next().value.titles[0].value,
    },
    {
      __typename: certificatePropertySimple,
      property: sectionProp,
      value: certificateSections[0].titles[0].value,
    },
    {
      __typename: certificatePropertyDate,
      property: validFromProp,
      date: date.next().value,
    },
    {
      __typename: certificatePropertyDate,
      property: validUntilProp,
      date: date.next().value,
    },
    {
      __typename: certificatePropertySimple,
      property: registrationNumberProp,
      value: registrationNumber.next().value,
    },
    {
      __typename: certificatePropertySimple,
      property: scopeAndLimitationsProp,
      value: scopeAndLimitations().next().value,
    },
  ];
}
