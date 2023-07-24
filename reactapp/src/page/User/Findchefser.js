import { Link, useNavigate } from "react-router-dom";
import chef from '../../css-components/Chef.png';
import '../../css-components/Findser.css';

function Findchefser() {
  const navigate = useNavigate();
  return (
    <>
      <div className="card">
        <div className="profile1">
        </div>
        <p></p>
        <h1>NAME : GURU</h1>
        <p></p>
        <h1>EXPERIENCE : 4 years</h1>
        <p></p>
        <h1>RATING : 4.5 ★★★★</h1>
        <Link to="/ViewProf"><button className="serbut" type="submit" >
                VIEW PROFILE
            </button></Link>
      </div>
    </>
  );
}

export default Findchefser;