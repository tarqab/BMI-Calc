import React from "react"
import "./index.css"

// h-screen w-screen p-4 bg-gradient-to-r from-cyan-500 to-blue-500

const style = {
  main: `p-4 bg-gradient-to-r from-cyan-500 to-blue-500`,
  container: `flex flex-col items-center bg-cyan-900 w-[500px] mx-auto my-60 rounded-md shadow-xl  p-4 text-xl`,
  tittle: `text-4xl text-white text-center font-bold`,
  weight: `rounded-2xl italic w-full h-14 mt-7 bg-transparent border-2 border-amber-300	p-2`,
  height: `rounded-2xl italic w-full h-14 mt-14 bg-transparent border-2 border-amber-300 p-2`,
  submit: `flex flex-col space-y-8`,
  btnSubmit: `bg-green-400 rounded-xl w-32 m-auto mt-8`,
  btn: `bg-green-400	rounded-xl w-32 m-auto mt-4`,
  center: `flex flex-col items-center mt-4`,
  txtBmi: `mt-2 text-white`,
  img: `object-contain w-36`
}


function App() {

  const [weight, setWeight] = React.useState()
  const [height, setheight] = React.useState()
  const [bmi, setBmi] = React.useState("")
  const [message, setMessage] = React.useState("")


  let calculator = (event) => {
    event.preventDefault()

    if (weight === 0 || height === 0) {
      alert("please enter true value !")
    }
    else {
      let bmi = ((weight / (height * height)) * 10000)
      setBmi(bmi.toFixed(1));
    }
    if (bmi < 25) {
      setMessage('You are underweight')
    } else if (bmi >= 25 && bmi < 30) {
      setMessage('You are a healthy weight')
    } else {
      setMessage('You are overweight')
    }
  }
  function reload() {
    window.location.reload()
  }

  let imgSrc;
  if (bmi < 1) {
    imgSrc = null
  } else {
    if (bmi < 25) {
      imgSrc = require('../src/assets/underweight.png')
    } else if (bmi >= 25 && bmi < 30) {
      imgSrc = require('../src/assets/healthy.png')
    } else {
      imgSrc = require('../src/assets/overweight.png')
    }
  }


  return (
    <div className={style.main}>
      <div className={style.container}>
        <h1 className={style.tittle}>BMI Calculator</h1>
        <form onSubmit={calculator}>
          <div>
            <input
              className={style.weight}
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="weight" ></input>


            <input
              className={style.height}
              value={height}
              onChange={(e) => (setheight(e.target.value))}
              placeholder="height"></input>
          </div>
          <div className={style.submit}>
            <button className={style.btnSubmit} type="submit">Submit </button>
            <button className={style.btn} onClick={reload}>Reload</button>
          </div>
        </form>
        <div className={style.center}>
          <h3 className={style.txtBmi}>Your BMI is : {bmi}</h3>
          <p>{message}</p>
        </div>

        <img className={style.img} src={imgSrc} alt=''></img>

      </div>
    </div>
  );
}

export default App;
