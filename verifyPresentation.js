import { JsonWebSignature } from "@transmute/json-web-signature";
import { documentLoader } from "./documentLoader.js";
import { verifiable } from "@transmute/vc.js";
import { resultPresentation } from "./createPresentation.js";

const result = await verifiable.presentation.verify({
  presentation: resultPresentation.items[0],
  format: ["vp", "vp-jwt"],
  documentLoader: documentLoader,
  challenge: "123", // this is supplied by the verifier / presentation recipient
  suite: new JsonWebSignature(),
});

console.log("verify presentaion: ", result);

