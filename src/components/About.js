import { Link } from "react-router-dom";
import idn from "./../assets/img/idn.png";
import ubsi from "./../assets/img/ubsi.jpg";
import male from "./../assets/img/male.png";
import weight from "./../assets/img/weight.png";
import height from "./../assets/img/height.png";

const About = () => {
  return (
    <div className="container-fluid bg-About text-center pt-5 text-white-50">
      <h1>About</h1>
      <div className="container p-3 mt-3">
        <div className="row">
          <div className="list-groups col-md-7 text-start pb-5 d-flex justify-content-center align-items-center">
            <p className="text-center m-3">
              Halo, saya seorang programmer pemula yang sangat tertarik dengan
              dunia pemrograman. Saya berfokus pada pengembangan web, saya
              menghadapi banyak tantangan selama perjalanan belajar saya, tetapi
              saya terus berusaha memperbaiki diri. Jika ingin berbicara atau
              berkolaborasi dalam suatu proyek pemrograman, hubungi saya di
              halaman kontak.
              <hr />
              <strong>
                Saya berharap kita bisa mengerjakan suatu proyek bersama.
              </strong>
            </p>
            {/* <iframe
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
            ></iframe> */}
          </div>
          <div
            className="list-groups col-md-4 text-start"
            style={{ borderRadius: "50px" }}
          >
            <Link
              to="#"
              class="list-group-item list-group-item-action bg-dark text-white-50"
            >
              <img
                src={idn}
                width="20"
                style={{ margin: "20px" }}
                alt="Indonesian Flag"
              ></img>
              Pondok Aren, Tangerang Selatan 15226
            </Link>
            <Link
              to="https://bsi.today/"
              target="blank"
              class="list-group-item list-group-item-action bg-dark text-white-50"
            >
              <img
                src={ubsi}
                width="20"
                style={{ margin: "20px" }}
                alt="Indonesian Flag"
              ></img>
              Universitas Bina Sarana Informatika
            </Link>
            <Link
              to="#"
              class="list-group-item list-group-item-action bg-dark text-white-50"
            >
              <img
                src={male}
                width="20"
                style={{ margin: "20px" }}
                alt="Indonesian Flag"
              ></img>
              Male
            </Link>
            <Link
              to="#"
              class="list-group-item list-group-item-action bg-dark text-white-50"
            >
              <img
                src={weight}
                width="20"
                style={{ margin: "20px" }}
                alt="Indonesian Flag"
              ></img>
              74 Cm
            </Link>
            <Link
              to="#"
              class="list-group-item list-group-item-action bg-dark text-white-50"
            >
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
