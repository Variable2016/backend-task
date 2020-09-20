exports.getAllUsers = (req, res) => {
    res.status(200).json({
      status: "success",
      data: {
        users: {
            "name": "Yusadolat",
            "Password": 1234566
        },
      },
    });
  };
  
  exports.createUser =  (req, res) => {

    const newUser = req.body
    console.log(newUser);
  
    res.status(201).json({
      status: "success",
      message: "User Created Successfully",
    user: newUser,});
    
  };
  
  exports.getUser = (req, res) => {
    res.status(200).json({
      status: "success",
      data: {
        name: "Yusadolat",
      },
    });
  };
  
  exports.updateUser = (req, res) => {
    res.status(200).json({
      status: "success",
      data: {
        user: "User updated successfuly",
      },
    });
  };
  
  exports.deleteUser = (req, res) => {
    res.status(204).json({
      status: "deleted",
      result: "here I come",
      data: {
        user: null,
      },
    });
  };
  
