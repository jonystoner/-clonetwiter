import styled, {css} from 'styled-components';

import { LocationOn, Cake } from "../../Styles/icons"

export const Container = styled.div`
  display:flex;
  flex-direction:column;

  max-height: 100%;
  overflow-y: auto;
  
  scrollbar-width:none;
  ::-webkit-scrollbar{
    display:none;

  }
`;

export const Banner = styled.div`
  flex-shrink: 0;

  width: 100%;
  height: min(33vw, 199px);

  background: var(--twitter);

  position:relative;
`;  

export const  Avatar = styled.div`
  width: max(45px, min(135px, 22vw));
  height: max(45px, min(135px, 22vw));

  border: 3.75px solid var(--primary);
  background: var(--gray);
  border-radius: 50%;
  
  position: absolute;
  bottom: max(-60px,-10vw);
  left: 15px;
`;
export const  ProfileData = styled.div`
   padding: min(calc(10vw + 7px), 67px) 16px 0;

  display: flex;
  flex-direction: column;
  position: relative;
`;

export const EditButton = styled.div``;

const iconsCSS = css `
width:20px;
height:20px;

color: var(--gray);

`;

export const Location = styled(Cake)`
${iconsCSS}
`;

export const  CokeIcon = styled(LocationOn)`
${iconsCSS}
`;

export const  Followage = styled.div``;
