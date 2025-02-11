export const createMutation = ({
  url,
  method,
  invalidatesTags,
  appendId = false,
}: {
  url: string;
  method: string;
  invalidatesTags?: { type: string }[];
  appendId?: boolean;
}) => ({
  query: (data: string | number | object) => {
    const isPrimitive = typeof data === 'string' || typeof data === 'number';
    return {
      url: appendId && isPrimitive ? `${url}/${data}` : url,
      method,
      ...(isPrimitive || !data ? {} : { body: data }),
    };
  },
  invalidatesTags,
});
