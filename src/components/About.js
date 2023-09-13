import { Link } from "react-router-dom";
import idn from "./../assets/img/idn.png";
import ubsi from "./../assets/img/ubsi.jpg";
import male from "./../assets/img/male.png";
import weight from "./../assets/img/weight.png";
import height from "./../assets/img/height.png";

const About = () => {
  return (
    <div className="bg-About text-center pt-5">
      <h1>About</h1>
      <div className="container p-3 mt-3 ">
        <div className="row">
          <div className="list-groups col-md-9 text-start p-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d316.8542823042292!2d106.6945519513162!3d-6.249261849639456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwMTQnNTcuNCJTIDEwNsKwNDEnNDAuNiJF!5e0!3m2!1sid!2sid!4v1694231801504!5m2!1sid!2sid"
              title="My Location"
              width="100%"
              height="100%"
              style={{
                border: "1px solid #909294",
                opacity: "70%",
              }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="list-groups col-md-3 text-start ">
            <Link to="#" class="list-group-item list-group-item-action">
              <img
                src={idn}
                width="20"
                style={{ margin: "20px" }}
                alt="Indonesian Flag"
              ></img>
              Jakarta
            </Link>
            <Link
              to="https://bsi.today/"
              target="blank"
              class="list-group-item list-group-item-action"
            >
              <img
                src={ubsi}
                width="20"
                style={{ margin: "20px" }}
                alt="Indonesian Flag"
              ></img>
              Bina Sarana Informatika
            </Link>
            <Link to="#" class="list-group-item list-group-item-action">
              <img
                src={male}
                width="20"
                style={{ margin: "20px" }}
                alt="Indonesian Flag"
              ></img>
              Male
            </Link>
            <Link to="#" class="list-group-item list-group-item-action">
              <img
                src={weight}
                width="20"
                style={{ margin: "20px" }}
                alt="Indonesian Flag"
              ></img>
              74 Cm
            </Link>
            <Link to="#" class="list-group-item list-group-item-action">
              <img
                src={height}
                width="20"
                style={{ margin: "20px" }}
                alt="Indonesian Flag"
              ></img>
              63 Kg
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
