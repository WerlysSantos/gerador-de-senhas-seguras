# 🔐 Gerador de Senhas Seguras

Aplicação web simples e responsiva para gerar senhas aleatórias com diferentes tipos de caracteres. Desenvolvido com **HTML, CSS e JavaScript**, com alertas utilizando **ToastifyJS**.

---

## 📸 Demonstração

> <img width="1366" height="643" alt="image" src="https://github.com/user-attachments/assets/bca2d255-cba0-4a37-aea9-b936bbea0454" />
> <img width="1366" height="642" alt="image" src="https://github.com/user-attachments/assets/f3e64518-b949-4fc3-ba46-867e8cf3be58" />
> <img width="1366" height="641" alt="image" src="https://github.com/user-attachments/assets/78f07d85-ae0d-4a13-a2cc-d3a66c4fa068" />
> <img width="1366" height="640" alt="image" src="https://github.com/user-attachments/assets/732438d1-2fbe-499f-a5fd-386e1b3d2691" />
> <img width="1366" height="639" alt="image" src="https://github.com/user-attachments/assets/60d9ec35-00b8-4c55-88ad-21286301aca0" />
---

## ⚙️ Funcionalidades

- Definir quantidade de caracteres (entre 4 e 128)
- Escolher quais tipos de caracteres incluir:
  - Letras maiúsculas
  - Letras minúsculas
  - Números
  - Caracteres especiais
- Geração instantânea da senha
- Botão de copiar senha para a área de transferência
- Mensagens de feedback (sucesso ou erro) via Toastify

---

## 🚀 Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript
- [ToastifyJS](https://github.com/apvarun/toastify-js)
- [Font Awesome](https://fontawesome.com/)

---

## 🧩 Estrutura do Projeto

```
projeto/
├── index.html
├── src/
│   ├── style.css
│   └── script.js
│   └── img/
│       └── favicon.ico
```

---

## ▶️ Como Usar

1. Clone este repositório:
```bash
git clone https://github.com/WerlysSantos/gerador-de-senhas-seguras.git
cd gerador-de-senhas-seguras
```

2. Abra o arquivo `index.html` em seu navegador.

---

## 🔍 Observações Técnicas

- O botão "Gerar Senha" valida:
  - Se o tamanho informado está entre 4 e 128
  - Se pelo menos um tipo de caractere foi selecionado
- A div com a senha aparece suavemente ao ser gerada.
- O botão de copiar utiliza a API `navigator.clipboard`.

---

## ✍️ Autor

Werlys Santos  
🔗 [LinkedIn](https://linkedin.com/in/werlys-santos)  
🐙 [GitHub](https://github.com/WerlysSantos)

---
