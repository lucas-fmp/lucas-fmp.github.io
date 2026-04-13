---
description: "Redesenha visualmente um componente do portfolio aplicando melhorias de UX, estética e responsividade."
argument-hint: "Componente a redesenhar (ex: Home, About, NavBar) e objetivo da mudança"
agent: "agent"
tools: [read, edit, search]
---
Leia o componente especificado em `src/components/` e aplique melhorias estéticas e de UX seguindo o guia abaixo.

## O que analisar
- Hierarquia tipográfica (tamanho, peso, espaçamento)
- Uso de espaço em branco (padding/margin)
- Contraste e legibilidade do texto
- Layout responsivo (mobile → desktop)
- Micro-interações (hover, transições)
- Alinhamento e consistência visual com as outras seções

## O que entregar
1. **Diagnóstico**: 2–4 pontos de melhoria identificados no componente atual
2. **Proposta**: descrição clara do que vai mudar e por quê (princípio de UX)
3. **Implementação**: editar o arquivo com as mudanças, mantendo a paleta do projeto

## Restrições
- Apenas Tailwind CSS - sem `style={}` inline
- Manter dark theme: `bg-black`, `bg-gray-800`, acento `from-cyan-500 to-blue-500`
- Preservar toda a lógica existente (scroll links, imports, estado)
- Não adicionar dependências novas
