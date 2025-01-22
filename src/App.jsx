import "./App.css";
//импорт по умолчанию (название компонента можно заменить на любое другое)
// import MyButton from "./components/Button/Button";
// import Button from "./components/Button/Button";

//lessons
// import Lesson2 from "./lessons/Lesson2/Lesson2";
// import Lesson3 from "./lessons/lesson3/lesson3";
// import Lesson04 from "./lessons/Lesson04/Lesson04";

//homeworks
// import HW2 from "./hw/hw2/hw2";
// import HW3 from "./hw/hw3/HW3";
import HW4 from "./hw/hw4/HW4";

function App() {
  return (
    <div className="app">
      {/* <Button />
      <Button />
      <Button /> */}
      {/* ---Topic: Components */}
      {/* <Lesson2/> */}
      {/* <HW2/> */}
      {/* ---Topic: Props */}
      {/* <Lesson3 /> */}
      {/* <HW3 /> */}
      {/* ---Topic: functions, hooks(useState) */}
      {/* <Lesson04 /> */}
      <HW4 />
    </div>
  );
}
export default App;
