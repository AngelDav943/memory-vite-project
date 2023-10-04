import { useEffect, useState } from 'react'
import Card from './components/card.jsx'
import './App.css'

function shuffle(array) {
  var index = array.length;
  var number = 0;
  var temp;

  while (index--) {
      number = Math.floor(Math.random() * (index+1));
      temp = array[index];
      array[index] = array[number];
      array[number] = temp;
  }
  return array;
}

const pairs = shuffle([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10])
function App() {
  const [points, setPoints] = useState(0);
  const [errors, setErrors] = useState(0);

  var last = undefined

  const spin = function(event, pair, id)
  {
    var card = document.getElementById(id)
    if (card.classList.contains("correct")) return

    var showing = document.getElementsByClassName("show");
    if (last == undefined) {
      last = {
        card: card,
        pair: pair,
      }
      card.classList.add("show")
      return
    }

    if (last.card == card) return;

    card.classList.add("show")
    if (last.pair == pair) {
      last.card.classList.add("correct")
      card.classList.add("correct")
      setPoints(points + 5)
      last = undefined
    } else {
      setTimeout(() => {
        card.classList.remove("show")
        last.card.classList.remove("show")
        last = undefined
        setErrors(errors + 1)
      }, 500)
    }
  }

  return (
    <>
      <div className='points'>
        <p>Points: {points}</p>
        <p>Fails: {errors}</p>
      </div>
      <div className='cards'>
        {pairs.map((id,index) => (
          <Card key={index} pair={id} onClick={spin}/>
        ))}
      </div>
    </>
  )
}

export default App
