import companyModel from "../models/Company.js";

export const createCompany= async (req, res) => {
    try {
      const { name, location, industry,email } = req.body;
      const CompanyObj = new companyModel({
        name,
        location,
        industry,
        email
        
      })
      const savedCompanyObj = await CompanyObj.save();
  
      res.json({
        savedCompanyObj,
        message: "user created successfully"
      })
    } catch (error) {
  
      error: "error occured"
  
    }
  }
  export const getCompanies=async(req,res)=>{
    try {
      const getcompanies=await companyModel.find()
      res.json({
        getcompanies
      })
    } catch (error) {
      res.json({
        error:"Cannot fetch data"
      })
      console.log(error)
    }
  }