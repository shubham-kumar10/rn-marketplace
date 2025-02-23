import { AnalyticsEvent } from './type';

class MockAnalytics {
  private static logEvent(eventData: AnalyticsEvent) {
    console.log('Analytics Event Tracked:', eventData);
  }

  static trackClick(label: string, category = 'UI Interaction') {
    this.logEvent({ event: 'click', category, action: 'Click', label });
  }

  static trackImpression(label: string, category = 'UI Interaction') {
    this.logEvent({ event: 'impression', category, action: 'View', label });
  }

  static trackPageView(pageName: string) {
    this.logEvent({
      event: 'page_view',
      category: 'Navigation',
      label: pageName,
    });
  }

  static trackCustomEvent(event: string, data: Partial<AnalyticsEvent> = {}) {
    this.logEvent({ event, ...data });
  }
}

export default MockAnalytics;
