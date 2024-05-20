export const useImg = (src: string) => {
  const url =
    "https://sxgzvkgcpspymknjscwh.supabase.co/storage/v1/object/public";
  return `${url}${src}`;
};
