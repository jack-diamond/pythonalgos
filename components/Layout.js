import Header from './Header'

export default function Layout(props) {
  return (
    <div>
      {props.children}
      <style jsx global>{`
        body {
          background: #F9F9F9;
          text-align: center;
          vertical-align: middle;
          text-align: center;
        }
      `}</style>
    </div>
  )
}
