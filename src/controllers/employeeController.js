exports.getEmployee = async (req,res)=>{
    res.send(`get all employee `);
};
//

exports.getEmployee = async (req,res)=>{
    res.send(`get employee id ${req.params.id}`);
};
//
exports.getEmployee = async (req,res)=>{
    res.send(`เงินภาษี 10% ของเงินเดือน`);
};
//
exports.getEmployee = async (req,res)=>{
    res.send(`จำนวนปีก่อนเกษียณ`);
};
//
exports.addEmployee = async (req,res)=>{
    res.send(`add a product id ${req.body.id} , name ${req.body.name} , age ${req.body.age}, salary ${req.body.salary}` );
};