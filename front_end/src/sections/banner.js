/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Grid, Container, Box, Heading, Text, Image, Button } from 'theme-ui';
import BannerImg from 'assets/test_placeholder.png'; //example_arch_diagram
import ShapeLeft from 'assets/shape-left.png';
import ShapeRight from 'assets/shape-right.png';

import TeamCard from 'components/team-card';
import { FaLinkedin, FaGithub, FaResearchgate } from 'react-icons/fa';
import Member1 from 'assets/Picture1.png';

const data = [
  {
    id: 1,
    imgSrc: Member1,
    altText: 'Saimon Harmer',
    title: 'I currently work as a DevOps Engineer at DXC Technology. Please download my CV and get in touch via the embedded form or via Linkedin. Please explore this website to view my previous research.',
    designation: '',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: '#',
        icon: <FaLinkedin />,
      },
      {
        id: 2,
        name: 'twitter',
        path: '#',
        icon: <FaGithub />,
      },
      {
        id: 3,
        name: 'instagram',
        path: '#',
        icon: <FaResearchgate />,
      },
    ],
  },
]

export default function Banner() {
  return (
    <section sx={styles.banner} id="home">
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox}>
          <Heading as="h1" variant="heroPrimary">
            Hi, my name is Dr Ryan Sers
          </Heading>

            <Grid sx={styles.grid}>
              {data.map((item) => (
                <TeamCard
                  key={`team--key${item.id}`}
                  src={item.imgSrc}
                  altText={item.altText}
                  title={item.title}
                  designation={item.designation}
                  social={item.socialProfile}
                />
              ))}
            </Grid>
            
            {/* <Text as="p" variant="heroSecondary">
            I currently work as a DevOps Engineer at DXC Technology. 
            Please download my CV and get in touch via the embedded form or via Linkedin. 
            Please explore this website to view my previous research.
            </Text> */}

          <Button variant="primary">Download CV</Button>
        </Box>

        <Box sx={styles.banner.imageBox}>
          <Image src={BannerImg} alt="banner" />
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  banner: {
    pt: ['140px', '145px', '155px', '170px', null, null, '150px', '180px'],
    pb: [2, null, 0, null, 2, 0, null, 5],
    position: 'relative',
    zIndex: 2,
    '&::before': {
      position: 'absolute',
      content: '""',
      bottom: 6,
      left: 0,
      height: '100%',
      width: '100%',
      zIndex: -1,
      backgroundImage: `url(${ShapeLeft})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'bottom left',
      backgroundSize: '36%',
    },
    '&::after': {
      position: 'absolute',
      content: '""',
      bottom: '40px',
      right: 0,
      height: '100%',
      width: '100%',
      zIndex: -1,
      backgroundImage: `url(${ShapeRight})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'bottom right',
      backgroundSize: '32%',
    },
    container: {
      minHeight: 'inherit',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    container_two: {
      minHeight: 'inherit',
      display: 'flex',
      flexDirection: 'row',
      //justifyContent: 'center',
    },
    contentBox: {
      width: ['100%', '90%', '535px', null, '57%', '60%', '68%', '60%'],
      mx: 'auto',
      textAlign: 'center',
      mb: ['40px', null, null, null, null, 7],
    },
    imageBox: {
      justifyContent: 'center',
      textAlign: 'center',
      display: 'inline-flex',
      mb: [0, null, -6, null, null, '-40px', null, -3],
      img: {
        position: 'relative',
        height: [245, 'auto'],
      },
    },
  },
  grid: {
    //mt: [0, null, -6, null, -4],
    mb: [0, null, 6, null, 4],
    //width: '30%',
  },
};
