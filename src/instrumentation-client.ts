import * as Sentry from '@sentry/nextjs'

export function register() {
  Sentry.init({
    dsn: 'https://b87693c7e7614cbbf871f6e54581dbce@o4509819102167040.ingest.de.sentry.io/4509819117830224',
    tracesSampleRate: 0.1,
    debug: false
  })
}

export const onRouterTransitionStart = Sentry.captureRouterTransitionStart
