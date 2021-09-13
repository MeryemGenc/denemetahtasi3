import cuid from 'cuid'
import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button, Form, Header, Segment } from 'semantic-ui-react'
import { createBlog, updateBlog } from '../blogActions'

const BlogForm = ({ match, history }) => {
  const dispatch = useDispatch()

  const selectedBlog = useSelector((state) =>
    state.blog.blogs.find((blg) => blg.blogId === match.params.id)
  )

  const initialValues = selectedBlog ?? {
    blogDate: '',
    blogTitle: '',
    blogCategory: '',
    blogArticle: '',
    blogPhotoURL: '',
  }

  const [values, setValues] = useState(initialValues)

  function handleFormSubmit() {
    selectedBlog
      ? dispatch(updateBlog({ ...selectedBlog, ...values }))
      : dispatch(createBlog({ ...values, blogId: cuid() }))
    history.push('/blogs')
  }

  function handleInputChange(e) {
    const { name, value } = e.target
    setValues({ ...values, [name]: value }) 
  }

  return (
    <Segment clearing>
      <Header content='Yeni Yazi Olustur' />

      <Form onSubmit={handleFormSubmit}>
        <Form.Field>
          <input
            type='text'
            placeholder='Yazi Baslik'
            name='blogTitle'
            value={values.blogTitle}
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type='text'
            placeholder='Kategori'
            name='blogCategory'
            value={values.blogCategory}
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type='date'
            placeholder='Tarih'
            name='blogDate'
            value={values.blogDate}
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type='text'
            placeholder='Foto URL'
            name='blogPhotoURL'
            value={values.blogPhotoURL}
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Form.Field>
          {/* buraya editor eklenmeli */}
          <input
            type='text'
            placeholder='Yazi'
            name='blogArticle'
            value={values.blogArticle}
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Button type='submit' floated='right' positive content='Kaydet' />
        <Button as={Link} to='/blogs' floated='right' content='Vazgec' />
      </Form>
    </Segment>
  )
}

export default BlogForm
