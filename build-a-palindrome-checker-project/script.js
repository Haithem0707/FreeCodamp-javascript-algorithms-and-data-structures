const userInput = document.getElementById('text-input');
const checkPalinromebtn =  document.getElementById('check-btn');
const resultDiv = document.getElementById('result');



const checkThePalindrome = input =>{

    const originaInput  = input;
    if(input === ''){
        alert("Please input a value");
        return ;
    }
    //* Remove the prev Result and  for avoding the many result in one time 
    resultDiv.replaceChildren();
    
    const lowerCase = input.replace(/[^A-Za-z0-9]/gi,'').toLowerCase();
    lowerCase === [...lowerCase].reverse().join('') ? 'is' : 'is not';
    
    //* check if it's palindrome or not
    let resutMsg = `<strong>${originaInput} </strong>${lowerCase === [...lowerCase].reverse().join('') ? 'is' : 'is not'} a Palindrome.`;
    
    //* add new childre to the Div resut to show the result
    const pTag = document.createElement('p');
    pTag.className = 'user-input';
    pTag.innerHTML = resutMsg;
    resultDiv.appendChild(pTag);
    resultDiv.classList.remove('hidden');
};


checkPalinromebtn.addEventListener("click" ,() => {
     checkThePalindrome(userInput.value);
      userInput.value='';
      
    });
    
userInput.addEventListener("keydown", e => {
    if(e.key === 'Enter'){
        checkThePalindrome(userInput.value);
        userInput.value='';
    }
    
        
});

