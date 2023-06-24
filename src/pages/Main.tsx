import { SectionsContainer, Section } from 'react-fullpage';
import One from '../components/Main/One';
import Two from '../components/Main/Two';

const Main = () => {
  let options = {
    anchors: ['profile', 'project'],
  };
  return (
    <SectionsContainer {...options}>
      <Section>
        <One />
      </Section>
      <Section>
        <Two />
      </Section>
    </SectionsContainer>
  );
};

export default Main;
