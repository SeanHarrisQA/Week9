function ComponentWithProps(props) {
    return (
    <>
      <h1>{props.header}</h1>
      <p>{props.content}</p>
      <p>There are approximately {props.number} reasons why I hate javascript</p>
      <p>There are also {props.nonexistent} reasons why I like it</p>
    </>
    );
}

export default ComponentWithProps;