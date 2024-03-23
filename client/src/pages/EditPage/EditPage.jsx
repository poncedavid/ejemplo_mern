import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { HeaderComp } from "../../components/HeaderComp/HeaderComp";
import styles from "./EditPage.module.css";
import { ButtonComp } from "../../components/ButtonComp/ButtonComp";

export const EditPage = () => {
  const params = useParams();
  const petId = params.id;

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [skillsOne, setSkillsOne] = useState("");
  const [skillsTwo, setSkillsTwo] = useState("");
  const [skillsThree, setSkillsThree] = useState("");

  const getPet = async () => {
    let result = await axios.get("http://localhost:8080/api/pets/get/" + petId);
    setName(result.data.petName);
    setType(result.data.petType);
    setDescription(result.data.petDescription);
    setSkillsOne(result.data.petSkills.skillOne);
    setSkillsTwo(result.data.petSkills.skillTwo);
    setSkillsThree(result.data.petSkills.skillThree);
  };

  const editPet = async () => {
    let data = {
      petName: name,
      petType: type,
      petDescription: description,
      petSkills: {
        skillOne: skillsOne,
        skillTwo: skillsTwo,
        skillThree: skillsThree,
      },
    };
    try {
      let result = await axios.put("http://localhost:8080/api/pets/update/"+petId,data);
      if (result.status === 200) {
        navigate("/");
      }
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  useEffect(() => {
    getPet();
  }, []);

  const goToHome = () => {
    navigate("/");
  };

  return (
    <div>
      <HeaderComp
        onclick={goToHome}
        subTitle={`Edit ${name}`}
        linkName={"Back to Home"}
      ></HeaderComp>

      <div className={styles.formContainer}>

        <form>
          <label>Pet Name:</label>


          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {name.length < 3 && name.length > 0 && (
            <p className={styles.error}>
              Name must be at least 3 characters long...
            </p>
          )}





          <label>Pet Type:</label>


          <input
            type="text"
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
          {type.length < 3 && type.length > 0 && (
            <p className={styles.error}>
              Type must be at least 3 characters long...
            </p>
          )}






          <label>Pet Description:</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          {description.length < 3 && description.length > 0 && (
            <p className={styles.error}>
              Description must be at least 3 characters long...
            </p>
          )}

      



          <ButtonComp
            onclick={editPet}
            name={"✏️ Edit Pet"}
            color={"dodgerblue"}
          ></ButtonComp>


          
        </form>

        <form>
          <label>Skills (optional):</label>
          <label>Skill 1:</label>
          <input
            type="text"
            value={skillsOne}
            onChange={(e) => setSkillsOne(e.target.value)}
          />
          <label>Skill 2:</label>
          <input
            type="text"
            value={skillsTwo}
            onChange={(e) => setSkillsTwo(e.target.value)}
          />
          <label>Skill 3:</label>
          <input
            type="text"
            value={skillsThree}
            onChange={(e) => setSkillsThree(e.target.value)}
          />
        </form>
      </div>
    </div>
  );
};
