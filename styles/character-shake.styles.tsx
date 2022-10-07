import styled from "styled-components";

interface CharacterProps {
  fontSize: number;
  color: string;
  hoverColor: string;
}
const CharacterShakeContainer = styled.div`
  display: flex;
`;

const CharacterShakeElement = styled.div`
  display: flex;
  margin-left: 15px;
  font-family: "Dosis";
`;

const CharacterShakeElementCharacter = styled.h1.attrs(
  (character: CharacterProps) => {}
)<CharacterProps>`
  font-size: ${(character) => character.fontSize}rem;
  font-weight: 600;
  color: ${(character) => character.color};
  :hover {
    animation: fa-shake 0.2s infinite;
    color: ${(character) => character.hoverColor};
  }
`;

export {
  CharacterShakeContainer,
  CharacterShakeElement,
  CharacterShakeElementCharacter,
};
