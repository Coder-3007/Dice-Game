import { useState } from "react";
import { styled } from "styled-components";

const RoleDice = ( {roleDice,currentDice}) => {
  

  

  return (
    <DiceContainer>
      <div className="dice" onClick={roleDice}>
        <img src={`/images/dices/dice_${currentDice}.png`} />
        {/* the above method is used for changes different dices */}
      </div>
      <p>Click On Dice To Roll</p>
    </DiceContainer>
  );
};

export default RoleDice;

const DiceContainer = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .dice {
    cursor: pointer;
  }

  p {
    font-size: 24px;
  }
`;
