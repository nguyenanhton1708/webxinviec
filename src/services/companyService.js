import db from "../models/index";
let getTopCompanyHome = (limitInput) => {
  return new Promise(async (resolve, reject) => {
    try {
      let users = await db.User.findAll({
        limit: limitInput,
        where: { roleId: "R2" },
        order: [["createdAt", "DESC"]],
        attributes: {
          exclude: ["password"],
        },
        include: [
          // {
          //   model: db.Allcode,
          //   as: "positionData",
          //   attributes: ["valueEn", "valueVi"],
          // },
          {
            model: db.Allcode,
            as: "genderData",
            attributes: ["valueEn", "valueVi"],
          },
          {
            model: db.Allcode,
            as: "roleData",
            attributes: ["valueEn", "valueVi"],
          },
          {
            model: db.Allcode,
            as: "companyData",
            attributes: ["valueEn", "valueVi"],
          },
        ],
        raw: true,
        nest: true,
      });
      resolve({
        errCode: 0,
        data: users,
      });
    } catch (e) {
      reject(e);
    }
  });
};

let getAllCompanys = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let companys = await db.User.findAll({
        where: { roleId: "R2" },
        attributes: {
          exclude: ["password", "image"],
        },
      });
      resolve({
        errCode: 0,
        data: companys,
      });
    } catch (e) {
      reject(e);
    }
  });
};

let saveDetailInforCompanys = (inputData) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (
        !inputData.companyId ||
        !inputData.contentHTML ||
        !inputData.contentMarkdown
      ) {
        resolve({
          errCode: 1,
          errMessage: "Missing paremeter",
        });
      } else {
        await db.Markdown.create({
          contentHTML: inputData.contentHTML,
          contentMarkdown: inputData.contentMarkdown,
          description: inputData.description,
          companyId: inputData.companyId,
        });
        resolve({
          errCode: 0,
          errMessage: "Save infor company succeed",
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};

let getDetailCompany = (inputId) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!inputId) {
        resolve({
          errCode: 1,
          errMessage: "Missing required parameter!",
        });
      } else {
        let data = await db.User.findOne({
          where: {
            id: inputId,
          },
          attributes: {
            exclude: ["password"],
          },
          include: [
            {
              model: db.Markdown,
              attributes: ["description", "contentHTML", "contentMarkdown"],
            },
            {
              model: db.Allcode,
              as: "roleData",
              attributes: ["valueEn", "valueVi"],
            },
          ],
          raw: true,
          nest: true,
        });
        if (data && data.image) {
          data.image = new Buffer(data.image, "base64").toString("binary");
        }
        if (!data) data = {};
        resolve({
          errCode: 0,
          data: data,
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};
module.exports = {
  getTopCompanyHome: getTopCompanyHome,
  getAllCompanys: getAllCompanys,
  saveDetailInforCompanys: saveDetailInforCompanys,
  getDetailCompany: getDetailCompany,
};
