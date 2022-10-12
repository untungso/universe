/**
 */
import { publicFIlamentsUrl, publicMicrosUrl } from "@config/application";
import type { KyInstance } from "ky/distribution/types/ky";
import ky from "ky-universal";
/**
 */
export const microService: KyInstance = ky
  .create({
    prefixUrl: publicMicrosUrl,
    headers: {
      "X-Requested-With": "XMLHttpRequest",
      "X-Requested-From": "instead-spaces",
    },
  })
  .extend({
    timeout: 30000,
  });
/**
 */
export const filamentService: KyInstance = ky
  .create({
    prefixUrl: publicFIlamentsUrl,
    headers: {
      "X-Requested-With": "XMLHttpRequest",
      "X-Requested-From": "instead-spaces",
    },
  })
  .extend({
    timeout: 30000,
  });
