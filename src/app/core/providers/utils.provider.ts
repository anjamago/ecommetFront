import { Persistence } from "src/app/utils/Persistence";

export const CRYPTO = {
  provide: 'ICrypto', useClass: Crypto
};

export const PERSISTENCE = {
  provide: 'IPersistence', useClass: Persistence
};
