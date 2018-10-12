const addItem = function(title, location, category, experience){
  const wrapper = document.createElement("div")

  const titleElement = document.createElement('h2')
  titleElement.textContent = title;

  const locationElement = document.createElement('h3')
  locationElement.textContent = location;

  const categoryElement = document.createElement('h3')
  categoryElement.textContent = category;

  const experienceElement = document.createElement('h3')
  experienceElement.textContent = experience;


  wrapper.appendChild(titleElement);
  wrapper.appendChild(locationElement);
  wrapper.appendChild(categoryElement);
  wrapper.appendChild(experienceElement);

  const runningList = document.querySelector("#running-list")
  runningList.appendChild(wrapper)
}

const handleFormSubmit = function(event){
  event.preventDefault();
  // console.log(event)
  const title = event.target.title.value;
  const location = event.target.location.value;
  const category = event.target.category.value;
  const experienceLvl = getExperienceLevel();


  addItem(title, location, category, experienceLvl);

  const form = event.target;
  form.reset();
};

let getExperienceLevel = function(){
  let experience;
  // event.preventDefault();
  if(document.getElementById('experience').checked) {
    experience = 'Previously Ran'
  }else if(document.getElementById('never').checked) {
    experience = 'Never Ran Before'
  }

  return experience;
}



const handleDeleteBtnClicked = function(event){
  const runningList = document.querySelector('#running-list');
  while(runningList.firstChild)
  runningList.removeChild(runningList.firstChild);
};



document.addEventListener('DOMContentLoaded', () =>{

  const form = document.querySelector('form');
  form.addEventListener('submit', handleFormSubmit)

  const deleteBtn = document.querySelector('#deleteAll');
  deleteBtn.addEventListener('click', handleDeleteBtnClicked)

  // const experienceForm = document.querySelector('#form-experience')
  // experienceForm.addEventListener('submit', handleExperienceForm)

})
