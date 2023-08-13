import { useState } from "react";
import { styled } from "styled-components";

const NumberSelector = ({
  setError,
  error,
  selectedNumber,
  setSelectedNumber,
}) => {
  // these array is used for the boxes of the numbers
  const arrayNumber = [1, 2, 3, 4, 5, 6];

  const numberSelectorHandler = (value) => {
    setSelectedNumber(value);
    setError("");
  };

  return (
    <NumberSelectorContainer>
      <p className="error">{error}</p>
      <div className="flex">
        {arrayNumber.map((value, i) => (
          <Box
            isSelected={
              value === selectedNumber
              // this will return boolean
            }
            key={i}
            onClick={() => numberSelectorHandler(value)}
          >
            {value}
          </Box>

          // for selecting the value we have to pass the anonymos function for it such as () =>
        ))}
        {/* we use key for specific id AS we use i as an index */}
        {/* we use loop so it is easy for us */}

        {/* we use the map() function to take an array of numbers and double their values. We assign the new array returned by map() to the variable doubled and log it */}
      </div>
      <p> Select Number</p>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  .flex {
    display: flex;
    gap: 24px;
  }
  p {
    font-size: 24px;
    font-weight: 700px;
  }
  .error {
    color: red;
  }
`;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  /* the display and place items is used for the number to comes in the center of the box */
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  /* we use this props and ternary operator for black and white */
  color: ${(props) => (!props.isSelected ? "black" : "white")};
  /* we simply reverse the above operator */
`;
