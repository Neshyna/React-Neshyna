import "./styles.css";
//объект props передаётся как параметр в круглые скобки, при создании компонента
// const props = {
//    name: <значение свойства будет передано при вызове компонента>
// array: []
// }

function Button({ name, type }) {
  return (
    <button className="main-button" type={type}>
      {name}
    </button>
  );
}
export default Button;

// //импорт стилей
// import "./styles.css";

// function Button() {
//   const isGetButton = true;
//   const buttonType = "submit";

//   return (
//     <button className="main-button" type={buttonType}>
//       {isGetButton ? "GET" : "SEND"}
//     </button>
//   );
// }

// //экспорт по умолчанию (он может быть только один в файле)
// export default Button;
