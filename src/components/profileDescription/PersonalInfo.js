import { PsnlInfoCard } from "./Cards"

export const PersonalInfo = () => {
    return (
        <div className="psnlInfoContainer">
            <div className="psnlInfoHeader">
                <h1>Personal Information</h1>
                <p>Manage your personal information, including your phone numbers, email address and much more.</p>
            </div>
            <div className="psnlInfoCardContainer">
                <PsnlInfoCard title="Name" det="Azeem Rashard"/>
                <PsnlInfoCard title="Date of Birth" det="06/03/1999"/>
                <PsnlInfoCard title="E-mail" det="azeemrashard@gmail.com"/>
                <PsnlInfoCard title="Mobile Number" det="+94 76 344 1366"/>
                <PsnlInfoCard title="Country/ Region" det="Sri Lanka"/>
                <PsnlInfoCard title="Language" det="English ( UK )"/>
            </div>
            
        </div>
    )
}
