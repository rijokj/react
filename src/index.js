import React from 'react'
import ReactDOM from 'react-dom/client'

import "./index.css"

const Booklist = ()=>{
    return(
        <section className='booklist'>
            <Book 
            img = {firstBook.img}
            title={firstBook.title}
            author = {firstBook.author}
            />
            <Book 
            img = {secondBook.img}
            title = {secondBook.title}
            author = {secondBook.author}
            />
        </section>
    )
}

const firstBook = {
  img: 'https://m.media-amazon.com/images/I/718SstStV3L._AC_UY327_FMwebp_QL65_.jpg',
  title: 'Interesting Facts For Curious Minds',
  author: 'Jordan Moore',
}

const secondBook = {
  img: 'https://m.media-amazon.com/images/I/419aJfhczCL._SY445_SX342_.jpg',
  title: 'Atomic Habits',
  author: 'James Clear',
}

const Book = ({img,title,author}) =>{
    return(
        <article className='book'>
            <img src={img} alt={title} />
            <h2>{title}</h2>
            <h4>{author}</h4>

        </article>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Booklist />)


