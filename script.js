const textArray = [
    "வணக்கம்","你好 ",
    "नमस्ते","Hola",
    "ನಮಸ್ಕಾರ",
    "Bonjour",
    " നമസ്കാരം ","Ciao",
    "سلام","Hello"
  ];
  const typeContent = document.getElementById("typeContent");
  let wordIndex = 0;
  function updateWord() {
    const currentWord = textArray[wordIndex];
    //update the word
    typeContent.innerHTML = currentWord;
    wordIndex++;
    if (wordIndex >= textArray.length) {
      wordIndex = 0;
    }
  }
  updateWord();
  setInterval(updateWord, 400);
  
  const word = [
   " I Sketch","I Design"," I Develop"
  ];
  const change_word = document.getElementById("change_word");
  let wordIndex1 = 0;
  function updateWord1() {
    const currentWord = word[wordIndex1];
    //update the word
    change_word.innerHTML = currentWord;
    wordIndex1++;
    if (wordIndex1 >= word.length) {
      wordIndex1 = 0;
    }
  }
  updateWord1();
  setInterval(updateWord1, 400);


  

      // //array
      // let para1_array=[
      //   "வணக்கம்","你好 ",
      //   "नमस्ते","Hola",
      //   "ನಮಸ್ಕಾರ",
      //   "Bonjour",
      //   " നമസ്കാരം ","Ciao",
      //   "سلام","Hello"
      // ];;
      //       let para2_array=[
      //  "Sketch","Design","Develop"
      // ];;
      //       //getting element id
      //       const para1=document.getElementById("typeContent");
      //       const para2=document.getElementById("change_word");
      //       let wordIndex=0;
      //       //function
      //       function updateWord(para_array,para){
      //           const currentWord=para_array[wordIndex];
      //           para.innerHTML=currentWord;
      //           wordIndex++;
      //           if(wordIndex>=para_array.length){
      //               wordIndex=0
      //           }
      //       }
      //       //Function calling
      //       // updateWord(para1_array,para1);
            
      //       setInterval(() => updateWord(para1_array,para1), 200)
      //       setInterval(() => updateWord(para2_array,para2), 200)