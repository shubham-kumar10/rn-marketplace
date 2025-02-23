import * as Sentry from '@sentry/react-native';

type LogLevel = 'error' | 'warning' | 'info' | 'debug';

const DSN =
  'https://15b858fc06b59dd82db72723261fe273@o4508870600884224.ingest.us.sentry.io/4508870603636736';

class ErrorTracker {
  static init() {
    Sentry.init({
      dsn: DSN,
      enableAutoSessionTracking: true,
      debug: __DEV__,
    });
  }

  static log(level: LogLevel, message: string, context?: Record<string, any>) {
    const logMessage = `[${level.toUpperCase()}] ${message}`;
    console[level === 'error' ? 'error' : 'log'](logMessage, context);

    switch (level) {
      case 'error':
        Sentry.captureMessage(message, 'error');
        break;
      case 'warning':
        Sentry.captureMessage(message, 'warning');
        break;
      case 'info':
        Sentry.captureMessage(message, 'info');
        break;
      case 'debug':
        Sentry.captureMessage(message, 'debug');
        break;
    }
  }

  static captureException(error: Error, context?: Record<string, any>) {
    console.error('Captured Exception:', error, context);
    Sentry.captureException(error);
  }

  static setUser(user: { id: string; email?: string; username?: string }) {
    console.log('Setting User:', user);
    Sentry.setUser(user);
  }

  static clearUser() {
    console.log('Clearing User');
    Sentry.setUser(null);
  }

  static trackPerformance(
    event: string,
    duration: number,
    context?: Record<string, any>,
  ) {
    console.log('Performance Tracked:', { event, duration, context });
    Sentry.addBreadcrumb({
      category: 'performance',
      message: event,
      level: 'info',
      data: { duration, ...context },
    });
  }
}

export default ErrorTracker;
