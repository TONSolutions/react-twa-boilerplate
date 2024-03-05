## Cute little React TWA boilerpate with [Telemetree analytics](https://docs.ton.solutions/docs/getting-started) pre-installed.

No backend integration, mocked interactions.

As app will not render several elements and components that are dependant on Telegram specific functions and user settings passed in runtime, native components (eg. `MainButton`) are replaced or backed by static UI but kept in the code for reference.

Live TWA: [@ton_solutions_waitlist_bot](https://t.me/ton_solutions_waitlist_bot/).

### To run locally:

```

git clone https://github.com/TONSolutions/react-twa-boilerplate.git
cd react-twa-boilerplate
npm i
npm run dev

```

**Quick routes to bypass validation:**

`/signup`

`/success`

`/error`

### 5 steps to integrate (as in the boilerplate):

Install the package: `npm install @tonsolutions/telemetree-react --save` or `yarn add @tonsolutions/telemetree-react`

import the lib and wrap your app with the provider ([How to get your keys](https://docs.ton.solutions/docs/community-support)):

```js
import { TwaAnalyticsProvider } from '@tonsolutions/telemetree-react'

<TwaAnalyticsProvider
      projectId='YOUR_PROJECT_ID'
      apiKey='YOUR_API_KEY'
      appName='YOUR_APPLICATION_NAME'
    >
{/_ Rest of your app components _/}
</TwaAnalyticsProvider>
```

(working "Boilerplate" project is set in the code but it will not send events — `user is not set` error — unless being wrapped as an actual TWA)

Import in the target component: `import { useTWAEvent } from '@tonsolutions/telemetree-react';`

Initialize the event builder: `const eventBuilder = useTWAEvent();`

And track an event:

```js
const handleButtonClick = () => {
  eventBuilder.track('Button Clicked');
  // ... rest of your click handling logic
};
```

### Documentation

Full integration documentation incl data enrichment and wallet events is available in the [React SDK reference](https://docs.ton.solutions/docs/frontend-sdk).

---

Kudos to [KonstaUI](https://konstaui.com/) for dynamic iOS/Android context switching.

Built with passion by [TON Solutions](https://ton.solutions/) in New York City, USA 🇺🇸


