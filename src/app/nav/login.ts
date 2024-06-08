function Insert() {
    const rutaServicio = "http://localhost:8181/veterinaria/register.php";

    const insertUsuario = () => {
        const txtCorreo = document.getElementById("txtCorreo") as HTMLInputElement;
        const txtContrasena = document.getElementById("txtContrasena") as HTMLInputElement;

        const correo = txtCorreo.value;
        const contrasena = txtContrasena.value;

        const formData = new FormData();
        formData.append("correo", correo); 
        formData.append("contrasena", contrasena); 
        fetch(rutaServicio, {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            alert("Se ha agregado un nuevo usuario: " + data);
        });
    };

    const formInsert = document.getElementById("formInsert") as HTMLFormElement;
    formInsert.addEventListener("submit", (event) => {
        event.preventDefault(); 
        insertUsuario();
    });
}

Insert();
