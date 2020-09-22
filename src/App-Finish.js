// Dependencies.
import React from 'react';
import { ThemeProvider } from 'styled-components';
import styled from './components/styled';
import theme from './config/theme';

const {
  AppWrapper,
  Title,
  Paragraph,
  Heading,
  Input,
  Label,
  Checkbox,
} = styled;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppWrapper className="app">
        <Title>Let's demo!</Title>
        <Paragraph>
          This is a simple React app!
        </Paragraph>
        <Paragraph color="#dc709e">
          We're not using styled-components yet, but soon!
        </Paragraph>
        <Heading italic>Our Goals:</Heading>
        <form>
          <Checkbox>
            <Label htmlFor="one">
              <Input id="one" checked="checked" />
              <span>What and why is styled-components? <span role="img" aria-label="Thinking emoji">🤔</span></span>
            </Label>
          </Checkbox>
          <Checkbox>
            <Label htmlFor="two">
              <Input id="two" checked="checked" />
              <span>How do I styled-components? <span role="img" aria-label="Painting nails emoji">💅</span></span>
            </Label>
          </Checkbox>
          <Checkbox>
            <Label htmlFor="three">
              <Input id="three" checked="checked" />
              <span>I can haz themes? <span role="img" aria-label="Cat emoji">🐱</span></span>
            </Label>
          </Checkbox>
          <Checkbox>
            <Label htmlFor="four">
              <Input id="four" checked="checked" />
              <span>Bonus? <span role="img" aria-label="Present emoji">🎁</span></span>
            </Label>
          </Checkbox>
        </form>
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
