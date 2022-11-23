import expres from 'express';
import { v4 as uuidv4 } from 'uuid';
uuidv4();



const router = expres.Router();
let users = [];
    

//yahn py jitni bhi request hongi unka starting point /users hoga
router.get('/', (req,res) => {
    console.log(users);
    res.send(users);
});

 router.post('/', (req,res) => {
    //console.log(req.body);
    const user = req.body;
    const userID = uuidv4();
    // yahn py hum ny .. isliye kra k user ki saari properties us mae spread ki
    const userWithId = { ...user, id: userID};
    users.push(userWithId);
    res.send(`User with the name ${user.FirstName} added to the databasse!!`);
 }); 

 //:mtlb is k baad kahin bhi jasakty 
router.get('/:id', (req,res) =>{
    //console.log(req.params)
    const { id } = req.params;
    const foundUser = users.find(findID);
    function findID(user){
        return user.id === id;
    }
    
    res.send(foundUser);

})
router.delete('/:id', (req,res) =>{
    //console.log(req.params)
    const { id } = req.params;
    users = users.filter(DeleteID);
    function DeleteID(user){
        return user.id != id;
    }
    
    res.send(`User with the id ${id} deleted from the database`);

})

router.patch('/:id', (req,res) =>{
    //console.log(req.params)
    const { id } = req.params;
    const { FirstName,LastName, Age } = req.body;
    const foundUser = users.find(findID);
    function findID(user){
        return user.id === id;

    
    }
    if(FirstName) foundUser.FirstName = FirstName;
    if(LastName) foundUser.LastName = LastName;
    if(Age) foundUser.Age = Age;

    
    res.send(`User with the id ${id} Updated from the database`);
})


export default router;

//router.post();
