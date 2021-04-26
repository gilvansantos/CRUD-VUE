Vue.component('header-vue', {
    template: `
        <header>
            ESSE É O TOPO
            <button v-on:click="mostrarNomes">Click</button>
        </header>
    `,
    
    methods: {
        mostrarNomes: function() {
            alert('Olá')
        }
    }
}) 