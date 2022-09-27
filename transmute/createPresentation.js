import { JsonWebKey, JsonWebSignature } from "@transmute/json-web-signature";
import { documentLoader } from "./documentLoader.js";
import { key } from "./create.js";
import { verifiable } from "@transmute/vc.js";

const presentation = {
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://w3id.org/security/suites/jws-2020/v1",
  ],
  type: ["VerifiablePresentation"],
  holder: {
    id: key.controller,
  },
};

export const resultPresentation = await verifiable.presentation.create({
  presentation,
  format: ["vp", "vp-jwt"],
  documentLoader: documentLoader,
  challenge: "123", // this is supplied by the verifier / presentation recipient
  suite: new JsonWebSignature({
    key: await JsonWebKey.from(key),
  }),
});

// console.log("create presentation: ", resultPresentation);
