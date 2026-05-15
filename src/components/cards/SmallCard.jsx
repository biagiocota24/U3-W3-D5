import { Card } from "react-bootstrap";

const SmallCard = function (props) {
  return (
    <Card
      className="bg-transparent border-0 text-white hero-card d-flex flex-column "
      style={{ width: "150px" }}
    >
      <img src={props.imgUrl} alt="cover" className="rounded-3" />
      <p className="pt-1 text-secondary text-truncate">{props.title}</p>
    </Card>
  );
};


export default SmallCard