dropzoneBox= document.getElementsByClassName("dropzone-box")[0];


const inputFiles= document.querySelectorAll(".dropzone-area input[type='file']"
);

const inputElement= inputFiles[0];

const dropZoneElement= inputElement.
closest(
    ".dropzone-area"
);


inputElement.addEventListener
("change",(e) =>{
    if(inputElement.files.lenght){
        updateDropzoneFileList(
            dropZoneElement,
            inputElemen.files[0]
        );
    }
} );

dropZoneElement.addEventListener
("dragover",(e) =>{
    e.preventDefault();
    dropZoneElement.classList.add
    ("dropzone--over");

})
["dragleave","dragend"].forEach
((type) => {
    dropZoneElement.addEventListener
    (type ,(e)  => {
        dropZoneElement.classList.remove
        ("dropzone--over");
    }) ;
});

dropZoneElement.addEventListener
("drop",(e)  =>{
    e.preventDefault();


    if(e.dataTransfer.files.lenght){
        inputElement.files=e.
        dataTransfer.files;

        updateDropzoneFileList
        (dropZoneElement,e.dataTransfer.files[0]);
    }

    dropZoneElement.classList.remove
    ("dropzone--over");
    });
/*
const updateDropzoneFileList=
(dropZoneElement,file)=>{
    let dropzoneFileMesagge=
    dropzoneElement.querySelector
    (".file-info");

/*dropzoneFileMesagge.innerHTML=
    ${file.name},${file.size}
    bytes
    ;

};*/


dropzoneBox.addEventListener("rest" ,(e)  =>{
    let dropzoneFileMesagge = dropZoneElement.querySelector(".file-info");
    dropzoneFileMesagge.innerHTML="No files detected";
    

});


dropzoneBox.addEventListener("submit" ,(e)  =>{
    e.preventDefault();
    const myfiled= document.getElementById("uploaded-file");
    console.log(myfiled.files[0]);
});
