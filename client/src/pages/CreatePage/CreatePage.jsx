import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HeaderComp } from "../../components/HeaderComp/HeaderComp";
import { ButtonComp } from "../../components/ButtonComp/ButtonComp";
import styles from "./CreatePage.module.css";

export const CreatePage = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [skillsOne, setSkillsOne] = useState("");
  const [skillsTwo, setSkillsTwo] = useState("");
  const [skillsThree, setSkillsThree] = useState("");

  const createPet = async () => {
    if (name !== "" && type !== "" && description !== "") {
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
        let result = await axios.post(
          "http://localhost:8080/api/pets/new",
          data
        );
        if (result.status === 200) {
          navigate("/");
        }
      } catch (error) {
        alert(error.response.data.message);
      }
    } else {
      alert("Please fill the form");
    }
  };

  const goToHome = () => {
    navigate("/");
  };

  return (
    <div>
      <HeaderComp
        onclick={goToHome}
        subTitle={"Know a pet needing a home?"}
        linkName={"Back to home"}
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
            onclick={createPet}
            name={"📤 Add Pet"}
            color={"dodgerblue"}
          ></ButtonComp>
        </form>
        <form>
          <label>Skills (optional)</label>
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
