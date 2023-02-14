/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box } from 'theme-ui';
import SectionHeader from 'components/section-header';
import PostCard from 'components/post-card.js';
import ButtonGroup from 'components/button-group';
import Carousel from 'react-multi-carousel';
import PostThumb1 from 'assets/blog/1.jpg';
import PostThumb2 from 'assets/blog/2.jpg';
import PostThumb3 from 'assets/blog/3.jpg';

const data = [
  {
    id: 1,
    imgSrc: PostThumb1,
    altText: 'Marketing',
    postLink: '#',
    title: 'Analytics Learning Platform',
    authorName: 'Full Stack Application',
    date: 'Sept 21, 2022',
  },
  {
    id: 2,
    imgSrc: PostThumb3,
    altText: 'Startup',
    postLink: '#',
    title: 'This Website',
    authorName: 'Front End Application',
    date: 'Oct 20, 2020',
  },
  {
    id: 3,
    imgSrc: PostThumb2,
    altText: 'Creative',
    postLink: '#',
    title: 'Face Detection & Recognition',
    authorName: 'MLOps ML Model',
    date: 'Oct 20, 2020',
  },
  {
    id: 4,
    imgSrc: PostThumb2,
    altText: 'Creative',
    postLink: '#',
    title: 'Portfolio Website',
    authorName: 'Full Stack Application',
    date: 'Oct 20, 2020',
  },
  {
    id: 5,
    imgSrc: PostThumb2,
    altText: 'Creative',
    postLink: '#',
    title: 'CNN-CNN Autoencoder',
    authorName: 'ML model',
    date: 'Oct 20, 2020',
  },
  {
    id: 6,
    imgSrc: PostThumb2,
    altText: 'Creative',
    postLink: '#',
    title: 'CMS & Dashboard',
    authorName: 'Full Stack Application',
    date: 'Oct 20, 2020',
  },
  {
    id: 6,
    imgSrc: PostThumb2,
    altText: 'Creative',
    postLink: '#',
    title: 'User Content Storage',
    authorName: 'API',
    date: 'Oct 20, 2020',
  },
  {
    id: 6,
    imgSrc: PostThumb2,
    altText: 'Creative',
    postLink: '#',
    title: 'ML Model Access Platform',
    authorName: 'API',
    date: 'Oct 20, 2020',
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1310 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  laptop: {
    breakpoint: { max: 1310, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export default function BlogSection() {
  return (
    <section sx={{ variant: 'section.news' }}>
      <Container>
        <SectionHeader
          slogan="My Experience"
          title="Past Projects"
        />

        <Box sx={styles.carouselWrapper}>
          <Carousel
            additionalTransfrom={0}
            arrows={false}
            autoPlaySpeed={3000}
            centerMode={false}
            className=""
            containerClass="carousel-container"
            customButtonGroup={<ButtonGroup />}
            dotListClass="test"
            draggable={true}
            focusOnSelect={false}
            infinite={true}
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            renderButtonGroupOutside
            renderDotsOutside={false}
            responsive={responsive}
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
          >
            {data.map((item) => (
              <PostCard
                key={item.id}
                src={item.imgSrc}
                alt={item.altText}
                postLink={item.postLink}
                title={item.title}
                authorName={item.authorName}
                date={item.date}
              />
            ))}
          </Carousel>
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  carouselWrapper: {
    '.carousel-container': {
      mx: -3,
    },
  },
};
