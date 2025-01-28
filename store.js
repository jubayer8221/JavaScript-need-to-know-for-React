// localStorage.setItem('userID', 87952214);

const addToLocalStorage = () => {
    const idInput = document.getElementById('storage_id');
    const id = idInput.value;

    const valueInput = document.getElementById('storage_value');
    const value = valueInput.value; 
    if (id && value) {
    localStorage.setItem(id, value)
    idInput.value = '';
    valueInput.value = '';
    }
    else {
        console.log("Enter valid input")
    }
}

// function addToLocalStorage(id, value) {
//     try {
//       if (localStorage) { // Check if localStorage is available
//         localStorage.setItem(id, value);
//       } else {
//         console.error("Local Storage is not available.");
//       }
//     } catch (error) {
//       console.error("Error adding to Local Storage:", error);
//     }
//   }