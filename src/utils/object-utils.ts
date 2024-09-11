export const objectEntries: <T>(obj: T) => [keyof T, T[keyof T]][] = Object.entries as any
