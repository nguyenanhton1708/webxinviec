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
module.exports = {
  getTopCompanyHome: getTopCompanyHome,
};
