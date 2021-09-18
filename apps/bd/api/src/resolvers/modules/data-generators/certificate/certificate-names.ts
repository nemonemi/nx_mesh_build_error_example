function* generateCertificateNames(): Generator<string> {
  let i = 0;
  while (true) {
    yield `Certificate name ${i}`;
    i += 1;
  }
}
export const certificateName = generateCertificateNames();
