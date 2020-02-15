import Layout from '../components/Layout';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';

const Problems = props => {
  return (
    <Layout>
      <div>
      {props.problems.map(({name, problems}) => (
        <>
        <h1>{name}</h1>
        <ul>
          {problems.map(({name, problems}) => (
            <>
            <li>{name}</li>
            <ul>
              {problems.map(({name, link}) =>(
                <li key={name}>
                  <Link href="/link"  as={`${link}`}>
                    <a target="_blank">{name}</a>
                  </Link>
                </li>
              ))}
            </ul>
            </>
          ))}
        </ul>
        </>
      ))}
      </div>
    </Layout>
  );
}

Problems.getInitialProps = async function() {
    const res = await fetch('http://localhost:8000/problems/');
    const data = await res.json();
    console.log(data);
    console.log(`Show data fetched. Count: ${data.length}`);
    return {
      problems: data.map(problems => problems)
    };
  };
  
export default Problems;