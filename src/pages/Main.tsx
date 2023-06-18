import { SectionsContainer, Section } from 'react-fullpage';

const Main = () => {
  let options = {
    anchors: ['sectionOne', 'sectionTwo', 'sectionThree'],
  };
  return (
    <SectionsContainer {...options}>
      <Section>Page 1</Section>
      <Section>Page 2</Section>
      <Section>Page 3</Section>
    </SectionsContainer>
  );
};

export default Main;
