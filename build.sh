#!/bin/bash
# Instalar dependências e construir o backend
cd backend
npm install
# Suponho que você queira apenas instalar as dependências aqui, pois não há 'build' script no package.json do backend

# Voltar para o diretório raiz
cd ..

# Instalar dependências e construir o frontend
cd frontend
npm install
npm run build

# Voltar para o diretório raiz
cd ..
