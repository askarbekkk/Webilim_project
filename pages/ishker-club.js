import HomeLayout from "../components/HomeLayout";
import ClubHero from "../components/Ishker-Club/ClubHero";
import ClubMision from "../components/Ishker-Club/ClubMision";
import ClubFormats from "../components/Ishker-Club/ClubFormats/ClubFormats";
import ClubTravel from "../components/Ishker-Club/ClubTravel";
import ClubApplication from "../components/Ishker-Club/ClubApplication";

export default function IshkerClub() {
    return (
        <HomeLayout>

            <ClubHero/>
            <ClubMision/>
            <ClubFormats/>
            <ClubTravel/>
            <ClubApplication/>
        </HomeLayout>
    )
}
