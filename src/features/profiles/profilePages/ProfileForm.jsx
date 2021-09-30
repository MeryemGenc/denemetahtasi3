import { Form, Formik } from 'formik'
import React from 'react'
import MyTextInput from '../../../app/common/form/MyTextInput'
import MyTextArea from '../../../app/common/form/MyTextArea'
import { Button } from 'semantic-ui-react'
import * as Yup from 'yup'

const ProfileForm = ({ profile }) => {
  return (
    <Formik
      initialValues={{
        displayName: profile.displayName,
        description: profile.description || '',
      }}
      validationSchema={Yup.object({
        displayName: Yup.string().required('Lütfen kullanıcı adı giriniz.'),
      })}
      onSubmit={(values) => console.log(values)}
    >
      {({ isSubmitting, isValid, dirty }) => (
        <Form className='ui form'>
          <MyTextInput name='displayName' placeholder='Kullanıcı Adı' />
          <MyTextArea name='description' placeholder='Açıklama' />
          <Button
            loading={isSubmitting}
            disabled={isSubmitting || !isValid || !dirty}
            floated='right'
            type='submit'
            size='large'
            positive
            content='Update Profile'
          />
        </Form>
      )}
    </Formik>
  )
}

export default ProfileForm
