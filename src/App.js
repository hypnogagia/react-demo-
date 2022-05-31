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
    </div>
  )
}

export default App