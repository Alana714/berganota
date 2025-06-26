// Função para alternar entre abas
function switchTab(tabId) {
    // Esconder todos os conteúdos de abas
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Remover classe ativa de todas as abas
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Mostrar a aba selecionada
    document.getElementById(tabId).classList.add('active');
    
    // Adicionar classe ativa ao botão da aba
    event.currentTarget.classList.add('active');
}

// Função JavaScript para a nova aba
function minhaFuncao() {
    console.log("Função chamada ao clicar na aba 'Minha Família'");
    
    // Exemplo de ação que pode ser realizada
    const notification = document.querySelector('.notification');
    notification.style.animation = 'none';
    setTimeout(() => {
        notification.style.animation = 'pulse 1.5s';
    }, 10);
}


// Funções para o sheet view
function openSheet() {
    document.getElementById('sheet').classList.add('active');
    document.getElementById('overlay').classList.add('active');
    document.body.style.overflow = 'hidden';
}

const openEditSheet = () => {
    document.getElementById('sheet-edit').classList.add('active');
    document.getElementById('overlay').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeSheet() {
    document.getElementById('sheet').classList.remove('active');
    document.getElementById('overlay').classList.remove('active');
    document.body.style.overflow = 'auto';
}

function submitPost() {
    const title = document.getElementById('post-title').value;
    const content = document.getElementById('post-content').value;
    
    if (!title || !content) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }
    
    // Aqui você normalmente enviaria os dados para o servidor
    console.log('Novo post criado:');
    console.log('Título:', title);
    console.log('Conteúdo:', content);
    
    // Fechar o sheet view
    closeSheet();
    
    // Limpar o formulário
    document.getElementById('post-form').reset();
    
    // Mostrar mensagem de sucesso
    alert('Post criado com sucesso!');
}

// Fechar o sheet view ao clicar no overlay
document.getElementById('overlay').addEventListener('click', closeSheet);

// Adicionar animação de pulso
const style = document.createElement('style');
style.innerHTML = `
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.02); }
        100% { transform: scale(1); }
    }
`;
document.head.appendChild(style);

// Efeito para os botões de ação
document.querySelectorAll('.post-actions a').forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.2)';
    });
    
    link.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});