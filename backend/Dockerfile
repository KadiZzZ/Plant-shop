# Используем официальный образ для Node.js
FROM node:19

# Устанавливаем рабочую директорию внутри контейнера
WORKDIR /app

# Копируем файлы package.json и package-lock.json в контейнер
COPY package*.json ./

# Устанавливаем зависимости для проекта
RUN npm install --legacy-peer-deps

# Копируем весь код проекта в контейнер
COPY . .

# Открываем порт 5000
EXPOSE 5000

# Запускаем сервер на Express
CMD ["node", "server.js"]
