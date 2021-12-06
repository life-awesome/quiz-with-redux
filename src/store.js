import {createStore} from "redux";
import {quizReducer} from "./reducers/quizReducer";

export const store = createStore(quizReducer)