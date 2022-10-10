import Image from "next/image";
import { Element } from "react-scroll";
import styled from "styled-components";

const ExperiencePageContainer = styled(Element)`
  height: 100vh;
  flex-direction: row;
  display: flex;
  font-size: 25px;
  flex-basis: auto;
  flex-wrap: wrap;
  align-items: center;
`;

const ExperiencePageItem = styled.div`
  height: 300px;
  justify-content: center;
  display: flex;
  flex: 1 1 340px;
  flex-direction: column;
  text-align: center;
  border: 5px solid #167d7f;
  border-radius: 8px;
  margin: 10px;
  &:hover {
    border: 2px solid #dcbaa9;
    opacity: 0.8;
  }
`;

const ExperiencePageItemTechnologies = styled.span``;

const ExperiencePageItemRole = styled.div`
  flex-direction: column;
  display: flex;
`;

const ExperiencePageItemRoleImage = styled(Image)``;

const ExperiencePageItemRoleTitle = styled.span``;

const ExperiencePageItemRoleDates = styled.span``;
export {
  ExperiencePageContainer,
  ExperiencePageItem,
  ExperiencePageItemTechnologies,
  ExperiencePageItemRole,
  ExperiencePageItemRoleImage,
  ExperiencePageItemRoleTitle,
  ExperiencePageItemRoleDates,
};
