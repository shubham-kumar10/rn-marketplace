export function debounce<T extends (...args: any[]) => void>(
  func: T,
  delay = 500,
) {
  let timeoutId: NodeJS.Timeout;

  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
}
