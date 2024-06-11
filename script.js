const flags = [
  {
    country: "Afghanistan",
    flag: "/public/Afghanistan_New_Flag.jpg",
  },
//   {
//     country: "Afghanistan",
//     flag: "/public/Afghanistan_New_Flag.jpg",
//   },
//   {
//     country: "Afghanistan",
//     flag: "/public/Afghanistan_New_Flag.jpg",
//   },
//   {
//     country: "Afghanistan",
//     flag: "/public/Afghanistan_New_Flag.jpg",
//   },
//   {
//     country: "Afghanistan",
//     flag: "/public/Afghanistan_New_Flag.jpg",
//   },
//   {
//     country: "Afghanistan",
//     flag: "/public/Afghanistan_New_Flag.jpg",
//   },
  {
    country: "Armenia",
    flag: "/public/Armenia_lgflag.webp",
  },
  {
    country: "Azerbaijan",
    flag: "/public/azerbaijan_flag.webp",
  },
  
  {
    country: "Bahrain",
    flag: "/public/bahrain_flag.webp",
  },
//   {
//     country: "Afghanistan",
//     flag: "/public/Afghanistan_New_Flag.jpg",
//   },
//   {
//     country: "Afghanistan",
//     flag: "/public/Afghanistan_New_Flag.jpg",
//   },
//   {
//     country: "Afghanistan",
//     flag: "/public/Afghanistan_New_Flag.jpg",
//   },
//   {
//     country: "Afghanistan",
//     flag: "/public/Afghanistan_New_Flag.jpg",
//   },
//   {
//     country: "Afghanistan",
//     flag: "/public/Afghanistan_New_Flag.jpg",
//   },
//   {
//     country: "Afghanistan",
//     flag: "/public/Afghanistan_New_Flag.jpg",
//   },
//   {
//     country: "Afghanistan",
//     flag: "/public/Afghanistan_New_Flag.jpg",
//   },
//   {
//     country: "Afghanistan",
//     flag: "/public/Afghanistan_New_Flag.jpg",
//   },
//   {
//     country: "Afghanistan",
//     flag: "/public/Afghanistan_New_Flag.jpg",
//   },
//   {
//     country: "Afghanistan",
//     flag: "/public/Afghanistan_New_Flag.jpg",
//   },
//   {
//     country: "Afghanistan",
//     flag: "/public/Afghanistan_New_Flag.jpg",
//   },
//   {
//     country: "Afghanistan",
//     flag: "/public/Afghanistan_New_Flag.jpg",
//   },
//   {
//     country: "Afghanistan",
//     flag: "/public/Afghanistan_New_Flag.jpg",
//   },
//   {
//     country: "Afghanistan",
//     flag: "/public/Afghanistan_New_Flag.jpg",
//   },
//   {
//     country: "Afghanistan",
//     flag: "/public/Afghanistan_New_Flag.jpg",
//   },
//   {
//     country: "Afghanistan",
//     flag: "/public/Afghanistan_New_Flag.jpg",
//   },
//   {
//     country: "Afghanistan",
//     flag: "/public/Afghanistan_New_Flag.jpg",
//   },
//   {
//     country: "Afghanistan",
//     flag: "/public/Afghanistan_New_Flag.jpg",
//   },
];
let currentFlagIndex = 0;
let shuffledFlags = shuffleFlags(flags);
function shuffleFlags(flags) {
  for (let i = flags.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [flags[i], flags[j]] = [flags[j], flags[i]];
  }
  return flags;
}
function showNextFlag() {
  if (currentFlagIndex < shuffledFlags.length) {
    const flagElement = document.getElementById("flag");
    flagElement.src = shuffledFlags[currentFlagIndex].flag;
    document.getElementById("input-country").value = "";
    document.getElementById("result").textContent = "";
  } else {
    document.getElementById("result").textContent="Yippie! You have gussed all the flags!";
    document.getElementById("flag").style.display='none';
    document.getElementById("input-country").style.display='none';
    document.querySelector("button").style.display='none';
  }
}
function submitGuess()
{
    userGuess=document.getElementById("input-country").value.trim().toLowerCase();
    const country=shuffledFlags[currentFlagIndex].country.toLowerCase();
    if(userGuess==country)
        {
            document.getElementById("result").textContent="Correct!";
            currentFlagIndex++;
            setTimeout(showNextFlag,1000);
        }
        else{
            document.getElementById("result").textContent="Try Again!";

        }
}
window.onload=function(){
    shuffledFlags=shuffleFlags(flags);
    showNextFlag();
}