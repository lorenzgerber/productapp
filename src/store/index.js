import { legacy_createStore as createStore } from "redux";
import modelReducer from "./modelReducer";

export default createStore(modelReducer);

export { saveProduct, saveSupplier, deleteProduct, deleteSupplier } from "./modelActionCreators";