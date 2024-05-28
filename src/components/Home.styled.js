import styled from "styled-components";

export const MainContainer = styled.main`
  padding: 20px;
  max-width: 960px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
  line-height: 1.6;
`;

export const Header = styled.h1`
  text-align: center;
  color: #333;
`;

export const StyledImage = styled.img`
  display: block;
  margin: 20px auto;
  max-width: 100%;
  height: auto;
`;

export const Paragraph = styled.p`
  color: #555;
  margin-bottom: 20px;
`;

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const ListItem = styled.li`
  background: #f9f9f9;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

export const MediaQuery = styled.div`
  @media (max-width: 600px) {
    main {
      padding: 10px;
    }

    h1 {
      font-size: 24px;
    }

    p {
      font-size: 14px;
    }
  }
`;
