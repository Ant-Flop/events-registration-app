const express = require('express');
const app = express();

// Определяем основной маршрут
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Запускаем сервер на порту 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
