
const form  = document.getElementById('form');
const convertBtn  = document.getElementById('convert-btn');
const  output = document.getElementById('output');




const converToRomanNumeral = num =>{
           
    const ref = [  ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1]
];
 const result  = [];
   ref.forEach(function(arr){
         while(num >= arr[1]){

             result.push(arr[0]);
             num  -= arr[1];
            }
        });
        
        return result.join('');
}



const is_Valid =  (number ,int) => {

        let errText = '';
        if(!number  || number.match(/[e.]/g))
            errText = "Please enter a valid number";
        else if(number < 1)
            errText = "Please enter a number greater than or equal to 1";
      else if(number > 3999)
            errText = "Please enter a number less than or equal to 3999";
      else
      return true;

      output.classList.add('alert');
      output.innerText = errText;
      return false;
}



form.addEventListener('submit' , e =>{
    e.preventDefault();
    updateUI();
});

convertBtn.addEventListener('click' , () =>{
    
    updateUI();
    
});

const resetForm = () =>{
        output.classList.remove('alert');
        output.innerText = '';
}
const updateUI = ()=>{
       const number = document.getElementById('number').value;
       const int = parseInt(number , 10);
       output.classList.remove('hidden');
       resetForm();
       if(is_Valid(number , int))
         output.innerText = converToRomanNumeral(int);
}







