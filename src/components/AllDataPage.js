import {Table, Card} from 'react-bootstrap'
import {useContext} from 'react'
import AccountContext from '../AccountContext';

export function AllDataPage() {
  const [accounts, setAccounts] = useContext(AccountContext);

  return (
    <Card className="bg-dark text-white homepage">
      <Card.Img src="https://watchersonthewall.com/wp-content/uploads/2015/07/1359951075553572165.jpg" alt="Card image" className="hompage-image"/>
      <Card.Body>
        <Card.Title>All client information</Card.Title>

    <Table striped variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Password</th>
        </tr>
      </thead>
      <tbody>
      {accounts.map((account, index) => {
        return (
            <tr>
              <td>{index + 1}</td>
              <td>{account.name}</td>
              <td>{account.email}</td>
              <td>{account.password}</td>
            </tr>
        )
      })}
      </tbody>
    </Table>
      </Card.Body>
    </Card>
  )
}
