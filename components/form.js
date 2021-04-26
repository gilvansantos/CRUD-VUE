Vue.component('form-vue', {
    template: `
        <form @submit="submit" method="POST" action="">
            <div class="form-group">
                <label for="nome">Nome:</label>
                <input type="text" class="form-control" id="nome" name="nome">
            </div>
            <div class="form-group">
                <label for="email">E-mail:</label>
                <input type="email" class="form-control" id="email" name="email">
            </div>
            <div class="form-group">
                <label for="tel">Telefone:</label>
                <input type="text" class="form-control" id="tel" name="nome">
            </div>
            <div class="form-group">
                <label for="pass">Senha:</label>
                <input type="password" class="form-control" id="pass" name="pass">
            </div>

            <button type="submit" class="btn btn-block btn-primary">SALVAR</button>
        </form>
    `,
    methods: {
        submit: function (e) {
            e.preventDefault()

            console.log(this.nome)

            console.log('enviar!')

        }
    }

})