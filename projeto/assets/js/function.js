
function loadJson(xpto, editoria) {               
                $(document).ready(function()
                    {
                        $.getJSON(xpto, function(json) {

                        var aux, count, total;
                        var aux_id=0;
                        total=0;
                        var count_edit = Object.keys(json[0].Editorias).length;

                        
                        
                        for (count=0; count < count_edit; count++) // Percorre as editorias
                        {
                          console.log('Percorre as editorias: '+ count);
                          var count_not = Object.keys(json[0].Editorias[count].Notícias).length;

                          for(aux=0; aux<count_not; aux++) // Percorre as noticias de cada editoria
                          {
                              
                              var div ='';
                              

                              div = $("<div></div>", {
                                id:aux_id
                              });       


                              if (editoria == null && total<6) 
                              {                               
                                  
                                  //console.log('Percorre as noticias de cada editoria: ' + aux);

                                  var img = $("<img />", {
                                        src: "assets/img/Notícias/" + json[0].Editorias[count].Notícias[aux].Foto
                                      });
                                  var titulo = $("<h3>" + json[0].Editorias[count].Notícias[aux].Título + "</h3>");
                                  var texto = $("<p>" + json[0].Editorias[count].Notícias[aux].Texto.substring(0,200) + "</p>");
                                  var link = $('<a href="#" class="readmore">Saiba mais</a>');
                                  $(".single_left_coloum_wrapper").append(div);
                                  $('#'+aux_id).attr('class','single_left_coloum floatleft');
                                  $('#'+aux_id).append(img);
                                  $('#'+aux_id).append(titulo);
                                  $('#'+aux_id).append(texto);
                                  $('#'+aux_id).append(link); 
                                  total++;     

                              }
                              else if (json[0].Editorias[count].Editoria == editoria) {
                                  
                                 //console.log('Percorre as noticias de cada editoria: ' + aux);

                                  var img = $("<img />", {
                                        src: "assets/img/Notícias/" + json[0].Editorias[count].Notícias[aux].Foto
                                      });
                                  var titulo = $("<h3>" + json[0].Editorias[count].Notícias[aux].Título + "</h3>");
                                  var texto = $("<p>" + json[0].Editorias[count].Notícias[aux].Texto.substring(0,200) + "</p>");
                                  var link = $('<a href="#" class="readmore">Saiba mais</a>');
                                  $(".single_left_coloum_wrapper").append(div);
                                  $('#'+aux_id).attr('class','single_left_coloum floatleft');
                                  $('#'+aux_id).append(img);
                                  $('#'+aux_id).append(titulo);
                                  $('#'+aux_id).append(texto);
                                  $('#'+aux_id).append(link); 
                              }
                            aux_id++;
                          }
                        }
                        });
                    });
                }

function loadSlide(xpto){
   $(document).ready(function()
                    {
                        $.getJSON(xpto, function(json) {

                        var div = $("<div></div>", {
                          class: 'slider'
                        });                   
                        var aux=100;
                        var id_img=0;
                        var count = Object.keys(json[0].imagens).length + aux;

                        console.log(count);
                        
                        setInterval(function(){                          
                          $('#'+aux).fadeOut();                          
                          aux++;
                          id_img++;

                          if (aux==count) {
                            aux=100;
                            id_img=0;
                          }
                          var li = $("<li></li>",{id:aux});
                          var img = $("<img />", {
                              src: "assets/img/Slide/" + json[0].imagens[id_img],
                              id: aux
                            });
                            
                            $('#'+aux).fadeIn();
                            $('.bxslider').append(li);                            
                            $('#'+aux).append(img);                                                        
                            
                           // $('.slider').html('');
                            //$('li').html('');
                        }, 3000);
                            
                        
                            
                   });
                }
                );
}


$('.bxslider').bxSlider({
    mode: 'fade',
    captions: true
});


//loadJson("JSON/noticias.json");
