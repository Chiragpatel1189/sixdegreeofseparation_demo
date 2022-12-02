import styled from "styled-components";

export const ConnectionWrapper = styled.div`
  width: 100%;

  .container {
    padding: 15px;
  }
`;
export const ConnectionSelection = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 15px;
  grid-gap: 15px;
  /* width: 600px; */

  > div {
    width: 50%;

    .userBox {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 8px;
      grid-gap: 8px;
      border: 1px solid #4f9cbd;
      border-radius: 15px;
      padding: 15px;
      flex-wrap: wrap;
    }
  }
`;

export const UserNode = styled.div`
  max-width: 250px;
  width: 100px;
  height: auto;
  background-color: #fefefe;
  margin-bottom: 8px;
  cursor: pointer;
  padding: 8px 15px;
  border-radius: 5px;
  box-shadow: 1px 1px 3px 1px #0e0e0e50;
  transition: all 0.2s ease-in-out;
  text-transform: capitalize;

  &:hover {
    box-shadow: 0px 0px 0px 0px #0e0e0e50;
    background-color: #afffeb;
  }

  &.selected {
    box-shadow: 0px 0px 0px 0px #0e0e0e50;
    background-color: #4dffd3;
  }

  &.userone {
    pointer-events: none;
    background-color: #ffffff;
    box-shadow: 0px 0px 0px 0px #0e0e0e50;
  }
`;

export const ConnectionPaths = styled.div`
  .connectionPath {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 5px;
    grid-gap: 5px;

    .connectionNode {
      display: flex;
      align-items: center;
      justify-content: center;
      p {
        margin: 0;
        padding: 8px 15px;
        background-color: #ffffff;
      }

      &:not(:last-child)::after {
        content: "--->";
        margin: 0 5px;
      }
    }
  }
`;
