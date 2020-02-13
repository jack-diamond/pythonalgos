import Layout from '../components/Layout';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

export default function Libraries() {
  return (
    <Layout>
        <div className="article-wrapper">
          <div className="article">
            <h1>Arrays</h1>
              <p>The main functions with arrays in python have to do with
              accessing, slicing, removing elements, list comprehension, etc.
              These are must know operations but you should be careful to notice
              the time complexity of each operation before incorporating it into
              your algorithm.
              </p>
              <SyntaxHighlighter language="python">{`
              # Instantiating a list.
              [1, 2, 3, 4]
              [1] + [0] * 4
              list(range(100))

              # Basic operations
              len(arr)
              arr.append(1)             # O(1)
              arr.remove(2)             # O(n)
              arr.insert(3, 8)          # O(n)

              # Instantiate a 2-D array
              [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
              [[0 for _ in range(col)] for _ in range(row)]

              # Check if value in array
              value in arr              # O(n)
              `}</SyntaxHighlighter>
          </div>
          <div className="article">
            <h1>Strings</h1>
              <p>
              </p>
              <SyntaxHighlighter language="python">{`
              # Basic string operations.
              s = "hello"
              s[2] = "l"
              len(s) = 5
              s.startswith("he") = True
              s.endswith("li") = False
              ch in s                     # O(n)
              s[1:4] = "ell"              # O(n)
              s = "he" + "llo"            # O(n)

              # Formatting

              `}</SyntaxHighlighter>
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
