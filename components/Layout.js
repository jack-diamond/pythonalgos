import Header from './Header'
import Footer from './Footer'

export default function Layout(props) {
  return (
    <div>
      <Header/>
        {props.children}
      <Footer/>
      <style jsx global>{`
        body {
          background: #F9F9F9;
          height: 100%;
          text-align: center;
          vertical-align: middle;
          text-align: center;
        }
      `}</style>
    </div>
  )
}
