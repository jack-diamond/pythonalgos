import Layout from '../components/Layout';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';

const Problems = props => {
  return (
    <Layout>
    <h1>Blind 75</h1>
    <ul>
      {props.problems.map(problem => (
        <li key={problem.name}>
          <Link href="/link"  as={`${problem.link}`}>
            <a target="_blank">{problem.name}</a>
          </Link>
        </li>
      ))}
    </ul>
    </Layout>
  );
}

Problems.getInitialProps = async function() {
    const res = await fetch('http://localhost:8000/problems/');
    const data = await res.json();
    console.log(data);
    console.log(`Show data fetched. Count: ${data.length}`);
    return {
      problems: data
    };
  };
  
export default Problems;