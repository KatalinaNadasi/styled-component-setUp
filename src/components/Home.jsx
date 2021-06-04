import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Input } from '../assets/style/globalStyle'


const Bloc = styled.div`
  display: bloc;
  width: 30%;
  ${props => ({ color: props.color })}
`

const FlexContainer = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-around;
`

const Title = styled.h1`
  color: ${props => props.pink && props.theme.featureColor};
  color: ${props => props.blue && props.theme.secondaryFeatureColor};
  color: ${props => props.grey && props.theme.grey};
  font-size: 2rem;
`

const Text = styled.p`
  ${props => props.theme.mainFont}
`

const TextBloc = ({title, firstP, secondP, pink, grey, blue, placeholder}) => {
  return (
    <Bloc>
      <Title pink={pink} blue={blue} grey={grey}>{title}</Title>
      <Text>{firstP}</Text>
      <Text>{secondP}</Text>
      <Input blue placeholder={placeholder} />
      <Input red placeholder={placeholder} />
    </Bloc>
  )
}
TextBloc.propTypes = {
  title: PropTypes.number,
  firstP: PropTypes.string,
  secondP: PropTypes.string,
  pink: PropTypes.string,
  grey: PropTypes.string,
  blue: PropTypes.string,
};


function Home() {
  return (
    <FlexContainer>
      <TextBloc
        placeholder="salut"
        pink
        title="Declarative"
        firstP="React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes."
        secondP="Declarative views make your code more predictable and easier to debug"
      />
      <TextBloc
        blue
        placeholder="comment"
        title="Component-Based"
        firstP="Build encapsulated components that manage their own state, then compose them to make complex UIs."
        secondP="Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.make your code more predictable and easier to debug"
      />
      <TextBloc
        grey
        placeholder="ça va"
        title="Learn Once"
        firstP="Build encapsulated components that manage their own state, then compose them to make complex UIs."
        secondP="Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.make your code more predictable and easier to debug"
      />
    </FlexContainer>
  );
}

export default Home;
