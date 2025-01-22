function Card(props) {
  return (
    <div className="bg-white w-full h-full p-4 flex justify-around items-center rounded-lg">
      {props.children}
    </div>
  );
}

export default Card;
