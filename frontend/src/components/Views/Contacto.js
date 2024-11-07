import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { jwtDecode } from "jwt-decode"

const Contacto = () => {
  useEffect(() => {
    async function fetchData() {
      try {
        var token = localStorage.getItem("AuthToken");
        const decodedToken = jwtDecode(token);
        const id = decodedToken.IdUsuario;
        console.log(id);

        const response = axios.get(`https://backend-streambe.onrender.com/api/Usuario/Traerusuario?id=${id}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        console.log(response);

      } catch (error) {
        console.log(error);

      }
    }
    fetchData();
  }, []);
  return (
    <div>
      <h1>Esta es la pagina de Contacto</h1>
    </div>
  )
}

export default Contacto