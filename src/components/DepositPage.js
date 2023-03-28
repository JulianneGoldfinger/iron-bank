import { Card, Form, Button } from "react-bootstrap"
import { useContext, useState } from "react"
import BalanceContext from "../BalanceContext"

export function DepositPage() {

  const [balance, setBalance] = useContext(BalanceContext);

  const [amount, setAmount] = useState('');

  function submit() {

    const inputAmount = parseInt(amount);

    if(isNaN(inputAmount)){
      window.alert('Please enter a numer')
      return;
    }

    if(inputAmount < 0){
      window.alert('Please enter a positive number')
      return;
    }
    setBalance(balance + inputAmount);
    setAmount('')
    setTimeout(() => {
      window.alert('Successfully deposited funds')
    }, 50);
  }
  

  return (
    <Card className="bg-dark text-white homepage" >
      <Card.Img src="https://watchersonthewall.com/wp-content/uploads/2015/07/1359951075553572165.jpg" alt="Card image" className="hompage-image"/>
      <Card.Body>
      <Card.Title>Deposit funds</Card.Title>
      <Card.Text> {`Current balance: ${balance} gold coins`} </Card.Text>
    <Form >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Amount</Form.Label>
        <Form.Control type="text" placeholder="Enter amount" onChange={(event) => setAmount(event.target.value)} value={amount}/>
      </Form.Group>

      <Button variant="primary" type="submit" onClick={submit} disabled={amount === ''}>
        submit
      </Button>
    </Form>
          </Card.Body>
    </Card>
  )
}
