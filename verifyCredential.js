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

// console.log("verify credential: ", result);
