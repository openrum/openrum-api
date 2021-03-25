exports.getItem = (body) => {
  const today = new Date();
  const ttl = new Date();
  ttl.setMonth(ttl.getMonth() + 3);
  if (!body) {
    return {};
  }
  const item = {
    fcp: (body.firstContenfulPaint ?
      parseInt(body.firstContenfulPaint, 10) : 0),
    firstPaint: (body.firstPaint ? parseInt(body.firstPaint, 10) : 0),
    lcp: (body.largestContentfulPaint ?
      parseInt(body.largestContentfulPaint, 10) : 0),
    compression: (body.compressionRatio ? parseFloat(body.compressionRatio) : 1),
    dnsLookup: (body.dnsLookup ? parseInt(body.dnsLookup, 10) : 0),
    domContentLoaded: (body.domContentLoaded ? parseInt(body.domContentLoaded, 10) : 0),
    domLoad: (body.domLoad ? parseInt(body.domLoad, 10) : 0),
    fullyLoad: (body.fullyLoad ? parseInt(body.fullyLoad, 10) : 0),
    iToC: (body.iteractiveToComplete ? parseInt(body.iteractiveToComplete, 10) : 0),
    loadTime: (body.loadTime ? parseInt(body.loadTime, 10) : 0),
    origin: body.origin,
    pageLoadTime: (body.pageLoadTime ? parseInt(body.pageLoadTime, 10) : 0),
    requestResponseTime: (body.requestResponseTime ? parseInt(body.requestResponseTime, 10) : 0),
    requestTime: (body.requestTime ? parseInt(body.requestTime, 10) : 0),
    responseTime: (body.responseTime ? parseInt(body.responseTime, 10) : 0),
    timeToInteractive: (body.timeToInteractive ? parseInt(body.timeToInteractive, 10) : 0),
    ttfb: (body.ttfb ? parseInt(body.ttfb, 10) : 0),
    latency: (parseInt(body.latency, 10) ? parseInt(body.latency, 10) : 0),
    browser: body.browser,
    cls: (body.cls ? parseFloat(body.cls.toFixed(3)) : -1),
    device: body.device,
    date: today.toISOString().slice(0, 10),
    timestamp: today.getTime(),
    connectionType: (body.effectiveConnectionType ?
      body.effectiveConnectionType : ''),
    ttl: ttl.getTime()
  };

  return item;
};
