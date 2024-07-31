function ServiceItem({ main, submain, title, image }) {
  return (
    <div
      className={`bg-grey rounded-lg  w-full flex py-3 h-[250px] overflow-hidden justify-between p-2 hover:scale-[1.01] border-2 border-black transition-transform duration-300 cursor-pointer`}
    >
      <div>
        <span
          className={`bg-green p-1 text-md lg:text-3xl rounded text-black font-medium text-start`}
        >
          {main} <br />
        </span>
        <span
          className={`bg-green p-1 text-md lg:text-2xl rounded text-black text-center font-medium`}
        >
          {submain}
        </span>

        <p className="dark:text-black mt-5 text-sm lg:text-md">{title}</p>
      </div>
      <img className={`w-1/3 h-[150px]  mt-[25px]`} src={image} />
    </div>
  );
}

export default ServiceItem;
