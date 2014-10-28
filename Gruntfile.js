// Arquivo de configuração de tarefas
module.exports = function(grunt){

  grunt.initConfig({
    // ------------
    // task copy //
    // ------------
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
    }
  });

  // Registrando a tarefa grunt-contrib-copy 
  grunt.loadNpmTasks('grunt-contrib-copy');
}