import { certificates } from './certificates';

describe('query.certificates', () => {
  it('Has the correct data and data structure', () => {
    expect(certificates[0]).toEqual({
      __typename: 'Certificate',
      created_at: new Date('2000-01-01T00:00:00.000Z'),
      created_by: {
        first_name: 'Rand',
        last_name: "al'Thor",
        sma_id: expect.any(String),
      },
      id: expect.any(String),
      properties: [
        {
          __typename: 'CertificatePropertySimple',
          property: {
            configuration: {
              autoFocus: true,
              countChars: true,

              multiline: false,
              readonly: false,
              required: true,
            },
            id: expect.any(String),
            titles: [
              {
                language: 'en',
                value: 'Certificate name',
              },
            ],
            type: 'STRING',
          },
          value: 'Certificate name 0',
        },
        {
          __typename: 'CertificatePropertySimple',
          property: {
            configuration: {
              autoFocus: false,
              countChars: false,

              multiline: false,
              readonly: true,
              required: true,
            },
            id: expect.any(String),
            titles: [
              {
                language: 'en',
                value: 'Certificate type',
              },
            ],
            type: 'STRING',
          },
          value: 'IATF 16949: 2016',
        },
        {
          __typename: 'CertificatePropertySimple',
          property: {
            configuration: {
              autoFocus: false,
              countChars: false,

              multiline: false,
              readonly: true,
              required: true,
            },
            id: expect.any(String),
            titles: [
              {
                language: 'en',
                value: 'Certificate section',
              },
            ],
            type: 'STRING',
          },
          value: 'Quality Management',
        },
        {
          __typename: 'CertificatePropertyDate',
          date: new Date('2000-01-01T00:00:00.000Z'),
          property: {
            configuration: {
              autoFocus: false,
              countChars: false,

              multiline: false,
              readonly: false,
              required: true,
            },
            id: expect.any(String),
            titles: [
              {
                language: 'en',
                value: 'Valid from',
              },
            ],
            type: 'DATE',
          },
        },
        {
          __typename: 'CertificatePropertyDate',
          date: new Date('2000-01-02T00:00:00.000Z'),
          property: {
            configuration: {
              autoFocus: false,
              countChars: false,

              multiline: false,
              readonly: false,
              required: true,
            },
            id: expect.any(String),
            titles: [
              {
                language: 'en',
                value: 'Valid until',
              },
            ],
            type: 'DATE',
          },
        },
        {
          __typename: 'CertificatePropertySimple',
          property: {
            configuration: {
              autoFocus: false,
              countChars: true,

              multiline: false,
              readonly: false,
              required: false,
            },
            id: expect.any(String),
            titles: [
              {
                language: 'en',
                value: 'Registration number',
              },
            ],
            type: 'STRING',
          },
          value: 'some registration number 61c3aSe4612ZB 0',
        },
        {
          __typename: 'CertificatePropertySimple',
          property: {
            configuration: {
              autoFocus: false,
              countChars: true,

              multiline: true,
              readonly: false,
              required: false,
            },
            id: expect.any(String),
            titles: [
              {
                language: 'en',
                value: 'Scope and limitations',
              },
            ],
            type: 'STRING',
          },
          value:
            "Now that we know who you are, I know who I am. I'm not a mistake! It all makes sense! In a comic, you know how you can tell who the arch-villain's going to be? He's the exact opposite of the hero. And most times they're friends, like you and me! I should've known way back when... You know why, David? Because of the kids. They called me Mr Glass. 0",
        },
      ],
      type: {
        config_version: 1,
        id: expect.any(String),
        properties: [
          {
            configuration: {
              autoFocus: true,
              countChars: true,

              multiline: false,
              readonly: false,
              required: true,
            },
            id: expect.any(String),
            titles: [
              {
                language: 'en',
                value: 'Certificate name',
              },
            ],
            type: 'STRING',
          },
          {
            configuration: {
              autoFocus: false,
              countChars: false,

              multiline: false,
              readonly: true,
              required: true,
            },
            id: expect.any(String),
            titles: [
              {
                language: 'en',
                value: 'Certificate type',
              },
            ],
            type: 'STRING',
          },
          {
            configuration: {
              autoFocus: false,
              countChars: false,

              multiline: false,
              readonly: true,
              required: true,
            },
            id: expect.any(String),
            titles: [
              {
                language: 'en',
                value: 'Certificate section',
              },
            ],
            type: 'STRING',
          },
          {
            configuration: {
              autoFocus: false,
              countChars: false,
              multiline: false,

              readonly: false,
              required: true,
            },
            id: expect.any(String),
            titles: [
              {
                language: 'en',
                value: 'Valid from',
              },
            ],
            type: 'DATE',
          },
          {
            configuration: {
              autoFocus: false,
              countChars: false,

              multiline: false,
              readonly: false,
              required: true,
            },
            id: expect.any(String),
            titles: [
              {
                language: 'en',
                value: 'Valid until',
              },
            ],
            type: 'DATE',
          },
          {
            configuration: {
              autoFocus: false,
              countChars: true,

              multiline: false,
              readonly: false,
              required: false,
            },
            id: expect.any(String),
            titles: [
              {
                language: 'en',
                value: 'Registration number',
              },
            ],
            type: 'STRING',
          },
          {
            configuration: {
              autoFocus: false,
              countChars: true,

              multiline: true,
              readonly: false,
              required: false,
            },
            id: expect.any(String),
            titles: [
              {
                language: 'en',
                value: 'Scope and limitations',
              },
            ],
            type: 'STRING',
          },
        ],
        section: {
          id: expect.any(String),
          titles: [
            {
              language: 'en',
              value: 'Quality Management',
            },
          ],
        },
        titles: [
          {
            language: 'en',
            value: 'ISO 9001: 2015',
          },
        ],
        type: 'ISO 9001',
        version: '2015',
      },
    });
  });
});
