# Auto Elite 🚗

Uma plataforma moderna e de alto desempenho para showcase automotivo e e-commerce construída com React e Vite. Auto Elite oferece uma interface elegante e profissional para navegar e comprar veículos com foco em experiência do usuário e desempenho.

## Recursos

- 🎨 **Interface Moderna** - Construída com Tailwind CSS para design responsivo e elegante
- ⚡ **Alto Desempenho** - Otimizada com Vite para desenvolvimento e builds de produção rápidos
- 🛣️ **Roteamento** - Roteamento no lado do cliente com React Router para navegação perfeita
- 📱 **Design Responsivo** - Interface totalmente responsiva que funciona em todos os dispositivos
- 🔍 **Showcase de Produtos** - Navegue e explore veículos com informações detalhadas
- 📧 **Sistema de Contato** - Página de contato integrada para consultas de clientes
- ❓ **Seção de FAQ** - Perguntas frequentes abrangentes
- 🎯 **Tratamento de Erros** - Página de erro 404 personalizada com assistência de navegação

## Páginas

- **Home** - Página inicial com veículos em destaque e promoções
- **Produtos** - Catálogo de veículos com filtragem e busca
- **Sobre** - Informações e história da empresa
- **Contato** - Formulário de contato e informações comerciais
- **FAQ** - Perguntas frequentes
- **Erro** - Página de erro 404 personalizada

## Stack Tecnológico

- **React 19** - Biblioteca de interface
- **Vite 8** - Ferramenta de build e servidor de desenvolvimento
- **Tailwind CSS 4** - Framework CSS utilitário
- **React Router 7** - Roteamento no lado do cliente
- **React Icons 5** - Biblioteca de ícones
- **ESLint** - Qualidade de código e linting

## Primeiros Passos

### Pré-requisitos
- Node.js (v14 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório
```bash
git clone <repository-url>
cd auto_elite
```

2. Instale as dependências
```bash
npm install
```

3. Inicie o servidor de desenvolvimento
```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:5173`

## Scripts Disponíveis

- `npm run dev` - Inicie o servidor de desenvolvimento com recarregamento automático
- `npm run build` - Faça o build para produção
- `npm run lint` - Execute o ESLint para verificar a qualidade do código
- `npm run preview` - Visualize o build de produção localmente

## Estrutura do Projeto

```
auto_elite/
├── src/
│   ├── pages/           # Componentes de páginas
│   │   ├── Home.jsx
│   │   ├── Produtos.jsx
│   │   ├── Sobre.jsx
│   │   ├── Contato.jsx
│   │   ├── Faq.jsx
│   │   └── Error.jsx
│   ├── components/      # Componentes reutilizáveis
│   │   ├── Header.jsx
│   │   └── Footer.jsx
│   ├── assets/          # Imagens e arquivos estáticos
│   ├── App.jsx          # Componente principal
│   ├── main.jsx         # Ponto de entrada
│   └── index.css        # Estilos globais
├── public/              # Arquivos estáticos
├── vite.config.js       # Configuração do Vite
├── eslint.config.js     # Configuração do ESLint
├── tailwind.config.js   # Configuração do Tailwind CSS
└── package.json         # Dependências do projeto
```

## Desenvolvimento

### Qualidade do Código

Execute o ESLint para verificar problemas no código:
```bash
npm run lint
```

### Build para Produção

Crie um build de produção otimizado:
```bash
npm run build
```

O output do build estará no diretório `dist/`.

### Visualizar Build de Produção

Para visualizar o build de produção localmente:
```bash
npm run preview
```

## Suporte a Navegadores

A aplicação suporta todos os navegadores modernos:
- Chrome (versão mais recente)
- Firefox (versão mais recente)
- Safari (versão mais recente)
- Edge (versão mais recente)

## Deploy

Este projeto está configurado para deploy na [Vercel](https://vercel.com). A configuração é feita via `vercel.json`.

Para fazer deploy:
1. Envie seu código para um repositório Git (GitHub, GitLab ou Bitbucket)
2. Importe o projeto na Vercel
3. Vercel irá detectar automaticamente a configuração do React + Vite e fazer o deploy

## Otimizações de Desempenho

- ⚡ Servidor de desenvolvimento otimizado do Vite com recarregamento instantâneo de módulos
- 🎯 Tailwind CSS com tree-shaking para saída de CSS mínima
- 📦 Code splitting via React Router para carregamento inicial mais rápido
- 🖼️ Formatos de imagem otimizados (AVIF, JFIF)

## Licença

Este projeto é privado e confidencial.

## Suporte

Para dúvidas ou problemas, entre em contato com o time de desenvolvimento ou crie uma issue no repositório.
