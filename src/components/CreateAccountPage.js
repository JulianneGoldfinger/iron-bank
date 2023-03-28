import { Card, Form, Button } from "react-bootstrap"
import { useState } from "react"
import { useContext } from "react";
import AccountContext from '../AccountContext';

export function CreateAccountPage() {

  const [accounts, setAccounts] = useContext(AccountContext);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function submit(event) {
    event.preventDefault();

    if(name === ''){
      window.alert('Please enter a name')
      return;
    }

    if(email === ''){
      window.alert('Please enter an email')
      return;
    }

    if(password.length < 8){
      window.alert('Password must be at least 8 characters')
      return;
    }

    const account = {
      name: name,
      email: email,
      password: password,
    }
    setAccounts(accounts => [...accounts, account]);
    setName('')
    setEmail('')
    setPassword('')
    setTimeout(() => {
      window.alert('Successfully Created Account')
    }, 50);
  }
  

  return (
    <Card className="bg-dark text-white homepage" >
      <Card.Img src="https://watchersonthewall.com/wp-content/uploads/2015/07/1359951075553572165.jpg" alt="Card image" className="hompage-image"/>
      <Card.Body>
      <Card.Title>Create Account</Card.Title>
    <Form >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Full name</Form.Label>
        <Form.Control type="text" placeholder="Enter full name" onChange={(event) => setName(event.target.value)} value={name}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(event) => setEmail(event.target.value)} value={email}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(event) => setPassword(event.target.value)} value={password} />
      </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicName">
      </Form.Group>

      <Button variant="primary" type="submit" onClick={submit} disabled={name === '' && password === '' && email === ''}>
        {accounts.length === 0 ? 'Create Account' : 'Create Another Account'}
      </Button>
    </Form>
          </Card.Body>
    </Card>
  )
}
