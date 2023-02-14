import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from '../contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from '../sections/banner';
import About from '../sections/about';
import ServiceSection from '../sections/service-section';
import Feature from '../sections/feature';
import CoreFeature from '../sections/core-feature';
import Package from '../sections/package';
import TeamSection from '../sections/team-section';
import TestimonialCard from '../sections/testimonial';
import BlogSection from '../sections/blog-section';
import ResearchSection from '../sections/research-section';
import Subscribe from '../sections/subscribe';
import Timeline from '../sections/timeline';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>

          {/* Introduction */}
          <SEO title="RS Portfolio" />
          <Banner />

          {/* About */}
          <About />
          <Timeline/>

          {/* Experience */}
          <Feature/>
          <BlogSection />

          {/* Research */}
          <CoreFeature />
          <ServiceSection />
          <ResearchSection />


          {/* <Package /> */}
          {/* <TeamSection /> */}
          {/* <TestimonialCard />
          <BlogSection />
          <Subscribe /> */}
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
