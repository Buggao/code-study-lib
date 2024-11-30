/* eslint-disable react-refresh/only-export-components */
import { FC } from 'react'
import { Form } from "react-router-dom"

const Contact: FC = () => {

const contact: ContactType = {
  id: "1",
  first: "Your",
  last: "Name",
  avatar: "https://picsum.photos/800/800",
  twitter: "@my_name",
  notes: "Some notes about this person",
  favorite: true,
}

  return (
    <div id="contact">
      <div>
        <img key={contact.avatar} src={contact.avatar || ''} />
      </div>

      <div>
        <h1>
          {contact.first || contact.last ? (
            <>
              {contact.first} {contact.last}
            </>
          ) : (
            <i>No Name</i>
          )}{' '}
          <Favorite contact={contact} />
        </h1>

        {contact.twitter && (
          <p>
            <a target="_blank" href={`https://twitter.com/${contact.twitter}`}>
              {contact.twitter}
            </a>
          </p>
        )}

        {contact.notes && <p>{contact.notes}</p>}

        <div>
          {/* /contacts/:id/edit */}
          <Form action="edit">
            <button type="submit">Edit</button>
          </Form>
          <Form
            method="post"
            action="destroy"
            onSubmit={(event) => {
              if (!confirm('Please confirm you want to delete this record.')) {
                event.preventDefault()
              }
            }}
          >
            <button type="submit">Delete</button>
          </Form>
        </div>
      </div>
    </div>
  )
}


const Favorite: FC<{ contact: ContactType }> = ({ contact }) => {
  const favorite = contact.favorite

  return (
    <Form method="post">
      <button name="favorite" value={favorite ? 'false' : 'true'} aria-label={favorite ? 'Remove from favorites' : 'Add to favorites'}>
        {favorite ? '★' : '☆'}
      </button>
    </Form>
  )
}

export default Contact
