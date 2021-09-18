import { certificates, RequiredCertificate } from './modules/certificates';
import { certificateTypes } from './modules/data-generators/certificate';

export type MockStore = {
  mockStore: {
    get: Function;
    set: Function;
    store: {
      Query: {
        ROOT: {
          certificates: RequiredCertificate[];
        };
      };
    };
  };
};
export default {
  initializeStore: (storeInitializer: { set: Function }) => {
    // Populate the store with the list of certificate
    storeInitializer.set('Query', 'ROOT', { certificates });

    // Populate the store with the individual certificates for the individual querying
    certificates.forEach((certificate: RequiredCertificate) => {
      storeInitializer.set('Certificate', certificate.id, certificate);
    });

    // Store the CertificateNotFoundError response. The second argument is the key by which this error can be referred to when being resolved
    storeInitializer.set('CertificateNotFoundError', 'certificateNotFoundError', {
      message: `The queried certificate does not exist.`,
    });
    // Store the CertificateCreationTypeNotExistingError response. The second argument is the key by which this error can be referred to when being resolved
    storeInitializer.set('CertificateCreationTypeNotExistingError', 'certificateCreationTypeNotExistingError', {
      message: `The certificate type does not exist.`,
    });
    // Store the CertificateCreationTypeNotExistingError response. The second argument is the key by which this error can be referred to when being resolved
    storeInitializer.set('CertificateIdNotExistingError', 'certificateIdNotExistingError', {
      message: `The certificate does not exist.`,
    });

    // Populate the store with the list of certificate types
    storeInitializer.set('Query', 'ROOT', { certificateTypes });
  },

  certificate: (_: unknown, { id }: { id: string }, { mockStore }: MockStore) => {
    // Handle the CertificateNotFoundError use case
    // TODO do not use the "certificates" because it is static. Use the mockStore to obtain the stored certificates
    if (!certificates.find((certificate: RequiredCertificate) => certificate.id === id)) {
      return { $ref: { key: 'certificateNotFoundError', typeName: 'CertificateNotFoundError' } };
    }

    return mockStore.get('Certificate', id);
  },
};
