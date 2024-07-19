let usuario = {
    nome: 'Daniel',
    excluir: function(){
        console.log('O usuário, ' + this.nome + ' foi excluido')
    }
}

usuario.excluir()