import React from 'react'
import { Page, Block, BlockTitle } from 'konsta/react'
import { useTelegram } from '../hooks/useTelegram'
import iconCheck from '../assets/check.svg'

// Import the useTWAEvent hook
import { useTWAEvent } from '@tonsolutions/telemetree-react'

export default function Success() {
  // Use the useTWAEvent hook to get the eventBuilder
  const eventBuilder = useTWAEvent()

  React.useEffect(() => {
    window.Telegram.WebApp.MainButton.hide()
    window.Telegram.WebApp.BackButton.hide()

    const { tg } = useTelegram()
    const queryId = tg.initDataUnsafe?.query_id

    // Use the eventBuilder to track a pageview and a target successful event
    eventBuilder.track('Application success')

    // Removed backend attribution

    // const notifySignupSuccess = () => {
    //   const backendUrl =
    //     'server_api_link'
    //   fetch(backendUrl, {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     mode: 'cors',
    //     body: JSON.stringify({ queryId })
    //   })
    //     .then((response) => response.json())
    //     .then((data) => console.log('Success message sent:', data))
    //     .catch((error) =>
    //       console.error('Error notifying signup success:', error)
    //     )
    // }

    // notifySignupSuccess()
  }, [])

  return (
    <Page>
      <Block padding="py-2" margin="my-7">
        <center>
          <img src={iconCheck} alt="Success" />
        </center>
      </Block>
      <BlockTitle className="center_hack" large>
        Application complete!
      </BlockTitle>
      <Block>
        <center>
          <p className="text-md">
            Thank you so much for finishing your application! We’ll be in touch
            shortly!
          </p>
        </center>
      </Block>
    </Page>
  )
}
