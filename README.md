# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.




Ciao Classe,
esercizio di oggi:  Post Form

repo: react-post-form

Oggi creeremo il nostro primo form multifield per inviare dati in POST ad un’API. 

Dovremo creare una nuova app React che contenga un form per creare un nuovo post all’interno di un blog. 

I dati che il form dovrà inviare sono i seguenti:

author (string) - L’autore del post
title (string) - Il titolo del post
body (string) - Il testo del post
public (boolean) - Se il post deve essere pubblico (true) o una bozza (false)

L’endpoint a cui effettuare la chiamata POST è il seguente: https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts 

Questo endpoint, in caso di successo, vi restituisce i dati inviati. Stampateli in console per verificare di essere riusciti ad inviare correttamente tutto!

Bonus

aggiungere e gestire un alert per dare agli utenti un feedback sull’invio del form

Buon divertimento e confermate lettura come al solito