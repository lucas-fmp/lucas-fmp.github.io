# Portfolio — lucas-fmp.github.io

## Stack
- **Framework**: React 18 (JSX, functional components + hooks)
- **Styling**: Tailwind CSS v3 — utility-first, sem CSS-in-JS, sem styled-components
- **Icons**: react-icons
- **Scroll**: react-scroll (âncoras por `name`)
- **Fontes**: Raleway (corpo), Great Vibes (classe `font-signature`)
- **Build**: Create React App (scripts padrão: `npm start`, `npm run build`)

## Tema visual
- Fundo escuro: `bg-black`, `bg-gray-800`, `bg-gray-900`
- Acento principal: gradiente `from-cyan-500 to-blue-500`
- Texto primário: `text-white`; secundário: `text-gray-400` / `text-gray-500`
- Bordas/destaques: `border-cyan-500`, `text-cyan-500`
- Todos os novos componentes devem seguir o mesmo dark theme

## Estrutura
```
src/
  components/   # Um arquivo por seção (Home, About, Portfolio, Experience, Contact, NavBar, SocialLinks)
  assets/       # Imagens estáticas
  App.jsx       # Só importa e ordena as seções
  index.css     # @import fontes + diretivas Tailwind
```

## Convenções
- Componentes: PascalCase, exportação default no final do arquivo
- Tailwind: classes utilitárias diretamente no JSX — não adicionar estilos inline (`style={}`) sem necessidade
- Responsividade: mobile-first com breakpoints `md:` e `lg:`
- Imagens: sempre com `alt` descritivo

## Fluxo de trabalho (Git)
- Branch protegida: `main` e `gh-pages` — **nunca commitar direto**
- Fluxo: `feature/<descricao>` → PR → merge
- Mesmo para correções pequenas: sempre branch + PR
