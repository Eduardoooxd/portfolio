'use client';

import { ENV_VARS } from '@/lib/environment';
import posthog from 'posthog-js';
import { PostHogProvider } from 'posthog-js/react';

interface CSPostHogProviderProps {
  children: React.ReactNode;
}

const { NEXT_PUBLIC_POSTHOG_KEY, NEXT_PUBLIC_POSTHOG_HOST, NEXT_PUBLIC_NODE_ENV } = ENV_VARS;

if (typeof window !== 'undefined') {
  posthog.init(NEXT_PUBLIC_POSTHOG_KEY, {
    api_host: NEXT_PUBLIC_POSTHOG_HOST,
    person_profiles: 'identified_only',
    loaded: (posthog) => {
      if (NEXT_PUBLIC_NODE_ENV === 'development') {
        posthog.debug(); // debug mode in development
      }
    },
  });
}

export default function CSPostHogProvider({ children }: CSPostHogProviderProps) {
  return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
}
