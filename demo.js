const shinyCluster= require('@fxi/shiny-cluster');


/**
 * Launch your shiny app
 * located here `/home/john/myShinyApp/app.R`,
 * using 10 workers and
 * listen on port 3434
 */
shinyCluster.run({
    path : './app.R' ,
    concurency : 1,
    port : 3434
});
