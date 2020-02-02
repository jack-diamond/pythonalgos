import Featured from '../components/Featured';

export default function FeaturedContent(props) {
  return (
    <div className="fc-wrapper">
      <div className="fc">
        <a className="item" href="/">
          <h3>Know your Libraries</h3>
          <p>How to use arrays, stacks, queues, heaps, etc.</p>
        </a>
        <div className="item">
          <h3>Top Interview Questions</h3>
          <p>Top questions to study for your interview</p>
        </div>
        <div className="item">
          <h3>Leetcode Patterns</h3>
          <p>Learn to effectively use patterns to find the best algorithm</p>
        </div>
        <div className="item">
          <h3>Trees</h3>
          <p>Inorder, preorder, postorder recursively and iteratively</p>
        </div>
        <div className="item">
          <h3>Heaps</h3>
          <p>How and when to use heaps in problems</p>
        </div>
        <div className="item">
          <h3>Graphs</h3>
          <p>BFS and DFS techniques for common graph problems</p>
        </div>
      </div>
    <style jsx>{`
        .fc-wrapper {
          height: 80vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .fc {
          width: 75%;
          max-width: 1000px;
          height: 75%;
          background: #F9F9F9;
          display: flex;
          flex-flow: row wrap;
          justify-content: space-around;
          align-content: flex-start;
        }

        .item {
          height: 150px;
          width: 300px;
          margin: 0 10px;
          margin-top: 20px;

          box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.25);
          border-radius: 5px;
          text-decoration: none;
          background: white;

          display: flex;
          flex-direction: column;
          align-content: flex-start;
        }

        .item h3 {
          font-family: Arial;
          text-align: left;
          padding-left: 10px;
          color: #000000;
          margin: 30px 10px 0 10px;
        }

        .item p {
          font-family: Arial;
          text-align: left;
          padding-left: 10px;
          color: rgb(102, 102, 102);
          margin: 5px 10px 0 10px;
        }
      `}</style>
    </div>
  )
}
