function search() {
    let stext = document.getElementById("stext").value;
    let spart = document.getElementById("spart").value;

    if (stext == "") {
        alert("검색어를 입력해주세요.");
        return false;
    } else {
        return;
        //showTable(stext, spart);
    }
}

// function showTable(st, sp) {
//     let classLeng = document.getElementsByClassName("board_table_option");
//     console.log(classLeng);
//     if (sp == "stable") {
//         for (let i = 0; i < classLeng - 1; i++) {
//             document.getElementById("board_table" + i).innerText == st;
//             document.getElementById("board_table" + i).style.display = "table-row";
//         }
//         return;
//     } else {
//         for (let i = 0; i < classLeng - 1; i++) {
//             document.getElementById("board_title" + i).innerText == st;
//             document.getElementById("board_title" + i).style.display = "table-row";
//         }
//         return;
//     }
// }

function filters() {
    let search = window.location.search;
    let stextSp = search.split("&stext=");
    let sform = document.getElementById("sform");
    let stext = document.getElementById("stext").value;
    if (search == "") {
        stext = "";
    } else {
        stext = decodeURI(stextSp[1]);
    }
    let spartRe = stextSp[0].replace("?spart=", "");
    let spart = document.getElementById("spart");
    let sformLeng = spart.length;
    for (let i = 0; i < sformLeng; i++) {
        if (spart.options[i].value == spartRe) {
            spart.options[i].selected = "selected";
        }
    }
}

function go_page(page, bname) {
    //let data = document.getElementById("board_table"+x).outerText;
    //console.log(data,x);
    switch (page) {
        case 1:
            location.href = "./admin_bmodify.html?boardnm=" + bname;
            break;
        case 2:
            // location.href = "";
            alert("복사되었습니다.");
            break;
    }
}
function move() {
    window.open("./board_config.html", "config", "width=1200, height=750");
}
filters();