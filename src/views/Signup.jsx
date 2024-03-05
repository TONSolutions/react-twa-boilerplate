import React, { useState } from 'react'
import {
  Page,
  Block,
  BlockTitle,
  List,
  ListInput,
  ListItem,
  Toggle,
  Button
} from 'konsta/react'
import { useNavigate } from 'react-router-dom'
import { useTelegram } from '../hooks/useTelegram'
import { BackButton } from '@vkruglikov/react-telegram-web-app'
// import logoMocked from '../assets/logo.svg'

// Import the useTWAEvent hook
import { useTWAEvent } from '@tonsolutions/telemetree-react'

export default function Signup() {
  const [email, setEmail] = useState('')
  const [projectName, setProjectName] = useState('')
  const [receiveEmail, setReceiveEmail] = useState(true)
  const [receiveTG, setReceiveTG] = useState(true)
  const [selectedLanguage, setSelectedLanguage] = useState('EN')
  const { user } = useTelegram()
  const first_name = user?.first_name
  const handle = user?.username
  const [disabled, setDisabled] = useState(true)
  let navigate = useNavigate()

  // Use the useTWAEvent hook to get the eventBuilder
  const eventBuilder = useTWAEvent()

  React.useEffect(() => {
    const validateEmail = (email) => {
      return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
    }
    const validate = () => {
      return validateEmail(email) && projectName.length > 1
    }
    const isValid = validate()
    setDisabled(!isValid)
    if (isValid) {
      window.Telegram.WebApp.MainButton.show()
      window.Telegram.WebApp.MainButton.onClick(handleSuccess)
      window.Telegram.WebApp.MainButton.setText('Submit')
    } else {
      window.Telegram.WebApp.MainButton.hide()
    }
    return () => {
      window.Telegram.WebApp.MainButton.hide()
      window.Telegram.WebApp.MainButton.offClick(handleSuccess)
    }
  }, [email, projectName])

  // Removed backend attribution

  // function submitFormData() {
  //   const formData = {
  //     name: first_name,
  //     telegramHandle: handle,
  //     email,
  //     projectName,
  //     receiveEmail,
  //     receiveTG,
  //     selectedLanguage,
  //     source: 'TWA'
  //   }

  //   fetch(import.meta.env.VITE_API_URL, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     mode: 'cors',
  //     body: JSON.stringify(formData)
  //   })
  //     .then((response) => {
  //       if (!response.ok) {
  //         if (response.status === 403) {
  //           throw new Error(
  //             'Access denied. You do not have permission to perform this action.'
  //           )
  //         } else {
  //           throw new Error(`${response.status}`)
  //         }
  //       }
  //       return response.json()
  //     })
  //     .then((data) => {
  //       navigate('/success', { state: { detail: data } })
  //     })
  //     .catch((error) => {
  //       navigate('/error', { state: { detail: error.message } })
  //     })
  // }

  function handleSuccess() {
    // Use the eventBuilder to track the event
    eventBuilder.track('Application submitted', {
      email: { email },
      projectName: { projectName },
      receiveEmail: { receiveEmail },
      receiveTG: { receiveTG },
      selectedLanguage: { selectedLanguage },
      stage: 'application'
    })
    navigate('/success')
  }

  function handleBack() {
    navigate('/')
  }

  return (
    <Page>
      <BackButton onClick={handleBack} />
      <Block padding="py-2" margin="my-7">
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
      <BlockTitle className="title_hack">About you</BlockTitle>
      <List strongIos insetIos>
        <ListInput
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <ListInput
          type="text"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          placeholder="Project Name"
        />
      </List>
      <BlockTitle className="title_hack">Communicaton</BlockTitle>
      <List strong inset>
        <ListItem
          label
          title="Receive Email Updates"
          after={
            <Toggle
              component="div"
              className="-my-1 k-color-brand-green"
              checked={receiveEmail}
              onChange={() => setReceiveEmail(!receiveEmail)}
            />
          }
        />
        <ListItem
          label
          title="Receive Telegram Updates"
          after={
            <Toggle
              component="div"
              className="-my-1 k-color-brand-green"
              checked={receiveTG}
              onChange={() => setReceiveTG(!receiveTG)}
            />
          }
        />
        <ListInput
          label="Language"
          type="select"
          dropdown
          value={selectedLanguage}
          onChange={(e) => setSelectedLanguage(e.target.value)}
          placeholder="Please choose..."
        >
          <option value="RU">Russian</option>
          <option value="EN">English</option>
          <option value="FA">Persian</option>
        </ListInput>
      </List>
      <Block padding="py-2" margin="my-7">
        <Button large disabled={disabled} onClick={handleSuccess}>
          Submit
        </Button>
      </Block>
    </Page>
  )
}
