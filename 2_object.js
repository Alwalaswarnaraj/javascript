var person = {
    firstname : "swarnaraj",
    lastname : "alwala",
    age : 21
};

//console.log(person)

var me = {
    firstname : 'Swarna raj',
    lastname : 'alwala',
    age : 21,

    friends : ['sai', 'hari', 'sandeep'],

    education :{
        schooling :{

         schools:['WDHS', 'ZPHS'],
        address :{ 
            village :'thimapur'
        }
    },

        college :{
            schools : ['SDES', 'MCET'],
        address : {
            city : 'hyderbad'
        }
    }
    }
};

//console.log(me)

console.log("schooling at ",me.education.schooling.address)
console.log("college at",me.education.college.address)