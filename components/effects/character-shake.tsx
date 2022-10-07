import React from "react";
import {
  CharacterShakeContainer,
  CharacterShakeElement,
  CharacterShakeElementCharacter,
} from "../../styles/character-shake.styles";

interface CharacterShakeProps {
  elements: string;
  fontSize: number;
  color: string;
  hoverColor: string;
}
const CharacterShake = (props: CharacterShakeProps) => {
  const elementsSplit = props.elements?.split(" ");
  const arraysOfCharacters: string[][] = [];

  elementsSplit.forEach((element) => {
    const characters = element.split("");
    arraysOfCharacters.push(characters);
  });

  return (
    <CharacterShakeContainer>
      {arraysOfCharacters.map((element, index) => {
        return (
          <CharacterShakeElement key={index}>
            {element.map((Character, index) => {
              return (
                <CharacterShakeElementCharacter
                  key={index}
                  fontSize={props.fontSize}
                  color={props.color}
                  hoverColor={props.hoverColor}
                >
                  {Character}
                </CharacterShakeElementCharacter>
              );
            })}
          </CharacterShakeElement>
        );
      })}
    </CharacterShakeContainer>
  );
};

export default CharacterShake;
