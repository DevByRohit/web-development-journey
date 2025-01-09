function ComponentOne(props) {
  //   console.log(props);
  // we can also write {object , array, name} instead of (props).

  return (
    <div
      className="flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0"
      id="btnContainer"
    >
      <button
        type="button"
        className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        button
      </button>
      <h1>{props.object.name}</h1>
      <h2>{props.name}</h2>
      <h1>{props.object.city}</h1>
      <h2>{props.array[0]}</h2>
      <h1>{props.array[1]}</h1>
      <h1>{props.array[2]}</h1>
      {/* <h1>{array[0]}</h1>
      <h1>{object.name}</h1> */}
    </div>
  );
}

export default ComponentOne;
