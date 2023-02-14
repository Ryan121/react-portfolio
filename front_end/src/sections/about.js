/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid, Box, Text } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import Performance from 'assets/key-feature/performance.svg';
import Partnership from 'assets/key-feature/partnership.svg';
import Subscription from 'assets/key-feature/subscription.svg';
import Support from 'assets/key-feature/support.svg';

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Fast Performance',
    title: 'Fast Performance',
    text:
      'Get your blood tests delivered at home collect a sample from the your blood tests.',
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Partnership deal',
    title: 'Partnership deal',
    text:
      'Get your blood tests delivered at home collect a sample from the your blood tests.',
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'Pro Subscription',
    title: 'Pro Subscription',
    text:
      'Get your blood tests delivered at home collect a sample from the your blood tests.',
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'Customer Support',
    title: 'Customer Support',
    text:
      'Get your blood tests delivered at home collect a sample from the your blood tests.',
  },
];

export default function About() {
  return (
    <section sx={{ variant: 'section.about' }} id="about">
      <Container>
        <SectionHeader
          slogan="Whats the function"
          title="Meet the feature of product"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>

        <Box sx={styles.contentBox}>
          <Text as="p" variant="">
          I am an enthusiastic technologist with interests in Data Science, Machine Learning, Web Development, DevOps and Cloud Computing. 
          Since leaving academia, I have developed notable experience using cloud technologies (Azure and AWS in particular) for use cases 
          such as website hosting, machine learning model development, training and productionisation as well as DevOps/MLOps. 
          I have also worked extensively with Python for tasks in all elements of the data lifecycle and with frameworks such as Django 
          and Flask for web development projects. I am always keen to expand my knowledge within the aformentioned technical areas in order 
          to continually learn and develop new skills.
          <br></br><br></br>
          I have a background in quantitative research, culminating in the completion of my PhD from Loughborough University in 2021. 
          The focus of this research was predicated on the quantification of laparoscopic surgeon postural kinematics during procedures on 
          high BMI patients, due to the high subjective reporting of musculoskeletal pain and discomfort amongst surgeons during these scenarios. 
          The objective of optimising this element of physical performance was to attmept to identify high risk body postures and sub-optimal 
          kinematic motion. The long term aim of this project is to reduce its incidence where possible, due to the high prevelence of 
          musculoskeletal disorders amongst minimally invasive surgeons. My research has been published within several technical and medical journals, 
          which can be found below with some of the accompanying code that facilitated the data analyses.
          </Text>
        </Box>

      </Container>
    </section>
  );
}

const styles = {
  contentBox: {
    //width: ['100%', '90%', '535px', null, '57%', '60%', '68%', '60%'],
    paddingTop: 8,
    mx: 'auto',
    textAlign: 'justify',
    textJustify: 'inter-word',
    //textAlign: 'center',
    //mb: ['40px', null, null, null, null, 7],
  },
  grid: {
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: [
      '35px 0',
      null,
      '40px 40px',
      '50px 60px',
      '30px',
      '50px 40px',
      '55px 90px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
    ],
  },
};
