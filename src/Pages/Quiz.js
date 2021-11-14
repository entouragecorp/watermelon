import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { useHistory } from 'react-router'
import QuizOrangeBg from './../Assets/orange-vape-bg.png'
import QuizOrangeBg2 from './../Assets/orange-vape-bg-2.png'
import QuizGreenBg from './../Assets/green-quiz-bg.png'
import QuizGreenBg2 from './../Assets/green-quiz-bg-2.png'
import QuizVapeTubeBg from './../Assets/orange-tube-bg.png'

/**
* @author
* @function Quiz
**/

// We are going to have a list of questions
// from this list we're going to randomly select an index
// this index will be stored in memory and deleted from the other array
// we then run an conditional statement to determine what are the answers
// we then concatinate when the answer is correct or do nothing if it is not.
// we're nor going to call and random search function on the old array for another question.

const Quiz = (props) => {
    var completed = []
    var points = 0
    var counter = 0
    var bg_counter = 0
    const question = useRef()
    const a = useRef()
    const b = useRef()
    const c = useRef()
    const d = useRef()
    const bg = useRef()
    const showA = useRef()
    const showB = useRef()
    const showC = useRef()
    const showD = useRef()
    const questionaire_limit = 5
    // const list_of_questions = ['1. Saturday 1G Blood Orange', '2. Saturday Blood Orange is priced perfectly for which on-the-go shopper?', "3. When speaking about the 1G Blood Orange product, I'd start with:", "4. Orange flavour can be difficult to nail, but Saturday's Blood Orange has done so beautifully because:", '5. I’d Recommend Saturday Blood Orange to a shopper in a situation where:']
    const list_of_questions = [
      {
        question: '1. What size cartridge is the Saturday Watermelon 510:',
        options: {
          a: '1g',
          b: '.05g',
          c: '.45g'
        },
        answer: 'a',
        bg: `url(${QuizOrangeBg})`
      },
      {
        question: '2. Saturday Watermelon 1g Distillate Vape Cartridge contains NO added propylene glycol, vegetable glycerin, MCT oil, vitamin E, acetate or other diluents?',
        options: {
          a: 'True',
          b: 'False'
        },
        answer: 'a',
        bg: `url(${QuizGreenBg2})`
      },
      {
        question: "3. What are two dominant flavour aromas that you can expect from Saturday Watermelon Vape?",
        options: {
          a: 'Citrus + Fuel',
          b: 'Tropical Fruit + Floral',
          c: 'Pepper + Berry'
        },
        answer: 'b',
        bg: `url(${QuizOrangeBg2})`
      },
      {
        question: "4. Saturday Watermelon Vape is:",
        options: {
          a: "70-75% THC",
          b: "73-78% THC",
          c: "77-83% THC"
        },
        answer: 'c',
        bg: `url(${QuizGreenBg})`
      },
      {
        question: '5. I’d Recommend Saturday Watermelon Vape to shopper in a situation where:',
        options: {
          a: 'An occasional smoker who is looking for an edible',
          b: 'An experienced or occasional cannabis shopper who is seeking a smooth, high-THC smoking experience.',
          c: 'An experienced or occasional smoker looking for a tasty, high-THC experience for on-the-go and values the dollars in their pocket',
          d: 'A shopper who is new to cannabis and is looking for a balanced THC:CBD offering'
        },
        answer: 'c',
        bg: `url(${QuizVapeTubeBg})`
      }
    ]
    const history = useHistory()

    useEffect(() => {
        randList()
    }, [])

    const randList = () => {
      gsap.to('.green_bg', {backgroundColor: '#535938', duration: 0})
      if (completed.length >= questionaire_limit) {
        if(points < 4){
          localStorage.setItem('points', points)
          history.push('/points')
          // window.location.reload()
        }
        else{
          localStorage.setItem('points', points)
          history.push('/data-capture')
        }
      } else {
        // Math.round(Math.random() * 4)
        let random = counter++
        const check_completed = completed.find(element => element == random)

        // For some reason zero is being ignored. That why it's in the conditional statement below.
        if (check_completed || check_completed === 0) {
          randList()
        }
        else {
          completed.push(random)
          question.current.textContent = list_of_questions[random].question
          bg.current.style.background = list_of_questions[random].bg
          bg.current.style.backgroundSize = '100% 100%'

          if (list_of_questions[random].options['a']) {
            a.current.textContent = list_of_questions[random].options['a']
            showA.current.className = 'green_bg a'
          } else {
            showA.current.className = 'displayNone'
          }

          if (list_of_questions[random].options['b']) {
            b.current.textContent = list_of_questions[random].options['b']
            showB.current.className = 'green_bg b'
          } else {
            showB.current.className = 'displayNone'
          }

          if (list_of_questions[random].options['c']) {
            c.current.textContent = list_of_questions[random].options['c']
            showC.current.className = 'green_bg c'
          } else {
            showC.current.className = 'displayNone'
          }

          if (list_of_questions[random].options['d']) {
            d.current.textContent = list_of_questions[random].options['d']
            showD.current.className = 'green_bg d'
          } else {
            showD.current.className = 'displayNone'
          }
        }
      }
    }

    const selectved_answer = (selected_data) => {

      gsap.to(`.${selected_data}`, {backgroundColor: '#40473F', duration: 0.5})
      let index = completed[completed.length -1]

      if(selected_data == list_of_questions[index].answer) {
        eval(selected_data).current.textContent = 'Correct';
        points++;  console.log(`updated points: ${points}`)
      } else{
        eval(selected_data).current.textContent = 'Incorrect';
      }

      setTimeout(()=>{
          randList()
      }, 1000)

    }

    return (
        <div className={'Prizing'} ref={bg}>
            <div id='quiz_holder'>
                <div id='title_holder'>
                    <h3 ref={question}></h3>
                </div>
                <div id='answer_list'>
                    <div ref={showA} className='green_bg a' onClick={() => selectved_answer('a')}><p className='ans' ref={a}></p></div>
                    <div ref={showB} className='green_bg b' onClick={() => selectved_answer('b')}><p className='ans' ref={b}></p></div>
                    <div ref={showC} className='green_bg c' onClick={() => selectved_answer('c')}><p className='ans' ref={c}></p></div>
                    <div ref={showD} className='green_bg d' onClick={() => selectved_answer('d')}><p className='ans' ref={d}></p></div>
                </div>
            </div>
        </div>
    )

}

export default Quiz
