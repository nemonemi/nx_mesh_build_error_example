import { datatype } from 'faker';
import { Certificate, CertificateSection, Property } from '../../../../.mesh';

/**
 * The list of known Certificate types:
 'IATF 16949',
 'ISO 9001',
 'ISO TS 22163',
 'AS 9100',
 'Eco Management and Audit Scheme EMAS',
 'OHSAS 18001',
 'ISO 14001',
 'ISO 45001',
 'ISO 50001',
 'ISO IEC 27001',
 'EPAI',
 'CQI',
 */

// Currently supported types
const types = {
  IATF_16949: 'IATF 16949',
  ISO_9001: 'ISO 9001',
  ISO_14001: 'ISO 14001',
} as const;

// This is used to return a list of certificate types as a query, as well as to access some of its values directly.
export function getCertificateTypes(
  typeProperties: Property[],
  certificateSections: CertificateSection[]
): Certificate['type'][] {
  return [
    {
      config_version: 1,
      id: '1',
      properties: typeProperties,
      section: certificateSections[0],
      titles: [
        {
          language: 'en',
          value: `${types.IATF_16949}: 2016`,
        },
      ],
      type: types.IATF_16949,
      version: '2016',
    },
    {
      config_version: 1,
      id: datatype.uuid(),
      properties: typeProperties,
      section: certificateSections[0],
      titles: [
        {
          language: 'en',
          value: `${types.ISO_9001}: 2015`,
        },
      ],
      type: types.ISO_9001,
      version: '2015',
    },
    {
      config_version: 1,
      id: datatype.uuid(),
      properties: typeProperties,
      section: certificateSections[0],
      titles: [
        {
          language: 'en',
          value: `${types.ISO_14001}: 2015`,
        },
      ],
      type: types.ISO_14001,
      version: '2015',
    },
  ];
}
