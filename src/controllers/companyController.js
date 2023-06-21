import companyService from "../services/companyService";

let getTopCompanyHome = async (req, res) => {
  let limit = req.query.limit;
  if (!limit) limit = 10;
  try {
    let response = await companyService.getTopCompanyHome(+limit);
    return res.status(200).json(response);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      message: "Error from server...",
    });
  }
};

let getAllCompanys = async (req, res) => {
  try {
    let companys = await companyService.getAllCompanys();
    return res.status(200).json(companys);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      errMessage: "Error from the server",
    });
  }
};

let postInforCompanys = async (req, res) => {
  try {
    let response = await companyService.saveDetailInforCompany(req.body);
    return res.status(200).json(response);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      errMessage: "Error from the server",
    });
  }
};

let getDetailCompany = async (req, res) => {
  try {
    let infor = await companyService.getDetailCompany(req.query.id);
    return res.status(200).json(infor);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      errMessage: "Error from the server",
    });
  }
};

let saveInforPost = async (req, res) => {
  try {
    let response = await companyService.saveInforPost(req.body);
    return res.status(200).json(response);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      errMessage: "Error from the server",
    });
  }
};

let getAllPost = async (req, res) => {
  try {
    let postCruit = await companyService.getAllPost(req.query.id);
    return res.status(200).json(postCruit);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      errMessage: "Error from the server",
    });
  }
};
module.exports = {
  getTopCompanyHome: getTopCompanyHome,
  getAllCompanys: getAllCompanys,
  postInforCompanys: postInforCompanys,
  getDetailCompany: getDetailCompany,
  getAllPost: getAllPost,
  saveInforPost: saveInforPost,
};
