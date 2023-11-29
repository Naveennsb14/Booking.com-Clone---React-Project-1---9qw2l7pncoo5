import ReactDOM from "react-dom";
import "./paymentmodal.css";
import { useNavigate } from "react-router-dom";

const Paymentmodal = ({ closeModal, inputname }) => {
  console.log("input", inputname);
  const navigate=useNavigate()
  const handelnavigate = () => {};
  const handleclose=()=>{
    navigate("/")

  }

  return ReactDOM.createPortal(
    <div className="modal-container">
      <div className="feedback-container">
        <h2 className="payment-confirm">
          Congratulations! {inputname} Your Payment is Succesfull
        </h2>
        <h3 className="greeting"> Thanks, for using our application!</h3>

      </div>
        <button className="confirmation-page" onClick={handleclose}>
          Close
        </button>
    </div>,
    document.querySelector("#modal-root")
  );
};

export default Paymentmodal;
