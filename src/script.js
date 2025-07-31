function getCharTypes() {
    const uppercase = document.querySelector('#include_uppercase').checked;
    const lowercase = document.querySelector('#include_lowercase').checked;
    const number = document.querySelector('#include_number').checked;
    const specialCharacter = document.querySelector('#include_special_character').checked;

    const charTypes = [];

    if (uppercase) {
        charTypes.push('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    }

    if (lowercase) {
        charTypes.push('abcdefghijklmnopqrstuvwxyz');
    }

    if (number) {
        charTypes.push('0123456789');
    }

    if (specialCharacter) {
        charTypes.push('!@#$*%&()_-+={}[]|/?<>;:"\'.,^`');
    }

    return charTypes;
}

function getPasswordSize() {
    const size = document.querySelector('#size').value;

    if (isNaN(size) || size < 4 || size > 128) {
        showMessage('Valor inválido, digite um número entre 4 e 128', 'danger');
        return null;
    }

    return size;
}

function showMessage(text, status = 'success') {
    Toastify({
        text: text,
        duration: 2000,
        style: {
            background: status === 'success' ? '#84cc16' : '#dc2626'
        }
    }).showToast();
}

function getRandomChar(charTypes) {
    const randomType = charTypes[Math.floor(Math.random() * charTypes.length)];
    const randomIndex = randomType[Math.floor(Math.random() * randomType.length)];
    return randomIndex;
}

function generatePassword(size, charTypes) {
    let passwordGenerated = '';

    while (passwordGenerated.length < size) {
        passwordGenerated += getRandomChar(charTypes)
    }

    return passwordGenerated;
}

document.querySelector('#generate').addEventListener('click', () => {
    const size = getPasswordSize();
    const charTypes = getCharTypes();

    if (!size){
        return;
    }
    if (!charTypes.length){
        showMessage('Selecione pelo menos um tipo de caractere!', 'danger');
        return;
    }

    const passwordGenerated = generatePassword(size, charTypes);

    document.querySelector('#password_container').classList.add('show');
    document.querySelector('#password').textContent = passwordGenerated;
});

document.querySelector('#copy').addEventListener('click', () => {
    navigator.clipboard.writeText(document.querySelector('#password').textContent);
    showMessage('Senha copiada com sucesso!', 'success');
})