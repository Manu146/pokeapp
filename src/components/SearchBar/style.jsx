import styled from "styled-components";

export const SearchInput = styled.input`
  padding: 0.75rem 1rem;
  border: 1px solid #525363;
  border-radius: 8px;
  background-color: #26273b;
  color: white;
  flex: 1;
  margin-right: 1rem;

  &::placeholder {
    color: #525363;
  }
`;

export const SearchButton = styled.button`
  border-radius: 50%;
  background-color: #4444c9;
  color: white;
  padding: 0.5rem;
  border: none;
  cursor: pointer;
  &:disabled {
    background-color: gray;
    color: #4e4e4e;
    cursor: not-allowed;
  }
  & > svg {
    width: 1.5rem;
    height: 1.5rem;
    fill: white;
  }
`;

export const Wrapper = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
