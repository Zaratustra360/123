FROM node:19-alpine

WORKDIR /app

# Поднимаем на порту 3000
EXPOSE 3000



# Подгружаем зависимости
COPY ./package.json ./
COPY ./package-lock.json ./

# Копируем файлы и билд
COPY . ./

RUN chmod -R 777 ./