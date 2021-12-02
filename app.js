const box = document.getElementById('box')
const firstNameInput = document.getElementById('firstName')
const lastNameInput = document.getElementById('lastName')
const ageInput = document.getElementById('age')
const emialInput = document.getElementById('Email')
const submitButton = document.getElementById('submit')

const userList = [
  {
    firstName: 'john',
    lastName: 'Doe',
    age: 27,
    email: 'johnDoe@example.com'
  },
  {
    firstName: 'Jane',
    lastName: 'Doe',
    age: 15,
    email: 'JaneDoe@example.com'
  },
  {
    firstName: 'Sam L',
    lastName: 'JackSon',
    age: 55,
    email: 'SamLJackson@example.com'
  },
  {
    firstName: "Mohamad Kazem",
    lastName: "Moheb",
    age: 17,
    email: "moheb@example.com"
  }
]

// discord download

function updateUI() {
  box.innerHTML = ''

  let result = ''

  userList.forEach((item, i) => {

    result += `
      <div class="card">
        <span onclick="deleteUser(${i})"> X </span>
        <h4> ${item.firstName} </h4>
        <h5> ${item.lastName} </h5>
        <p> ${item.age} years old </p>
        <i> ${item.email} </i>
      </div>
    `
  })

  // for (let i = 0; i < userList.length; i++) {
  //   const item = userList[i]
  //   result += `
  //     <div class="card">
  //       <span onclick="deleteUser(${i})"> X </span>
  //       <h4> ${item.firstName} </h4>
  //       <h5> ${item.lastName} </h5>
  //       <p> ${item.age} years old </p>
  //       <i> ${item.email} </i>
  //     </div>
  //   `
  // }

  box.innerHTML = result
  
}

function addUser() {
  // read the data from html
  // and save them on variables
  const firstName = firstNameInput.value
  const lastName = lastNameInput.value
  const age = ageInput.value
  const email = emialInput.value
  // error handling: check if all fields have good data
  if (!firstName || !lastName || !age || !email) return alert('bad inputs, please enter all fields')

  // make a relevant object from the data
  const obj = {}
  obj.firstName = firstName
  obj.lastName = lastName
  obj.age = age
  obj.email = email

  // push the data into the array
  userList.push(obj)

  // clear the form
  firstNameInput.value = ''
  lastNameInput.value = ''
  ageInput.value = ''
  emialInput.value = ''

  updateUI()

}

function deleteUser(i) {

  // remove the user
  userList.splice(i, 1)

  updateUI()

}

submitButton.addEventListener('click', addUser)

updateUI()

