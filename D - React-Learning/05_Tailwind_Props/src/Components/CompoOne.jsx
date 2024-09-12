function ComponentOne({ obj, arr }) {
  //   console.log(props);
  // we can also write {obj , arr, name} instead of (props).

  return (
    <div
      className="flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0"
      id="btnContainer"
    >
      <button
        type="button"
        className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        {/* {props.obj.name}
        {props.name}
        {props.obj.city} */}
        {/* {props.arr[0]}
        {props.arr[1]}
        {props.arr[2]} */}
        {/* {arr[0]}
        {obj.name} */}
        button
      </button>
    </div>
  );
}

export default ComponentOne;
