
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

const openEditSheet = (botao) => {
    document.getElementById('sheet-edit').classList.add('active');
    document.getElementById('overlay').classList.add('active');
    document.body.style.overflow = 'hidden';

    const postCard = botao.closest('.post-card')
    const id = postCard.dataset.id;
    const title = postCard.dataset.title;
    const body = postCard.dataset.body;

    document.getElementById('edit-title').value = title;
    document.getElementById('edit-body').value = body;

    const form = document.getElementById('post-edit-form');
    form.action = `/api/edit/${id}`
}

const closeEditSheet = () => {
    document.getElementById('sheet-edit').classList.remove('active');
    document.getElementById('overlay').classList.remove('active');
    document.body.style.overflow = 'auto';
}

const openSheet = () => {
    document.getElementById('sheet').classList.add('active');
    document.getElementById('overlay').classList.add('active');
    document.body.style.overflow = 'hidden';
}

const closeSheet = () => {
    document.getElementById('sheet').classList.remove('active');
    document.getElementById('overlay').classList.remove('active');
    document.body.style.overflow = 'auto';
}

document.getElementById('overlay').addEventListener('click', closeSheet);
document.getElementById('overlay').addEventListener('click', closeEditSheet);

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