import cuid from 'cuid'
import React from 'react'
import { useState } from 'react'
import { Button, Form, Header, Segment } from 'semantic-ui-react'

const BlogForm = ({
  setBlogs,
  createBlog,
  selectedBlog,
  setSelectedBlog,
  updateBlog,
}) => {
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
      ? updateBlog({ ...selectedBlog, ...values })
      : createBlog({ ...values, blogId: cuid() })
  }

  function handleInputChange(e) {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
    setSelectedBlog(null)
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
        <Button
          onClick={() => setSelectedBlog(null)}
          floated='right'
          content='Vazgec'
        />
      </Form>
    </Segment>
  )
}

export default BlogForm
