---
description: "Use when criando ou editando componentes JSX, estilos CSS ou classes Tailwind. Cobre padrões de design, acessibilidade e consistência visual do portfolio."
applyTo: "src/**/*.{jsx,css}"
---
# Frontend - Padrões e Consistência Visual

## Tailwind
- Nunca usar `style={}` inline quando uma classe Tailwind resolve
- Variantes de estado sempre via Tailwind: `hover:`, `focus:`, `group-hover:`, `duration-300`
- Lembrar das classes customizadas do projeto: `font-signature` (Great Vibes)

## Paleta (tokens visuais do projeto)
| Papel | Classe |
|---|---|
| Fundo primário | `bg-black` |
| Fundo secundário | `bg-gray-800` / `bg-gray-900` |
| Acento / CTA | `bg-gradient-to-r from-cyan-500 to-blue-500` |
| Texto principal | `text-white` |
| Texto secundário | `text-gray-400` / `text-gray-500` |
| Borda / destaque | `border-cyan-500` / `text-cyan-500` |

Novas seções devem usar esses mesmos tokens - nunca introduzir cores avulsas sem intenção clara.

## Responsividade
- Sempre mobile-first: escreva a versão mobile base, depois adicione `md:` e `lg:`
- Layout de seção padrão: `max-w-screen-lg mx-auto px-4`

## Acessibilidade
- Imagens sempre com `alt` descritivo (não deixar vazio nem genérico como "image")
- Botões/links interativos devem ter `:focus` visível (Tailwind inclui por padrão com `focus:ring`)
- Usar elementos semânticos: `<section>`, `<nav>`, `<h1>`–`<h3>`, `<p>` - não abusar de `<div>`
- Links de navegação via `react-scroll` devem usar `name` como âncora

## Animações
- Preferir `transition`, `duration-300`, `ease-in-out` para micro-interações
- Não usar animações pesadas sem necessidade de UX clara
