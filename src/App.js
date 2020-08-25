// Dependencies.
import React from 'react';
import { ThemeProvider} from 'styled-components';
import styled from './components/styled';

import theme from './config/theme';

// Components.
const {
  AppBody,
  CheckList,
  Input,
  Label,
  ListItem,
  Paragraph,
  Title,
} = styled;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppBody className="App">
        <Title>Styled Components</Title>
        <Paragraph color="steelblue">Let's demo styled components.</Paragraph>
        <Paragraph>Both basic and advanced usage.</Paragraph>
        <Label for="input">
          <span>Label Title</span>
          <Input id="input" />
        </Label>
        <CheckList>
          <ListItem>The goals that styled components attempts to solve.</ListItem>
          <ListItem>Create a simple app using styled compoments.</ListItem>
          <ListItem>Utilize props to style and manipulate a new compoment</ListItem>
          <ListItem>Create a theme.</ListItem>
          <ListItem>Touch on the <code>withTheme</code> HOC.</ListItem>
          <ListItem>Utilize the the built-in <code>ThemeProvider</code> wrapper using the Context API.</ListItem>
          <ListItem>Talk through <code>defaultProps</code>, custom attributes, nesting components, keyframes, etc.</ListItem>
          <ListItem>Discusson app conversion options built into Styled Components.</ListItem>
        </CheckList>
      </AppBody>
    </ThemeProvider>
  );
}

export default App;
