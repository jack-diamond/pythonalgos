import Header from '../components/Header';
import Layout from '../components/Layout';
import FeaturedContent from '../components/FeaturedContent';
import Footer from '../components/Footer';
import Link from 'next/link'

export default function Blog() {
  return (
    <Layout>
      <Header/>
      <FeaturedContent/>
      <Footer/> 
    </Layout>
  );
}
