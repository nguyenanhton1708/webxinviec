import express from "express";
import homeController from "../controllers/homeController";
import userController from "../controllers/userController";
import companyController from "../controllers/companyController";

let router = express.Router();
let initWebRoutes = (app) => {
  router.get("/", homeController.getHomePage);
  router.get("/crud", homeController.getCRUD);
  router.post("/post-crud", homeController.postCRUD);
  router.get("/get-crud", homeController.displayGetCRUD);
  router.get("/edit-crud", homeController.getEditCRUD);
  router.post("/put-crud", homeController.putCRUD);
  router.get("/delete-crud", homeController.deleteCRUD);
  router.post("/api/login", userController.handleLogin);
  router.get("/api/get-all-users", userController.handleGetAllUsers);
  router.post("/api/create-new-user", userController.handleCreateNewUser);
  router.put("/api/edit-user", userController.handleEditUser);
  router.delete("/api/Delete-user", userController.handleDeleteUser);
  router.get("/api/allcode", userController.getAllCode);
  router.get("/api/top-company-home", companyController.getTopCompanyHome);
  router.get("/api/get-all-companys", companyController.getAllCompanys);
  router.post("/api/save-infor-companys", companyController.postInforCompanys);
  router.get("/api/get-detail-company", companyController.getDetailCompany);
  router.get("/api/get-all-seeker", userController.handleGetAllSeeker);

  router.post("/api/save-infor-post", companyController.saveInforPost);
  router.get("/api/get-all-post", companyController.getAllPost);

  return app.use("/", router);
};
module.exports = initWebRoutes;
