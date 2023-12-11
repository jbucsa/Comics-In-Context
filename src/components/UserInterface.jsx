import React, { useContext } from "react"
import StylesContext from "./StylesContext"
import CollectorButton from './CollectorButton'
import SubmitForm from './SubmitForm'

export default function UserInterface () {
  const buttonStyling = React.useContext(StylesContext);

  return (
    <div>
      <h2>We carry the latest and greatest editions of your favorite comic books!</h2>
      <h2>Are you a collector?</h2>
      <CollectorButton />

      <h2>Have a special request? Click here to fill out our form</h2>
      <SubmitForm />
    </div>
  )
}