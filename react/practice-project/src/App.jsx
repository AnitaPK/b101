import Button from "./components/Button"
import GreetClassBased from "./components/GreetClassBased"
import GreetFunctional from "./components/GreetFunctional"

function App() {
  const paraDesign = {
    color:"#00f",
    backgroundColor:"#0f0"
  }
  return (
    <>
      <h1 style={{textAlign:"center",color:"#f00"}}>Hello World</h1>
      <p style={paraDesign}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, quasi?</p>
      <GreetFunctional user="RAHUL" />
      <GreetClassBased user="POOJA" />
      <Button name1="LOGIN" />
      <Button name1="REGISTER" />
      <Button name1="LOGOUT" />
      <Button name1="ADD TO CART" />
      <Button name1="BUY NOW" />
    </>
  )

}




export default App