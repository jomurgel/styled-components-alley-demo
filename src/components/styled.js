import styled from 'styled-components';

const AppWrapper = styled.div`
  font-family: ${(props) => props.theme.font}
`;

const Title = styled.h1`
  border-bottom: 2px dashed ${({ theme }) => theme.yellow};
  font-style: 42px;
`;

const Paragraph = styled.p`
  color: ${({ color, theme }) => color || theme.deepRed};
  margin-bottom: 25px;
`;

const Heading = styled.h2`
  font-style: ${({ italic }) => italic ? 'italic' : 'normal'};
`;

const Input = styled.input.attrs((props) => ({
  type: props.type || 'checkbox',
}))`

  ${({ invalid }) => invalid && `

    &,
    + span {
      opacity: 0.2;
    }
  `}

  + span {
    color: ${({ theme }) => theme.black};
    text-decoration: none;
  }

  &:checked + span {
    color: ${({ theme }) => theme.blue};
    text-decoration: line-through;
  }
`;

const Label = styled.label`
  opacity: 0.5;
`;

const Checkbox = styled.div`
  &:focus-within > ${Label} {
    opacity: 1;
  }
`;

export default {
  AppWrapper,
  Title,
  Paragraph,
  Heading,
  Input,
  Label,
  Checkbox,
};
