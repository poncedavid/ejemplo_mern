import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { HeaderComp } from "../../components/HeaderComp/HeaderComp";
import styles from "./HomePage.module.css";

export const HomePage = () => {
  const navigate = useNavigate();

  const [petList, setPetList] = useState([]);

  const callPetList = async () => {
    try {
      let result = await axios.get("http://localhost:8080/api/pets/get");
      setPetList(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    callPetList();
  }, []);

  const goToEdit = (petId) => {
    navigate(`/pets/${petId}/edit`);
  };

  const goToDetails = (petId) => {
    navigate(`/pets/${petId}`);
  };

  const goToCreate = () => {
    navigate("/pets/new");
  };

  return (
    <div>
      <HeaderComp
        onclick={goToCreate}
        subTitle={"These pets are looking for a good home"}
        linkName={"Add a pet to the shelter"}
      ></HeaderComp>
      <div className={styles.container}>
        <table className={styles.tableContainer}>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Actions</th>
          </tr>

          {petList.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.petName}</td>
                <td>{item.petType}</td>
                <td>
                  <a
                    className={styles.link}
                    onClick={() => goToDetails(item._id)}
                  >
                    Details
                  </a>
                  <label> | </label>
                  <a className={styles.link} onClick={() => goToEdit(item._id)}>
                    Edit
                  </a>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
};
