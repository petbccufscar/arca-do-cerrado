FROM node:18

WORKDIR /react-app

# Copiar o package.json e package-lock.json para instalação das dependências
COPY package.json package-lock.json ./

# Instalar as dependências
RUN npm install

# Copiar o restante do código
COPY . .

# Rodar o build do projeto
RUN npm run build