import React from "react";
import "./Trainer.css";

const plans = [
  {
    title: "Pass 'Trial'",
    price: "$ 0",
    features: [
      "Access to the gym from 8:00 to 14:00",
      "The trainer on duty will introduce you to the gym",
    ],
  },
  {
    title: "Pass 'Easy Start'",
    price: "$ 119",
    features: [
      "Visit without restrictions 24/7",
      "Individual training program",
      "Access to the VTRAINER application",
      "Trainer support",
    ],
  },
  {
    title: "Pass 'Free Time'",
    price: "$ 49",
    features: [
      "The entrance time is from 14:00 to 16:00",
      "Without suspension of gym membership",
      "Trainer on duty will introduce you",
    ],
  },
  {
    title: "Pass '1 Month 24/7'",
    price: "$ 85",
    features: [
      "Visit without restrictions 24/7",
      "Trainer on duty will introduce you",
    ],
  },
  {
    title: "Pass 'In Shape (AM)'",
    price: "$ 165",
    features: [
      "Training in mini-groups until 14:00",
      "Without suspension",
      "3 times a week",
      "Trainer support",
    ],
  },
  {
    title: "Pass 'In Shape (PM)'",
    price: "$ 195",
    features: [
      "Training in mini-groups until 17:00",
      "Without suspension",
      "3 times a week",
      "Trainer support",
    ],
  },
];

const Trainer = () => {
  return (
    <div className="trainer">
      <h1>Gym membership</h1>

      <div className="cards">
        {plans.map((plan, index) => (
          <div className="card" key={index}>
            <h2>{plan.title}</h2>
            <h3>{plan.price}</h3>

            <ul>
              {plan.features.map((item, i) => (
                <li key={i}>✔ {item}</li>
              ))}
            </ul>

            <button>Buy</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trainer;