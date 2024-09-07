import connect from "@/dbConfig/dbConfig";
import {PatientModel} from "@/model/Patient";
import {Admin} from "@/model/Admin";

export default async function PatientDashboard() {
    // Function to get a cookie by its name
    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    }

    // Retrieve the email cookie value
    const email = getCookie('email');

    console.log('Email cookie value:', email);

    await connect();

    const patient = await PatientModel.findOne({ email });

    return (
        {!patient.phone ?
        ''
        : ''}
    );
}
