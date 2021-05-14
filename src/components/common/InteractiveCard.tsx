import React from "react";
import Card, { CardProps } from "@material-ui/core/Card";
import "./InteractiveCard.css";

const InteractiveCard: React.FC<CardProps> = (props) => {
  return (
    <div className="interactive-card">
      <Card {...props} />
    </div>
  );
};

export default InteractiveCard;
