export function getNumberParam(params: URLSearchParams, name: string) {
  const maybeString = params.get(name);

  if (typeof maybeString !== "string" || maybeString.length < 1) {
    return undefined;
  }

  const maybeNumber = Number(maybeString);

  return Number.isNaN(maybeNumber) ? undefined : maybeNumber;
}
