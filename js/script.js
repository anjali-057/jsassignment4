  // Student information
  const studentInfo = {
    name: "Anjali Sharma",
    studentId: "200556508"
  };

  // Selecting the container to display student information
  const studentInfoContainer = document.querySelector('.studentInfo');

  // Creating a p element to display the student's name
  const nameElement = document.createElement('p');
  nameElement.textContent = "Name: " + studentInfo.name;

    // Creating a p element to display the student's ID
  const studentIdElement = document.createElement('p');
  studentIdElement.textContent = "Student ID: " + studentInfo.studentId;

  studentInfoContainer.appendChild(nameElement);
  studentInfoContainer.appendChild(studentIdElement);

  // Making a request to the API
  fetch('https://www.dbooks.org/api/recent')
    .then(response => response.json())
    .then(data => {
          // Selecting the container to display books
      const booksContainer = document.getElementById('booksContainer');
      data.books.forEach(book => {
        const bookElement = document.createElement('div');
        bookElement.classList.add('book');

        const imgElement = document.createElement('img');
        imgElement.src = book.image;

        const detailsElement = document.createElement('div');
        detailsElement.classList.add('book-details');

        const titleElement = document.createElement('div');
        titleElement.classList.add('book-title');
        titleElement.textContent = book.title;

        const authorsElement = document.createElement('div');
        authorsElement.classList.add('book-authors');
        authorsElement.textContent = 'by ' + book.authors;

        const linkElement = document.createElement('a');
        linkElement.href = book.url;
        linkElement.textContent = 'View Book';

        detailsElement.appendChild(titleElement);
        detailsElement.appendChild(authorsElement);
        detailsElement.appendChild(linkElement);

        bookElement.appendChild(imgElement);
        bookElement.appendChild(detailsElement);

        // Appending the bookElement to the booksContainer
        booksContainer.appendChild(bookElement);
      });
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
