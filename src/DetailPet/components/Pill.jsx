import { Badge } from "react-bootstrap";

export const Pill = ({ status, color = "purple" }) => {
  return (
    <>
      <style type="text/css">
        {`
          .pill-purple{
            background-color: rgba(238, 225, 255, 1) !important; 
            color: rgba(151, 71, 255, 1);
            font-size: 12px;
            display: grid;
            place-items: center;
            border: 1px solid rgba(151, 71, 255, 1);
            padding: 8px 16px;
            height: min-content;
            font-weight: 400;
          }
        `}
      </style>

      <Badge className={`pill-${color}`} pill>
        {status}
      </Badge>
    </>
  );
};
