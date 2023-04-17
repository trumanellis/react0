import styled from "styled-components";

const StyledButton = styled.button`
  background-color: blue;
  color: white;
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: darkblue;
  }
`;

function App() {
  return (
    <div>
      <StyledButton>Click me</StyledButton>
    </div>
  );
}
