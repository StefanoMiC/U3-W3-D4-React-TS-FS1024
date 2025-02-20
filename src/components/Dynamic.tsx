import { useNavigate, useParams } from "react-router-dom";

const Dynamic = () => {
  const navigate = useNavigate();

  const params = useParams();
  return (
    <div onClick={() => navigate("/")}>
      <h4>Parameters loaded:</h4>
      <p>
        Lat: {params.lat}, Lon: {params.lon}
      </p>
    </div>
  );
};

export default Dynamic;
