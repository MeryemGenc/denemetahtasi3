import cuid from 'cuid'
import { Formik, Form } from 'formik'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button, Header, Segment } from 'semantic-ui-react'
import { createBlog, updateBlog } from '../blogActions'
import * as Yup from 'yup'
import { categoryData } from '../../../app/api/categoryOptions'
import MyTextInput from '../../../app/common/form/MyTextInput'
import MyTextArea from '../../../app/common/form/MyTextArea'
import MySelectInput from '../../../app/common/form/MySelectInput'
import MyDateInput from '../../../app/common/form/MyDateInpup'

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

  const validationSchema = Yup.object({
    blogTitle: Yup.string().required('Lütfen başlık giriniz.'),
    blogCategory: Yup.string().required('Lütfen kategori seçiniz.'),
    blogDate: Yup.string().required('Lütfen tarih seçiniz.'),
    blogPhotoURL: Yup.string().required('Lütfen görsel ekleyiniz.'),
    blogArticle: Yup.string().required('Lütfen yazıyı giriniz.'),
  })

  return (
    <Segment clearing>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          selectedBlog
            ? dispatch(updateBlog({ ...selectedBlog, ...values }))
            : dispatch(createBlog({ ...values, blogId: cuid() }))
          history.push('/blogs')
        }}
      >
        {({ isSubmitting, dirty, isValid }) => (
          <Form className='ui form'>
            <Header
              sub
              color='teal'
              content={selectedBlog ? 'Yazi Güncelle' : 'Yeni Yazi Olustur'}
            />
            <br />

            <MyTextInput name='blogTitle' placeholder='Baslik' />

            <MySelectInput
              name='blogCategory'
              placeholder='Kategori'
              options={categoryData}
            />

            <MyDateInput
              name='blogDate'
              placeholderText='Tarih'
              dateFormat='MMMM d, yyyy'
            />

            <MyTextInput name='blogPhotoURL' placeholder='Foto URL' />
            {/* Editor eklenmeli */}
            <MyTextArea name='blogArticle' placeholder='Yazi' rows={6} />

            <Button disabled={!isValid || !dirty || isSubmitting} loading={isSubmitting} type='submit' floated='right' positive content='Kaydet' />
            <Button disabled={isSubmitting} as={Link} to='/blogs' floated='right' content='Vazgec' />
          </Form>
        )}
      </Formik>
    </Segment>
  )
}

export default BlogForm
