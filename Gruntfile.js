// Arquivo de configuração de tarefas
module.exports = function(grunt){

  grunt.initConfig({
    // -----------------------------------
    // task copy                        //
    // Realiza um backup do seu projeto //
    // -----------------------------------
    copy:{
      // -------------
      // target public
      // -------------
      public:{
        // ---------------------------------------------------------------------------
        // expand, quando true, ativa o mapeamento dinâmico, no lugar de definirmos //
        // o nome de cada arquivo e seu destino, indicamos o diretório de trabalho  //
        // ---------------------------------------------------------------------------
        expand: true,
        // -------------------------------------------------
        // Diretório de trabalho (Current Work Directory) //
        // -------------------------------------------------
        cwd   : 'public',
        // -----------------------------------------------------------------
        // Arquivos que desejamos copiar, utilizamos globbing pattern **  //
        //  para copiar todos os arquivos e diretórios da pasta public    //
        // -----------------------------------------------------------------
        src   : '**',
        // ----------------------------------------------- 
        // Pasta com os arquivos de distribuição,       //
        // caso não exista, será criada automaticamente //
        // -----------------------------------------------
        dest  : 'dist'
      }
    },

    clean: {

      // Se apargarmos um determinado arquivo, quando formos executar a task copy, esta pasta ou arquivo não será excluiída
      // portanto, devemos apagar a pasta dist e criá-la novamente, para apagar a pasta dist
      // utilizamos a task clean
      dist:{
        // -----------------------------------------
        // Definindo o diretório que será apagado //
        // -----------------------------------------
        src: 'dist'
      }

    }
  });
  
  // Registrando e definindo a ordem de execução das tasks
  // grunt dist executa a task clean e depois a copy
  grunt.registerTask('dist', ['clean','copy']);

  grunt.registerTask('default',['dist'])
  
  // ------------------------------------------
  // Registrando a tarefa grunt-contrib-copy //
  // ------------------------------------------
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
}