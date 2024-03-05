import React from 'react'
import { Page, Block, BlockTitle, List, ListItem, Button } from 'konsta/react'
import { useNavigate } from 'react-router-dom'
import { useTelegram } from '../hooks/useTelegram'
// import logoMocked from '../assets/logo.svg'
import iconPerson from '../assets/person.svg'
import iconChat from '../assets/chat.svg'
import iconCard from '../assets/card.svg'
import iconPrint from '../assets/print.svg'

// Import the useTWAEvent hook
import { useTWAEvent } from '@tonsolutions/telemetree-react'

export default function Welcome() {
  // Use the useTWAEvent hook to get the eventBuilder
  const eventBuilder = useTWAEvent()

  let navigate = useNavigate()
  function handleSignup() {
    // Use the eventBuilder to track the event
    eventBuilder.track('Waitlist application started', {
      label: 'Join button', // Additional info about the button
      stage: 'landing' // Categorize the event
    })
    navigate('/signup')
  }
  const { user } = useTelegram()

  // Use the eventBuilder to track a pageview
  eventBuilder.track('Main page visit')

  React.useEffect(() => {
    window.Telegram.WebApp.MainButton.show()
    window.Telegram.WebApp.MainButton.onClick(handleSignup)
    window.Telegram.WebApp.MainButton.setText('Join')
  }, [])

  return (
    <Page>
      <Block margin="my-7">
        <center>
          <div className="avatar_by_james_cameron">
            <div className="logo">
              <img
                src="logo.png"
                alt="TON Solutions"
                width="120"
                height="120"
              />
            </div>
          </div>
        </center>
      </Block>
      <BlockTitle className="center_hack" large>
        {/* Join us, {user?.first_name}! */}
        Join us, User!
      </BlockTitle>
      <Block>
        <center>
          <p className="text-md">
            Get the power of advanced user event tracking and financial insights
            with minimal setup.
          </p>
        </center>
      </Block>
      <List strongIos insetIos>
        <ListItem
          titleFontSizeIos="text-[15px]"
          chevronMaterial={false}
          title="Effortless Tracking"
          text="Install a simple library and start collecting valuable data!"
          media={
            <img
              src={iconPerson}
              alt="Effortless Tracking"
              width="30"
              height="30"
            />
          }
        />
        <ListItem
          titleFontSizeIos="text-[15px]"
          chevronMaterial={false}
          title="Traffic Sources"
          text="Learn where your users come from and what drives them to convert!"
          media={
            <img src={iconChat} alt="Traffic Sources" width="30" height="30" />
          }
        />
        <ListItem
          titleFontSizeIos="text-[15px]"
          chevronMaterial={false}
          title="Engagement Analysis"
          text="Analyze the user journey from the very first interaction!"
          media={
            <img
              src={iconCard}
              alt="Engagement Analysis"
              width="30"
              height="30"
            />
          }
        />
        <ListItem
          titleFontSizeIos="text-[15px]"
          chevronMaterial={false}
          title="Deep Insights"
          text="Expand the value of your audience with web3 wallet tracking"
          media={
            <img src={iconPrint} alt="Deep Insights" width="30" height="30" />
          }
        />
      </List>
      <Block padding="py-2" margin="my-7">
        <Button large onClick={handleSignup}>
          Join
        </Button>
      </Block>
    </Page>
  )
}
