document.getElementById("enter").style.display = "none";
    document.getElementById("whenScss").style.display = "block";
    document.getElementById("result").style.display = "none";

  
async function exit(){

   var x = document.getElementById("whenScss");
    x.style.display = "block";
    document.getElementById("enter").style.display = "none";
  //document.getElementById('result').innerHTML=null;
document.getElementById("result").style.display = "none";

   const response = await fetch('data/students.csv');
    const data = await response.text();
    const rows = data.split('\n');
   console.log("CPR"+searchId);


}

    async function loadCSV() {
        const searchId = document.getElementById('stuCPR').value;
console.log("CPR"+searchId);
   var x = document.getElementById("whenScss");
    const response = await fetch('data/students.csv'); // URL of your CSV file
    const data = await response.text();
    const rows = data.split('\n'); // Split by line break
    
        // Find row where the first column matches the ID
        const match = rows.find(row => {
            const columns = row.split(',');
   return columns[0].trim() === searchId.trim();
        });


           if (match) {


          
            //if works/then>>

               const columns = match.split(',');
                    // Display specific columns (e.g., Name=col1, Age=col2)

            document.getElementById("result").style.display = "block";
            //cument.getElementById('result').innerText =columns;
               document.getElementById("CPR").innerText=columns[0];
               document.getElementById("Name").innerText=columns[1];
               document.getElementById("Class").innerText=columns[2];
               document.getElementById("Section").innerText=columns[3];

         

                     EN();
                     AR();
                     ISLM();
                     history1();
                     sceince();
                     citizen();
                     Maths();
            // `الرقم الشخصي: ${columns[0]}
            //  الأسم: ${columns[1]}
            //   الصف: ${columns[2]}
            //    الشعبة: ${columns[3]}
            //  `
            //  ;
             x.style.display = "none";
            document.getElementById("enter").style.display = "block";
 
      


        } else {
             document.getElementById("result").style.display = "none";
             x.style.display = "block";
            alert("لم يتم العثور على بيانات الطالب");
        }

}
 
 
 async function EN() {
            const searchId = document.getElementById('stuCPR').value;

     //load en result
    const res = await fetch('data/ENgrade.csv'); // URL of your CSV file
    const EnGrade = await res.text();
    const ENrows = EnGrade.split('\n'); // Split by line break
    
        // Find row where the first column matches the ID
        const match1 = ENrows.find(row => {
            const columns1 = row.split(',');
   return columns1[0].trim() === searchId.trim();
        });
    const columns1 = match1.split(',');
    document.getElementById("allEn").innerText=columns1[4];
    document.getElementById("en").innerText=columns1[5];
 }


  async function Maths() {
            const searchId = document.getElementById('stuCPR').value;

     //load en result
    const res = await fetch('data/Mathgrade.csv'); // URL of your CSV file
    const Mathgrade = await res.text();
    const Mathrows = Mathgrade.split('\n'); // Split by line break
    
        // Find row where the first column matches the ID
        const match1 = Mathrows.find(row => {
            const columns1 = row.split(',');
   return columns1[0].trim() === searchId.trim();
        });
    const columns1 = match1.split(',');
    document.getElementById("allMath").innerText=columns1[4];
    document.getElementById("math").innerText=columns1[5];
 }


  async function AR() {
            const searchId = document.getElementById('stuCPR').value;

     //load en result
    const res = await fetch('data/ARgrade.csv'); // URL of your CSV file
    const ARgrade = await res.text();
    const ARrows = ARgrade.split('\n'); // Split by line break
    
        // Find row where the first column matches the ID
        const match1 = ARrows.find(row => {
            const columns1 = row.split(',');
   return columns1[0].trim() === searchId.trim();
        });
    const columns1 = match1.split(',');
    document.getElementById("allAR").innerText=columns1[4];
    document.getElementById("arab").innerText=columns1[5];
 }


 
  async function ISLM() {
            const searchId = document.getElementById('stuCPR').value;

     //load en result
    const res = await fetch('data/ISLAMICgrade.csv'); // URL of your CSV file
    const ISLMgrade = await res.text();
    const ISLMrows = ISLMgrade.split('\n'); // Split by line break
    
        // Find row where the first column matches the ID
        const match1 = ISLMrows.find(row => {
            const columns1 = row.split(',');
   return columns1[0].trim() === searchId.trim();
        });
    const columns1 = match1.split(',');
    document.getElementById("allislm").innerText=columns1[4];
    document.getElementById("islamic").innerText=columns1[5];
 }

 
  async function sceince() {
            const searchId = document.getElementById('stuCPR').value;

     //load en result
    const res = await fetch('data/sceincegrade.csv'); // URL of your CSV file
    const sceincegrade = await res.text();
    const sceincerows = sceincegrade.split('\n'); // Split by line break
    
        // Find row where the first column matches the ID
        const match1 = sceincerows.find(row => {
            const columns1 = row.split(',');
   return columns1[0].trim() === searchId.trim();
        });
    const columns1 = match1.split(',');
    document.getElementById("allscince").innerText=columns1[4];
    document.getElementById("sceince").innerText=columns1[5];
 }


   async function history1() {
            const searchId = document.getElementById('stuCPR').value;

     //load en result
    const res = await fetch('data/historygrade.csv'); // URL of your CSV file
    const historygrade = await res.text();
    const historyrows = historygrade.split('\n'); // Split by line break
    
        // Find row where the first column matches the ID
        const match1 = historyrows.find(row => {
            const columns1 = row.split(',');
   return columns1[0].trim() === searchId.trim();
        });
    const columns1 = match1.split(',');
    document.getElementById("allhistory").innerText=columns1[4];
    document.getElementById("history").innerText=columns1[5];
 }


   async function citizen() {
            const searchId = document.getElementById('stuCPR').value;

     //load en result
    const res = await fetch('data/citizengrade.csv'); // URL of your CSV file
    const citizengrade = await res.text();
    const citizengraderows = citizengrade.split('\n'); // Split by line break
    
        // Find row where the first column matches the ID
        const match1 = citizengraderows.find(row => {
            const columns1 = row.split(',');
   return columns1[0].trim() === searchId.trim();
        });
    const columns1 = match1.split(',');
    document.getElementById("allcitzn").innerText=columns1[4];
    document.getElementById("citizen").innerText=columns1[5];
 }
