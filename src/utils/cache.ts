const cache = new Map();

export function getCachedData<T>(key: string, fetchFn: () => Promise<T>): Promise<T> {
  if (cache.has(key)) {
    return Promise.resolve(cache.get(key));
  }

  return fetchFn().then(data => {
    cache.set(key, data);
    return data;
  });
}
