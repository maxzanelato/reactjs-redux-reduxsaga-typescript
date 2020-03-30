import { action } from "typesafe-actions";
import { RepositoriesTypes } from "./types";

export const loadRequest = () => action(RepositoriesTypes.LOAD_REQUEST);
export const loadFailure = () => action(RepositoriesTypes.LOAD_FAILURE);
export const loadSuccess = (data: RepositoriesTypes) =>
  action(RepositoriesTypes.LOAD_SUCCESS, data);
