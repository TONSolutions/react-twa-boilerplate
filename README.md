> [!IMPORTANT]  
> This branch is using [twa-dev/sdk](https://www.npmjs.com/package/@twa-dev/sdk) instead of Telegram JS script. This is particularly useful for NextJS apps.

---

![](https://tc-images-api.s3.eu-central-1.amazonaws.com/gif_cropped.gif)

## Cute little React TWA boilerpate with [Telemetree analytics](https://docs.telemetree.io/quickstart) pre-installed.

![Static Badge](https://img.shields.io/badge/build-passing-brightgreen?style=flat) ![GitHub top language](https://img.shields.io/github/languages/top/tonsolutions/react-twa-boilerplate) ![GitHub commit activity](https://img.shields.io/github/commit-activity/w/tonsolutions/react-twa-boilerplate)

![Alt](https://repobeats.axiom.co/api/embed/eca818f885ec3c548dde1ef48b32efd50a8c077c.svg "Repobeats analytics image")

### One click deploy on Vercel
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FTONSolutions%2Freact-twa-boilerplate&project-name=telemetree-twa-boilerplate&repository-name=telemetree-twa-boilerplate)
---

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

import the lib and wrap your app with the provider (you obtain these credentials on a [Dashboard](https://app.telemetree.io)):

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


