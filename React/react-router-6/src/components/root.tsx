/* eslint-disable react-refresh/only-export-components */
import { FC } from 'react'
import { Outlet, Link, useLoaderData } from 'react-router-dom'
// import { getContact } from '@/contact'

const Root: FC = () => {

  const contactList = useLoaderData() as ContactType[]

  const renderLink = (contact: ContactType) => {
    if(contact.first && contact.last){
      return `${contact.first} ${contact.last}`
    } else if(contact.first) {
      return `${contact.first}`
    } else if(contact.last) {
      return `${contact.last}`
    } else {
      return "联系人"
    }
  }
  const renderContactList = () => {
    if(contactList.length === 0) {
      return (<p><i>暂无联系人</i></p>)
    }
    return (
      <ul>
        { 
          contactList.map(contact => (
            <li key={contact.id}>
              <Link to={`/contacts/${contact.id}`}>
                {renderLink(contact)}
              </Link>
            </li>
          ))
        }
      </ul>
    )
  }

  return (
    <>
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <div>
          <form id="search-form" role="search">
            {/* 通过 defaultValue 属性，可以为文本框设置默认值 */}
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
            />
            <div id="search-spinner" aria-hidden hidden={true} />
            <div className="sr-only" aria-live="polite"></div>
          </form>
          {/* 新增联系人的 form 表单 */}
          <form method="post" action="/">
            <button type="submit">New</button>
          </form>
        </div>
        <nav>{renderContactList()}</nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  )
}

const rawContacts: ContactType[] = [
  {
      id: "1",
      first: "John",
      last: "Doe",
      avatar: "https://example.com/avatar1.jpg",
      twitter: "@johndoe",
      notes: "This is a note about John Doe",
      favorite: false
  },
  {
      id: "2",
      first: "Jane",
      last: "Smith",
      avatar: "https://example.com/avatar2.jpg",
      twitter: "@janesmith",
      favorite: true
  },
  {
      id: "3",
      first: "Bob",
      avatar: "https://example.com/avatar3.jpg",
      notes: "Bob is a great contact",
      favorite: false
  },
  {
      id: "4",
      last: "Johnson",
      twitter: "@johnsonuser",
      favorite: true
  },
  {
      id: "5",
      first: "Alice",
      last: "Brown",
      avatar: "https://example.com/avatar5.jpg",
      twitter: "@alicebrown",
      notes: "Alice is a very friendly contact",
      favorite: false
  }
];

export const loader = async() => {
  // const contacts = await getContact("1")
  return rawContacts
}

export default Root
