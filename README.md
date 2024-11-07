> [!IMPORTANT]  
> This branch is using [Telegram JS script](https://telegram.org/js/telegram-web-app.js). If you are building with NextJS or you generally prefer NPM package instead of JS script, please look at [this branch](https://github.com/TONSolutions/react-twa-boilerplate/tree/sdk-dev-boilerplate) for a [twa-dev/sdk](https://www.npmjs.com/package/@twa-dev/sdk) approach.

---

![](https://tc-images-api.s3.eu-central-1.amazonaws.com/gif_cropped.gif)

## Cute little React TWA boilerpate with [Telemetree analytics](https://docs.telemetree.io/quickstart) pre-installed.

![Static Badge](https://img.shields.io/badge/build-passing-brightgreen?style=flat) ![GitHub top language](https://img.shields.io/github/languages/top/tonsolutions/react-twa-boilerplate) ![GitHub commit activity](https://img.shields.io/github/commit-activity/w/tonsolutions/react-twa-boilerplate)

![Alt](https://repobeats.axiom.co/api/embed/eca818f885ec3c548dde1ef48b32efd50a8c077c.svg "Repobeats analytics image")


# Telemetree SDKs for Telegram Mini App Analytics
### One click deploy on Vercel
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FTONSolutions%2Freact-twa-boilerplate&project-name=telemetree-twa-boilerplate&repository-name=telemetree-twa-boilerplate)
---
Telemetree is a comprehensive free analytics tool designed specifically for **Telegram Mini Apps**. With our SDKs, developers, marketers, and product managers can easily track and optimize user engagement, making data-driven decisions to boost user acquisition and retention. Telemetree simplifies **Analytics for Telegram Mini Apps** by delivering insights into user behaviors, acquisition channels, and in-app interactions.

## Key Features
- **Real-Time Analytics**: Monitor user activity within your Telegram Mini App in real-time.
- **User Retention Metrics**: Track returning users and pinpoint which features encourage app retention.
- **Web3 data**: discover web3 metrics associated with your users.
- **Seamless Integration**: Our SDKs are lightweight and integrate easily with auto event mapping.
- **Telegram-native**: Telemetree is built natively for Telegram.
- **User segmentation**: API for personalized notifications based on cohorts, completed actions. web3 data and more.
- **Free tier** with wide limits.

## Why Use Telemetree for Telegram Mini App Analytics?

Telemetree is uniquely focused on the needs of Telegram Mini App developers, providing tailored metrics and insights that help you grow and retain your user base efficiently. As the demand for Analytics for Telegram Mini Apps grows, Telemetree remains at the forefront, offering tools that cater specifically to the Telegram ecosystem.

Start capturing valuable insights with Telemetree and make data-driven decisions for your app's growth on Telegram.

## Resources
Consider visiting our resources for more info about the state of the Telegram Mini Apps ecosystem and Telegram analytics.

- [Website](https://www.telemetree.io/)
- [Twitter](https://x.com/telemetree_HQ) 
- [Telegram channel](https://t.me/telemetree_en)
- [LinkedIn](https://linkedin.com/company/telemetree) 
- [Medium](https://medium.com/@telemetree)
- [Documentation](https://docs.telemetree.io/)

## How to Use

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

## Other SDKs
Telemetree SDKs are available for various frameworks and environments, making it easy to incorporate powerful analytics into any Telegram Mini App.
- React SDK: https://github.com/TONSolutions/telemetree-react
- Node.js SDK: https://github.com/TONSolutions/telemetree-node
- .NET SDK: https://github.com/MANABbl4/Telemetree.Net (community-supported)

---

Kudos to [KonstaUI](https://konstaui.com/) for dynamic iOS/Android context switching.

Built with passion by [TON Solutions](https://ton.solutions/) in New York City, USA 🇺🇸


