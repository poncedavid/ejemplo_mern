import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./DetailsPage.module.css";
import { ButtonComp } from "../../components/ButtonComp/ButtonComp";
import { HeaderComp } from "../../components/HeaderComp/HeaderComp";

export const DetailsPage = () => {
  const params = useParams();
  const petId = params.id;

  const navigate = useNavigate();

  const [pet, setPet] = useState({
    petName: "",
    petType: "",
    petDescription: "",
    petSkills: {
      skillOne: "",
      skillTwo: "",
      skillThree: "",
    },
  });

  const getPetById = async () => {
    try {
      let result = await axios.get(
        "http://localhost:8080/api/pets/get/" + petId
      );
      setPet(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const adoptPet = async () => {
    try {
      let result = await axios.delete(
        "http://localhost:8080/api/pets/delete/" + petId
      );
      if (result.status === 200) navigate("/");
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  const goToHome = () => {
    navigate("/");
  };

  useEffect(() => {
    getPetById();
  }, []);

  return (
    <div>
      <HeaderComp
        onclick={goToHome}
        subTitle={`Details about: ${pet.petName}`}
        linkName={"Back to Home"}
        boton={
          <ButtonComp
            onclick={adoptPet}
            name={`🏰 Adopt ${pet.petName}`}
            color={"red"}
          ></ButtonComp>
        }
      ></HeaderComp>

      <div className={styles.container}>
        <div className={styles.subContainer}>
          <h3>Pet Type: </h3>
          <label>{pet.petType}</label>
        </div>

        <div className={styles.subContainer}>
          <h3>Description:</h3>
          <label>{pet.petDescription}</label>
        </div>

        <div className={styles.subContainer}>
          <h3>Skills :</h3>
          <label className={styles.skills}>
            {pet.petSkills.skillOne} <br />
            {pet.petSkills.skillTwo} <br />
            {pet.petSkills.skillThree}
          </label>
        </div>
      </div>
    </div>
  );
};
