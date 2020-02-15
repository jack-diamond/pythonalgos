import Layout from '../components/Layout';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';

const Problems = props => {
  return (
    <Layout>
      <div className="article-wrapper">
      <div className="article">
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
      </div>
      <style jsx global>{`
        .article-wrapper {
          display: flex;
          flex-flow: column;
          justify-content: center;
          align-items: center;
          font-family: Arial;

          background: transparent;
          padding-top: 10px;
          padding-bottom: 10px;
        }

        .article {
          width: 800px;
          max-width: 800px;
          text-align: left;
          margin: 10px 0;

          background: white;
          box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
          border-radius: 5px;
        }

        .article h1 {
          margin: 10px 20px;
        }

        .article p {
          margin: 20px 20px;
          line-height: 1.5;
        }

        code {
          white-space: pre-wrap;
        }

      `}</style>
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