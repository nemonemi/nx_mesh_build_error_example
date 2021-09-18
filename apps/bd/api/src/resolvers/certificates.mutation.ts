import { datatype } from 'faker';
import { MockStore } from './certificates.query';
import { certificates } from './modules/certificates';
import { generateUsers } from './modules/data-generators/users';
import {
  Certificate,
  CertificateCreationInput,
  CertificateUpdateInput
} from '../.mesh';

type UpdateCertificate = {
  id: string;
  input: CertificateUpdateInput;
};
type CreateCertificate = {
  input: CertificateCreationInput;
};
export default {
  updateCertificate: (_: unknown, { id, input }: UpdateCertificate, { mockStore }: MockStore) => {
    const certificate = certificates.find((certificate) => certificate.id === id);

    if (!certificate) {
      return mockStore.get('CertificateIdNotExistingError');
    }

    const properties = certificate.properties.map((propConfig) => {
      const property = input.properties.find(
        (submittedPropConfig) => submittedPropConfig.property_id === propConfig.property.id
      );

      if ('value' in propConfig) {
        return {
          ...propConfig,
          value: property?.value ?? propConfig.value,
        };
      }

      if ('date' in propConfig) {
        return {
          ...propConfig,
          date: property?.date ?? propConfig.date,
        };
      }

      return propConfig;
    });

    mockStore.set('Certificate', id, { properties });
    return mockStore.get('Certificate', id);
  },

  createCertificate: (_: unknown, { input }: CreateCertificate, { mockStore }: MockStore): CertificateCreationInput => {
    const id = datatype.uuid();
    const { type_id, name } = input;
    // TODO do not use the "certificates" because it is static. Use the mockStore to obtain the stored certificates
    const originalCertificate = certificates.find((origCertificate) => origCertificate.type.id === type_id);

    if (!originalCertificate) return mockStore.get('CertificateNotFoundError');

    const newCertificate: Certificate = {
      id,
      created_at: new Date(),
      created_by: generateUsers().next().value,
      properties: originalCertificate!.properties.map((propConfig) => {
        if ('value' in propConfig && propConfig.property.titles[0].value === 'Certificate name') {
          return {
            ...propConfig,
            value: name ?? propConfig.value,
          };
        }

        return propConfig;
      }),
      type: originalCertificate.type,
    };

    // Add the new Certificate
    mockStore.set('Certificate', id, newCertificate);

    // Update the list of certificates with the new Certificate (only needed for the creation)
    mockStore.set('Query', 'ROOT', {
      certificates: [...mockStore.store.Query.ROOT.certificates, newCertificate],
    });

    // Return the newly added certificate by also verifying that it was successfully added to the store
    return mockStore.get('Certificate', id);
  },
};
