document.getElementById('user-list').addEventListener('click', function (event) {
    const target = event.target;
  
    if (target.classList.contains('delete-icon')) {
      const userElement = target.closest('.user');
  
      if (userElement) {
        const userId = userElement.getAttribute('data-id');
  
        const apiUrl = `https://crudcrud.com/api/c71050c824744c9ebadadd234d3c8d6e/users/${userId}`;
  
        axios.delete(apiUrl)
          .then(response => {
            console.log('DELETE request successful:', response.data);
            console.log('Status code:', response.status);
  
            userElement.remove();
          })
          .catch(error => {
            console.error('Error making DELETE request:', error);
  
            // Log additional details about the error
            if (error.response) {
              // The request was made and the server responded with a status code
              // that falls out of the range of 2xx
              console.error('Error response status:', error.response.status);
              console.error('Error response data:', error.response.data);
            } else if (error.request) {
              // The request was made but no response was received
              console.error('No response received. Request:', error.request);
            } else {
              // Something happened in setting up the request that triggered an Error
              console.error('Error during request setup:', error.message);
            }
          });
      }
    }
  });
  
  
  // Your existing form submission logic goes here
  document.getElementById('user-form').addEventListener('submit', function (event) {
    event.preventDefault();
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
  
    // Create an object with the form data
    const formData = {
      name: name,
      email: email
    };
  
    // Replace 'YOUR_CRUDCRUD_API_URL' with the actual URL from crudcrud.com
    //const apiUrl = 'https://crudcrud.com/api/c71050c824744c9ebadadd234d3c8d6e';
  
    // Make a POST request to crudcrud.com using Axios
    axios.post('https://crudcrud.com/api/c71050c824744c9ebadadd234d3c8d6e/apointmentdata', formData)
      .then(response => {
        console.log('POST request successful:', response.data);
  
        // If you want to perform additional actions or redirect after successful submission, do it here
      })
      .catch(error => {
        console.error('Error making POST request:', error);
      });
  });
  