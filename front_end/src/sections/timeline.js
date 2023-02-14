/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid, Box, Heading, Text } from 'theme-ui';
import SectionHeader from 'components/section-header';

import PatternBG from 'assets/patternBG.png';
import ArrowOdd from 'assets/arrowOdd.svg';
import ArrowEven from 'assets/arrowEven.svg';

const data = [
  {
    id: 1,
    title: 'PhD Researcher',
    sub_title: 'Loughborough University',
    text:
      'My PhD utilised motion capture (MoCap) sensors for the objective quantification of laparoscopic surgeon biomechanics, to facilitate a postural and kinematic analysis which could then be used to help train and better inform surgeons, in order to help optimise performance and reduce their risk of injury',
  },
  {
    id: 2,
    title: 'Data Scientist',
    sub_title: 'DXC Technology',
    text:
      'I was part of DXC’s Machine Learning Operations (MLOps) capability, assisting clients with the exploration of their data, identifying whether machine learning would be suitable and if so, developing models to derive insight as well as to operationalise them for accurate continued use. ',
  },
  {
    id: 3,
    title: 'DevOps Engineer',
    sub_title: 'DXC Technology',
    text:
      'I was part of DXC’s DevSecOps team, working with secure clients to build and maintain their compute infrastructure while working in an Agile manner.',
  },
  {
    id: 4,
    title: 'Consultant Engineer',
    sub_title: 'Roke Manor Research',
    text:
      'Get your blood tests delivered at home collect a sample from the your blood tests.',
  },
];

export default function Timeline() {
  return (
    <section sx={styles.background}>
      <Container>
        <SectionHeader
          slogan="Past Experience"
          title="My recent history"
          isWhite={true}
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <Box sx={styles.card} key={item.id}>
              <Box sx={styles.iconBox}>{`0${item.id}`}</Box>
              <Box sx={styles.timeline}>
                <Heading sx={styles.timeline.title}>{item.title}</Heading>
                <Text sx={styles.timeline.subsubTitle}>{item.sub_title}</Text>
                <Text sx={styles.timeline.subTitle}>{item.text}</Text>
              </Box>
            </Box>
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  background: {
    backgroundColor: 'primary',
    backgroundImage: `url(${PatternBG})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    position: 'relative',
    py: [8, null, 9, null, null, 10],
  },
  grid: {
    mb: -1,
    pt: 0,
    gridGap: [
      '35px 0',
      null,
      '45px 30px',
      null,
      '50px 25px',
      null,
      null,
      '50px 65px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
    ],
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    textAlign: ['center', null, 'left'],
    width: ['100%', '80%', '100%'],
    mx: ['auto'],
    px: [4, null, null, 0],
    '&::before': {
      position: 'absolute',
      content: '""',
      top: 0,
      left: [0, null, null, null, null, 72, null, 90],
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'center center',
      width: 215,
      height: 60,
      '@media screen and (max-width:1220px)': {
        display: 'none',
      },
    },
    '&:nth-of-type(2n-1)::before': {
      backgroundImage: `url(${ArrowOdd})`,
    },
    '&:nth-of-type(2n)::before': {
      backgroundImage: `url(${ArrowEven})`,
      top: 17,
    },
    '&:last-child::before': {
      display: 'none',
    },
  },

  iconBox: {
    width: ['50px', null, '60px', null, null, '70px'],
    height: ['50px', null, '60px', null, null, '70px'],
    flexShrink: 0,
    borderRadius: [15, null, 23, null, null, 30],
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    mb: [5, null, null, null, null, 6],
    mx: ['auto', null, 0],
    fontSize: [6, null, 7, null, null, '30px'],
    fontWeight: 700,
    justifyContent: 'center',
    color: '#234582',
  },
  timeline: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    mt: '-5px',
    title: {
      fontSize: [3, null, 4, null, null, 5],
      color: 'white',
      lineHeight: [1.4, null, null, null, null, 1.55],
      pr: [0, null, null, null, null, 2],
      //mb: [1, 1],
    },

    subsubTitle: {
      fontSize: 1,
      fontWeight: 700,
      lineHeight: [1.85, null, null, 1.9, 2],
      color: 'white',
      opacity: 0.9,
      pr: [0, null, null, null, null, 5],
      mb: [2, 3],
    },

    subTitle: {
      fontSize: 1,
      fontWeight: 400,
      lineHeight: [1.85, null, null, 1.9, 2],
      color: 'white',
      opacity: 0.75,
      pr: [0, null, null, null, null, 5],
    },
  },
};
