import { CertificateType } from '../../../../.mesh';

export function getCertificateSections(): CertificateType['section'][] {
  return [
    {
      id: '1',
      titles: [
        {
          language: 'en',
          value: 'Quality Management',
        },
      ],
    },
  ];
}
