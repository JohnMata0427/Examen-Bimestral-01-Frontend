import Calendar from "./components/calendar.jsx"
import Header from "./components/header.jsx"
import Footer from "./components/footer.jsx"

export default function App() {
  return (
    <>
      <Header/>
      <img src="images/banner.png" alt="" className="w-full"/>
      <Calendar/>
      <Footer/>
    </>
  )
}