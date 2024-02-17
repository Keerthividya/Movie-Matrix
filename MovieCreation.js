$(document).ready(function() {
    $('#Modal').on('show.bs.modal', function (event) {
      var button = $(event.relatedTarget) 
      var person = button.data('person')
      var modal = $(this)
      modal.find('.modal-title').text('Add ' + person)
      modal.find('.modal-body input').attr('placeholder', person);

    })
    $('#actorInput').click(function() {
      $('#listContainer').collapse('toggle');
  });
  
    $('#genreInput').click(function() {
    $('#listContainer2').collapse('toggle');
});

  });

   
  document.getElementsByClassName("needs-validation")[0].addEventListener("submit", function(event) {
    if (event.target.checkValidity() == false ) {
        event.preventDefault();
        event.target.classList.add("was-validated");
    }
});


function toggleActor(event) {
  const target = event.target;
  if (target.matches('li')) {
    target.classList.toggle('active');
    updateActorInput();
  }
}

function updateActorInput() {
  const selectedItems = Array.from(actorList.getElementsByClassName('active'))
    .map(li => li.getAttribute('data-value'));
  actorInput.value = selectedItems.join(', ');
}

const actorInput = document.getElementById('actorInput');
const actorList = document.getElementById('actorList');

actorList.addEventListener('click', toggleActor);



function toggleGenre(event) {
  const target = event.target;
  if (target.matches('li')) {
    target.classList.toggle('active');
    updateGenreInput();
  }
}

function updateGenreInput() {
  const selectedItems = Array.from(genreList.getElementsByClassName('active'))
    .map(li => li.getAttribute('data-value'));
  genreInput.value = selectedItems.join(', ');
}

const genreInput = document.getElementById('genreInput');
const genreList = document.getElementById('genreList');

genreList.addEventListener('click', toggleGenre);


var checkbox=document.getElementById("check");
checkbox.addEventListener('change',func);

function func(){
  if(!checkbox.checked)
  {
    document.getElementById("actor").style.display="none";
  }
}
