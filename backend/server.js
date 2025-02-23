const express = require('express');
const cors = require('cors'); // Добавляем CORS
const fs = require('fs');
const path = require('path'); // Подключаем модуль path для работы с путями
const app = express();

app.use(cors()); // Разрешаем запросы с любого источника
app.use(express.json());

app.post('/submit-order', (req, res) => {
    console.log('Получен запрос с данными:', req.body);
    const { firstName, lastName, pickupDate } = req.body;
    const orderData = `Имя: ${firstName}, Фамилия: ${lastName}, Дата получения: ${pickupDate}\n`;

    // Определяем путь к файлу
    const filePath = path.join(__dirname, 'backend', 'orders.txt');


    console.log('Путь к файлу:', filePath); // Логируем путь к файлу

    // Записываем данные в файл
    fs.appendFile(filePath, orderData, (err) => {
        if (err) {
            return res.status(500).json({ message: 'Ошибка при записи данных.' });
        }

        console.log('Заказ сохранен:', orderData);
        res.json({ message: 'Данные успешно сохранены.' });
    });
});

app.listen(5000, () => {
    console.log('Сервер запущен на порту 5000');
});
