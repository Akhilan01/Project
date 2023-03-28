window.addEventListener('load', function() {
    const formData = JSON.parse(localStorage.getItem('formData'));
    document.getElementById('name').value = formData.name;
    document.getElementById('dob').value = formData.dob;
    document.getElementById('age').value = formData.age;
    document.getElementById('occupation').value = formData.occupation;
    document.getElementById('salary').value = formData.salary;
    document.getElementById('bio').value = formData.bio;
  });
  
  
  
  //image
  const profileImage = document.getElementById("profile-image");
  const profileImageInput = document.getElementById("profile-image-input");
  const savechange = document.getElementById("save");
  const changeProfileImageBtn = document.getElementById("change-profile-image-btn");
          
          changeProfileImageBtn.addEventListener("click", () => {
            profileImageInput.click();
          });
          
          profileImageInput.addEventListener("change", () => {
            const file = profileImageInput.files[0];
          
            if (file) {
              const reader = new FileReader();
          
              reader.addEventListener("load", () => {
                profileImage.src = reader.result;
                localStorage.setItem("profileImage", reader.result);
              });
          
              reader.readAsDataURL(file);
            }
          });

          window.onload = function() {
            const profileImage = document.getElementById("profile-image");
          
            const savedImage = localStorage.getItem("profileImage");
          
            if (savedImage) {
              profileImage.src = savedImage;
            }
          };



const form = document.querySelector('form');
        form.addEventListener('submit', handleSubmit);
        
        function handleSubmit(event) {
          event.preventDefault();
          
          const formData = {
            name: document.getElementById('name').value,
            dob: document.getElementById('dob').value,
            age: document.getElementById('age').value,
            occupation: document.getElementById('occupation').value,
            salary: document.getElementById('salary').value,
            bio: document.getElementById('bio').value
          };
        
          localStorage.setItem('formData', JSON.stringify(formData));
          
          window.location.href = 'userProfile.html';
        }

