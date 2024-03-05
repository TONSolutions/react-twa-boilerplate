import React from 'react'
import { Page, Block, BlockTitle, Button } from 'konsta/react'
import { useLocation } from 'react-router-dom'
import { BackButton } from '@vkruglikov/react-telegram-web-app'
import { useNavigate } from 'react-router-dom'
import iconError from '../assets/error.svg'

// Import the useTWAEvent hook
import { useTWAEvent } from '@tonsolutions/telemetree-react'

export default function Error() {
  // Use the useTWAEvent hook to get the eventBuilder
  const eventBuilder = useTWAEvent()

  let navigate = useNavigate()
  function handleBackError() {
    navigate('/signup')
  }
  const location = useLocation()
  const errorMessage = location.state?.detail

  // Use the eventBuilder to track a pageview and a an error
  eventBuilder.track('Application fail')

  React.useEffect(() => {
    window.Telegram.WebApp.MainButton.show()
    window.Telegram.WebApp.MainButton.onClick(handleBackError)
    window.Telegram.WebApp.MainButton.setText('Back')
  }, [])

  return (
    <Page>
      <BackButton onClick={handleBackError} />
      <Block padding="py-2" margin="my-7">
        <center>
          <img src={iconError} alt="Error" />
        </center>
      </Block>
      <BlockTitle className="center_hack" large>
        An error occurred
      </BlockTitle>
      <Block>
        <center>
          {errorMessage ? (
            <p>{errorMessage}</p>
          ) : (
            <p>An unknown error occurred.</p>
          )}
        </center>
      </Block>
      <Block padding="py-2" margin="my-7">
        <Button large onClick={handleBackError}>
          Go back
        </Button>
      </Block>
    </Page>
  )
}
