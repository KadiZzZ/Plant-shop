# Используем официальный образ Node.js
FROM node:19

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем файлы package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install --legacy-peer-deps

# Копируем все файлы проекта в контейнер
COPY . .

# Открываем порт 3000 для приложения
EXPOSE 3000

# Запускаем React-приложение
CMD ["npm", "start"]
