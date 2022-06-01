import Hello from "./Hello"

const App = ()=>{
  const now = new Date()
  const a = 30
  const b = 40

  return(
    <div>
      <p>
      the current time is {now.toString()}
    </p>
    <p>
      {a} plus {b} is {a+b}
    </p>
    <Hello name="el" planet="earth"/>
    <Hello name="ed" planet="venus"/>
    </div>
  )
}

export default App