import { useState } from "react";
import Nav from "../../components/nav/Nav";
import "./payment.css";
import Paymentmodal from "../../components/paymentmodal/Paymentmodal";
import { useNavigate } from "react-router-dom";



const Payment = () => {
  const [showModal, setShowModal] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const navigate = useNavigate();

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handelFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true)
    openModal();
  };
  return (
    <div className={`payment-container ${formSubmitted ? 'invisible': " "}`}>
      <Nav />
      <div id="checkOut">
        <h1 className="checkout-para">Checkout</h1>
        <h4 className="payment-para">Payment Details</h4>
        <form onSubmit={handelFormSubmit}>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="cardName" >Card Holder Name</label>
              <input
                type="text"
                class="form-control"
                id="cardName"
                placeholder="John Doe"
                required
              />
            </div>
            <div class="form-group col-md-6">
              <label for="cardNum">Card Number</label>
              <input
                type="password"
                class="form-control"
                id="cardNum"
                placeholder="0000-0000-0000"
                required
              />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-4">
              <label for="endDate">Expiration Date: Month</label>
              <select id="endDate" class="form-control" required>
                <option selected>01</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
              </select>
            </div>
            <div class="form-group col-md-4">
              <label for="endDate">Year</label>
              <select id="endDate" class="form-control" required>
                <option selected>2023</option>
                <option>2024</option>
                <option>2025</option>
                <option>2026</option>
                <option>2027</option>
              </select>
            </div>

            <div class="form-group col-md-4">
              <label for="cVV">Cvv</label>
              <input
                type="password"
                class="form-control"
                id="cVV"
                placeholder="123"
                required
              />
            </div>
          </div>

          <button class="btn btn-primary" >submit</button>
        </form>
      </div>
      {showModal && <Paymentmodal closeModal={closeModal}/>}
    </div>
  );
};

export default Payment;
