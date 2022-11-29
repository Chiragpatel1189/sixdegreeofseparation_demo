import styled from "styled-components";

export const InputUserBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  input {
    width: calc(100% - 90px);
  }
  button {
    width: 90px;
    margin-left: 10px;
  }
`;
export const NoteText = styled.span`
  font-size: 14px;
  font-weight: 600;
`;
