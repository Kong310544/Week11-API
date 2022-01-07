//
exports.getEmployee = async (req,res)=>{
    res.send(`get all employee `);
};
//
exports.getEmployeeId = async (req,res)=>{
    res.send(`get employee id ${req.params.id}`);
};
//
exports.getEmployeeSalaye = async (req,res)=>{
    const sal = req.params.sal
    const tax = sal*10/100
    res.send(`เงินภาษี 10% ของเงินเดือนเท่ากับ: ${tax}`);
};
//
exports.getEmployeeAge = async (req,res)=>{
    const age = req.params.age
    const retire = 60-age
    res.send(`จำนวนปีก่อนเกษียณ ${retire}`);
};
//
exports.addEmployee = async (req,res)=>{
    res.send(`add a product id ${req.body.id} , name ${req.body.name} , age ${req.body.age}, salary ${req.body.salary}`);
};