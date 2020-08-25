import styled from 'styled-components';

const AppBody = styled.div`
  font-family: ${(props) => props.theme.font};
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.red};
`;

const Paragraph = styled.p`
  color: ${(props) => props.color || props.theme.deepRed};
  font-size: 1.25em;
`;

const CheckList = styled.ul`
  border-radius: ${({ theme }) => theme.radius};
  border: 1px solid ${({ theme }) => theme.black};
  list-style: none;
  margin: 0;
  padding: 15px;
  width: 50%;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
  padding-left: 25px;
  position: relative;

  &::before {
    border-radius: 4px;
    border: 1px solid ${({ theme }) => theme.black};
    content: '';
    display: block;
    height: 15px;
    left: 0;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 15px;
  }

  ${({ checked, theme }) => checked && `
    color: ${theme.deepRed};
    text-decoration: line-through;

    &::before {
      border: 1px solid ${theme.deepRed};
      color: ${theme.deepRed};
      content: '✓';
      line-height: 0.9;
    }
  `}
`;

const Input = styled.input.attrs(({ color, theme }) => ({
  color: color || theme.red,
  defaultValue: 'testing input',
  type: 'email',
}))`
  border-radius: ${({ theme }) => theme.radius};
  border: 1px solid ${(props) => props.color};
  font-size: 18px;
  margin-bottom: 25px;
  padding: 10px 15px;

  &:focus {
    border-color: ${({ theme }) => theme.yellow};
    outline: none; /* eek */
  }
`;

const Label = styled.label`

  > span {
    display: block;
    font-size: 12px;
    margin-bottom: 5px;
  }

  &:focus-within + ${CheckList} {
    border: 1px solid ${({ theme }) => theme.red};
  }
`;


export default {
  AppBody,
  CheckList,
  Input,
  Label,
  ListItem,
  Paragraph,
  Title,
};
