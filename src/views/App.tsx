import React from 'react'
import WelcomeView from './Welcome'
import SignupView from './Signup'
import ErrorView from './Error'
import SuccessView from './Success'
import { App } from 'konsta/react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { isAndroid } from 'react-device-detect'

// Import the TwaAnalyticsProvider from the telemetree-react package to enable analytics
import { TwaAnalyticsProvider } from '@tonsolutions/telemetree-react'

const requestWriteAccess = (retries = 3) => {
  if (
    window.Telegram.WebApp.initDataUnsafe.user?.allows_write_to_pm === false &&
    retries > 0
  ) {
    window.Telegram.WebApp.requestWriteAccess((access) => {
      if (!access) {
        requestWriteAccess(retries - 1)
      }
    })
  }
}

export default function WLApp() {
  React.useEffect(() => {
    window.Telegram.WebApp.expand()
    window.Telegram.WebApp.setHeaderColor('secondary_bg_color')
    requestWriteAccess()
  }, [])

  const theme = isAndroid ? 'material' : 'ios'

  return (
    // Wrap the App component with the TwaAnalyticsProvider. Replace these credentials with your own. You can get these variables via https://docs.ton.solutions/docs/community-support
    <TwaAnalyticsProvider
      projectId="76fbd597-d614-4506-b468-2361b0d9e419"
      apiKey="920f7a0c-e138-4f43-a9f8-dffb5d0543f0"
      appName="Boilerplate"
    >
      <App theme={theme}>
        <Router>
          <Routes>
            <Route path="/" element={<WelcomeView />} />
            <Route path="/signup" element={<SignupView />} />
            <Route path="/error" element={<ErrorView />} />
            <Route path="/success" element={<SuccessView />} />
          </Routes>
        </Router>
      </App>
    </TwaAnalyticsProvider>
  )
}
