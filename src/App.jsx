import { Card } from "./components/Card"

import cards from "./data/cards.json"

function App() {
  return (
    <>
    <div style={{display:"flex"}}>
      {cards.map(item => (
        <Card {...item} />
      ))}

    </div>
    </>
  )
}

export default App
