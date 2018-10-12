const addItem = function(title, location, category){
  const wrapper = document.createElement("div")

  const titleElement = document.createElement('h2')
  titleElement.textContent = title;

  const locationElement = document.createElement('p')
  locationElement.textContent = location;

  const categoryElement = document.createElement('p')
  categoryElement.textContent = category;

  wrapper.appendChild(titleElement);
  wrapper.appendChild(locationElement);
  wrapper.appendChild(categoryElement);

  const runningList = document.querySelector("#running-list")
  runningList.appendChild(wrapper)
}


const handleFormSubmit = function(event){
  event.preventDefault();
  // console.log(event)
  const title = event.target.title.value;
  const location = event.target.location.value;
  const category = event.target.category.value;

  addItem(title, location, category);

  const form = event.target;
  form.reset();
};

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
})
