import { JsonWebSignature } from "@transmute/json-web-signature";
import { documentLoader } from "./documentLoader.js";
import { verifiable } from "@transmute/vc.js";
import { resultPresentation } from "./createPresentation.js";

const resultCredentialParviz = {
  items: [
    {
      "@context": [
        "https://www.w3.org/2018/credentials/v1",
        "https://w3id.org/security/suites/jws-2020/v1",
      ],
      type: ["VerifiablePresentation"],
      holder: {
        id: "did:key:z6MktWjP95fMqCMrfNULcdszFeTVUCE1zcgz3Hv5bVAisHgk",
      },
      proof: {
        type: "JsonWebSignature2020",
        created: "2022-09-26T13:04:56Z",
        verificationMethod:
          "did:key:z6MktWjP95fMqCMrfNULcdszFeTVUCE1zcgz3Hv5bVAisHgk#z6MktWjP95fMqCMrfNULcdszFeTVUCE1zcgz3Hv5bVAisHgk",
        proofPurpose: "authentication",
        challenge: "123",
        jws: "eyJhbGciOiJFZERTQSIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..8e2a5wF6MFjUpH18AmV8yjHk4DzwKB8CutHw55aOiVaYmbeXleg2dT6TPUNFLycj1ttrpuhVo6k9Wh4medkMAQ",
      },
    },
    "eyJhbGciOiJFZERTQSIsImtpZCI6ImRpZDprZXk6ejZNa3RXalA5NWZNcUNNcmZOVUxjZHN6RmVUVlVDRTF6Y2d6M0h2NWJWQWlzSGdrI3o2TWt0V2pQOTVmTXFDTXJmTlVMY2RzekZlVFZVQ0UxemNnejNIdjViVkFpc0hnayJ9.eyJpc3MiOiJkaWQ6a2V5Ono2TWt0V2pQOTVmTXFDTXJmTlVMY2RzekZlVFZVQ0UxemNnejNIdjViVkFpc0hnayIsInN1YiI6ImRpZDprZXk6ejZNa3RXalA5NWZNcUNNcmZOVUxjZHN6RmVUVlVDRTF6Y2d6M0h2NWJWQWlzSGdrIiwidnAiOnsiQGNvbnRleHQiOlsiaHR0cHM6Ly93d3cudzMub3JnLzIwMTgvY3JlZGVudGlhbHMvdjEiLCJodHRwczovL3czaWQub3JnL3NlY3VyaXR5L3N1aXRlcy9qd3MtMjAyMC92MSJdLCJ0eXBlIjpbIlZlcmlmaWFibGVQcmVzZW50YXRpb24iXSwiaG9sZGVyIjp7ImlkIjoiZGlkOmtleTp6Nk1rdFdqUDk1Zk1xQ01yZk5VTGNkc3pGZVRWVUNFMXpjZ3ozSHY1YlZBaXNIZ2sifSwicHJvb2YiOnsidHlwZSI6Ikpzb25XZWJTaWduYXR1cmUyMDIwIiwiY3JlYXRlZCI6IjIwMjItMDktMjZUMTM6MDQ6NTZaIiwidmVyaWZpY2F0aW9uTWV0aG9kIjoiZGlkOmtleTp6Nk1rdFdqUDk1Zk1xQ01yZk5VTGNkc3pGZVRWVUNFMXpjZ3ozSHY1YlZBaXNIZ2sjejZNa3RXalA5NWZNcUNNcmZOVUxjZHN6RmVUVlVDRTF6Y2d6M0h2NWJWQWlzSGdrIiwicHJvb2ZQdXJwb3NlIjoiYXV0aGVudGljYXRpb24iLCJjaGFsbGVuZ2UiOiIxMjMiLCJqd3MiOiJleUpoYkdjaU9pSkZaRVJUUVNJc0ltSTJOQ0k2Wm1Gc2MyVXNJbU55YVhRaU9sc2lZalkwSWwxOS4uOGUyYTV3RjZNRmpVcEgxOEFtVjh5akhrNER6d0tCOEN1dEh3NTVhT2lWYVltYmVYbGVnMmRUNlRQVU5GTHljajF0dHJwdWhWbzZrOVdoNG1lZGtNQVEifX0sIm5vbmNlIjoiMTIzIn0.s48IQXlqMdMyzAV-cfQV_2FX8KW_F3xi_OoabA0UmWvxvg_0Fkg0yx12I_T-sNVUG5WNusjUeDifw9iP9tt9DQ",
  ],
};

const result = await verifiable.presentation.verify({
  presentation: resultCredentialParviz.items[0],
  format: ["vp", "vp-jwt"],
  documentLoader: documentLoader,
  challenge: "123", // this is supplied by the verifier / presentation recipient
  suite: new JsonWebSignature(),
});

// console.log("verify presentaion: ", result);
