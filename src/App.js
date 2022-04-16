import { nanoid } from 'nanoid'

function App() {
  let sum = 0;
  let kf = 0;
  let arr = [
    ['Ян Регенсбург', 1, 1, 'Ингольштадт-04', 'Ф1(-1)', 1.89, 300, "минус",],
    ['Погонь', 1, 2, 'Висла Плоцк', 'Ф1(-1)', 1.45, 300, "минус"],
    ['Шелбурн', 1, 2, 'Шемрок Роверс', 'П2', 1.45, 300, "плюс"],
    ['Мельбурн Виктори', 3, 0, 'Мельбурн Сити', 'П2', 2.15, 300, "минус"],
    ['Герта', 1, 4, 'Унион Берлин', 'Обе забьют - да', 2.08, 300, "плюс"],
    ['Газиантеп ББ', 0, 0, 'Трабзонспор', 'П2', 2.264, 300, "минус"],
    ['Тондела', 1, 3, 'Спортинг', 'Ф2(-1,5)', 1.93, 300, "плюс"],
    ['Тондела', 1, 3, 'Спортинг', 'Ф2(-1,5)', 1.80, 300, "плюс"],
    ['Анже', 1, 1, 'Лилль', 'П2', 2.2, 300, "минус"],
    ['Хераклес', 1, 4, 'Фейенорд', 'ТБ2,5', 1.66, 300, "плюс"],
    ['Айнтрахт', 1, 2, 'Фрайбург', 'Обе забьют-да', 1.72, 300, "плюс"],
    ['Кимпхо Ситизен', 2, 1, 'Кеннам', 'ТБ2,5', 1.84, 300, "плюс"],
    ['Мальмё', 1, 1, 'Эльфсборг', 'Ф1(-1)', 1.86, 300, "минус"],
    ['Хаддерсфилд Таун', 2, 0, 'Лутон', 'ТМ2,5', 1.68, 300, "плюс"],
    ['Сидней', 2, 3, 'Аделаида Юнайтед', 'П1', 1.75, 300, "минус"],
    ['Мельбурн Виктори', 0, 0, 'Брисбен Роар', 'ТБ2,5', 1.78, 300, "минус"],
    ['Реал Мадрид', 1, 3, 'Челси', 'Обе забьют-да', 1.67, 300, "плюс"],
    ['Реал Мадрид', 1, 3, 'Челси', 'Обе забьют-да', 1.63, 700, "плюс"],
  ];

  let result = arr.map((elem, ind) => {
    kf = (kf + elem[5])
    if (elem[7] === 'минус') {
      sum = sum - elem[6];
    } else if (elem[7] === 'возврат'){
      sum = sum + 0
    } else {
      sum = sum + (elem[6] * elem[5])-elem[6];
    }

    return <tr key={nanoid()} style={{ backgroundColor: elem[7] === 'минус' ? '#ff8383' : '#2aff85' }}>
      <td>{elem[0]}</td>
      <td>{elem[1]} {'-'} {elem[2]}</td>
      <td>{elem[3]}</td>
      <td>{elem[4]}</td>
      <td>{elem[5]}</td>
      <td>{elem[6]}</td>
      <td>{elem[7]==='минус'?-300:elem[6]*elem[5]-elem[6]}</td>
    </tr>
  })


  return <>
    <table style={{ fontSize: '25px'}} >
      <thead>
        <tr style={{ backgroundColor: '#9ed7eb'}} >
          <td>Команда 1</td>
          <td>Счет</td>
          <td>Команда 2</td>
          <td>Ставка</td>
          <td>Кф.</td>
          <td>Сумма</td>
          <td>Прибыль/Убыток</td>
        </tr>
        {result}
        <tr style={{ backgroundColor: '#9ed7eb'}} >
          <td>Итог: {sum}</td>
        </tr >
        <tr style={{ backgroundColor: '#9ed7eb'}} >
          <td>Средний коэффициент: {(kf / arr.length).toFixed(3)}</td>
        </tr>
      </thead>
    </table>
  </>
}

export default App;
