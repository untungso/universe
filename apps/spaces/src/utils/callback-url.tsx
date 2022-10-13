export const callbackUrlHandler = (url: string | undefined): string => {
  if (url === undefined) {
    return `/on-boarding/hooks?redirect=/`;
  } else {
    return `/on-boarding/hooks?redirect=${url}`;
  }
};
