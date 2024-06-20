import Calendar from "./components/calendar.jsx"
import Header from "./components/header.jsx"
import Footer from "./components/footer.jsx"
import Home from "./pages/Home.jsx"

export default function App() {
  return (
    <>
      <Header/>
        <Home/>
      <Footer/>
    </>
  )
}