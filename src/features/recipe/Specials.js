import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ingredientSelect } from "../special/ingredientSlice";
import { isEmpty } from "lodash";

function Specials({ id }) {
  const [special, setSpecial] = useState([]);
  const { ingredients } = useSelector(ingredientSelect);

  useEffect(() => {
    setSpecial(
      ingredients.find((ingredient) => ingredient.ingredientId === id)
    );
  }, [id, ingredients]);

  return (
    <div>
      {!isEmpty(special) && (
        <div key={special.uuid}>
          <div style={{ paddingLeft: "3%" }}>
            <div
              style={{
                fontWeight: "bold",
                fontSize: "20px",
                paddingBottom: "5px",
              }}
            >
              Specials:
            </div>
            <div>{special.title}</div>
            <div>{special.text}</div>
            <div>{special.type}</div>
            <div>{special.geo}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Specials;
