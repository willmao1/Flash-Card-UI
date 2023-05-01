import Card from "react-bootstrap/Card";

function MicromomentPreviewCard({ micromoment }) {
  return (
    <Card className="m-2">
      <Card.Body>
        <Card.Title>{micromoment.title}</Card.Title>
        <Card.Text className="text-truncate mb-1">
          {micromoment.description}
        </Card.Text>
        <Card.Text className="text-right">{micromoment.time} min</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default MicromomentPreviewCard;
