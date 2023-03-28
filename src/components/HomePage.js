import { Card } from "react-bootstrap"

export function HomePage() {

  

  return (
    <Card className="bg-dark text-white homepage">
      <Card.Img src="https://watchersonthewall.com/wp-content/uploads/2015/07/1359951075553572165.jpg" alt="Card image" className="hompage-image"/>
      <Card.Body>
        <Card.Title>Iron Bank of Braavos</Card.Title>
        <Card.Text>
          Supporting the Iron Throne since 169 AC.
        </Card.Text>
      </Card.Body>
    </Card>
  )
}
