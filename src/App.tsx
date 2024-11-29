import { cubeTest } from "./cube";
import { dotProductTest } from "./dotProduct";

function App() {
  const handleButtonClick = () => {
    cubeTest();
    dotProductTest();
  };

  return (
    <main>
      <h1>Лабораторная №6</h1>
      <p>
        Автор: <b>Мустафин Камиль</b>
      </p>
      <p>
        Нажмите на кнопку для просмотра результатов программы (Результаты
        доступны в консоле вашего браузере)
      </p>
      <p>
        <button onClick={handleButtonClick}>Выполнить задания</button>
      </p>
      <h2>Скриншот работы программы примера</h2>
      <img src="screen.jpg " style={{ width: "80vw" }} />
    </main>
  );
}

export default App;
