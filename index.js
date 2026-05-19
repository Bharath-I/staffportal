const permissionForm =
document.getElementById('permissionForm');

const historyTable =
document.getElementById('historyTable');

/* MANAGER NUMBER */

const managerNumber =
'919500828284';

/* LOAD ALL PERMISSIONS */

window.onload = function(){

    fetch('get_permissions.php')

    .then(response => response.json())

    .then(data => {

        historyTable.innerHTML = '';

        data.forEach(permission => {

            addRow(permission);

        });

    });

};

/* SUBMIT FORM */

permissionForm.addEventListener(
'submit',

function(e){

    e.preventDefault();

    // GET VALUES

    const employeeName =
    document.getElementById(
        'employeeName'
    ).value;

    const employeeId =
    document.getElementById(
        'employeeId'
    ).value;

    const department =
    document.getElementById(
        'department'
    ).value;

    const date =
    document.getElementById(
        'date'
    ).value;

    const fromTime =
    document.getElementById(
        'fromTime'
    ).value;

    const toTime =
    document.getElementById(
        'toTime'
    ).value;

    const reason =
    document.getElementById(
        'reason'
    ).value;

    const permissionData = {

        employeeName,
        employeeId,
        department,
        date,
        fromTime,
        toTime,
        reason

    };

    /* SAVE MYSQL */

    fetch('save_permission.php', {

        method:'POST',

        headers:{
            'Content-Type':'application/json'
        },

        body:JSON.stringify(
            permissionData
        )

    })

    .then(response => response.text())

    .then(data => {

        // ADD TABLE

        addRow(permissionData);

        // WHATSAPP

        const whatsappMessage =
`Employee Permission Request

Employee Name : ${employeeName}

Employee ID : ${employeeId}

Department : ${department}

Date : ${date}

Time : ${fromTime} - ${toTime}

Reason :
${reason}`;

        const encodedMessage =
        encodeURIComponent(
            whatsappMessage
        );

        const whatsappURL =
`https://wa.me/${managerNumber}?text=${encodedMessage}`;

        window.open(
            whatsappURL,
            '_blank'
        );

        alert(
            'Permission Submitted Successfully'
        );

        permissionForm.reset();

    });

});

/* TABLE ROW */

function addRow(data){

    const row =
    document.createElement('tr');

    row.innerHTML = `

        <td>
        ${data.employee_name || data.employeeName}
        </td>

        <td>
        ${data.employee_id || data.employeeId}
        </td>

        <td>
        ${data.department}
        </td>

        <td>
        ${data.permission_date || data.date}
        </td>

        <td>
        ${data.from_time || data.fromTime}
        -
        ${data.to_time || data.toTime}
        </td>

        <td>
        ${data.reason}
        </td>

    `;

    historyTable.appendChild(row);

}