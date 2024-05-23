const showHiddenPass = (loginPass, loginEye) => {
const input = document.getElementById(loginPass);
const iconEye = document.getElementById(loginEye);

iconEye.addEventListener("click", () => {
    //* changing password to text
    if (input.type === "password") {
        //* Switch to text
        input.type = "text"

        //* icon changing
        iconEye.classList.add("ri-eye-line")
        iconEye.classList.remove("ri-eye-off-line")
    } else {
        //* changing to password

        input.type = "password"

        //* Icon change
        iconEye.classList.remove('ri-eye-line')
        iconEye.classList.add('ri-eye-off-line')
    }
});

window.addEventListener("load", () => {
    let fileLoad = document.querySelector("#inputFile")
    let defaultPhoto = document.querySelector("#defaultPhoto")

    defaultPhoto.onclick = () => {
        fileLoad.click();
    }
    fileLoad.onchange = () => {
        let fetchFile = new FileReader();
        fetchFile.readAsDataURL(fileLoad.files[0]);
        fetchFile.onload = () => {
            defaultPhoto.src = fetchFile.result;
        };
    };
});


    }

showHiddenPass('login-pass','login-eye')


