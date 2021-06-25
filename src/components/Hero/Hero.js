
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection,Div } from './HeroStyles';



const values = ["useDencrypt", "Customizable", "React Hook", "Text Effect"];


const Hero = (props) => (

  
  
  <>


    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
         
          Hello, <br />
          I'm Navod Amarakoon
        </SectionTitle>
        <SectionText>
        I'm full-stack web developer & wellcome to my Portfolios.
        </SectionText>
        <br />
        <br />
        <br />
        <br />
        <Div>MAKE it WORK, MAKE it RIGHT, MAKE it FAST</Div>
      </LeftSection>
    </Section>
  </>
);

export default Hero;