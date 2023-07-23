import React from 'react'
import { Button } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';

function Bootstrap() {
  return (
    <div>
    <div className='box marginTop'>
        <h1>Install Bootstraps</h1>
        <button onClick={()=> alert("Hello")} className='marginTop marginBottem'>click Me</button>
    </div>
    <div className='box Buttons marginTop margiBottem '>
    <Button variant="primary">Primary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="success">Success</Button>{' '}
      <Button variant="warning">Warning</Button>{' '}
      <Button variant="danger">Danger</Button>{' '}
      <Button variant="info">Info</Button>{' '}
      <Button variant="light">Light</Button>{' '}
      <Button variant="dark">Dark</Button>
      <Button variant="link">Link</Button>
    </div>
    <div className='box  marginTop margiBottem '>
        <div className='Alerts marginTop'>
    {[
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark',
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
          This is a {variant} alert—check it out!
        </Alert>
      ))}
      </div>
    </div>
    </div>
  )
}

export default Bootstrap