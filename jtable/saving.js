


let movies = [];
// example {id:1592304983049, title: 'Deadpool', year: 2015}
const addMovie = (ev)=>

{
    ev.preventDefault();  //to stop the form submitting
    let movie = {
        id: Date.now(),
       
        question: $('#question').val(),
        op1: $('#op1').val(),
        op2: $('#op2').val(),
        op3: $('#op3').val(),
        op4: $('#op4').val(),

        correct :$('#correct').val(),

    }
    
    //document.forms[0].reset();
	// to clear the form for the next entries
    //document.querySelector('form').reset();

    //for display purposes only
    console.warn('added' , {movies} );
    //let pre = document.querySelector('#msg pre');
   // pre.textContent = '\n' + JSON.stringify(movies, '\t', 2);

    //saving to localStorage
  //  localStorage.setItem('MyMovieList', JSON.stringify(movies) );


  console.log("adding")

  $.ajax({
      url:"http://localhost:3000/data",
      type: "post",

      datatype:"json",
      contentType:"application/json",

        success: function (data){

           alert("data-written");
           alert(data);

      },
      data: JSON.stringify(movie),

      });
      e.preventDefault();

    



}


document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('btn').addEventListener('click', addMovie);
});



$('#patch').click(function (e)

{

    $.ajax({
        url:"http://localhost:3000/data/1",
        type: "PATCH",
        datatype:"json",
        contentType:"application/json",
        success: function (data){
  
  
          alert("data-updated");
          alert(data);
  
        },
        data: JSON.stringify(movie),
  
        });
      
  
      
  
  

});