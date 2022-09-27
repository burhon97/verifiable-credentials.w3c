import * as did0 from "./fixtures/dids/did-0.json" assert { type: "json" };
import * as credv1 from "./fixtures/contexts/cred-v1.json" assert { type: "json" };
import * as tracev1 from "./fixtures/contexts/trace-v1.json" assert { type: "json" };
import * as didv1 from "./fixtures/contexts/did-v1.json" assert { type: "json" };
import * as ed25519v1 from "./fixtures/contexts/ed25519-v1.json" assert { type: "json" };
import * as x25519v1 from "./fixtures/contexts/x25519-v1.json" assert { type: "json" };
import * as jws2020 from "./fixtures/contexts/jws-2020.json" assert { type: "json" };

const dids = {
  "did:key:z6MktWjP95fMqCMrfNULcdszFeTVUCE1zcgz3Hv5bVAisHgk": did0.default,
};
const contexts = {
  "https://www.w3.org/2018/credentials/v1": credv1.default,
  "https://w3id.org/traceability/v1": tracev1.default,
  "https://www.w3.org/ns/did/v1": didv1.default,
  "https://w3id.org/security/suites/ed25519-2018/v1": ed25519v1.default,
  "https://w3id.org/security/suites/x25519-2019/v1": x25519v1.default,
  "https://w3id.org/security/suites/jws-2020/v1": jws2020.default,
};

export const documentLoader = (iri) => {
  if (contexts[iri]) {
    return { document: contexts[iri] };
  }
  if (dids[iri.split("#")[0]]) {
    const document = dids[iri.split("#")[0]];
    return { document };
  }
  console.warn("error :", iri);
  throw new Error(`iri ${iri} not supported`);
};
