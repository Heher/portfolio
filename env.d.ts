/// <reference types="vite/client" />
/// <reference types="vitest" />

import * as integration from './__tests__/factory';

declare module 'vitest' {
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  export interface TestContext {
    integration: typeof integration;
    request: Request;
  }
}

declare module '*.wgsl' {
  const value: string;
  export default value;
}

declare module '*.glsl' {
  const value: string;
  export default value;
}

declare module '*.frag' {
  const value: string;
  export default value;
}

declare module '*.vert' {
  const value: string;
  export default value;
}

type ImportMetaEnv = {};
type ImportMeta = {
  readonly env: ImportMetaEnv;
};
