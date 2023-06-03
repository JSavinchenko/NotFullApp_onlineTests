import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createTest } from '../redux/features/test/testSlice'

import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

export const CreateTestPage = () => {
    //const [name, setName] = useState('')
    //const [description, setDescription] = useState('')

    /*const [question, setQuestion] = useState([

  ])*/

    /*const [results, setResults] = useState([
    {
      id: 1,
      title: 'test1111111'
    }
  ])
  const [result, setResult] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const submitHandler = () => {
    try{
      const data = new FormData()
      data.append('name', name)
      data.append('description', description)
      dispatch(createTest(data))
      navigate('/')
    } catch(error) {
      console.log(error)
    }
  }

  const addResult = () => {
    setResults(
      [...results], {
        id: 2,
        title: result
      })
  }

  const deleteResult = (id) => {
    let newResult = [...results].filter(item => item.id !== id)
    setResults(newResult)
  }*/

    return (
        <Form className='m-5 p-5 border bg-light' onSubmit={e => e.preventDefault()}>
            {/* <Form.Text style={{fontSize: 30}}>Создание теста</Form.Text>
      <Form.Group controlId="formNameTest">
        <Form.Label className="mt-2">Название: </Form.Label>
        <Form.Control 
        type="text" 
        placeholder="Введите название теста..." 
        value={name}
        onChange={(e) => setName(e.target.value)} />
      </Form.Group>

      <Form.Group controlId="formDescriptionTest">
        <Form.Label className="mt-3">Описание:</Form.Label>
        <Form.Control 
        as="textarea" 
        rows={3} 
        placeholder="Введите описание теста..."
        value={description}
        onChange={(e) => setDescription(e.target.value)} />
      </Form.Group>

      <Form.Group controlId="formQuestionTest">
        <Form.Label className="mt-3">Вопрос: </Form.Label>
        <Form.Select>
          <option>Одиночный выбор</option>
        </Form.Select>
        <Form.Control type="text" className="mt-2" placeholder="Введите вопрос..." />
        <Form.Label className="mt-2">Добавьте варианты ответа: </Form.Label>
        <Form.Control as="textarea" rows={1} className="mt-2" />
        <Form.Control as="textarea" rows={1} className="mt-2" />
        <Button 
        variant="success" 
        type="submit" 
        className="mt-3"
        style={{float: 'right'}}
        >+</Button>
        <Button 
        variant="success" 
        type="submit" 
        className="mt-5"
        >Добавить вопрос</Button>
      </Form.Group> */}

            {/* <Form.Group controlId="formResultTest">
        <Form.Label className="mt-3">Результаты:</Form.Label>
        <Form.Control as="textarea" rows={2} className="mt-2" />
        <Form.Control as="textarea" rows={2} className="mt-2" />
        <Button 
        variant="success" 
        type="submit" 
        className="mt-3"
        style={{float: 'right'}}
        >+</Button>
      </Form.Group>  */}

            {/* <Form.Group controlId="formResultTest">
        <Form.Label className="mt-3">Результаты:</Form.Label>
        <Form.Control as="textarea" rows={2} className="mt-2" value={result} onChange={(e) => setResult(e.target.value)}/>
        <Button 
        variant="success" 
        type="submit" 
        className="mt-3"
        style={{float: 'right'}}
        onClick={addResult}
        >+</Button> */}
            {/* <div>
          {
            results.map(item => (
              <div key={item.id}>
                <div>{item.title}</div>
                <button onClick={(e) => {deleteResult(item.id)}}>Удалить</button>
              </div>
            ))
          }
        </div> 
      </Form.Group> */}

            {/* <Button 
        variant="secondary" 
        size="lg"
        type="submit" 
        className="mt-5"
        onClick={submitHandler}
        >Создать тест</Button> */}
        </Form>
    )
}
