const addItem = function(title, location, category, experience){
  const wrapper = document.createElement("TABLE")

  const titleElement = document.createElement('TABLE')
  titleElement.textContent = title;

  const locationElement = document.createElement('TABLE')
  locationElement.textContent = location;

  const categoryElement = document.createElement('TABLE')
  categoryElement.textContent = category;

  const experienceElement = document.createElement('TABLE')
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
  const title = `Title: ${event.target.title.value}`;
  const location = `Location: ${event.target.location.value}`;
  const category = `Category: ${event.target.category.value}`;
  const experienceLvl = `Experience Level: ${getExperienceLevel()}`;


  addItem(title, location, category, experienceLvl);

  const form = event.target;
  form.reset();
};
// let x = document.createElement("TAble")

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
