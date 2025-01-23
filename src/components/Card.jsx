function Card(props) {
  return (
    <div className="relative bg-[--card-color] border border-[#FFF8F8] w-full h-full p-10 flex flex-col gap-6 items-center rounded-lg">
      {props.children}
    </div>
  );
}

export default Card;
