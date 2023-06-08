import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl,link }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
      <img src={imgUrl} />
        <div className="proj-txtx">
        
        <h4 class="white-title"><a href={link}>{title}</a></h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}
