import React from 'react'
import { Button, Form, Header, Segment } from 'semantic-ui-react'

const BlogForm = () => {
    return (
        <Segment clearing>
            <Header content='Yeni Yazi Olustur' />

            <Form>
                <Form.Field>
                    <input type="text" placeholder='Yazi Baslik' />
                </Form.Field>
                <Form.Field>
                    <input type="text" placeholder='Kategori' />
                </Form.Field>
                <Form.Field>
                    <input type="date" placeholder='Tarih' />
                </Form.Field>
                <Form.Field>
                    <input type="text" placeholder='Foto URL' />
                </Form.Field>
                <Form.Field>
                    {/* buraya editor eklenmeli */}
                    <input type="text" placeholder='Yazi' />
                </Form.Field>
                <Button type='submit' floated='right' positive content='Kaydet' />
                <Button type='submit' floated='right' content='Vazgec' />
            </Form>
        </Segment>
    )
}

export default BlogForm
