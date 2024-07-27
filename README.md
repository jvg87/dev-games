# Dev Games App

## Descrição

O **Dev Games App** é um aplicativo desenvolvido com React Native Expo que permite aos usuários buscar e visualizar detalhes de jogos utilizando a API do site [RAWG.io](https://rawg.io/apidocs). Os usuários também podem salvar seus jogos favoritos localmente no dispositivo.

## Tecnologias Utilizadas

- **Expo**: Ferramenta que facilita o desenvolvimento com React Native.
- **expo-router**: Biblioteca de navegação para gerenciamento de rotas.
- **TanStack Query**: Biblioteca para gerenciamento de estado de dados assíncronos.
- **TailwindCSS**: Framework CSS para estilização rápida e responsiva.
- **NativeWind**: Integração do TailwindCSS com React Native.
- **Async Storage**: Biblioteca para armazenamento local no dispositivo.

## Funcionalidades

- **Lista de Jogos**: Faz a lista dos jogos mais bem ranqueados utilizando a API do RAWG.io.
- **Busca de Jogos**: Realize buscas por jogos específicos utilizando a API do RAWG.io.
- **Lista de Jogos por Categorias**: Faz a lista dos jogos de uma determinada categoria RAWG.io.
- **Detalhes do Jogo**: Visualize informações detalhadas sobre um jogo, como descrição, desenvolvedor, data de lançamento, entre outros.
- **Favoritos**: Salve jogos como favoritos para acessá-los facilmente depois, utilizando Async Storage.

## Como Executar o Projeto

1. **Clone o repositório**:

    ```bash
    git clone https://github.com/jvg87/dev-games.git
    ```

2. **Instale as dependências**:

    ```bash
    cd dev-games
    npm install
    ```

3. **Inicie o Expo**:

    ```bash
    npx expo start
    ```

4. **Execute no dispositivo ou emulador**:
   - Utilize o aplicativo Expo Go para escanear o QR code no seu dispositivo físico.
   - Utilize um emulador Android ou iOS configurado.

## Estilização

A estilização do aplicativo é feita utilizando **TailwindCSS** através da biblioteca **NativeWind**, permitindo uma abordagem de estilo rápida e responsiva diretamente nos componentes React Native.

## Gerenciamento de Estado e Dados

O gerenciamento das queries e estado de dados assíncronos é realizado com **TanStack Query**, que facilita o cache e a sincronização dos dados da API.

## Armazenamento Local

Os jogos favoritos são armazenados localmente no dispositivo utilizando **Async Storage**, permitindo que os usuários acessem suas listas de jogos favoritos mesmo offline.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

**Desenvolvido por jvg87**
