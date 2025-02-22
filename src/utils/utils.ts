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

export const mockDelay = (
  min: number = 300,
  max: number = 1000,
  shouldFail: number = 0,
): Promise<void> => {
  return new Promise((resolve, reject) => {
    const delay = Math.random() * (max - min) + min;

    // Simulate random failures if probability is set
    if (shouldFail > 0 && Math.random() < shouldFail) {
      setTimeout(() => {
        reject(new Error('Random mock failure'));
      }, 300);
      return;
    }

    setTimeout(resolve, delay);
  });
};
