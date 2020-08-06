import { uuid } from "uuidv4";
import { REGISTER_DOCTOR, REGISTER_LAWYER } from "./types";
import { createMessage } from "./messages";

import {
  projectStorage,
  projectFirestore,
  timestamp,
} from "../firebase/config";

export const registerLawyer = (lawyer, image) => async (dispatch) => {
  const lawyersCollection = projectFirestore.collection("lawyers");
  if (image) {
    const ext = image.name.split(".").pop();
    const uniqueId = uuid();
    const storageRef = projectStorage.ref(`${uniqueId}.${ext}`);
    storageRef.put(image).on(
      "state_changed",
      (snap) => {},
      (err) => {
        console.log(err);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        const createdAt = timestamp();
        lawyersCollection.add({ ...lawyer, url, createdAt }).then((snap) => {
          dispatch({
            type: REGISTER_LAWYER,
            payload: snap,
          });
          dispatch(
            createMessage({ registered: "Successuflly registered a lawyer." })
          );
        });
      }
    );
  } else {
    const createdAt = timestamp();
    lawyersCollection.add({ ...lawyer, createdAt }).then((snap) => {
      dispatch({
        type: REGISTER_LAWYER,
        payload: snap,
      });
      dispatch(
        createMessage({ registered: "Successuflly registered a lawyer." })
      );
    });
  }
};

export const registerDoctor = (doctor, image) => (dispatch) => {
  const doctorsCollection = projectFirestore.collection("doctors");
  if (image) {
    const ext = image.name.split(".").pop();
    const uniqueId = uuid();
    const storageRef = projectStorage.ref(`${uniqueId}.${ext}`);
    storageRef.put(image).on(
      "state_changed",
      (snap) => {},
      (err) => {
        console.log(err);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        const createdAt = timestamp();
        doctorsCollection.add({ ...doctor, url, createdAt }).then((snap) => {
          dispatch({
            type: REGISTER_DOCTOR,
            payload: snap,
          });
          dispatch(
            createMessage({ registered: "Successuflly registered a doctor." })
          );
        });
      }
    );
  } else {
    const createdAt = timestamp();
    doctorsCollection.add({ ...doctor, createdAt }).then((snap) => {
      dispatch({
        type: REGISTER_DOCTOR,
        payload: snap,
      });
      dispatch(
        createMessage({ registered: "Successuflly registered a doctor." })
      );
    });
  }
};
