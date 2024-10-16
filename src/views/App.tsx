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
      projectId="8b53b3a3-9f20-4f09-8d6c-8c0872f439e5"
      apiKey="f243ed55-d729-4dd2-96e4-47156ee5eb8a"
      appName="CoolApp"
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
