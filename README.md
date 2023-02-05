# verifiable-credentials.w3c

```
$ git clone https://github.com/burhon97/verifiable-credentials.w3c.git
$ npm install
```

## Create Verifiable Credential 

```javascript
import { JsonWebKey, JsonWebSignature } from "@transmute/json-web-signature";
import { documentLoader } from "./documentLoader.js";
import { verifiable } from "@transmute/vc.js";

export const key = {
  id: "did:key:z6MktWjP95fMqCMrfNULcdszFeTVUCE1zcgz3Hv5bVAisHgk#z6MktWjP95fMqCMrfNULcdszFeTVUCE1zcgz3Hv5bVAisHgk",
  type: "Ed25519VerificationKey2018",
  controller: "did:key:z6MktWjP95fMqCMrfNULcdszFeTVUCE1zcgz3Hv5bVAisHgk",
  publicKeyBase58: "F4ULYqQvVesPYsddw4v9QYuVecxAajSdMH19mDChx4uN",
  privateKeyBase58:
    "3SCL1scPSwPGb5QkoPCwyxrP1JJzsh3Ch47weF3LQDfJqQtTCQoPt8TnTRyCoEtKspLdhd74oDc4atJvRMNpmQTr",
};

const credential = {
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://w3id.org/security/suites/jws-2020/v1",
  ],
  id: "http://example.edu/credentials/3732",
  type: ["VerifiableCredential"],
  issuer: {
    id: "did:key:z6MktWjP95fMqCMrfNULcdszFeTVUCE1zcgz3Hv5bVAisHgk",
  },
  issuanceDate: "2010-01-01T19:23:24Z",
  credentialSubject: {
    id: "did:example:ebfeb1f712ebc6f1c276e12ec21",
  },
};

export const resultCredential = await verifiable.credential.create({
  credential,
  format: ["vc", "vc-jwt"],
  documentLoader: documentLoader,
  suite: new JsonWebSignature({
    key: await JsonWebKey.from(key),
  }),
});

console.log("create credential: ", resultCredential);

// result
// create credential:  {
//   items: [
//     {
//       '@context': [Array],
//       id: 'http://example.edu/credentials/3732',
//       type: [Array],
//       issuer: [Object],
//       issuanceDate: '2010-01-01T19:23:24Z',
//       credentialSubject: [Object],
//       proof: [Object]
//     },
//   ]
// }

```


## Verify Verifiable Credential
```javascript
import { JsonWebSignature } from "@transmute/json-web-signature";
import { documentLoader } from "./documentLoader.js";
import { verifiable } from "@transmute/vc.js";
import { resultCredential } from "./create.js";

const result = await verifiable.credential.verify({
  credential: resultCredential.items[0],
  format: ["vc", "vc-jwt"],
  documentLoader: documentLoader,
  suite: [new JsonWebSignature()],
});

console.log("verify credential: ", result);

// result
// verify credential:  { verified: true }
```

