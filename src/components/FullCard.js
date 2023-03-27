import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button"
function FullCard({ micromoment }) {
  return (
    <>
      <Card className="m-2">
        <Card.Body>
          <Card.Title>{micromoment.title}</Card.Title>
          <Card.Subtitle>Description:</Card.Subtitle>
          <Card.Text className="mb-1">
            {micromoment.description}
          </Card.Text>
          <Card.Subtitle>Example:</Card.Subtitle>
          <Card.Text className="mb-1">
            {micromoment.example}
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Text className="text-center">{micromoment.time} min</Card.Text>
      </Card>
      <Button className="right-align" value = ".float-right">Done</Button>
    </>
  );
}

export default FullCard;
