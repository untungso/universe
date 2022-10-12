export const publicMicrosUrl: string = process.env
  .NEXT_PUBLIC_MICROS_URL as string;
export const publicFIlamentsUrl: string = process.env
  .NEXT_PUBLIC_FILAMENTS_URL as string;
export const publicAlchemyId: string = process.env
  .NEXT_PUBLIC_ALCHEMY_ID as string;
export const publicApplicationName: string =
  process.env.APP_NAME || (`Malah Ngoding Space` as string);
export const publicApplicationUrl: string =
  process.env.NEXT_PUBLIC_SPACES_URL || (`http://localhost:3500` as string);
export const privateInsteadToken: string = process.env.INSTEAD_TOKEN as string;
export const privateGithubId: string = process.env.GITHUB_ID as string;
export const privateGithubSecret: string = process.env.GITHUB_SECRET as string;
export const privateGoogleClientId: string = process.env
  .GOOGLE_CLIENT_ID as string;
export const privateGoogleSecret: string = process.env
  .GOOGLE_CLIENT_SECRET as string;
export const privateNextAuthUrl: string = process.env.NEXTAUTH_URL as string;
export const privateJwtSecret: string = process.env.JWT_SECRET as string;
export const privateJwtSigningKey: string = process.env
  .JWT_SIGNING_KEY as string;
export const privateJwtEncryptionKey: string = process.env
  .JWT_ENCRYPTION_KEY as string;
export const deployedChain: number = 80001;
