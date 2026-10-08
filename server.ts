import express from 'express';

const app = express();
const PORT = 3000;

// Разрешаем серверу читать данные, которые будут приходить от пользователей
app.use(express.json());

// Временная "база данных" (массив с происшествиями во Львове)
const incidents = [
    {
        id: 1,
        type: "ДТП",
        description: "Столкнулись две машины, движение затруднено",
        coordinates: { lat: 49.8397, lng: 24.0297 }, // Координаты центра Львова (Ратуша)
        time: "14:30"
    },
    {
        id: 2,
        type: "Ремонт",
        description: "Перекрыта правая полоса, объезд",
        coordinates: { lat: 49.8350, lng: 24.0300 },
        time: "12:00"
    }
];

// Это API-маршрут (шлюз). Фронтенд (React) будет обращаться сюда за списком точек
app.get('/api/incidents', (req, res) => {
    res.json(incidents); // Сервер берет массив выше и отправляет его карте в виде JSON
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Сервер работает! Посмотри данные тут: http://localhost:${PORT}/api/incidents`);   
});