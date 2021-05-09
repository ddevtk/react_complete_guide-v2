import styled from 'styled-components';

export const FormControlContainer = styled.div`
  margin: 0.5rem 0;
  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    color: ${props => (props.invalid ? 'red' : 'black')};
  }
  & input {
    display: block;
    width: 100%;
    border: 2px solid ${props => (props.invalid ? '#8b005d' : '#ccc')};
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
    &:focus {
      outline: none;
      background: #fad0ec;
      border-color: #8b005d;
    }
  }
`;