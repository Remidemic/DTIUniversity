import React, { useState } from "react";

const EMAILS = {
    'Abilene Christian University': 'info@admissions.acu.edu',
    'Academy Of Art University': 'admissions@academyart.edu',
    'Acadia University': 'admissions@acadiau.ca',
    'Adams State University': 'admissions@adams.edu',
    'Adelphi University': 'admissions@adelphi.edu',
    'Adrian College': 'admissions@adrian.edu',
    'Agnes Scott College': 'admission@agnesscott.edu',
    'Alabama Agricultural And Mechanical University': 'admissions@aamu.edu',
    'Alabama State University': 'admissions@alasu.edu',
    'Alaska Bible College': 'info@akbible.edu',
    'Alaska Pacific University': 'admissions@alaskapacific.edu',
    'Albany College Pharmacy And Health Sciences': 'admissions@acphs.edu',
    'Albany State University': 'admissions@asurams.edu',
    'Albertus Magnus College': 'admissions@albertus.edu',
    'Albion College': 'admission@albion.edu',
    'Albright College': 'admission@alb.edu',
    'Alcorn State University': 'ksampson@alcorn.edu',
    'Alderson Broaddus University': 'admissions@ab.edu',
    'Alfred University': 'admissions@alfred.edu',
    'Alice Lloyd College': 'admissions@alc.edu',
    'Allegheny College': 'admissions@allegheny.edu',
    'Allen College': 'admissions@allencollege.edu',
    'Allen University': 'admissions@allenuniversity.edu',
    'Alma College': 'admissions@alma.edu',
    'Alvernia University': 'admissions@alvernia.edu',
    'Alverno College': 'admissions@alverno.edu',
    'American Baptist College': 'atrice@abcnash.edu',
    'American International College': 'admissions@aic.edu',
    'American Jewish University': 'admissions@aju.edu',
    'American University': 'admissions@american.edu',
    'American University Beirut Aub': 'admissions@aub.edu.lb',
    'American University Bulgaria': 'admissions@aubg.edu',
    'American University Paris': 'admissions@aup.edu',
    'American University Rome': 'admissions@aur.edu',
    'Amherst College': 'admission@amherst.edu',
    'Anderson University': 'info@anderson.edu',
    'Andrews University': 'enroll@andrews.edu',
    'Angelo State University': 'admissions@angelo.edu',
    'Anna Maria College': 'admission@annamaria.edu',
    'Antioch College': 'admission@antiochcollege.edu',
    'Appalachian Bible College': 'admissions@abc.edu',
    'Appalachian State University': 'admissions@appstate.edu',
    'Aquinas College': 'admissions@aquinas.edu',
    'Aquinas College U': 'admissions@aquinascollege.edu',
    'Arcadia University': 'admiss@arcadia.edu',
    'Arizona Christian University': 'admissions@arizonachristian.edu',
    'Arizona State University': 'admissions@asu.edu',
    'Arkansas Baptist College': 'admissions@arkansasbaptist.edu',
    'Arkansas State University': 'admissions@astate.edu'
};

const EMAIL_TEMPLATE = "Dear Admissions Office, \n\n  I hope this email finds you well.I am a high school senior currently in the process of researching colleges to apply to. I came across your Cyber Security Bachelors program on collegeScoreCard, and I am very interested in applying to your school. As you know, college is a significant financial investment, and I want to make an informed decision before committing to a program.I noticed that the collegeScoreCard does not provide future earnings information for the Cyber Security Bachelors program at your school.I believe this information would be helpful in making an informed decision about my future. Therefore, I am writing to inquire if your office has any data or resources available that could provide insight into the future earnings potential for graduates of the Cyber Security Bachelors program at your school.I am particularly interested in learning more about the median starting salary and potential career paths for graduates of this program. Thank you in advance for your time and consideration.I look forward to hearing back from you soon. Sincerely, ";

const SUBJECT_TEMPLATE = "Request : Earnings Info for Cyber Security Bachelors Program [Your Name]";

const EmailForm = () => {
    const [selectedEmail, setSelectedEmail] = useState({ name: Object.keys(EMAILS)[0], email: EMAILS[Object.keys(EMAILS)[0]] });
    const [emailBody, setEmailBody] = useState(EMAIL_TEMPLATE);
 
    const sendEmail = () => {
        const subject = SUBJECT_TEMPLATE.replace("[Your Name]", selectedEmail.name);
        const mailtoLink = `mailto:${selectedEmail.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
        window.location.href = mailtoLink;
    };

    const handleEmailChange = event => {
        const selectedEmailName = event.target.value;
        setSelectedEmail({ name: selectedEmailName, email: EMAILS[selectedEmailName] });
    };

    const handleBodyChange = event => {
        setEmailBody(event.target.value);
    };

    return (
        <div>
            <div>
                <label htmlFor="emailSelect">School:</label>
                <select id="emailSelect" value={selectedEmail.name} onChange={handleEmailChange}>
                    {Object.keys(EMAILS).map(name => (
                        <option key={name} value={name}>{name}</option>
                    ))}
                </select>
            </div>
            <div >
                <div> 
                    <label>To:</label> {selectedEmail.email}
                </div>
                <div>
                <label htmlFor="emailBody">Body:</label>
                    <textarea id="emailBody" value={emailBody} onChange={handleBodyChange} />
                </div>
            </div>
            <button onClick={sendEmail}>Send</button>
        </div>
    );
};

export default EmailForm;
