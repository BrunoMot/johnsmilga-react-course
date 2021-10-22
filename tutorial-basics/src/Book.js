import React from 'react';

const Book = (props) => {
  const { img, title, author } = props;
  // attribute, eventHandler
  const clickHandler = () => {
    console.log('clicou');
  };
  return (
    <article className='book'>
      {/* <Image img={img} title={title} /> */}
      <img src={img} alt={title} />
      {/* <Title string={title}></Title> */}
      <h1>{title}</h1>
      {/* <Author string={author}></Author> */}
      <h4>{author}</h4>
      <button type='button' onClick={clickHandler}>
        exemplo
      </button>
    </article>
  );
};

// const Image = (props) => <img src={props.img} alt={props.title} />;

// const Title = (props) => <h1>{props.string}</h1>;
// const Author = (props) => <h4>{props.string}</h4>;

export default Book;
