function convertToObject(sourceString) {
  // Преобразуем строку в массив (например, разделяя по символу ";")
  const items = sourceString.split(';').map((item) => item.trim());

  // Преобразуем элементы массива в объекты
  const result = items.map((item) => {
    const [key, value] = item.split(':').map((part) => part.trim());

    return {
      [key]: value,
    };
  });

  // eslint-disable-next-line no-console
  console.log(result); // Выводим результат в консоль
}

convertToObject('font-size: 2rem; color: red; margin: 10px;');
