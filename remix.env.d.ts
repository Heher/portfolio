/// <reference types="@remix-run/dev" />
/// <reference types="@remix-run/node" />

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
