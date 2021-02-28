function validate() {

    var pattern= "";

    //validation for name
    pattern=/^[a-zA-Z ]*$/g;    
    if (document.myForm.name.value == "") {
        alert("Please provide your name!");
        alert(document.myForm.name.value);
        document.myForm.name.focus();
        return false;
    }
    if (!pattern.test(document.myForm.name.value)) {
        alert("Invalid characters");
        document.myForm.name.focus();
        return false;
    }

    //validation for email
    pattern=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (document.myForm.email.value == "") {
        alert("Please provide your Email!");
        document.myForm.email.focus();
        return false;
    }
    if (!pattern.test(document.myForm.email.value)) 
    {
        alert('Please Provide Proper Email Address');
        return false;
    }

    //validation for website and image
    pattern= new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    
    if (document.myForm.website.value == "") {
        alert("Please provide your Website!");
        document.myForm.website.focus();
        return false;
    }
    if (!pattern.test(document.myForm.website.value)) 
    {
        alert('Please Provide Proper Website URL');
        return false;
    }

    //validation for an image
    pattern=new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i'); // fragment locator

    if (document.myForm.image.value == "") {
        alert("Please Provide Your Image!");
        document.myForm.image.focus();
        return false;
    }
    if (!pattern.test(document.myForm.image.value)) 
    {
        alert('Please Provide Proper Image Link !');
        return false;
    }

    //validation for gender 
    
    if ((document.myForm.gender[0].checked == false) && (document.myForm.gender[1].checked == false)){
        alert( "Please choose your Gender: Male or Female !" );
        return false;
    }


    //validation for skills
    var checkbox= document.querySelector('input[name="skills[]"]:checked');
    if(!checkbox) {
        alert('Please Select atleast 1 Skill!');
        return false;
    }

    return true;
}

var student_name = [];
var student_email = [];
var student_website = [];
var student_image_link = [];
var student_gender = [];
var student_skills = [];

function submissionProcess(){

    var valCheck = validate();
    //checking whether it is validated correctly or not
    if(valCheck == true){
        student_name.push(document.myForm.name.value);
        student_gender.push(document.myForm.gender.value);
        student_email.push(document.myForm.email.value);
        student_website.push(document.myForm.website.value);
        student_image_link.push(document.myForm.image.value);
        var checkboxes = document.getElementsByName('skills[]');
        var skills = [];
        for (var i=0, n=checkboxes.length;i<n;i++) 
        {
            if (checkboxes[i].checked) 
            {
                skills.push(checkboxes[i].value);
            }
        }
        student_skills.push(skills);
    }
    //remove previous appended data from table
    var myTable = document.getElementById("students_table");
    var rowCount = myTable.rows.length;
    for (var x=rowCount-1; x>0; x--) {
    myTable.deleteRow(x);
    }

    //get table body:
    var tableRef = document.getElementById('students_table').getElementsByTagName('tbody')[0];

    for (let index = 0; index < student_name.length; index++){
        //insert Row
        tableRef.insertRow().innerHTML = 
        "<td class='student-details'>"+
        "<ul>"+
            "<li><h6>"+student_name[index]+"</h6></li>"+
            "<li>"+student_gender[index]+"</li>"+
            "<li>"+student_email[index]+"</li>"+
            "<li><a href='"+student_website[index]+"' target='_blank'>"+student_website[index]+"</a></li>"+
            "<li>"+student_skills[index].toString()+"</li>"+
        "</ul>"+
    "</td>"+
    "<td class='student-image'>"+
        "<img src='"+student_image_link[index]+"' alt='"+student_name[index]+"' />"+
    "</td>";    
    }
}


