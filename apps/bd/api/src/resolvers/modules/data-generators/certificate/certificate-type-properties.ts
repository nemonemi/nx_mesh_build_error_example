import { datatype } from 'faker';
import { Property, PropertyType } from '../../../../.mesh';
import { languages } from '../languages';

export function getCertificateTypeProperties(): Property[] {
  return [
    {
      id: '1',
      titles: [
        {
          language: languages[0],
          value: 'Certificate name',
        },
      ],
      type: PropertyType.STRING,
      configuration: {
        autoFocus: true,
        countChars: true,

        multiline: false,
        readonly: false,
        required: true,
      },
    },
    {
      id: datatype.uuid(),
      titles: [
        {
          language: languages[0],
          value: 'Certificate type',
        },
      ],
      type: PropertyType.STRING,
      configuration: {
        autoFocus: false,
        countChars: false,

        multiline: false,
        readonly: true,
        required: true,
      },
    },
    {
      id: datatype.uuid(),
      titles: [
        {
          language: languages[0],
          value: 'Certificate section',
        },
      ],
      type: PropertyType.STRING,
      configuration: {
        autoFocus: false,
        countChars: false,

        multiline: false,
        readonly: true,
        required: true,
      },
    },
    {
      id: datatype.uuid(),
      titles: [
        {
          language: languages[0],
          value: 'Valid from',
        },
      ],
      type: PropertyType.DATE,
      configuration: {
        autoFocus: false,
        countChars: false,

        multiline: false,
        readonly: false,
        required: true,
      },
    },
    {
      id: datatype.uuid(),
      titles: [
        {
          language: languages[0],
          value: 'Valid until',
        },
      ],
      type: PropertyType.DATE,
      configuration: {
        autoFocus: false,
        countChars: false,

        multiline: false,
        readonly: false,
        required: true,
      },
    },
    {
      id: datatype.uuid(),
      titles: [
        {
          language: languages[0],
          value: 'Registration number',
        },
      ],
      type: PropertyType.STRING,
      configuration: {
        autoFocus: false,
        countChars: true,

        multiline: false,
        readonly: false,
        required: false,
      },
    },
    {
      id: datatype.uuid(),
      titles: [
        {
          language: languages[0],
          value: 'Scope and limitations',
        },
      ],
      type: PropertyType.STRING,
      configuration: {
        autoFocus: false,
        countChars: true,

        multiline: true,
        readonly: false,
        required: false,
      },
    },
  ];
}
